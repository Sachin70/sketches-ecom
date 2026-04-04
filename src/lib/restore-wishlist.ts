import type { AppDispatch } from '@/store/store'
import { rehydrateWishlist } from '@/store/wishlistSlice'

/** After login/register, load saved wishlist from localStorage into Redux. */
export function restoreWishlistFromLocalStorage(dispatch: AppDispatch): void {
  try {
    const raw = localStorage.getItem('wishlist')
    if (!raw) return
    const parsed = JSON.parse(raw) as unknown
    if (Array.isArray(parsed)) dispatch(rehydrateWishlist(parsed))
  } catch {
    // ignore invalid JSON
  }
}
