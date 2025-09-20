export const SITE_ORIGIN = 'https://user309dec.github.io'
export const SITE_BASE_PATH = '/YokohamaSnowlyBlog'

/**
 * Builds an absolute URL using the configured site origin.
 * Falls back to the incoming pathname if it cannot be resolved.
 */
export function withSiteOrigin(pathname: string) {
  try {
    return new URL(pathname, SITE_ORIGIN).toString()
  } catch {
    return pathname
  }
}
