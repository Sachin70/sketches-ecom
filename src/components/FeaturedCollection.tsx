import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { getFeaturedProducts } from '@/lib/api/products'
import ProductCard from '@/components/products/ProductCard'

export const revalidate = 3600 // Revalidate every hour

export default async function FeaturedCollection() {
  const featuredDesigns = await getFeaturedProducts(4)

  if (featuredDesigns.length === 0) {
    return null
  }

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Collection</p>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4 text-pretty">Featured Designs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Curated selections from our latest collection, each piece designed with meticulous attention to detail and artisanal craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDesigns.map((design, index) => (
            <div key={design.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard product={design} viewMode="grid" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/shop">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View All Designs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
