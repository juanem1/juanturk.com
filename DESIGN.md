---
version: alpha
name: Ember Night
description: Dark editorial system for juanturk.com, a personal site, blog, and consulting storefront for a software engineer writing about AI and automation.
colors:
  primary: "#fdba74"
  primary-hover: "#fed7aa"
  primary-soft: "#ffedd5"
  on-primary: "#09090b"
  surface: "#0d1117"
  surface-raised: "#161b22"
  surface-elevated: "#1c2128"
  surface-high: "#22272e"
  surface-overlay: "#14181d"
  surface-code: "#18181b"
  surface-code-block: "#09090b"
  surface-tint: "#171b20"
  surface-tint-hover: "#25292e"
  on-surface: "#ffffff"
  on-surface-strong: "#f4f4f5"
  on-surface-emphasis: "#e4e4e7"
  on-surface-body: "#d4d4d8"
  on-surface-muted: "#a1a1aa"
  on-surface-subtle: "#71717a"
  outline: "#25292e"
  outline-strong: "#4a4c51"
  surface-light: "#ffffff"
  on-surface-light: "#3f3f46"
  on-surface-light-strong: "#09090b"
  outline-light: "#e9e9ec"
typography:
  display-editorial:
    fontFamily: PP Editorial New
    fontSize: 4.5rem
    fontWeight: 700
    lineHeight: 1
    letterSpacing: -0.025em
  headline-editorial:
    fontFamily: PP Editorial New
    fontSize: 3.75rem
    fontWeight: 700
    lineHeight: 1
    letterSpacing: -0.025em
  title-editorial:
    fontFamily: PP Editorial New
    fontSize: 1.875rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.025em
  display-blog:
    fontFamily: Mona Sans
    fontSize: 4.5rem
    fontWeight: 750
    lineHeight: 1
    letterSpacing: -0.05em
  headline-post:
    fontFamily: Mona Sans
    fontSize: 3.75rem
    fontWeight: 780
    lineHeight: 1
    letterSpacing: -0.035em
  headline-lg:
    fontFamily: Mona Sans
    fontSize: 2.25rem
    fontWeight: 760
    lineHeight: 1.1
    letterSpacing: -0.05em
  headline-md:
    fontFamily: Mona Sans
    fontSize: 1.875rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.04em
  headline-sm:
    fontFamily: Mona Sans
    fontSize: 1.5rem
    fontWeight: 650
    lineHeight: 1.33
    letterSpacing: -0.03em
  title-card:
    fontFamily: Mona Sans
    fontSize: 1.5rem
    fontWeight: 720
    lineHeight: 1.25
    letterSpacing: -0.04em
  body-lg:
    fontFamily: Mona Sans
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 2rem
  body-post:
    fontFamily: Mona Sans
    fontSize: 1.08rem
    fontWeight: 400
    lineHeight: 2rem
  body-md:
    fontFamily: Mona Sans
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.75rem
    fontFeature: '"ss01" on, "ss03" on, "ss05" on'
  body-sm:
    fontFamily: Mona Sans
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.25rem
  label-md:
    fontFamily: Mona Sans
    fontSize: 0.875rem
    fontWeight: 600
    lineHeight: 1.25rem
  label-eyebrow:
    fontFamily: Mona Sans
    fontSize: 0.875rem
    fontWeight: 600
    lineHeight: 1.25rem
    letterSpacing: 0.18em
  label-tag:
    fontFamily: Mona Sans
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1rem
    letterSpacing: -0.025em
  code:
    fontFamily: ui-monospace
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.25rem
rounded:
  none: 0px
  sm: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  2xl: 1rem
  full: 9999px
spacing:
  unit: 0.25rem
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2.5rem
  xl: 3rem
  2xl: 5rem
  prose-rhythm: 1.5rem
  container-max: 72rem
  gutter-mobile: 1.25rem
  gutter-tablet: 2rem
  gutter-desktop: 2.5rem
  toc-width: 16rem
