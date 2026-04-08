import { Sparkles, Palette, Truck, Shield } from 'lucide-react'

const reasons = [
  {
    icon: Palette,
    title: 'Handcrafted Designs',
    description: 'Every design is meticulously hand-drawn and created by talented artisans with years of experience.',
  },
  {
    icon: Sparkles,
    title: 'Premium Quality',
    description: 'We use only the finest fabrics and materials to ensure each piece is luxurious and durable.',
  },
  {
    icon: Truck,
    title: 'Fast Shipping',
    description: 'Worldwide shipping with careful packaging. Track your order every step of the way.',
  },
  {
    icon: Shield,
    title: 'Guaranteed Satisfaction',
    description: '30-day returns and comprehensive customer support to ensure your complete satisfaction.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Why Choose StitchoralLab</p>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4 text-pretty">
            The StitchoralLab Difference
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
