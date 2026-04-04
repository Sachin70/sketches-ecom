'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const FALLBACK_HERO =
  'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1000&fit=crop'

export default function Hero() {
  const [heroSrc, setHeroSrc] = useState('/elegant-dress-design-sketch.jpg')

  return (
    <section className="relative bg-gradient-to-br from-background via-background to-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-primary font-semibold">Artisanal Fashion</p>
              <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground leading-tight text-pretty">
                Hand-Drawn Elegance
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Each design is a masterpiece, sketched with passion and crafted with precision. Discover the artistry behind every dress.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                  Explore Collection
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-border text-foreground hover:bg-secondary">
                  Learn Our Story
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative h-96 md:h-full min-h-96 bg-gradient-to-br from-muted to-muted/50 rounded-lg overflow-hidden flex items-center justify-center animate-fade-in">
            <Image
              src={heroSrc}
              alt="Featured dress design"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              onError={() => setHeroSrc(FALLBACK_HERO)}
            />
          </div>
        </div>
      </div>

      <div className="absolute top-10 right-10 w-20 h-20 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
    </section>
  )
}