components:
  page:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-body}"
    typography: "{typography.body-md}"
  header-sticky:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-surface}"
    height: 4.5rem
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 1.25rem
    height: 2.75rem
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
  button-secondary:
    backgroundColor: "{colors.surface-tint-hover}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 1rem
    height: 2.25rem
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-strong}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 1rem
  button-ghost-hover:
    backgroundColor: "{colors.surface-tint-hover}"
    textColor: "{colors.on-surface}"
  icon-button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-body}"
    rounded: "{rounded.full}"
    size: 2.5rem
  share-button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-muted}"
    rounded: "{rounded.full}"
    size: 2.25rem
  input:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 1rem
    height: 2.75rem
  choice-chip:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.on-surface-emphasis}"
    rounded: "{rounded.full}"
  choice-chip-selected:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.primary-soft}"
  tag:
    textColor: "{colors.primary}"
    typography: "{typography.label-tag}"
  eyebrow:
    textColor: "{colors.on-surface-body}"
    typography: "{typography.label-eyebrow}"
  link-inline:
    textColor: "{colors.primary}"
  tldr-callout:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.on-surface-emphasis}"
    padding: 1.25rem
  post-nav-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 1.25rem
  post-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.body-md}"
  post-card-meta:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.body-sm}"
  post-thumbnail:
    rounded: "{rounded.xl}"
  post-hero-image:
    backgroundColor: "{colors.surface-code}"
    rounded: "{rounded.xl}"
  code-inline:
    backgroundColor: "{colors.surface-code}"
    textColor: "{colors.on-surface-strong}"
    typography: "{typography.code}"
    rounded: "{rounded.md}"
  code-block:
    backgroundColor: "{colors.surface-code-block}"
    textColor: "{colors.on-surface-strong}"
    typography: "{typography.code}"
    rounded: "{rounded.2xl}"
    padding: 1.25rem
  toc-link:
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.body-sm}"
  toc-link-active:
    textColor: "{colors.on-surface}"
  icon-tile:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.primary}"
    rounded: "{rounded.xl}"
    size: 2.75rem
  dropdown-menu:
    backgroundColor: "{colors.surface-overlay}"
    textColor: "{colors.on-surface-muted}"
    rounded: "{rounded.lg}"
    padding: 0.625rem
  audio-player:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.on-surface-muted}"
    rounded: "{rounded.md}"
  mobile-menu-sheet:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.on-surface-light}"
    rounded: "{rounded.xl}"
  mobile-menu-link-hover:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.on-surface-light-strong}"
  mobile-menu-icon:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.on-surface-subtle}"
    size: 1.25rem
  mobile-menu-divider:
    backgroundColor: "{colors.outline-light}"
  divider:
    backgroundColor: "{colors.outline}"
  divider-strong:
    backgroundColor: "{colors.outline-strong}"
  backdrop-gradient:
    backgroundColor: "{colors.surface-high}"
---

# juanturk.com Design System

## Overview

**Ember Night** is a dark, editorial interface for a senior engineer's personal site, blog, and AI consulting offer. It should feel like a calm, late-night engineering notebook: serious, authored, and confident, with no corporate polish or startup gloss. The audience is technical leaders, engineers, and operations-minded business owners who read long-form content and evaluate whether to hire the author.

The look rests on three ideas:

- **GitHub-dark foundation.** Backgrounds borrow the near-black blue-grays of GitHub's dark theme (`#0d1117` → `#22272e`), so the site feels native to developers.
- **One warm signal.** A single soft orange (Ember, Tailwind `orange-300`) is the only chromatic color. It marks actions, links, tags, the active state, and the one emphasized word in a headline.
- **Editorial contrast.** A refined serif (PP Editorial New) gives personal and service pages a magazine-like voice, while the variable sans (Mona Sans) carries the blog, UI, and all body copy.

Generous negative space, tight negative tracking on headlines, and slow, eased motion keep the tone composed rather than flashy.

The site has three page families, and each family has its own layout shell:

- **Personal** (`/`) and **Services** (`/services/**`) use `SiteLayout`: a transparent header over an animated backdrop of drifting ember "orbs" and a cursor-reactive dot grid. Display headings use PP Editorial New.
- **Blog** (`/blog/**`) uses `BlogLayout`: a sticky, blurred header over a flat gradient, with no ambient animation, so reading stays the focus. Every heading uses Mona Sans.

Styling is Tailwind CSS v4 utilities in Astro components, plus shared component classes in `src/styles/global.css`. Token values here mirror the Tailwind palette and scale used in code.

## Colors

The palette is high-contrast neutrals on a deep blue-black canvas, plus one warm accent.

