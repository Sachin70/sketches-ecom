import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface WishlistItem {
  id: number
  name: string
  price: number
  image: string
  defaultSize: string
  defaultColor: string
}

interface WishlistState {
  items: WishlistItem[]
}

const initialState: WishlistState = {
  items: [],
}

const persist = (items: WishlistItem[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('wishlist', JSON.stringify(items))
  }
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    rehydrateWishlist: (state, action: PayloadAction<WishlistItem[]>) => {
      state.items = Array.isArray(action.payload) ? action.payload : []
      persist(state.items)
    },
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      if (state.items.some((i) => i.id === action.payload.id)) return
      state.items.push(action.payload)
      persist(state.items)
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload)
      persist(state.items)
    },
    toggleWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const idx = state.items.findIndex((i) => i.id === action.payload.id)
      if (idx >= 0) {
        state.items.splice(idx, 1)
      } else {
        state.items.push(action.payload)
      }
      persist(state.items)
    },
    clearWishlist: (state) => {
      state.items = []
      persist([])
    },
  },
})

export const { rehydrateWishlist, addToWishlist, removeFromWishlist, toggleWishlist, clearWishlist } =
  wishlistSlice.actions

export const selectWishlistItems = (state: { wishlist: WishlistState }) => state.wishlist.items
export const selectWishlistCount = (state: { wishlist: WishlistState }) => state.wishlist.items.length
export const selectIsInWishlist = (id: number) => (state: { wishlist: WishlistState }) =>
  state.wishlist.items.some((i) => i.id === id)

export default wishlistSlice.reducer
