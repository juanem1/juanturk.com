# Spec: RSS Feed

## Objective

Add a statically generated RSS 2.0 feed at `/rss.xml` so readers can subscribe to every post in the existing `posts` content collection. The feed must use `https://juanturk.com` as its canonical origin and must be regenerated as part of the normal Astro build.

This specification is the complete scope of issue #10. It does not implement the endpoint, install dependencies, or change the rendered website.

## Assumptions

- Every entry returned by `getCollection("posts")` is published because the current collection schema has no draft or publication-status field.
- The feed uses the existing post route, `/blog/[slug]/`, with each collection entry's `id` as the slug.
- Items are ordered by `date` descending so the most recently published post appears first.
- Full post content is optional per item. It is included only when the entry exposes non-empty content that can be serialized without executing or flattening MDX/Astro components incorrectly; otherwise the item keeps its required description and omits `content`.
- Feed-level metadata uses the existing site identity: title `Juan Turk` and the default site description already used by `BaseLayout.astro`.

## Tech Stack and Integration Approach

- Astro 6 and its existing content collection API provide the endpoint and post data.
- A typed static API route at `src/pages/rss.xml.ts` exports a `GET` handler and calls `getCollection("posts")`.
- The handler uses Astro's official `@astrojs/rss` package to serialize and return valid RSS XML. This is the one proposed new dependency because Astro itself does not expose the RSS serializer, escaping, headers, and item-generation helper provided by the official package.
- The route passes the request context's `site` value to the RSS helper. `astro.config.mjs` already defines `site: "https://juanturk.com"`; the implementation must raise an explicit build error if that value is unavailable rather than substituting the request origin.
- The endpoint maps each collection entry to an RSS item with these fields:
  - `title`: `post.data.title`
  - `link`: the canonical absolute URL for `/blog/${post.id}/`
  - `pubDate`: `post.data.date`
  - `description`: `post.data.description`
  - `content`: serialized full post content when safely available; omitted otherwise
- The endpoint must not maintain a second list of posts. `getCollection("posts")` remains the source of truth.

The intended endpoint shape is:

```ts
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  // Validate context.site, load and sort the collection, then return rss(...).
};
```

The implementation must confirm the exact content-serialization path against the installed Astro and MDX APIs. It must not add a general Markdown parser or sanitizer solely to force `content` into entries whose MDX cannot be represented faithfully.

## Commands

Use the repository's pinned package manager and existing scripts:

```sh
pnpm add @astrojs/rss
pnpm run build
```

After the build, verify the generated artifact without starting a separate application server:

```sh
test -f dist/rss.xml
rg '<item>|<title>|<link>|<pubDate>|<description>' dist/rss.xml
```

## Project Structure and Files Likely to Change

- `src/pages/rss.xml.ts`: new typed static endpoint that loads, sorts, maps, and serializes posts.
- `package.json`: declares `@astrojs/rss` as a runtime dependency.
- `pnpm-lock.yaml`: records the resolved dependency graph.
- `astro.config.mjs`: no change expected because the canonical `site` value is already configured. Change it only if implementation discovers that the existing value cannot drive the endpoint.
- `src/content.config.ts`: no change expected because the current schema already requires every item field except full content. Do not replace the schema with `rssSchema`, because the existing collection has additional site-specific fields and stricter requirements.

No post file under `src/content/posts` should need modification.

## Code Style

- Keep imports at the top and use explicit TypeScript types for the route, mapped items, and helper return values.
- Keep helpers single-purpose: site validation, post ordering, canonical URL construction, and optional content serialization must not be combined behind flag parameters.
- Use the existing formatter conventions: double quotes in TypeScript and trailing semicolons.
- Throw a specific, actionable error when the canonical site URL is missing or invalid. Do not silently fall back to a request-local origin.
- Do not log feed content or frontmatter. If diagnostics become necessary, use the project's configured structured logger; do not add `console.log`.

## Testing Strategy

The implementation should use the repository's build as the integration test because no standalone test runner is configured and the feed is a generated route.

Verification must establish all of the following:

1. `pnpm run build` succeeds and emits `dist/rss.xml`.
2. The response is parseable RSS XML and declares an RSS content type.
3. The number of `<item>` elements equals the number of entries returned by `getCollection("posts")` at build time.
4. Every item contains the exact post title, an absolute `https://juanturk.com/blog/<id>/` link, a publication date, and the frontmatter description.
5. Items appear in descending publication-date order.
6. Entries with safely serializable content include it; entries without it remain valid and omit the content field.
7. URLs never use a preview, localhost, or request-derived origin.

Do not add unit tests solely for coverage. Add an integration test only if the repository gains an existing test harness suitable for inspecting the built feed.

## Boundaries

### Always

- Include every entry in the `posts` collection exactly once.
- Generate canonical item links from the configured site origin and the existing blog route.
- XML-escape or serialize item data through the official RSS helper.
- Keep the implementation deterministic and compatible with static builds.

### Ask First

- Adding any dependency beyond `@astrojs/rss`.
- Changing the post schema, frontmatter, URL structure, or canonical domain.
- Introducing sanitization rules that remove or rewrite authored post content.

### Never

- Implement an independent filesystem scan of `src/content/posts` beside the content collection.
- Invent missing metadata, silently skip a collection entry, or fall back to a non-canonical origin.
- Execute arbitrary scripts embedded in post content while creating the feed.
- Add feed styling, browser auto-discovery tags, Atom/JSON feeds, pagination, or unrelated layout changes in this issue.

## Acceptance Criteria

- A production build exposes a valid RSS 2.0 document at `/rss.xml`.
- The feed contains exactly one item for every published entry in `src/content/posts` as represented by the `posts` collection.
- Every item contains its title, canonical absolute URL, publication date, and description.
- Full post content is included when it can be safely serialized and is otherwise omitted without invalidating the item.
- Feed and item URLs use `https://juanturk.com`, sourced from Astro's configured `site` value.
- The implementation uses a typed Astro endpoint and the official `@astrojs/rss` serializer.
- No dependency other than `@astrojs/rss` is added without prior approval and documented necessity.
- No RSS implementation is included in the pull request that introduces this specification.

## Open Questions

None. Any future request for feed auto-discovery, styling, or forced full-content rendering is a separate scope decision.
