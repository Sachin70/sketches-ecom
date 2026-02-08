'use client'

import { Product } from '@/types/product'
import ProductCard from './ProductCard'

interface ProductGridProps {
  products: Product[]
  viewMode?: 'grid' | 'list'
  onAddToCart?: (productId: number) => void
}

export default function ProductGrid({ products, viewMode = 'grid', onAddToCart }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">No products found.</p>
      </div>
    )
  }

  return (
    <div className={viewMode === 'grid' 
      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
      : "space-y-4"
    }>
      {products.map((product, index) => (
        <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
          <ProductCard 
            product={product} 
            viewMode={viewMode}
            onAddToCart={onAddToCart}
          />
        </div>
      ))}
    </div>
  )
}



