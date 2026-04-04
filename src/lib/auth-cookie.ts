/** Cookie mirrored from localStorage auth so middleware can protect routes. */

export const AUTH_EVENT = 'atelier-auth-change'

function notifyAuthListeners(): void {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(AUTH_EVENT))
  }
}

export const AUTH_COOKIE_NAME = 'atelier_auth'
const AUTH_COOKIE_VALUE = '1'
const MAX_AGE_SEC = 60 * 60 * 24 * 30

export function setAuthCookie(): void {
  if (typeof document === 'undefined') return
  document.cookie = `${AUTH_COOKIE_NAME}=${AUTH_COOKIE_VALUE}; path=/; max-age=${MAX_AGE_SEC}; SameSite=Lax`
  notifyAuthListeners()
}

export function clearAuthCookie(): void {
  if (typeof document === 'undefined') return
  document.cookie = `${AUTH_COOKIE_NAME}=; path=/; max-age=0`
  notifyAuthListeners()
}

/** Call on app load: align cookie with localStorage session. */
export function syncAuthCookieFromStorage(): void {
  if (typeof window === 'undefined') return
  if (localStorage.getItem('authToken')) {
    setAuthCookie()
  } else {
    clearAuthCookie()
  }
}

export function safeReturnUrl(url: string | null): string {
  if (!url || !url.startsWith('/') || url.startsWith('//')) return '/account'
  return url
}
