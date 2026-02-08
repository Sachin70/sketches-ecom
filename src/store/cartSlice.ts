import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  size: string
  color: string
  quantity: number
}

interface CartState {
  items: CartItem[]
}

// Load initial state from localStorage
const loadCartFromStorage = (): CartItem[] => {
  if (typeof window === 'undefined') return []
  
  try {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      return JSON.parse(savedCart)
    }
  } catch (e) {
    console.error('Failed to load cart from localStorage', e)
  }
  return []
}

const initialState: CartState = {
  items: loadCartFromStorage(),
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'> & { quantity?: number }>) => {
      const item = action.payload
      const existingIndex = state.items.findIndex(
        i => i.id === item.id && i.size === item.size && i.color === item.color
      )

      if (existingIndex >= 0) {
        // Update quantity if item already exists
        state.items[existingIndex].quantity += item.quantity || 1
      } else {
        // Add new item
        state.items.push({ ...item, quantity: item.quantity || 1 })
      }

      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state.items))
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: number; size: string; color: string }>) => {
      const { id, size, color } = action.payload
      state.items = state.items.filter(
        item => !(item.id === id && item.size === size && item.color === color)
      )

      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state.items))
      }
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; size: string; color: string; quantity: number }>) => {
      const { id, size, color, quantity } = action.payload

      if (quantity <= 0) {
        // Remove item if quantity is 0 or less
        state.items = state.items.filter(
          item => !(item.id === id && item.size === size && item.color === color)
        )
      } else {
        const item = state.items.find(
          i => i.id === id && i.size === size && i.color === color
        )
        if (item) {
          item.quantity = quantity
        }
      }

      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state.items))
      }
    },
    clearCart: (state) => {
      state.items = []

      // Clear localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('cart')
      }
    },
  },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions

// Selectors
export const selectCartItems = (state: { cart: CartState }) => state.cart.items

export const selectTotalPrice = (state: { cart: CartState }) => {
  return state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0)
}

export const selectTotalItems = (state: { cart: CartState }) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0)
}

export default cartSlice.reducer




