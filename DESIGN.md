---
version: alpha
name: Ember Night
description: Dark editorial design system for a personal site, long-form blog, and services storefront. Framework-agnostic; every value is plain CSS.
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

# Ember Night Design System

## Overview

**Ember Night** is a dark, editorial interface for a senior engineer's personal site, blog, and consulting offer. It should feel like a calm, late-night engineering notebook: serious, authored, and confident, with no corporate polish or startup gloss. The audience is technical leaders, engineers, and operations-minded business owners who read long-form content and evaluate whether to hire the author.

The look rests on three ideas:

- **GitHub-dark foundation.** Backgrounds borrow the near-black blue-grays of GitHub's dark theme (`#0d1117` → `#22272e`), so the site feels native to developers.
- **One warm signal.** A single soft orange (Ember, `#fdba74`) is the only chromatic color. It marks actions, links, tags, the active state, and the one emphasized word in a headline.
- **Editorial contrast.** A refined serif (PP Editorial New) gives personal and service pages a magazine-like voice, while a variable sans (Mona Sans) carries the blog, UI, and all body copy.

Generous negative space, tight negative tracking on headlines, and slow, eased motion keep the tone composed rather than flashy.

The system defines two page families, and each family has its own layout shell:

- **Showcase pages** (home, about, services, landing pages) use a transparent header over an animated backdrop of drifting ember "orbs" and a cursor-reactive dot grid. Display headings use PP Editorial New.
- **Reading pages** (blog index, articles) use a sticky, blurred header over a flat gradient, with no ambient animation, so reading stays the focus. Every heading uses Mona Sans.

All values are plain CSS and do not depend on any framework. The front-matter tokens are normative; the prose explains how to apply them. Lengths use `rem` with a 16px root.

## Colors

The palette is high-contrast neutrals on a deep blue-black canvas, plus one warm accent.

