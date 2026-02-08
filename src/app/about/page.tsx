import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { Palette, Users, Award, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-secondary to-background py-16 md:py-24 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-6">
              About Atelier
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are passionate designers dedicated to creating beautiful, hand-drawn dress designs that inspire creativity and elegance.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-playfair font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Atelier was born from a simple yet powerful vision: to make professional, artisanal dress designs accessible to everyone. 
                Our team of talented designers brings years of experience from luxury fashion houses, ready-to-wear brands, and independent 
                ateliers around the world.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Each design in our collection is meticulously hand-drawn, capturing the essence of timeless elegance while embracing 
                modern sensibilities. We believe that great design should be both beautiful and practical, which is why every design 
                includes complete technical specifications, fabric recommendations, and production guidance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're a fashion designer, a small boutique owner, or someone who simply appreciates beautiful craftsmanship, 
                we're here to provide you with the tools and inspiration to bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-secondary py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-playfair font-bold text-foreground text-center mb-16">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Palette className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Artistry</h3>
                <p className="text-muted-foreground">
                  Every design is a work of art, hand-crafted with attention to detail and passion for excellence.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Accessibility</h3>
                <p className="text-muted-foreground">
                  Professional designs made accessible to designers, makers, and fashion enthusiasts everywhere.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Award className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Quality</h3>
                <p className="text-muted-foreground">
                  High-resolution files, complete specifications, and commercial licenses with every purchase.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Heart className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Passion</h3>
                <p className="text-muted-foreground">
                  Driven by our love for fashion design and commitment to helping others create beautiful garments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">
              Ready to Start Creating?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our collection of hand-drawn dress designs and find the perfect inspiration for your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Browse Designs
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}




