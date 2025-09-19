const baseUrl = import.meta.env.BASE_URL ?? '/'

function normalizeBase(url: string) {
  if (url === '/') return '/'
  return url.endsWith('/') ? url.slice(0, -1) : url
}

export function withBase(path: string) {
  if (!path) return baseUrl
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//')) {
    return path
  }

  const [pathnameWithSearch, hash = ''] = path.split('#')
  const [pathname, search = ''] = pathnameWithSearch.split('?')

  const cleanedPath = pathname?.startsWith('/') ? pathname.slice(1) : pathname ?? ''
  const prefix = normalizeBase(baseUrl)

  let combined = prefix

  if (!cleanedPath) {
    combined = prefix === '/' ? '/' : `${prefix}/`
  } else {
    combined = prefix === '/' ? `/${cleanedPath}` : `${prefix}/${cleanedPath}`
  }

  const query = search ? `?${search}` : ''
  const hashPart = hash ? `#${hash}` : ''

  return `${combined}${query}${hashPart}`
}
