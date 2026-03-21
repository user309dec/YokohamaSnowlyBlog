---
name: yokohama-snowly-blog
description: Maintain and extend the YokohamaSnowlyBlog Astro site. Use when working in this repo on blog or thoughts content, Astro pages/components/layouts, site configuration, content collections, or build/lint/check workflows, especially when a task should follow the existing content schema and project structure.
---

# Yokohama Snowly Blog

Follow the existing Astro + astro-pure structure instead of inventing new patterns.

## Quick workflow

1. Read `references/repo-map.md` before making non-trivial changes.
2. Identify the content type or UI layer you need to edit.
3. Keep changes small and consistent with the current site conventions.
4. Run the narrowest useful validation command first, then broader checks when the change touches shared config or rendering.

## Work by area

### Content updates

- Add long-form posts under `src/content/blog/`.
- Add short updates under `src/content/thoughts/`.
- Add documentation-style pages under `src/content/docs/`.
- Match the collection schema in `src/content.config.ts`.
- Keep titles and descriptions within the schema limits.
- Prefer lowercase tags because the schema normalizes and deduplicates them.
- If a post needs images, keep them beside that post when the current folder already uses colocated assets.

### Site configuration

- Edit `src/site.config.ts` for navigation, footer, integrations, and theme-level settings.
- Edit `src/config/site.ts` for origin and base-path behavior.
- Preserve `withStaticBase(...)` / base-path-aware links when changing internal asset or page URLs.

### UI and page changes

- Reuse existing components and layouts in `src/components/` and `src/layouts/` before adding new abstractions.
- Keep route-specific page logic in `src/pages/`.
- Prefer small, local edits over broad restructuring unless the task explicitly requires a refactor.

## Validation

Run the smallest relevant command first:

- `bun check` for Astro/type/content validation.
- `bun build` for full production verification.
- `bun lint` when editing Astro/TS/JS source files.
- `bun format` after content or source edits if formatting drift is likely.

If Bun is unavailable, fall back to the equivalent npm script only if the environment already supports it.

## References

- Read `references/repo-map.md` for the repo layout, common commands, and edit guidance.
