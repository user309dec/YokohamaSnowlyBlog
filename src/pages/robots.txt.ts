import type { APIRoute } from 'astro'

import { SITE_BASE_PATH, SITE_ORIGIN } from '../config/site'
import { combineWithBase } from '../utils/base-path'

const sitemapPath = combineWithBase(SITE_BASE_PATH, 'sitemap-index.xml')
const sitemapUrl = new URL(sitemapPath, SITE_ORIGIN).href

const robotsTxt = `
User-agent: GPTBot
User-agent: ClaudeBot
User-agent: Claude-Web

User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`.trim()

export const GET: APIRoute = () =>
  new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  })
