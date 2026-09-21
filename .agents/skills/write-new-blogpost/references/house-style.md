# juanturk.com House Style

This reference summarizes patterns observed across the posts in `src/content/posts`. Use it to make decisions, not as a phrase bank. The current post and the author's supplied material outrank any recurring pattern.

## Editorial identity and scope

This is a personal engineering blog, not a corporate content machine, neutral newsroom, SEO farm, or generic tutorial site. The author writes as a software engineer with experience across multiple companies. Authority should come from direct exposure, lived friction, practical judgment, or clearly attributed research.

The core content pillars are:

- AI and tooling, framed through constraints, trust, compute, delivery, operations, and real usage;
- engineering culture and process, framed through incentives, communication, ownership, workflow, and failure modes;
- industry opinion, tied to observable shifts, infrastructure, incentives, execution, or market behavior; and
- practical technical guides, starting from real pain and ending in a useful, verifiable setup.

Career and work-style posts should favor hard-earned heuristics over inspirational advice. Every post should leave the reader with a sharper model of operational reality, not merely information about a topic.

## Corpus profile

- The published corpus is in English and uses American spelling and punctuation conventions.
- Posts usually address experienced engineers, technical leaders, or operators. They do not teach basic definitions unless a mechanism requires one.
- Most posts are roughly 650 to 1,000 words. Evidence-heavy or workflow posts can reach 1,300 to 1,500 words. Follow the repository's current default target of 800 to 1,500 words, but let the available substance determine the final length.
- Authority comes from firsthand work, concrete operational friction, or a clearly attributed interpretation of current events.
- Common subject areas are AI and tooling, engineering culture, industry shifts, security, workflow design, remote work, and practical self-hosting.

## Voice

The narrator sounds like a senior colleague speaking candidly over coffee:

- direct and conversational, but technically literate;
- opinionated without pretending uncertainty has disappeared;
- skeptical of hype, process theater, and tools detached from operating reality;
- comfortable naming frustration, surprise, or concern without melodrama;
- more interested in incentives, bottlenecks, trade-offs, and control than polished narratives;
- practical enough to turn an opinion into a criterion the reader can use.

First person is part of the voice when it is supported: `I have seen`, `In my experience`, `I think`, or `What I learned`. These forms work because they locate the claim. Do not repeat them mechanically and never use them to fabricate authority.

Use ordinary contractions and occasional direct address. A rhetorical question can sharpen a transition, and a brief dry aside can add warmth. Neither should become the paragraph's only substance.

Match the author's stance, rhythm, and degree of formality. Do not copy grammar slips, translation artifacts, unsupported superlatives, inflated claims, or inconsistent heading levels found in older posts.

## Characteristic movement

Strong posts in the corpus tend to move through this chain:

1. **Friction:** a broken expectation, lived incident, operational bottleneck, or visible industry signal.
2. **Claim:** the author's interpretation appears early and can be disagreed with.
3. **Mechanism:** the post explains why the problem occurs, not merely that it exists.
4. **Consequence:** the reader sees what changes for a team, product, company, or engineer.
5. **Criterion:** the post leaves a practical way to judge or act.

Use the chain as an argumentative test, not as five mandatory sections.

Paragraphs are usually short and visually open. The best transitions name a real relationship: `because`, `but`, `when`, `if`, `so`, or an equally clear causal link. Avoid stacking polished observations that could be reordered without changing the piece.

Most argument-driven posts need three to six distinct main sections. Use fewer or more when the substance requires it; section count is not a target by itself.

## Opening patterns

Choose the pattern supported by the source material:

- **Concrete incident:** a meeting, broken tool, old pull request, production problem, or other supplied scene.
- **Experience declaration:** a specific duration or professional context followed by the lesson it produced.
- **Narrative versus reality:** state the common internet, corporate, or industry story, then show where practice contradicts it.
- **Direct operational claim:** lead with a clear judgment when no honest anecdote exists.
- **Current signal:** cite a development, report, or market event and explain why its mechanism matters.

Do not open with a dictionary definition, a panoramic history, `In today's world`, `In this post`, or an empty question. A strong first sentence begins the actual work of the article.

## Post shapes

### Firsthand engineering and culture

Useful progression:

`incident or accumulated experience → broken expectation → recurring team mechanism → practical rules → concise judgment`

Keep the observation tied to real behavior: meetings, links, pull requests, interruptions, ownership, review, or decision-making. The lesson should emerge from the experience rather than turning into motivational advice.

### Industry analysis and opinion

Useful progression:

`observable signal → thesis → operational or economic mechanism → evidence and limitation → consequence`

Separate sourced fact from the author's interpretation. Put the link in the paragraph where the claim matters. A references block is useful when the post materially depends on several sources; it does not replace inline context.

### Practical technical guide

Useful progression:

`real pain → chosen setup → ordered commands or configuration → verification → caveat or optional hardening → result`

Commands must be short, copy-ready, and consistent with the described platform. Include a verification step. Do not claim a setup works unless the source material or actual validation supports that claim.

## Titles and frontmatter

Titles in this blog usually use one of four forms:

- a direct provocative claim;
- a contrast split by a colon or period;
- a practical `How to` rooted in a real setup;
- a metaphor followed by the operational reality.

Prefer a concise title over a comprehensive one. The subtitle should not paraphrase it; it should add a consequence, constraint, or second layer of intrigue. The description should be calmer and suitable for previews. A `tldr` is a substantial compact paragraph that states the thesis and why it matters, not a slogan.

Treat title and subtitle as a shareable pair: the title should earn attention through a real claim, tension, contrast, reveal, or practical promise, while the subtitle rewards that attention with context or consequence. Avoid clickbait that the body cannot support.

## Sentence and formatting habits

- Favor concrete actors: engineers, teams, reviewers, models, systems, or companies.
- Use bold for a genuinely memorable criterion, not for routine emphasis.
- Use italics for a brief internal thought, quoted attitude, or subtle emphasis.
- Use bullets when they improve retrieval or enumerate real steps, constraints, or examples.
- Keep blockquotes rare and purposeful.
- Avoid decorative emoji; prefer none and never use more than one in a lighter post.
- Use contextual link text. Never write `click here`.
- Attach internal links to a sentence that already carries the same idea instead of inserting them as unrelated promotion.
- Keep reference sections editorial rather than academic. Use them only when several explicit sources materially support the post.

## Failure modes to remove

- Corporate optimism, neutral newsroom voice, guru certainty, or generic productivity advice.
- Condescending language, empty motivation, SEO framing, or generic tutorial-factory prose.
- Claims of importance without a mechanism or consequence.
- A made-up personal story added only to make the post feel authored.
- Repeated `not X but Y` contrasts, three-item cadences, or one-line punchlines doing the work of missing reasoning.
- Meta narration such as `Let's dive in`, `Without further ado`, `It's important to note`, or `In this blog post`.
- Decorative overuse of em dashes or phrases copied from the corpus as a voice costume.
- Sections with identical size and internal rhythm.
- Over-explaining basic engineering ideas to an experienced reader.
- A conclusion labeled only to repeat the thesis.
- Generic endings about the future or invitations to comment.
- Facts, links, employers, timelines, metrics, products, or outcomes carried over from reference posts into a new article.
