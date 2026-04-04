'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Product } from '@/types/product'

interface ProductImageGalleryProps {
  product: Product
}

export default function ProductImageGallery({ product }: ProductImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const currentUrl =
    product.images[selectedImageIndex] || product.images[0] || '/placeholder.svg'

  return (
    <div className="space-y-4">
      <div className="relative bg-muted rounded-lg overflow-hidden h-96 md:h-[500px]">
        <GalleryMainImage
          key={`${product.id}-${selectedImageIndex}`}
          src={currentUrl}
          alt={product.name}
        />
        {product.originalPrice && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-semibold z-10">
            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
          </div>
        )}
      </div>
      {product.images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {product.images.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedImageIndex(index)}
              className={`relative h-24 w-full rounded-lg overflow-hidden bg-muted cursor-pointer transition-all ${
                selectedImageIndex === index ? 'ring-2 ring-primary' : 'hover:opacity-75'
              }`}
            >
              <GalleryThumbImage
                src={image || '/placeholder.svg'}
                alt={`${product.name} view ${index + 1}`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function GalleryMainImage({ src, alt }: { src: string; alt: string }) {
  const [broken, setBroken] = useState(false)
  const displaySrc = broken ? '/placeholder.svg' : src
  return (
    <Image
      src={displaySrc}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority
      onError={() => setBroken(true)}
    />
  )
}

function GalleryThumbImage({ src, alt }: { src: string; alt: string }) {
  const [broken, setBroken] = useState(false)
  const displaySrc = broken ? '/placeholder.svg' : src
  return (
    <Image
      src={displaySrc}
      alt={alt}
      fill
      className="object-cover"
      sizes="25vw"
      onError={() => setBroken(true)}
    />
  )
}
