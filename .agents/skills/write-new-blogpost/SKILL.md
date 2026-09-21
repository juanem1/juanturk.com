---
name: write-new-blogpost
description: "Write new English MDX posts for juanturk.com in the author's firsthand, opinionated engineering voice. Use when drafting a file in src/content/posts from supplied ideas, notes, experience, or sources; do not use for LinkedIn posts or generic marketing copy."
---

# Write New Blogpost

Create a publishable post that sounds like an experienced software engineer explaining what actually happens behind the polished story. Preserve the author's judgment and source boundaries; do not imitate errors or awkward phrasing from older posts.

## Establish the source boundary

Before drafting, identify:

- the intended technical reader and what they already know;
- the single claim or practical outcome the post must deliver;
- which observations, experiences, examples, metrics, and opinions came from the author;
- which broader claims require external evidence; and
- whether the post is firsthand experience, industry analysis, or a practical guide.

Do not invent an employer, incident, result, date, metric, team practice, or first-person reaction. If the requested angle depends on personal evidence that was not supplied, ask one focused question or use an honest non-firsthand opening. Never manufacture an anecdote to make the lead feel vivid.

## Ground the draft in this repository

1. Read the active `AGENTS.md` and `src/content.config.ts` before writing.
2. Inspect three relevant posts in `src/content/posts`: one close in topic, one close in format, and the most recent comparable post. Use them for voice and structure, never as evidence for a new claim.
3. Read [references/house-style.md](references/house-style.md) for the corpus-derived patterns and choose the closest post shape.
4. Recheck any current product, market, pricing, model, company, or industry claim against primary or otherwise authoritative sources. Put links beside the claims they support.

## Draft the post

- Write in American English even when the request is in Spanish, unless the user explicitly asks for another language.
- Use first person singular for the author's judgment and experience. Use `we` only for a real team context supplied by the author.
- Open with friction: a concrete incident, an observed contradiction, a current signal, or a direct claim. Make the thesis clear within the first two to four paragraphs.
- Develop the argument through cause, contrast, example, constraint, or consequence. Paragraphs should depend on the preceding thought rather than read like interchangeable notes.
- Prefer short paragraphs, concrete nouns, operational details, and clear opinions with reasoning. Technical language is welcome; do not explain familiar engineering concepts from zero.
- Give the strongest real limitation or counterargument enough room to matter. Answer it or concede it honestly.
- End on the sharpest practical consequence or judgment. Do not recap every section or append a generic invitation to comment.

Choose structure by the post's job:

- **Firsthand engineering or culture:** start from a real scene or lived friction, extract the operating pattern, then give practical criteria.
- **Industry analysis or opinion:** start from an observable shift or contradiction, state the interpretation early, connect evidence to incentives or operational constraints, and distinguish fact from judgment.
- **Practical technical guide:** start from the problem that forced the setup, provide copy-ready steps, include verification and relevant caveats, then close with the concrete result.

Use `##` for main sections and `###` only for genuine subsections. Number sections when sequence or a bounded set helps the reader; do not force a listicle shape onto an argument.

## Produce valid MDX

Create a concise lowercase hyphenated filename under `src/content/posts`.

Frontmatter must include:

```yaml
date: YYYY-MM-DD
title: "A concise title with a claim, tension, or practical promise"
subtitle: "A second layer that adds consequence or context"
description: "A neutral, preview-friendly description"
tags:
  - Tag
tldr: "A compact paragraph stating the thesis and why it matters"
```

Include `tldr` by default because every current post uses it. Add `featured` only when explicitly requested. Add `heroImage` only when the referenced repository asset already exists or the user requested image creation. Place MDX imports immediately after frontmatter. Preserve valid relative paths and contextual link text.

## Review once

Compare the draft with the supplied material and verify:

- every personal claim, fact, number, link, attribution, and degree of certainty is supported;
- the title's promise is fully delivered;
- the opening starts the real argument rather than announcing the topic;
- each section performs distinct work and the transitions express real relationships;
- the prose sounds conversational and opinionated without becoming promotional, theatrical, or guru-like;
- repeated contrast formulas, balanced threes, rhetorical questions, bold text, and punchlines are earned rather than automatic;
- no generic corporate sentence could be moved unchanged into another tech blog; and
- the final paragraph stops on the last useful thought.

Fix the weakest material issue once, then stop. Do not flatten the author's voice through repeated polishing.
