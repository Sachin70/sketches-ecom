import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/types/product'

interface SimilarProductsProps {
  products: Product[]
}

export default function SimilarProducts({ products }: SimilarProductsProps) {
  return (
    <div className="mt-20 border-t border-border pt-12">
      <h3 className="text-2xl font-playfair font-bold text-foreground mb-8">You Might Also Like</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((similar) => (
          <Link key={similar.id} href={`/product/${similar.id}`}>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-muted h-72 mb-4">
                <Image
                  src={similar.images[0] || "/placeholder.svg"}
                  alt={similar.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = '/placeholder.svg'
                  }}
                />
              </div>
              <h4 className="text-lg font-playfair font-semibold text-foreground group-hover:text-primary transition-colors">
                {similar.name}
              </h4>
              <p className="text-primary font-semibold mt-2">${similar.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}



