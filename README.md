# Welcome to my blog

English | [简体中文](./README-zh-CN.md)

## Thoughts column

Create quick updates by adding `.md` or `.mdx` files inside `src/content/thoughts`.

Each file needs frontmatter like:

```
---
publishDate: 2025-03-20T08:30:00+09:00
tags:
  - tag-one
  - tag-two
---
Your short note goes here.
```

The list renders at `/thoughts`, allows filtering by tag, and falls back to the latest `publishDate` order.
