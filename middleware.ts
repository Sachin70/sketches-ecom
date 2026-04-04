import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/** Must match `AUTH_COOKIE_NAME` in `src/lib/auth-cookie.ts` (Edge bundle cannot import browser helpers). */
const AUTH_COOKIE = 'atelier_auth'

function needsAuth(pathname: string) {
  if (pathname.startsWith('/account')) return true
  if (pathname === '/checkout' || pathname.startsWith('/checkout/')) return true
  if (pathname === '/wishlist' || pathname.startsWith('/wishlist/')) return true
  return false
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (!needsAuth(pathname)) {
    return NextResponse.next()
  }

  const authed = request.cookies.get(AUTH_COOKIE)?.value === '1'
  if (!authed) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    url.search = ''
    url.searchParams.set('returnUrl', `${pathname}${request.nextUrl.search}`)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/account/:path*', '/checkout', '/checkout/:path*', '/wishlist', '/wishlist/:path*'],
}
