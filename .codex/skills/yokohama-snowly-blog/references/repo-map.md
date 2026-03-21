# Repo map

## Stack

- Astro site powered by `astro-pure`.
- Package manager and scripts are centered on Bun via `package.json` and `bun.lock`.
- Content is driven by Astro collections in `src/content.config.ts`.

## Key files and folders

### Root

- `package.json`: primary dev/build/check/lint/format commands.
- `astro.config.ts`: Astro integration setup.
- `public/`: static assets served as-is.
- `src/`: application code, pages, layouts, content, and assets.

### Content

- `src/content/blog/`: blog posts, often as either `index.mdx` inside a post folder or a single `.mdx` file.
- `src/content/thoughts/`: short-form notes with lightweight frontmatter.
- `src/content/docs/`: documentation pages used by the theme.
- `src/content.config.ts`: schema rules for `blog`, `docs`, and `thoughts` collections.

### App structure

- `src/pages/`: route entrypoints.
- `src/components/`: reusable page sections and widgets.
- `src/layouts/`: shared page/post layouts.
- `src/site.config.ts`: theme, navigation, footer, integrations, and terms cards.
- `src/config/site.ts`: canonical origin and base path.
- `src/utils/base-path.ts` and `src/utils/url.ts`: URL helpers worth reusing before creating new ones.

## Content schema notes

### Blog

Required frontmatter includes:

- `title`
- `description`
- `publishDate`

Optional but common fields include:

- `updatedDate`
- `heroImage`
- `tags`
- `language`
- `draft`
- `comment`

### Thoughts

Required frontmatter includes:

- `publishDate`

Optional fields include:

- `title`
- `updatedDate`
- `tags`
- `language`
- `draft`

## Editing guidance

- Preserve the existing content organization before introducing new directories.
- Prefer colocated post assets for posts that already use a folder with `index.mdx`.
- Use base-path-aware helpers for internal links and assets when editing config.
- Keep tag values simple and lowercase-friendly.
- Avoid changing generated or binary assets unless the task explicitly calls for it.

## Useful commands

- `bun check`
- `bun build`
- `bun lint`
- `bun format`
- `bun clean`
