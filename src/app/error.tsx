'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <Header />
      <main className="bg-background min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
            Something went wrong
          </h1>
          <p className="text-muted-foreground mb-8">
            We could not load this page. Please try again or return to the home page.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => reset()}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Try again
            </Button>
            <Link href="/" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full border-border">
                Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
