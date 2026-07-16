# AGENTS.md

## Cursor Cloud specific instructions

This is a static blog built with Astro + `astro-pure`, managed with the **Bun** package manager (`bun.lock`). Standard scripts live in `package.json` (`dev`, `check`, `build`, `lint`, `format`).

- Bun is preinstalled in the cloud environment and on `PATH`; the update script runs `bun install`. Use Bun (not npm/pnpm) so the lockfile stays consistent.
- Run the dev server with `bun dev` (Astro dev server on port `4321`).
- **The site uses a base path.** The dev server serves everything under `http://localhost:4321/YokohamaSnowlyBlog` — the bare root `http://localhost:4321/` returns 404. Always include the `/YokohamaSnowlyBlog` prefix when loading pages or writing links (see `src/config/site.ts` / `withStaticBase(...)` helpers).
- `bun check` (astro check) and `bun build` both pass cleanly. `bun build` also runs `astro-pure check` and Pagefind indexing.
- `bun lint` currently reports pre-existing errors in `src/` (unused vars, `no-explicit-any`, etc.); these are existing repo issues, not an environment problem.
- Content lives in `src/content/{blog,thoughts,docs}` and follows the schema in `src/content.config.ts`. The dev server hot-reloads content edits.
