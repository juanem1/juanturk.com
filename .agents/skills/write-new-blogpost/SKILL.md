---
name: write-new-blogpost
description: "Refine author-supplied English blog drafts or develop supplied ideas for juanturk.com. Return the draft in chat first; create an MDX file only when the author explicitly asks to save it."
---

# Write New Blogpost

Help the author turn a supplied draft or set of notes into a publishable English post without replacing their argument, evidence, or voice. The default deliverable is an adjusted Markdown draft in the chat. Do not create or modify a file until the author explicitly asks to save the accepted version.

## Choose the working mode

- **Draft refinement (default):** Use this when the author supplies prose, a structured draft, links, or a detailed outline. Edit for clarity, grammar, flow, and precision while preserving the author's material.
- **Idea development:** Use this only when the author supplies notes or an idea rather than a real draft. Build a draft from the supplied material, clearly avoiding invented firsthand details.
- **Save to MDX:** Use this only after an explicit instruction such as "save it," "create the file," or "write the post to `src/content/posts`". Save the latest author-approved draft; do not treat a request to refine or review it as authorization to write a file.

If there is a prior unapproved file created during the conversation, remove it when replacing it would otherwise violate the author's explicit no-save instruction.

## Preserve authorial material

When refining an existing draft, the draft is the source of truth. Keep its:

- thesis, conclusion, opinions, and degree of certainty;
- section order, argument sequence, and heading structure unless a change is needed for readability;
- named people, events, dates, numbers, links, link text, and examples; and
- deliberately sharp, skeptical, informal, or provocative phrasing when it carries the author's voice.

Make the smallest edits that improve the text. Do not introduce a different thesis, add a new analytical frame, replace supplied links with preferred sources, add facts or caveats the author did not request, or turn an opinion piece into neutral reporting. Do not remove a supplied detail because it seems difficult to verify.

The author may ask for an accuracy pass, research, updated sources, or a challenge to the argument. Only then verify claims or propose changes to facts and links. If an authoritative source directly conflicts with a supplied claim, present the conflict separately and ask whether to change it; never silently rewrite or delete it.

## Establish the source boundary

Before drafting, identify:

- the intended technical reader and what they already know;
- the single claim or practical outcome the post must deliver;
- which observations, experiences, examples, metrics, and opinions came from the author;
- which broader claims require external evidence; and
- whether the post is firsthand experience, industry analysis, or a practical guide.

Do not invent an employer, incident, result, date, metric, team practice, or first-person reaction. If the requested angle depends on personal evidence that was not supplied, ask one focused question or use an honest non-firsthand opening. Never manufacture an anecdote to make the lead feel vivid.

## Ground the draft in this repository

Treat the author-supplied draft as the primary editorial source. The house-style reference is a secondary guide for clarity and formatting, not permission to substitute a different voice or argument.

1. For any drafting mode, read [references/house-style.md](references/house-style.md). Use it to improve prose while preserving the supplied draft's voice and boundaries.
2. Do not scan `src/content/posts` for examples or voice calibration. Inspect an existing post only when the author names it, asks to adapt or continue it, or requests a direct comparison. Treat that post as context, never as evidence for a new claim.
3. Do not browse or replace supplied sources during draft refinement unless the author requests verification, research, or source updates.
4. Read `src/content.config.ts` only when the author has authorized saving to MDX.

## Refine and return the draft

- Write in American English even when the request is in Spanish, unless the user explicitly asks for another language.
- Use first person singular for the author's judgment and experience. Use `we` only for a real team context supplied by the author.
- Preserve the supplied opening, progression, and ending unless a minimal edit is necessary for grammar, coherence, or a stated author goal.
- Prefer short paragraphs, concrete nouns, and direct opinions. Do not add a counterargument, practical framework, or explanatory section that is absent from an authored draft unless the author asks for one.
- Keep the author's links in place. Correct only malformed Markdown or link syntax unless asked to update sources.
- Return the adjusted body as one Markdown code block in the chat. Do not add frontmatter, choose a filename, write a file, or claim the post is published.
- Before the code block, give at most three concise bullets that identify material edits. Do not use the bullets to challenge, fact-check, or relitigate the author's argument unless asked.

When developing from notes rather than refining a draft, choose structure by the post's job:

- **Firsthand engineering or culture:** start from a real scene or lived friction, extract the operating pattern, then give practical criteria.
- **Industry analysis or opinion:** start from an observable shift or contradiction, state the interpretation early, connect evidence to incentives or operational constraints, and distinguish fact from judgment.
- **Practical technical guide:** start from the problem that forced the setup, provide copy-ready steps, include verification and relevant caveats, then close with the concrete result.

Use `##` for main sections and `###` only for genuine subsections. Number sections when sequence or a bounded set helps the reader; do not force a listicle shape onto an argument.

## Save an approved draft as valid MDX

Only after explicit authorization to save, create a concise lowercase hyphenated filename under `src/content/posts`. Convert the latest author-approved draft to MDX without rewriting its body. Ask one focused question if the author has not supplied a date, title, subtitle, description, tags, or `tldr` and they cannot be derived without inventing facts.

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

Before returning a refinement or saving an approved draft, compare it with the supplied material and verify:

- every original personal claim, fact, number, link, attribution, qualification, and degree of certainty remains intact unless the author authorized a change;
- the edited prose preserves the original opening, section progression, and closing judgment;
- grammar, phrasing, transitions, and Markdown are clear without flattening the author's voice; and
- no new analytical frame, source, counterargument, generic CTA, or corporate language displaced authored material.

Fix the weakest material issue once, then stop. Do not flatten the author's voice through repeated polishing.
