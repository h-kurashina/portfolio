/** Resolve local assets and navigation beneath Vite's deployment base. */
export function sitePath(path: string = '/') {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

export function currentPath() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const pathname = window.location.pathname
  const local = base && (pathname === base || pathname.startsWith(`${base}/`))
    ? pathname.slice(base.length) : pathname
  return local.replace(/\/$/, '') || '/'
}
