import { Product } from '@/types/product'

interface ProductDetailsProps {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="mt-20 border-t border-border pt-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">Design Details</h3>
          <div className="space-y-4">
            <div className="border-b border-border pb-4">
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">Design Style</p>
              <p className="text-foreground">{product.details.designStyle}</p>
            </div>
            <div className="border-b border-border pb-4">
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">Complexity</p>
              <p className="text-foreground capitalize">{product.details.complexity}</p>
            </div>
            <div className="border-b border-border pb-4">
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">Estimated Production Time</p>
              <p className="text-foreground">{product.details.estimatedTime}</p>
            </div>
            <div className="border-b border-border pb-4">
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">File Formats</p>
              <p className="text-foreground">{product.details.fileFormats.join(', ')}</p>
            </div>
            <div className="border-b border-border pb-4">
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">Resolution</p>
              <p className="text-foreground">{product.details.resolution}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">License</p>
              <p className="text-foreground">{product.details.license}</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">About the Designer</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-foreground text-lg">{product.designer.name}</p>
                <p className="text-muted-foreground text-sm mt-1">{product.designer.bio}</p>
              </div>
              <p className="text-foreground leading-relaxed">{product.designer.experience}</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">What Makes This Special</h3>
            <ul className="space-y-3">
              {product.highlights.map((highlight: string, idx: number) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-primary font-bold mt-1 shrink-0">•</span>
                  <span className="text-foreground leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}



