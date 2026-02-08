interface ShopHeroProps {
  totalShown: number
}

export default function ShopHero({ totalShown }: ShopHeroProps) {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-secondary to-background py-16 md:py-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-3 text-pretty">
              Our Design Collection
            </h1>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Browse our entire collection of hand-drawn dress designs. Each design includes high-resolution files, technical specifications, and commercial license for production.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">{totalShown} designs</span>
          </div>
        </div>
      </div>
    </section>
  )
}



