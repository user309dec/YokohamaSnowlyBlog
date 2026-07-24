# AGENTS.md

## Cursor Cloud specific instructions

This is a static blog built with Astro + `astro-pure`, managed with the **Bun** package manager (`bun.lock`). Standard scripts live in `package.json` (`dev`, `check`, `build`, `lint`, `format`).

- Bun is the required package manager, but it is **not guaranteed to be preinstalled** on the PATH. The update script installs Bun (to `~/.bun`) if `bun` is missing, then runs `bun install`; `~/.bun/bin` is added to `PATH` via `~/.bashrc`. If `bun` is not found in an interactive shell, run `export PATH="$HOME/.bun/bin:$PATH"`. Use Bun (not npm/pnpm) so the lockfile stays consistent.
- Run the dev server with `bun dev` (Astro dev server on port `4321`).
- **The site uses a base path AND `trailingSlash: 'never'`** (see `astro.config.ts`). The dev server serves everything under `http://localhost:4321/YokohamaSnowlyBlog` with **no trailing slash** — both the bare root `http://localhost:4321/` and the trailing-slash form `http://localhost:4321/YokohamaSnowlyBlog/` return 404. Always include the `/YokohamaSnowlyBlog` prefix and omit trailing slashes when loading pages or writing links (see `src/config/site.ts`).
- `bun check` (astro check) and `bun build` both pass cleanly. `bun build` also runs `astro-pure check` and Pagefind indexing.
- `bun lint` currently reports pre-existing errors in `src/` (unused vars, `no-explicit-any`, etc.); these are existing repo issues, not an environment problem.
- Content lives in `src/content/{blog,thoughts,docs}` and follows the schema in `src/content.config.ts`. The dev server hot-reloads content edits.
