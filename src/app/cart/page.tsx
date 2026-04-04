'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { selectCartItems, selectTotalPrice, removeFromCart, updateQuantity, clearCart } from '@/store/cartSlice'
import Link from 'next/link'
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useAuthFromStorage } from '@/lib/useAuthFromStorage'

export default function CartPage() {
  const dispatch = useAppDispatch()
  const isAuthenticated = useAuthFromStorage()
  const items = useAppSelector(selectCartItems)
  const subtotal = useAppSelector(selectTotalPrice)
  const [isProcessing, setIsProcessing] = useState(false)

  if (items.length === 0) {
    return (
      <>
        <Header />
        <main className="bg-background min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <ShoppingBag size={64} className="mx-auto text-muted-foreground mb-6" />
              <h1 className="text-4xl font-playfair font-bold text-foreground mb-4">Your Cart is Empty</h1>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Looks like you haven’t added anything to your cart yet. Start shopping to fill it up!
              </p>
              <Link href="/shop">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const shipping = 0 // Digital products - no shipping
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-bold text-foreground mb-2">Shopping Cart</h1>
            <p className="text-muted-foreground">{items.length} {items.length === 1 ? 'item' : 'items'} in your cart</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => {
                const line = {
                  id: item.id,
                  size: item.size,
                  color: item.color,
                  customization: item.customization,
                }
                return (
                <div
                  key={`${item.id}-${item.size}-${item.color}-${item.customization ?? ''}-${index}`}
                  className="bg-card border border-border rounded-lg p-6 flex flex-col sm:flex-row gap-6"
                >
                  <div className="relative w-full sm:w-32 h-48 sm:h-32 bg-muted rounded-lg overflow-hidden shrink-0">
                    <Image
                      src={item.image || '/placeholder.svg'}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <Link href={`/product/${item.id}`}>
                        <h3 className="text-xl font-playfair font-semibold text-foreground hover:text-primary transition-colors mb-2">
                          {item.name}
                        </h3>
                      </Link>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-2">
                        <span>Size: <span className="text-foreground font-medium">{item.size}</span></span>
                        <span>Color: <span className="text-foreground font-medium">{item.color}</span></span>
                      </div>
                      {item.customization && (
                        <p className="text-xs text-muted-foreground border-l-2 border-primary/40 pl-3 py-1 mb-4 max-w-xl">
                          {item.customization}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() =>
                            dispatch(updateQuantity({ ...line, quantity: item.quantity - 1 }))
                          }
                          className="w-8 h-8 flex items-center justify-center border border-border rounded-lg hover:bg-secondary transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-12 text-center font-semibold text-foreground">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() =>
                            dispatch(updateQuantity({ ...line, quantity: item.quantity + 1 }))
                          }
                          className="w-8 h-8 flex items-center justify-center border border-border rounded-lg hover:bg-secondary transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <p className="text-lg font-semibold text-primary">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          type="button"
                          onClick={() => dispatch(removeFromCart(line))}
                          className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                )
              })}

              {/* Clear Cart */}
              <div className="pt-4">
                <Button
                  variant="outline"
                  onClick={() => dispatch(clearCart())}
                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                >
                  Clear Cart
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                <h2 className="text-2xl font-playfair font-bold text-foreground mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-foreground">
                    <span>Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Tax</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3 mb-3">
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">✓ Instant Digital Delivery</span>
                      <br />
                      <span className="text-muted-foreground">Design files delivered via email immediately</span>
                    </p>
                  </div>
                  <div className="border-t border-border pt-4 flex justify-between text-lg font-bold text-foreground">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    href={
                      isAuthenticated
                        ? '/checkout'
                        : `/login?returnUrl=${encodeURIComponent('/checkout')}`
                    }
                  >
                    <Button
                      className="w-full h-12 text-base bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => setIsProcessing(true)}
                      disabled={isProcessing}
                    >
                      {isProcessing ? 'Processing...' : 'Proceed to Checkout'}
                    </Button>
                  </Link>
                  <Link href="/shop">
                    <Button variant="outline" className="w-full h-12 text-base border-border text-foreground hover:bg-secondary">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>

                {/* Security Badge */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    🔒 Secure checkout with SSL encryption
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

