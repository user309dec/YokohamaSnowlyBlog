const EXTERNAL_LINK_REGEX = /^(?:[a-z][a-z0-9+.-]*:)?\/\//i

export function normalizeBasePath(base: string | undefined | null) {
  if (!base) return '/'
  if (base === '/') return '/'
  const trimmed = base.trim()
  const leading = trimmed.startsWith('/') ? trimmed : `/${trimmed}`
  return leading.endsWith('/') ? leading.slice(0, -1) : leading
}

export function combineWithBase(base: string | undefined | null, path: string) {
  const prefix = normalizeBasePath(base)
  if (!path) {
    return prefix === '/' ? '/' : `${prefix}/`
  }

  if (EXTERNAL_LINK_REGEX.test(path)) {
    return path
  }

  const [pathnameWithSearch, hash = ''] = path.split('#')
  const [pathname, search = ''] = (pathnameWithSearch ?? '').split('?')
  const cleanedPath = pathname?.startsWith('/') ? pathname.slice(1) : pathname ?? ''

  const combined = cleanedPath
    ? prefix === '/'
      ? `/${cleanedPath}`
      : `${prefix}/${cleanedPath}`
    : prefix === '/'
      ? '/'
      : `${prefix}/`

  const query = search ? `?${search}` : ''
  const hashPart = hash ? `#${hash}` : ''

  return `${combined}${query}${hashPart}`
}

export function isExternalLink(path: string) {
  return EXTERNAL_LINK_REGEX.test(path)
}
