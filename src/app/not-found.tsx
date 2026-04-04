import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">404</p>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Page not found
          </h1>
          <p className="text-muted-foreground mb-8">
            The page you are looking for does not exist or may have been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                Back to home
              </Button>
            </Link>
            <Link href="/shop">
              <Button variant="outline" className="w-full sm:w-auto border-border">
                Browse shop
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
