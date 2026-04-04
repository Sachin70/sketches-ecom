'use client'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { rehydrateCart } from '@/store/cartSlice'
import { rehydrateWishlist } from '@/store/wishlistSlice'
import { syncAuthCookieFromStorage } from '@/lib/auth-cookie'

/**
 * After hydration, restore cart & wishlist from localStorage so server HTML
 * (empty counts) matches the first client paint, then updates without mismatch.
 */
export function StoreRehydrator() {
  const dispatch = useDispatch()

  useEffect(() => {
    try {
      const raw = localStorage.getItem('cart')
      if (raw) {
        const parsed = JSON.parse(raw) as unknown
        if (Array.isArray(parsed)) {
          dispatch(rehydrateCart(parsed))
        }
      }
    } catch {
      console.error('Failed to rehydrate cart')
    }

    try {
      if (localStorage.getItem('authToken')) {
        const raw = localStorage.getItem('wishlist')
        if (raw) {
          const parsed = JSON.parse(raw) as unknown
          if (Array.isArray(parsed)) {
            dispatch(rehydrateWishlist(parsed))
          }
        }
      }
    } catch {
      console.error('Failed to rehydrate wishlist')
    }

    syncAuthCookieFromStorage()
  }, [dispatch])

  return null
}
