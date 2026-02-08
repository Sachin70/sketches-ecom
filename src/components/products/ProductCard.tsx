'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { ShoppingCart, CheckCircle2 } from 'lucide-react'
import { Product } from '@/types/product'
import { useAppDispatch } from '@/store/hooks'
import { addToCart } from '@/store/cartSlice'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
  viewMode?: 'grid' | 'list'
  onAddToCart?: (productId: number) => void
}

export default function ProductCard({ product, viewMode = 'grid', onAddToCart }: ProductCardProps) {
  const dispatch = useAppDispatch()
  const [addedToCart, setAddedToCart] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: product.sizes[0],
      color: product.colorOptions[0],
      quantity: 1,
    }))
    setAddedToCart(true)
    onAddToCart?.(product.id)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  if (viewMode === 'list') {
    return (
      <div className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="flex flex-col sm:flex-row gap-4 p-4">
          <Link href={`/product/${product.id}`} className="flex-shrink-0">
            <div className="relative w-full sm:w-48 h-64 sm:h-48 bg-muted rounded-lg overflow-hidden">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 192px"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = '/placeholder.svg'
                }}
              />
              {product.originalPrice && (
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </div>
              )}
            </div>
          </Link>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">
                {product.category === 'women' ? 'Women' : 'Girls'} • {product.collection}
              </p>
              <Link href={`/product/${product.id}`}>
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{product.description}</p>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-1 text-sm">
                  <span className="text-yellow-500">★</span>
                  <span className="text-foreground font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl text-primary font-bold">${product.price}</p>
                {product.originalPrice && (
                  <p className="text-sm text-muted-foreground line-through">${product.originalPrice}</p>
                )}
              </div>
              <Button
                onClick={handleAddToCart}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {addedToCart ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={16} />
                    Added!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <ShoppingCart size={16} />
                    Add to Cart
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="group">
      <Link href={`/product/${product.id}`}>
        <div className="relative overflow-hidden rounded-lg bg-muted h-80 mb-4 shadow-sm group-hover:shadow-lg transition-all duration-300">
          <Image
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = '/placeholder.svg'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {product.originalPrice && (
            <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold shadow-md">
              {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
            </div>
          )}
          {product.featured && (
            <div className="absolute top-2 left-2 bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-semibold shadow-md">
              Featured
            </div>
          )}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              onClick={handleAddToCart}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
              size="sm"
            >
              {addedToCart ? (
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  Added!
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <ShoppingCart size={16} />
                  Quick Add
                </span>
              )}
            </Button>
          </div>
        </div>
      </Link>
      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">
        {product.category === 'women' ? 'Women' : 'Girls'} • {product.collection}
      </p>
      <Link href={`/product/${product.id}`}>
        <h3 className="text-lg font-playfair font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
      </Link>
      <div className="flex justify-between items-center mb-3">
        <div>
          <p className="text-primary font-semibold">${product.price}</p>
          {product.originalPrice && (
            <p className="text-xs text-muted-foreground line-through">${product.originalPrice}</p>
          )}
        </div>
        <div className="flex items-center gap-1 text-sm">
          <span className="text-yellow-500">★</span>
          <span className="text-foreground font-medium">{product.rating}</span>
          <span className="text-muted-foreground">({product.reviews})</span>
        </div>
      </div>
      <Button
        onClick={handleAddToCart}
        variant="outline"
        className="w-full border-border text-foreground hover:bg-secondary"
        size="sm"
      >
        {addedToCart ? (
          <span className="flex items-center gap-2">
            <CheckCircle2 size={16} />
            Added to Cart!
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <ShoppingCart size={16} />
            Add to Cart
          </span>
        )}
      </Button>
    </div>
  )
}



