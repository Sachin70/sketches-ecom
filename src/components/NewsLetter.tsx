import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export default function Newsletter() {
  return (
    <section className="bg-background py-20 md:py-28 border-t border-border">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Stay Connected</p>
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6 text-pretty">
          Discover New Collections
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Subscribe to receive exclusive previews, design stories, and special offers directly to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
          />
          <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Subscribe
          </Button>
        </form>

        <p className="text-xs text-muted-foreground mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
