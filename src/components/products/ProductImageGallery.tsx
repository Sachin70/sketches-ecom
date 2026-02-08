'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Product } from '@/types/product'

interface ProductImageGalleryProps {
  product: Product
}

export default function ProductImageGallery({ product }: ProductImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  return (
    <div className="space-y-4">
      <div className="relative bg-muted rounded-lg overflow-hidden h-96 md:h-[500px]">
        <Image
          src={product.images[selectedImageIndex] || product.images[0] || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = '/placeholder.svg'
          }}
        />
        {product.originalPrice && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-semibold">
            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
          </div>
        )}
      </div>
      {product.images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {product.images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`bg-muted rounded-lg overflow-hidden h-24 cursor-pointer transition-all ${
                selectedImageIndex === index ? 'ring-2 ring-primary' : 'hover:opacity-75'
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${product.name} view ${index + 1}`}
                fill
                className="object-cover"
                sizes="25vw"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = '/placeholder.svg'
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}



