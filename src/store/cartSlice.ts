import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  size: string
  color: string
  quantity: number
  /** Optional: fabric, embellishments, notes from customize flow */
  customization?: string
}

interface CartState {
  items: CartItem[]
}

function lineKey(item: Pick<CartItem, 'id' | 'size' | 'color' | 'customization'>) {
  return `${item.id}|${item.size}|${item.color}|${item.customization ?? ''}`
}

/** Empty on both server and first client paint — rehydrate from localStorage after mount (StoreRehydrator). */
const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    rehydrateCart: (state, action: PayloadAction<CartItem[]>) => {
      state.items = Array.isArray(action.payload) ? action.payload : []
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state.items))
      }
    },
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'> & { quantity?: number }>) => {
      const item = action.payload
      const key = lineKey(item)
      const existingIndex = state.items.findIndex((i) => lineKey(i) === key)

      if (existingIndex >= 0) {
        state.items[existingIndex].quantity += item.quantity || 1
      } else {
        state.items.push({ ...item, quantity: item.quantity || 1 })
      }

      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state.items))
      }
    },
    removeFromCart: (
      state,
      action: PayloadAction<{ id: number; size: string; color: string; customization?: string }>
    ) => {
      const key = lineKey(action.payload)
      state.items = state.items.filter((i) => lineKey(i) !== key)

      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state.items))
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; size: string; color: string; customization?: string; quantity: number }>
    ) => {
      const { quantity, ...rest } = action.payload
      const key = lineKey(rest)

      if (quantity <= 0) {
        state.items = state.items.filter((i) => lineKey(i) !== key)
      } else {
        const item = state.items.find((i) => lineKey(i) === key)
        if (item) {
          item.quantity = quantity
        }
      }

      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state.items))
      }
    },
    clearCart: (state) => {
      state.items = []

      if (typeof window !== 'undefined') {
        localStorage.removeItem('cart')
      }
    },
  },
})

export const { rehydrateCart, addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions

export const selectCartItems = (state: { cart: CartState }) => state.cart.items

export const selectTotalPrice = (state: { cart: CartState }) => {
  return state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0)
}

export const selectTotalItems = (state: { cart: CartState }) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0)
}

export default cartSlice.reducer
