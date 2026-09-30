import { mkdir, readFile, writeFile } from "node:fs/promises";
import { basename, dirname, extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { OpenRouter } from "@openrouter/sdk";
import { OpenRouterError } from "@openrouter/sdk/models/errors";

const apiKey = process.env.OPENROUTER_API_KEY;
if (!apiKey) {
  throw new Error("OPENROUTER_API_KEY is missing.");
}

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const postsDirectory = resolve(scriptDirectory, "../src/content/posts");
const audioDirectory = resolve(scriptDirectory, "../public/audio");
const maxSpeechCharacters = 15000;
const headingLinePattern = /^#{1,6}\s+(.+)$/gm;
const headingBlockPattern = /^#{1,6}\s+(.+)$/;
const sectionBreakPattern = /^(?:-{3,}|\*{3,}|_{3,})$/;
const blockquoteMarkerPattern = /^>\s?/gm;
const listMarkerPattern = /^\s*(?:[-*+]\s+|\d+\.\s+)/gm;
const boldPattern = /\*\*(?=\S)([^*\n]+?)(?<=\S)\*\*/g;
const italicPattern = /(?<![\w*])\*(?=\S)([^*\n]+?)(?<=\S)\*(?![\w*])/g;

/**
 * Removes MDX content that must not be spoken and keeps Markdown formatting for speech tagging.
 * @param {string} content
 * @returns {string}
 */
function cleanMdxContent(content) {
  console.log("Cleaning MDX content...");
  return content
    .replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "")
    .replace(/^\s*import\s+.+;\s*$/gm, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/<([A-Za-z][\w.]*)\b[^>]*>[\s\S]*?<\/\1>/g, "")
    .replace(/<\/?[A-Za-z][^>]*>/g, "")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/**
 * Converts Markdown structure into Grok speech tags and returns the spoken transcript:
 * headings and section breaks become [long-pause], paragraphs are separated by [pause],
 * bold and italic text become <emphasis>, and blockquotes become <slow>.
 * Speech tags: https://docs.x.ai/developers/model-capabilities/audio/text-to-speech#speech-tags
 * @param {string} markdown
 * @returns {string}
 */
function addSpeechTags(markdown) {
  console.log("Adding speech tags...");
  const speechBlocks = [];
  let followsSectionBreak = false;
  // Headings are often followed directly by text, so isolate them as their own blocks.
  const blocks = markdown.replace(headingLinePattern, "\n\n$&\n\n").split(/\n{2,}/);

  for (const rawBlock of blocks) {
    const block = rawBlock.trim();

    if (!block) {
      continue;
    }

    if (sectionBreakPattern.test(block)) {
      followsSectionBreak = true;
      continue;
    }

    const headingMatch = block.match(headingBlockPattern);
    const pauseTag = headingMatch || followsSectionBreak ? "[long-pause]" : "[pause]";
    let speechBlock = block;

    if (headingMatch) {
      speechBlock = headingMatch[1];
    } else if (block.startsWith(">")) {
      speechBlock = `<slow>${block.replace(blockquoteMarkerPattern, "")}</slow>`;
    } else {
      speechBlock = block.replace(listMarkerPattern, "");
    }

    speechBlock = speechBlock
      .replace(boldPattern, "<emphasis>$1</emphasis>")
      .replace(italicPattern, "<emphasis>$1</emphasis>")
      .replace(/[*_~`]/g, "");

    speechBlocks.push(speechBlocks.length === 0 ? speechBlock : `${pauseTag} ${speechBlock}`);
    followsSectionBreak = false;
  }

  return speechBlocks.join("\n\n");
}

/**
 * Generates web-playable MP3 audio from the input text with Grok Voice TTS.
 * The model accepts up to 15,000 characters per request.
 * Model docs: https://openrouter.ai/x-ai/grok-voice-tts-1.0
 * @param {string} input
 * @param {OpenRouter} client
 * @returns {Promise<Uint8Array>}
 */
async function generateAudio(input, client) {
  console.log("Generating audio...");
  const model = "x-ai/grok-voice-tts-1.0";

  try {
    const stream = await client.tts.createSpeech({
      speechRequest: {
        model,
        input,
        voice: "carina",
        responseFormat: "mp3",
      },
    });
    const reader = stream.getReader();
    const chunks = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
    }
    const totalLength = chunks.reduce((sum, c) => sum + c.length, 0);
    const buffer = new Uint8Array(totalLength);
    let offset = 0;
    for (const chunk of chunks) {
      buffer.set(chunk, offset);
      offset += chunk.length;
    }
    return buffer;
  } catch (error) {
    if (error instanceof OpenRouterError) {
      throw new Error(
        `OpenRouter audio generation failed (model=${model}, status=${error.statusCode}, response=${error.body}).`,
        { cause: error },
      );
    }

    throw error;
  }
}

/**
 * @param {string} fileName
 * @returns {string}
 */
function getPostPath(fileName) {
  if (fileName !== basename(fileName) || fileName.includes("\\")) {
    throw new Error("The post argument must be a file name, not a path.");
  }

  if (extname(fileName) !== ".mdx") {
    throw new Error("The post file must use the .mdx extension.");
  }

  return resolve(postsDirectory, fileName);
}

/**
 * @param {string} postPath
 * @param {string} fileName
 * @returns {Promise<string>}
 */
async function readPostContent(postPath, fileName) {
  console.log(`Reading post: ${fileName}`);
  try {
    return await readFile(postPath, "utf8");
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      throw new Error(`Post file not found: ${fileName}`);
    }

    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Unable to read post ${fileName}: ${message}`);
  }
}

async function main() {
  const [fileName, ...extraArguments] = process.argv.slice(2);

  if (!fileName || extraArguments.length > 0) {
    throw new Error("Usage: node scripts/tts.js <post-file.mdx>");
  }

  const postPath = getPostPath(fileName);
  const content = await readPostContent(postPath, fileName);
  const spokenMarkdown = cleanMdxContent(content);

  if (!spokenMarkdown) {
    throw new Error(`Post content is empty after cleaning: ${fileName}`);
  }

  const speechText = addSpeechTags(spokenMarkdown);

  if (speechText.length > maxSpeechCharacters) {
    console.error(
      `Speech text exceeds the Grok TTS limit (post=${fileName}, characters=${speechText.length}, limit=${maxSpeechCharacters}).`,
    );
    process.exitCode = 1;
    return;
  }

  const client = new OpenRouter({ apiKey });
  await mkdir(audioDirectory, { recursive: true });
  const buffer = await generateAudio(speechText, client);
  const finalPath = resolve(audioDirectory, `${basename(fileName, ".mdx")}.mp3`);
  await writeFile(finalPath, buffer);
  console.log(`Audio saved: ${finalPath}`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    const message = error instanceof Error ? error.message : String(error);
    console.error(message);
    process.exitCode = 1;
  });
}
