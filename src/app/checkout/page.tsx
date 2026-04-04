'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { selectCartItems, selectTotalPrice, clearCart } from '@/store/cartSlice'
import Link from 'next/link'
import { CreditCard, Lock, CheckCircle2, Wallet } from 'lucide-react'

type PaymentMethod = 'card' | 'stripe' | 'square' | 'googlepay' | 'razorpay' | 'paytm'

export default function CheckoutPage() {
  const dispatch = useAppDispatch()
  const items = useAppSelector(selectCartItems)
  const subtotal = useAppSelector(selectTotalPrice)
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod>('card')
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    phone: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  })
  const shipping = 0 // Digital products - no shipping
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing based on selected method
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsProcessing(false)
    setOrderPlaced(true)
    dispatch(clearCart())
  }

  if (items.length === 0 && !orderPlaced) {
    return (
      <>
        <Header />
        <main className="bg-background min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl font-playfair font-bold text-foreground mb-4">Your Cart is Empty</h1>
              <p className="text-muted-foreground mb-8">Please add items to your cart before checkout.</p>
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

  if (orderPlaced) {
    return (
      <>
        <Header />
        <main className="bg-background min-h-screen">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <CheckCircle2 size={40} className="text-primary" />
              </div>
              <h1 className="text-4xl font-playfair font-bold text-foreground mb-4">Order Placed Successfully!</h1>
              <p className="text-muted-foreground mb-4">
                Thank you for your purchase! Your design files have been sent to {formData.email}
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Check your email for download links. You’ll have lifetime access to your purchased designs.
              </p>
              <div className="space-y-3">
                <Link href="/shop">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                    Continue Shopping
                  </Button>
                </Link>
                <Link href="/">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-border text-foreground hover:bg-secondary">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const paymentMethods = [
    { id: 'card' as PaymentMethod, name: 'Credit/Debit Card', icon: CreditCard, description: 'Visa, Mastercard, Amex' },
    { id: 'stripe' as PaymentMethod, name: 'Stripe', icon: Wallet, description: 'Secure payment via Stripe' },
    { id: 'square' as PaymentMethod, name: 'Square', icon: Wallet, description: 'Pay with Square' },
    { id: 'googlepay' as PaymentMethod, name: 'Google Pay', icon: Wallet, description: 'Quick checkout with Google Pay' },
    { id: 'razorpay' as PaymentMethod, name: 'Razorpay', icon: Wallet, description: 'Pay with Razorpay' },
    { id: 'paytm' as PaymentMethod, name: 'Paytm', icon: Wallet, description: 'Pay with Paytm Wallet' },
  ]

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-playfair font-bold text-foreground mb-8">Checkout</h1>

          <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Information */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-2xl font-playfair font-bold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>

              {/* Delivery Information */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-2xl font-playfair font-bold text-foreground mb-6">Delivery Information</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Your design files will be delivered instantly via email after purchase. No physical shipping required.
                </p>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="grid sm:grid-cols-3 gap-4">
                    <Input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      type="text"
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      type="text"
                      name="zipCode"
                      placeholder="ZIP code"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                    <option>India</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-6">
                  <CreditCard size={20} className="text-primary" />
                  <h2 className="text-2xl font-playfair font-bold text-foreground">Payment Method</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon
                    return (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setSelectedPaymentMethod(method.id)}
                        className={`p-4 border-2 rounded-lg text-left transition-all ${
                          selectedPaymentMethod === method.id
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg ${
                            selectedPaymentMethod === method.id ? 'bg-primary text-primary-foreground' : 'bg-secondary'
                          }`}>
                            <Icon size={20} />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-foreground">{method.name}</p>
                            <p className="text-xs text-muted-foreground mt-1">{method.description}</p>
                          </div>
                          {selectedPaymentMethod === method.id && (
                            <CheckCircle2 className="text-primary" size={20} />
                          )}
                        </div>
                      </button>
                    )
                  })}
                </div>

                {/* Payment Details based on selected method */}
                {selectedPaymentMethod === 'card' && (
                  <div className="space-y-4 pt-4 border-t border-border">
                    <Input
                      type="text"
                      name="cardNumber"
                      placeholder="Card number"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                      maxLength={19}
                    />
                    <Input
                      type="text"
                      name="cardName"
                      placeholder="Name on card"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        required
                        maxLength={5}
                      />
                      <Input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                        maxLength={4}
                      />
                    </div>
                  </div>
                )}

                {(selectedPaymentMethod === 'stripe' || selectedPaymentMethod === 'square') && (
                  <div className="pt-4 border-t border-border">
                    <div className="bg-secondary rounded-lg p-4 text-center">
                      <p className="text-sm text-muted-foreground mb-2">
                        You will be redirected to {selectedPaymentMethod === 'stripe' ? 'Stripe' : 'Square'} secure payment page
                      </p>
                      <div className="flex items-center justify-center gap-2 text-primary">
                        <Lock size={16} />
                        <span className="text-xs font-medium">Secure Payment Gateway</span>
                      </div>
                    </div>
                  </div>
                )}

                {(selectedPaymentMethod === 'googlepay' || selectedPaymentMethod === 'razorpay' || selectedPaymentMethod === 'paytm') && (
                  <div className="pt-4 border-t border-border">
                    <div className="bg-secondary rounded-lg p-4 text-center">
                      <p className="text-sm text-muted-foreground mb-2">
                        {selectedPaymentMethod === 'googlepay' && 'Click "Place Order" to proceed with Google Pay'}
                        {selectedPaymentMethod === 'razorpay' && 'Click "Place Order" to proceed with Razorpay'}
                        {selectedPaymentMethod === 'paytm' && 'Click "Place Order" to proceed with Paytm'}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-primary">
                        <Lock size={16} />
                        <span className="text-xs font-medium">Secure Payment Gateway</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                <h2 className="text-2xl font-playfair font-bold text-foreground mb-6">Order Summary</h2>

                {/* Items */}
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {items.map((item, index) => (
                    <div
                      key={`${item.id}-${item.size}-${item.color}-${item.customization ?? ''}-${index}`}
                      className="flex gap-3"
                    >
                      <div className="relative w-16 h-16 bg-muted rounded-lg overflow-hidden shrink-0">
                        <Image
                          src={item.image || '/placeholder.svg'}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.size} • {item.color}</p>
                        {item.customization && (
                          <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">{item.customization}</p>
                        )}
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-semibold text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 space-y-3 mb-6">
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
                      <span className="text-muted-foreground">Design files delivered via email immediately after purchase</span>
                    </p>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between text-lg font-bold text-foreground">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-base bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    'Processing...'
                  ) : (
                    <>
                      <Lock size={16} className="mr-2" />
                      Place Order
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  🔒 Your payment information is secure and encrypted
                </p>

                {/* Payment Method Icons */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-3 text-center">Accepted Payment Methods</p>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <div className="px-2 py-1 bg-secondary rounded text-xs font-medium text-foreground">Visa</div>
                    <div className="px-2 py-1 bg-secondary rounded text-xs font-medium text-foreground">Mastercard</div>
                    <div className="px-2 py-1 bg-secondary rounded text-xs font-medium text-foreground">Stripe</div>
                    <div className="px-2 py-1 bg-secondary rounded text-xs font-medium text-foreground">Square</div>
                    <div className="px-2 py-1 bg-secondary rounded text-xs font-medium text-foreground">GPay</div>
                    <div className="px-2 py-1 bg-secondary rounded text-xs font-medium text-foreground">Razorpay</div>
                    <div className="px-2 py-1 bg-secondary rounded text-xs font-medium text-foreground">Paytm</div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
