'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Mail, CheckCircle2 } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <>
        <Header />
        <main className="bg-background min-h-screen">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="bg-card border border-border rounded-lg p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <CheckCircle2 className="text-primary" size={32} />
              </div>
              <h1 className="text-2xl font-playfair font-bold text-foreground mb-4">Check Your Email</h1>
              <p className="text-muted-foreground mb-6">
                We’ve sent a password reset link to <span className="font-semibold text-foreground">{email}</span>
              </p>
              <Link href="/login">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Back to Login
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-playfair font-bold text-foreground mb-2">Forgot Password?</h1>
              <p className="text-muted-foreground">
                Enter your email address and we’ll send you a link to reset your password.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Reset Link'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link href="/login" className="text-sm text-primary hover:underline">
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}



