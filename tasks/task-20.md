# Improve contrast of footer text to meet WCAG

**Task:** task-20

**Branch:** `fix/task-20-improve-contrast-of-footer-text-to-meet`

**Issue:** https://github.com/juanem1/juanturk.com/issues/20

## Summary

Make the footer text lighter so it meets the minimum WCAG contrast requirement.

## Acceptance criteria

- Footer text contrast against its background meets the minimum WCAG requirement (AA, 4.5:1 for normal text).

## Plan

In `src/layouts/BaseLayout.astro` line 139, change the footer's `text-zinc-500` to `text-zinc-400`. That is `#a1a1aa`, the `on-surface-muted` token in `DESIGN.md`. `DESIGN.md` says this is the lowest text color allowed on dark surfaces, with at least 5.9:1 contrast across the background gradient. That passes WCAG AA, which I chose because the issue asks for the minimum WCAG level.

`DESIGN.md` needs no update. It already reserves `#71717a` for non-text details only, so the footer was breaking an existing rule. This is a one-class change in one file, so it doesn't need a breakdown.

## Changes

- [x] Improve footer text contrast to meet WCAG AA — `8e5637d`

## Review

No findings.