- **Ember (#fdba74, `primary`):** The only accent. Use it for primary buttons, inline links, tags, the active table-of-contents marker, focus rings, required-field asterisks, progress indicators, and one highlighted word in a display headline (`<em class="text-orange-300">`). Ember is a light color, so text on Ember backgrounds is always `on-primary` (#09090b).
- **Ember Glow (#fed7aa, `primary-hover`):** Hover state for Ember buttons and for service and feature titles that warm up on hover.
- **Ember Mist (#ffedd5, `primary-soft`):** Text on selected choice chips.
- **Canvas (#0d1117, `surface`):** The base page color and browser `theme-color`. The full page background is a vertical gradient `#1c2128 → #22272e → #0d1117` (blog) or `#0d1117 → #11151d → #0d1117` (personal/services).
- **Raised and elevated surfaces (#161b22, #1c2128, #22272e):** Gradient stops for the sticky header and page background. They are not used as solid card fills.
- **Overlay (#14181d, `surface-overlay`):** The desktop Services dropdown, at 96% opacity with a backdrop blur.
- **Code (#18181b / #09090b):** Inline code (zinc-900) and code blocks (zinc-950).
- **Translucent white tints:** Most containers are not filled. They sit on the canvas and use white at low alpha: 4% for callouts, inputs, and the audio player (`bg-white/4`); 8–14% for hover fills (`bg-white/10`); and 10% for hairline borders and dividers (`border-white/10`). Stronger outlines (20–35%) are reserved for hover borders and outlined cards. In code, always implement these as white with alpha so they adapt to the gradient behind them. The `surface-tint`, `surface-tint-hover`, `outline`, `outline-strong`, and `outline-light` tokens store the opaque result of that alpha composited over Canvas (or over white for `outline-light`), so tools can check contrast.

Text uses a strict white-to-zinc ladder. Pick the step by role, not by taste:

| Role | Token | Tailwind |
| --- | --- | --- |
| Headlines, titles, primary nav | `on-surface` #ffffff | `text-white` |
| Emphasized words, nav links | `on-surface-strong` #f4f4f5 | `text-zinc-100` |
| TL;DR, subtitles, form chips | `on-surface-emphasis` #e4e4e7 | `text-zinc-200` |
| Post body, intros | `on-surface-body` #d4d4d8 | `text-zinc-300` |
| Descriptions, secondary copy, meta, dates, captions | `on-surface-muted` #a1a1aa | `text-zinc-400` |

`on-surface-muted` (zinc-400) is the lowest step allowed for text on dark surfaces. It keeps at least 5.9:1 contrast across the whole background gradient. `on-surface-subtle` (#71717a, zinc-500) falls to 3.1–3.9:1 on the dark gradient, so it is reserved for non-text details: the underline color of prose links (`decoration-zinc-500`) and icons on the light mobile sheet.

**Light exception.** The mobile navigation sheet is the only light surface: white (`surface-light`) with zinc-700 links that darken to zinc-950 on hover, zinc-500 icons (4.8:1 on white), and `zinc-200/80` dividers. This is an intentional contrast moment and should not spread to other components.

There is no error, success, or warning palette. Form validation relies on native browser behavior.

## Typography

Two typefaces are self-hosted through Astro's font API:

- **Mona Sans** (variable: weight 200–900, width 75–125%, optical size, italic), exposed as `--font-mona-sans` and mapped to Tailwind's `font-sans`. It is the default for everything. Stylistic sets `ss01`, `ss03`, and `ss05` and optical sizing are enabled globally on `<html>`. Italic uses `font-variation-settings: 'ital' 1` through the custom `italic` utility.
- **PP Editorial New** (Regular 400, Bold 700, Bold Italic), exposed as `--font-editorial-new`. Apply it with `font-(family-name:--font-editorial-new)`. Pages that use it must preload it with `<Font cssVariable="--font-editorial-new" preload />`.

**Rule:** PP Editorial New is only for display and section headings on personal and services pages (home hero, "Who am I", service titles, landing-page section headings). The blog uses Mona Sans for every heading.

Headline character comes from **heavy weights and tight negative tracking**. Mona Sans headings use non-standard variable weights (`font-[650]` through `font-[780]`) with tracking between `-0.03em` and `-0.055em`. Editorial headings use `tracking-tight`. Because Editorial New only ships 400 and 700, any weight above 600 renders as Bold.

Scale highlights:

- **Display:** Home hero `text-5xl → sm:text-6xl → lg:text-7xl`. Services hero up to `lg:text-8xl`. Blog index `text-5xl → sm:text-7xl`. Post title `text-4xl → lg:text-6xl`.
- **Section headings:** `text-3xl → md:text-4xl → lg:text-6xl` (editorial) or `text-3xl → sm:text-4xl` (sans).
- **Post content:** body `1.08rem / 2rem` in zinc-300; h2 `text-3xl` bold, `-0.04em`; h3 `text-2xl` 650, `-0.03em`; both `scroll-mt-28` so anchors clear the sticky header.
- **Intros:** `text-lg / leading-8`, growing to `sm:text-[1.35rem] / sm:leading-9` on landing pages. Use `text-pretty` for intros.
- **Eyebrows:** `text-sm font-semibold uppercase tracking-[0.18em]` in zinc-300, or Ember for the landing-page kicker.
- **Tags:** `text-xs` (`0.68rem` compact) `font-medium uppercase tracking-tight`, always Ember.
- **Emphasis in prose:** In marketing copy, key phrases are `<strong><em>` together in `font-bold text-zinc-100 italic`. In display headlines, one word or phrase is italicized and/or tinted Ember.

Code uses the system monospace stack (`ui-monospace`, Tailwind default) at `text-sm`.

## Layout

- **Container:** `mx-auto w-full max-w-6xl` (72rem) with responsive gutters `px-5 sm:px-8 lg:px-10`. The header nav uses the same container, so the logo aligns with the content edge.
- **Spacing scale:** Tailwind's 0.25rem base. Common steps are 0.5, 1, 1.5, 2.5, 3, and 5rem. Long-form prose uses a 1.5rem flow rhythm (`.post-content > * + * { mt-6 }`), with 3rem before h2s and 2.5rem before h3s.
- **Hero spacing:** The home hero is pushed far down on desktop (`lg:mt-45 lg:mb-40`) to feel spacious. Services pages use `pt-18.25` to clear the transparent header.
- **Grids:**
  - Home hero: `lg:grid-cols-[minmax(0,1fr)_minmax(22rem,28rem)]` (copy + illustration).
  - Recent posts: three columns separated by 3rem spacer columns that hold a 1px divider (`bg-white/10`, Ember on hover).
  - Blog index: a lead post plus a stacked secondary list (`xl:grid-cols-2`). Secondary items use a 168px square thumbnail.
  - Post page: content plus a sticky 16rem table of contents (`lg:grid-cols-[minmax(0,1fr)_16rem]`, `gap-12`, TOC `lg:sticky lg:top-28`).
  - Services and feature lists: `sm:grid-cols-2` with `gap-x-12 lg:gap-x-16 gap-y-9`. Each item starts with a `border-t border-white/10 pt-7` rule.
- **Breakpoints:** Tailwind defaults. `md` (768px) switches between the mobile menu and desktop nav. `lg` (1024px) enables multi-column layouts and the TOC. Mobile hides decorative imagery (`hidden md:block`) instead of shrinking it.
- **Separation:** Prefer hairline rules (`border-white/10`) and whitespace over boxed cards. Sections are separated by space or by `Divider`, a centered 1px line with a pale-yellow radial glow.

## Elevation & Depth

The design is mostly flat. Depth comes from **light, blur, and translucency**, not stacked shadows.

- **Ambient backdrop (personal/services only):** Three large blurred radial "orbs" in Ember at 7–28% alpha drift slowly (28–36s loops) behind content. A canvas dot grid (15px spacing, 1.2px white dots at 5.5% alpha) sits on top. On fine-pointer devices, dots bulge away from the cursor and an Ember glow follows it. Content sits above both (`z-index: 2`).
- **Sticky header (blog):** A translucent gradient (`#0d1117fa → #161b22f7 → #1c2128f2`) with `backdrop-blur-md` and a `border-white/15` bottom rule.
- **Overlays:** The Services dropdown uses `surface-overlay` at 96%, `backdrop-blur-xl`, `ring-1 ring-white/6`, and a deep soft shadow (`0 32px 80px -40px rgba(0,0,0,0.95)`). The mobile sheet uses a dark ambient shadow on its light surface.
- **Imagery depth:** The home illustration uses a large drop shadow (`0 30px 80px rgba(0,0,0,0.45)`), an Ember blur halo behind it, and a bottom fade mask. Post hero images get a dark gradient overlay (zinc-950, 18% → 96%) so the title stays legible.
- **Hover glow:** `.interactive-chip` adds a faint white under-glow on hover (`0 18px 30px -24px rgba(255,255,255,0.55)`), on fine pointers only.
- **Hover lift:** Cards and post links translate up `-translate-y-1` over 300ms instead of gaining a shadow.

## Shapes

Shape language is **pill actions, softly rounded media, square-edged text structures**.

- **Pills (`rounded-full`):** Every button, nav chip, icon button, share button, choice chip, and avatar.
- **Media and containers:** `rounded-xl` (0.75rem) for post hero frames, thumbnails, icon tiles, and the mobile sheet top. `rounded-2xl` (1rem) for the featured blog image and code blocks. `rounded-lg` (0.5rem) for inputs, post navigation cards, and dropdown panels. `rounded-md` for inline code and the audio player.
- **Square edges:** Callouts (TL;DR, blockquotes), dividers, TOC items, and section rules stay sharp and are marked with a left or top border instead of a radius.
- Media frames always pair the radius with `overflow-hidden` and a `border border-white/10` hairline.

## Components

All interactive pieces follow a few shared rules: Ember fill for the single primary action, translucent white for everything secondary, `transition` with 200–300ms ease-out, and Ember focus rings.

- **Primary button:** `rounded-full bg-orange-300 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-orange-200` plus `interactive-chip`. Add a trailing Lucide `ArrowRight` (16px, stroke 2.5) with `cta-with-arrow` (nudges 4px right on hover) or `cta-with-rotate` (rotates 90°). Use full width on mobile and auto width from `md` up.
- **Secondary button:** Pill, `border border-white/30 bg-white/10 text-white`, hover `border-white/35 bg-white/14` (for example, "View archive"). In forms: transparent background, `border-white/12`, zinc-200 text.
- **Ghost nav chip:** Pill, transparent, `text-sm font-semibold text-zinc-100`, hover `bg-white/10 text-white`. Icon variant: 40×40 circle with a 20px icon in zinc-300.
- **Share and audio icon buttons:** 36–40px circles, `border border-white/10`, zinc-400 icon, hover `border-white/20 text-white`.
- **Inputs, selects, textareas:** `bg-white/4`, `border-white/8`, `rounded-lg`, min-height 2.75rem, white text, zinc-400 placeholder. Hover border `white/16`. Focus border Ember at 90% with a `0.2rem` Ember ring at 14% and no outline. Labels are white, `1.05rem`, weight 760, tracking `-0.03em`. Required marks are Ember.
- **Choice chips (forms):** Pills, `bg-white/4 border-white/8`, zinc-200 text. Selected: Ember border, Ember 14% fill, `#ffedd5` text, Ember focus outline.
- **Post card:** Unboxed. Date (zinc-400, `text-sm`, unchanged on hover), then title (`title-card`, white → zinc-200 on hover), description (zinc-400 → zinc-300), and an Ember "Read post →" link that keeps its color on hover. The whole card lifts 4px on hover.
- **Archive row:** Date column in zinc-400 that brightens to zinc-300 on hover. Rows are separated by `border-white/8` and lift 4px on hover.
- **Tags:** Uppercase Ember text with no background, chip, or border.
- **TL;DR callout:** `border-l-4 border-orange-300 bg-white/4 px-5 py-4`. "TL;DR" label in weight 650, body in zinc-200.
- **Blockquote:** `border-l-4 border-white/15 pl-5` with italic zinc-400 text.
- **Inline link (prose):** Ember, medium weight, underline on hover with an Ember decoration and `underline-offset-4`. External links get a trailing `↗` automatically.
- **Table of contents:** `text-sm` zinc-400 links with a 2px transparent left border. The active item gets an Ember border, white text, and medium weight.
- **Post meta bar:** Top and bottom hairlines, a 56px round avatar, author name in white, a dot-separated reading time and date in zinc-400, and share buttons aligned right.
- **Post navigation:** Two outlined cards (`rounded-lg border-white/25`, hover `border-white`) with a zinc-400 "Previous/Next" eyebrow and a white title.
- **Audio player:** A `rounded-md bg-white/4 border-white/10` bar with a waveform (zinc-400 unplayed, zinc-600 played), an Ember playhead, and a tabular-nums timestamp.
- **Icon tile (feature lists):** 44px `rounded-xl` square, `bg-orange-300/10`, Ember icon, `ring-1 ring-inset ring-orange-300/20`. On hover the fill rises to 20% and the ring to 40%.
- **Process timeline:** A 14px Ember dot with an `animate-ping` halo, connected by a 1px line fading from Ember to white/8.
- **Header:** The logo "Juan Turk" is plain text, weight 650, tracking `-0.02em`. The desktop nav has Services (dropdown), Blog, GitHub, and LinkedIn. Below `md`, a hamburger opens the light sheet.
- **Icons:** Lucide (`@lucide/astro`) for UI glyphs. Brand icons (GitHub, LinkedIn, X, Facebook) are local SVGs in `src/assets/icons`, rendered through `astro-icon`.

## Motion

Motion is slow, eased, and always optional.

- **Page entrance:** `.motion-enter` fades and lifts elements 18px with a slight scale (0.985 → 1) over 720ms using `cubic-bezier(0.22, 1, 0.36, 1)`. Stagger with `--motion-step` (65ms per step after a 120ms base delay). Use `.motion-fade` to drop the translate.
- **Hover:** 200–300ms color transitions, a 4px card lift, and arrow nudges at 280ms with the same easing curve.
- **Page transitions:** Astro's `ClientRouter` with a fade on `<main>`. The header persists across navigations.
- **Reduced motion:** Every animation, transition, orb drift, and cursor effect must be disabled under `prefers-reduced-motion: reduce`. Cursor-driven effects run only on `(hover: hover) and (pointer: fine)`.

## Imagery

Blog hero images are dark industrial editorial illustrations: near-monochrome graphite and steel, with a single amber-gold or white energy path, and no text, logos, or people. Follow `.agents/skills/blogpost-image/SKILL.md` when creating them. The home page uses a transparent illustration (hands on a laptop) faded into the background. Images are served through Astro's `<Image>` as WebP with explicit `widths` and `sizes`.

## Do's and Don'ts

- Do keep Ember as the only accent color. Use it for one primary action per view and for one emphasized word in a display headline.
- Do pick text colors from the white-to-zinc ladder by role (headline, emphasis, body, muted) instead of inventing new grays.
- Do separate content with hairlines (`border-white/10`) and whitespace before reaching for filled cards or shadows.
- Do use `rounded-full` for every button and chip, and `rounded-lg`/`xl`/`2xl` only for inputs, cards, and media.
- Do use PP Editorial New only for display and section headings on personal and services pages, and preload it on those pages.
- Do give every interactive element an Ember focus state and honor `prefers-reduced-motion`.
- Do keep the mobile menu as the only light surface.
- Don't use Editorial New anywhere in the blog, or for body text, buttons, or labels.
- Don't put white or zinc text on Ember backgrounds. Text on Ember is always zinc-950.
- Don't add new hues (blue, green, purple) for status or decoration. Only the zinc ladder and Ember exist.
- Don't use heavy drop shadows on cards. Express hover with a lift, a color shift, or the faint `interactive-chip` glow.
- Don't add the animated orb backdrop or dot grid to blog pages. They belong to `SiteLayout` only.
- Don't use `text-zinc-500` or darker grays for text on dark surfaces. They fail WCAG AA (below 4.5:1). Use zinc-400 as the floor for dates, captions, and metadata.
- **Known inconsistency:** On `/blog/`, tag wrappers apply `text-emerald-300/90` and `text-fuchsia-300`, but `PostTags` sets Ember on each `<li>`, so those classes have no effect. Tags render Ember. Remove the dead classes rather than reviving the extra hues.
- **Known inconsistency:** Headline weights are arbitrary variable values (650, 720, 750, 760, 780) applied per page instead of a fixed set. Reuse the closest existing value for new headings instead of adding another.
- **Known inconsistency:** Form styles in `apply.astro` use raw `rgb()` values in scoped CSS instead of Tailwind utilities. They match the tokens above, so keep them aligned if either side changes.
