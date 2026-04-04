'use client'

import { useSyncExternalStore } from 'react'
import { AUTH_EVENT } from '@/lib/auth-cookie'

function subscribe(onChange: () => void) {
  if (typeof window === 'undefined') return () => {}
  const handler = () => onChange()
  window.addEventListener('storage', handler)
  window.addEventListener(AUTH_EVENT, handler)
  return () => {
    window.removeEventListener('storage', handler)
    window.removeEventListener(AUTH_EVENT, handler)
  }
}

function getSnapshot(): boolean {
  if (typeof window === 'undefined') return false
  return !!localStorage.getItem('authToken')
}

function getServerSnapshot(): boolean {
  return false
}

/** Same value on server and first hydration frame; updates after mount without hydration mismatch. */
export function useAuthFromStorage(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