- **Ember (#fdba74, `primary`):** The only accent. Use it for primary buttons, inline links, tags, the active table-of-contents marker, focus rings, required-field asterisks, progress indicators, and one highlighted word in a display headline. Ember is a light color, so text on Ember backgrounds is always `on-primary` (#09090b).
- **Ember Glow (#fed7aa, `primary-hover`):** Hover state for Ember buttons and for service and feature titles that warm up on hover.
- **Ember Mist (#ffedd5, `primary-soft`):** Text on selected choice chips.
- **Canvas (#0d1117, `surface`):** The base page color and browser `theme-color`. The full page background is a vertical gradient: `#1c2128 → #22272e → #0d1117` on reading pages, `#0d1117 → #11151d → #0d1117` on showcase pages.
- **Raised and elevated surfaces (#161b22, #1c2128, #22272e):** Gradient stops for the sticky header and page background. They are not used as solid card fills.
- **Overlay (#14181d, `surface-overlay`):** Dropdown panels, at 96% opacity (`#14181df5`) with a backdrop blur.
- **Code (#18181b / #09090b):** Inline code and code blocks.
- **Translucent white tints:** Most containers are not filled. They sit on the canvas and use white at low alpha (see the table below). Always implement these as white with alpha so they adapt to the gradient behind them. The `surface-tint`, `surface-tint-hover`, `outline`, `outline-strong`, and `outline-light` tokens store the opaque result of that alpha composited over Canvas (or over white for `outline-light`), so tools can check contrast.

| Alpha | Hex | Use |
| --- | --- | --- |
| 4% | `#ffffff0a` | Resting fill for callouts, inputs, chips, and the audio player |
| 6% | `#ffffff0f` | Ring around overlay panels |
| 8% | `#ffffff14` | Input and chip borders, archive row separators |
| 10% | `#ffffff1a` | Hairline dividers, media borders, hover fills |
| 12% | `#ffffff1f` | Border of secondary buttons inside forms |
| 14% | `#ffffff24` | Stronger hover fill |
| 15% | `#ffffff26` | Header bottom rule, blockquote rule |
| 16% | `#ffffff29` | Input hover border |
| 20% | `#ffffff33` | Icon button hover border |
| 25% | `#ffffff40` | Outlined card border |
| 30% | `#ffffff4d` | Secondary button border |
| 35% | `#ffffff59` | Secondary button hover border |

Ember also appears with alpha: 10% (`#fdba741a`), 14% (`#fdba7424`), 20% (`#fdba7433`), 40% (`#fdba7466`), and 90% (`#fdba74e6`).

Text uses a strict white-to-gray ladder. Pick the step by role, not by taste:

| Role | Token | Hex |
| --- | --- | --- |
| Headlines, titles, primary nav | `on-surface` | #ffffff |
| Emphasized words, nav links | `on-surface-strong` | #f4f4f5 |
| TL;DR, subtitles, form chips | `on-surface-emphasis` | #e4e4e7 |
| Post body, intros | `on-surface-body` | #d4d4d8 |
| Descriptions, secondary copy, meta, dates, captions | `on-surface-muted` | #a1a1aa |

`on-surface-muted` (#a1a1aa) is the lowest step allowed for text on dark surfaces. It keeps at least 5.9:1 contrast across the whole background gradient. `on-surface-subtle` (#71717a) falls to 3.1–3.9:1 on the dark gradient, so it is reserved for non-text details: the underline color of prose links and icons on the light mobile sheet.

**Light exception.** The mobile navigation sheet is the only light surface: white (`surface-light`) with #3f3f46 links that darken to #09090b on hover, #71717a icons (4.8:1 on white), and #e4e4e7 dividers at 80% (`#e4e4e7cc`). This is an intentional contrast moment and should not spread to other components.

There is no error, success, or warning palette. Form validation relies on native browser behavior.

## Typography

Self-host both typefaces and preload the ones each page uses.

- **Mona Sans** (variable: weight 200–900, width 75–125%, optical size, italic) is the default for everything. Stack: `"Mona Sans", ui-sans-serif, system-ui, sans-serif`. Enable `font-feature-settings: "ss01", "ss03", "ss05"` and `font-optical-sizing: auto` on the root element. Render italic with `font-variation-settings: "ital" 1`.
- **PP Editorial New** (Regular 400, Bold 700, Bold Italic). Stack: `"PP Editorial New", ui-serif, Georgia, serif`. Preload it on every page that uses it.

**Rule:** PP Editorial New is only for display and section headings on showcase pages (home hero, about section, service titles, landing-page section headings). Reading pages use Mona Sans for every heading.

Headline character comes from **heavy weights and tight negative tracking**. Mona Sans headings use non-standard variable weights (650 through 780) with letter-spacing between `-0.03em` and `-0.055em`. Editorial headings use `-0.025em`. Because Editorial New only ships 400 and 700, any weight above 600 renders as Bold. Reuse an existing headline weight (650, 700, 720, 750, 760, 780) instead of adding a new one.

Scale highlights (display sizes use `line-height: 1`):

- **Display:** Home hero 3rem, 3.75rem from 640px, 4.5rem from 1024px. Services hero up to 6rem from 1024px. Blog index 3rem, 4.5rem from 640px. Article title 2.25rem, 3.75rem from 1024px.
- **Section headings:** 1.875rem, 2.25rem from 768px, 3.75rem from 1024px (editorial), or 1.875rem, 2.25rem from 640px (sans).
- **Article content:** body `1.08rem / 2rem` in #d4d4d8. h2 is 1.875rem, weight 700, `-0.04em`. h3 is 1.5rem, weight 650, `-0.03em`. Both use `scroll-margin-top: 7rem` so anchors clear the sticky header.
- **Intros:** `1.125rem / 2rem`, growing to `1.35rem / 2.25rem` from 640px on landing pages. Use `text-wrap: pretty`.
- **Eyebrows:** `0.875rem / 1.25rem`, weight 600, uppercase, letter-spacing `0.18em`, in #d4d4d8, or Ember for the landing-page kicker.
- **Tags:** `0.75rem / 1rem` (`0.68rem` when compact), weight 500, uppercase, letter-spacing `-0.025em`, always Ember.
- **Emphasis in prose:** In marketing copy, key phrases are bold and italic together in #f4f4f5. In display headlines, one word or phrase is italicized and/or tinted Ember.

Code uses the system monospace stack (`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`) at `0.875rem / 1.25rem`.

## Layout

- **Breakpoints (min-width):** `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px. 768px switches between the mobile menu and desktop nav. 1024px enables multi-column layouts and the table of contents. Below 768px, hide decorative imagery instead of shrinking it.
- **Container:** centered, full width, `max-width: 72rem`, with horizontal padding of 1.25rem, 2rem from 640px, and 2.5rem from 1024px. The header nav uses the same container, so the logo aligns with the content edge.
- **Spacing scale:** 0.25rem base. Common steps are 0.5, 1, 1.5, 2.5, 3, and 5rem. Long-form prose uses a 1.5rem flow rhythm between consecutive blocks, with 3rem before h2s and 2.5rem before h3s.
- **Hero spacing:** The home hero sits far down on desktop (from 1024px: `margin-top: 11.25rem; margin-bottom: 10rem`) to feel spacious. Other showcase pages use `padding-top: 4.5625rem` to clear the transparent header.
- **Grids:**
  - Home hero: from 1024px, `grid-template-columns: minmax(0, 1fr) minmax(22rem, 28rem)` (copy + illustration).
  - Recent posts: three columns separated by 3rem spacer columns that hold a 1px divider (#ffffff1a, Ember on hover).
  - Blog index: a lead post plus a stacked secondary list, two columns from 1280px. Secondary items use a 168px square thumbnail.
  - Article: content plus a 16rem table of contents (from 1024px: `grid-template-columns: minmax(0, 1fr) 16rem; gap: 3rem`), with the table of contents `position: sticky; top: 7rem`.
  - Services and feature lists: two columns from 640px, column gap 3rem (4rem from 1024px), row gap 2.25rem. Each item starts with a `1px solid #ffffff1a` top border and `padding-top: 1.75rem`.
- **Separation:** Prefer hairline rules (`1px solid #ffffff1a`) and whitespace over boxed cards. Separate sections with space or with a divider: a centered 1px line (max width 76.25rem, horizontal padding 5rem, vertical margin 3.75rem, 7.5rem from 1024px) filled with a radial gradient of pale yellow `#ffffab3d` fading to transparent at the edges.

## Elevation & Depth

The design is mostly flat. Depth comes from **light, blur, and translucency**, not stacked shadows.

- **Ambient backdrop (showcase pages only):** Three large blurred radial "orbs" in Ember at 7–28% alpha drift slowly (28–36s loops) behind content. A canvas dot grid (15px spacing, 1.2px white dots at 5.5% alpha, `#ffffff0e`) sits on top. On fine-pointer devices, dots bulge away from the cursor and an Ember glow follows it. Content sits above both (`z-index: 2`).
- **Sticky header (reading pages):** A translucent gradient (`#0d1117fa → #161b22f7 → #1c2128f2`) with `backdrop-filter: blur(12px)` and a `1px solid #ffffff26` bottom rule.
- **Overlays:** Dropdown panels use `#14181df5`, `backdrop-filter: blur(24px)`, a 1px `#ffffff0f` ring, and a deep soft shadow (`0 32px 80px -40px #000000f2`). The mobile sheet uses a dark ambient shadow on its light surface.
- **Imagery depth:** The home illustration uses a large drop shadow (`0 30px 80px #00000073`), an Ember blur halo behind it, and a bottom fade mask. Article hero images get a dark gradient overlay (`#09090b2e → #09090bf5`) so the title stays legible.
- **Hover glow:** Interactive chips add a faint white under-glow on hover (`0 18px 30px -24px #ffffff8c`), on fine pointers only.
- **Hover lift:** Cards and post links translate up 0.25rem (4px) over 300ms instead of gaining a shadow.

## Shapes

Shape language is **pill actions, softly rounded media, square-edged text structures**.

- **Pills (`rounded.full`, 9999px):** Every button, nav chip, icon button, share button, choice chip, and avatar.
- **Media and containers:** `rounded.xl` (0.75rem) for article hero frames, thumbnails, icon tiles, and the mobile sheet top. `rounded.2xl` (1rem) for the featured blog image and code blocks. `rounded.lg` (0.5rem) for inputs, post navigation cards, and dropdown panels. `rounded.md` (0.375rem) for inline code and the audio player.
- **Square edges:** Callouts (TL;DR, blockquotes), dividers, table-of-contents items, and section rules stay sharp and are marked with a left or top border instead of a radius.
- Media frames always pair the radius with `overflow: hidden` and a `1px solid #ffffff1a` hairline.

## Components

All interactive pieces follow a few shared rules: Ember fill for the single primary action, translucent white for everything secondary, transitions of 200–300ms with ease-out, and Ember focus rings.

- **Primary button:** Pill, background #fdba74, text #09090b, `0.875rem` weight 600, padding `0.75rem 1.25rem`, hover background #fed7aa, plus the hover glow. Add a trailing arrow icon (16px, stroke 2.5) that either nudges 4px right or rotates 90° on hover. Full width below 768px, auto width from 768px up.
- **Secondary button:** Pill, `1px solid #ffffff4d` border, #ffffff1a fill, white text. Hover: border #ffffff59, fill #ffffff24. Inside forms: transparent fill, #ffffff1f border, #e4e4e7 text.
- **Ghost nav chip:** Pill, transparent, `0.875rem` weight 600, #f4f4f5 text. Hover: #ffffff1a fill, white text. Icon variant: 40×40px circle with a 20px icon in #d4d4d8.
- **Share and audio icon buttons:** 36–40px circles, `1px solid #ffffff1a` border, #a1a1aa icon. Hover: border #ffffff33, white icon.
- **Inputs, selects, textareas:** #ffffff0a fill, `1px solid #ffffff14` border, 0.5rem radius, min height 2.75rem, white text, #a1a1aa placeholder. Hover border #ffffff29. Focus: border #fdba74e6, `box-shadow: 0 0 0 0.2rem #fdba7424`, no outline. Labels are white, 1.05rem, weight 760, letter-spacing `-0.03em`. Required marks are Ember.
- **Choice chips (forms):** Pills, #ffffff0a fill, #ffffff14 border, #e4e4e7 text. Selected: Ember border, #fdba7424 fill, #ffedd5 text, Ember focus outline.
- **Post card:** Unboxed. Date (#a1a1aa, 0.875rem, unchanged on hover), then title (`title-card`, white → #e4e4e7 on hover), description (#a1a1aa → #d4d4d8), and an Ember "Read post →" link that keeps its color on hover. The whole card lifts 4px on hover.
- **Archive row:** Date column in #a1a1aa that brightens to #d4d4d8 on hover. Rows are separated by `1px solid #ffffff14` and lift 4px on hover.
- **Tags:** Uppercase Ember text with no background, chip, or border.
- **TL;DR callout:** `4px solid #fdba74` left border, #ffffff0a fill, padding `1rem 1.25rem`. The "TL;DR" label uses weight 650; the body uses #e4e4e7.
- **Blockquote:** `4px solid #ffffff26` left border, `padding-left: 1.25rem`, italic #a1a1aa text.
- **Inline link (prose):** Ember, weight 500. On hover, underline with an Ember decoration and `text-underline-offset: 4px`. External links get a trailing `↗` automatically.
- **Table of contents:** 0.875rem #a1a1aa links with a 2px transparent left border. The active item gets an Ember border, white text, and weight 500.
- **Post meta bar:** Top and bottom hairlines, a 56px round avatar, author name in white, a dot-separated reading time and date in #a1a1aa, and share buttons aligned right.
- **Post navigation:** Two outlined cards (0.5rem radius, `1px solid #ffffff40`, hover border white) with a #a1a1aa "Previous/Next" eyebrow and a white title.
- **Audio player:** A bar with 0.375rem radius, #ffffff0a fill, and `1px solid #ffffff1a` border. It has a waveform (#a1a1aa unplayed, #52525b played), an Ember playhead, and a timestamp with `font-variant-numeric: tabular-nums`.
- **Icon tile (feature lists):** 44px square, 0.75rem radius, #fdba741a fill, Ember icon, and an inset 1px #fdba7433 ring (`box-shadow: inset 0 0 0 1px`). On hover the fill rises to #fdba7433 and the ring to #fdba7466.
- **Process timeline:** A 14px Ember dot with a pulsing halo (scale to 2× while fading to transparent, 1s loop), connected by a 1px line fading from Ember to #ffffff14.
- **Header:** The logo is a plain-text wordmark, weight 650, letter-spacing `-0.02em`. The desktop nav holds a services dropdown, a blog link, and social profile links. Below 768px, a menu button opens the light sheet.
- **Icons:** Outline UI glyphs in the Lucide style. Brand icons (GitHub, LinkedIn, X, Facebook) are single-color SVGs that inherit `currentColor`.

## Motion

Motion is slow, eased, and always optional. The shared easing curve is `cubic-bezier(0.22, 1, 0.36, 1)`.

- **Page entrance:** Elements fade in, rise 18px, and scale slightly (0.985 → 1) over 720ms. Stagger them by 65ms per step after a 120ms base delay. A fade-only variant drops the translate.
- **Hover:** 200–300ms color transitions, a 4px card lift, and arrow nudges at 280ms on the shared curve.
- **Page transitions:** Cross-fade the main content region between navigations. The header persists.
- **Reduced motion:** Disable every animation, transition, orb drift, and cursor effect under `prefers-reduced-motion: reduce`. Run cursor-driven effects only under `(hover: hover) and (pointer: fine)`.

## Imagery

Blog hero images are dark industrial editorial illustrations: near-monochrome graphite and steel, with a single amber-gold or white energy path, and no text, logos, or people. The home page uses a transparent illustration (hands on a laptop) faded into the background. Serve images as WebP with explicit responsive widths and `sizes`.

## Do's and Don'ts

- Do keep Ember as the only accent color. Use it for one primary action per view and for one emphasized word in a display headline.
- Do pick text colors from the white-to-gray ladder by role (headline, emphasis, body, muted) instead of inventing new grays.
- Do separate content with hairlines (`1px solid #ffffff1a`) and whitespace before reaching for filled cards or shadows.
- Do use pills (9999px radius) for every button and chip, and 0.5–1rem radii only for inputs, cards, and media.
- Do use PP Editorial New only for display and section headings on showcase pages, and preload it on those pages.
- Do give every interactive element an Ember focus state and honor `prefers-reduced-motion`.
- Do keep the mobile menu as the only light surface.
- Don't use Editorial New on reading pages, or for body text, buttons, or labels.
- Don't put white or gray text on Ember backgrounds. Text on Ember is always #09090b.
- Don't add new hues (blue, green, purple) for status or decoration. Only the gray ladder and Ember exist.
- Don't use heavy drop shadows on cards. Express hover with a lift, a color shift, or the faint chip glow.
- Don't add the animated orb backdrop or dot grid to reading pages. They belong to showcase pages only.
- Don't use #71717a or darker grays for text on dark surfaces. They fail WCAG AA (below 4.5:1). Use #a1a1aa as the floor for dates, captions, and metadata.
