'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Product } from '@/types/product'
import { useAppDispatch } from '@/store/hooks'
import { addToCart } from '@/store/cartSlice'
import { CheckCircle2, Palette, Sparkles } from 'lucide-react'

interface CustomizeProductProps {
  product: Product
}

const FABRIC_OPTIONS = [
  'No preference',
  'Silk',
  'Satin',
  'Cotton',
  'Linen',
  'Velvet',
  'Chiffon',
  'Tulle',
  'Jersey',
  'Organza',
]

function buildCustomizationSummary(
  fabric: string,
  embellishments: string[],
  notes: string
): string | undefined {
  const parts: string[] = []
  if (fabric && fabric !== 'No preference') parts.push(`Fabric: ${fabric}`)
  if (embellishments.length) parts.push(`Embellishments: ${embellishments.join(', ')}`)
  const trimmed = notes.trim()
  if (trimmed) parts.push(`Notes: ${trimmed}`)
  return parts.length ? parts.join(' • ') : undefined
}

const EMBELLISHMENT_OPTIONS = [
  'Beading',
  'Embroidery',
  'Lace',
  'Sequins',
  'Crystals',
  'Pearls',
  'Appliqué',
  'Ribbon',
]

export default function CustomizeProduct({ product }: CustomizeProductProps) {
  const dispatch = useAppDispatch()
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [selectedColor, setSelectedColor] = useState(product.colorOptions[0])
  const [quantity, setQuantity] = useState(1)
  const [fabricPreference, setFabricPreference] = useState('No preference')
  const [embellishments, setEmbellishments] = useState<string[]>([])
  const [personalizationNotes, setPersonalizationNotes] = useState('')
  const [addedToCart, setAddedToCart] = useState(false)

  const toggleEmbellishment = (option: string) => {
    setEmbellishments((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    )
  }

  const handleAddToCart = () => {
    const customization = buildCustomizationSummary(
      fabricPreference,
      embellishments,
      personalizationNotes
    )
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: selectedSize,
        color: selectedColor,
        quantity,
        customization,
      })
    )
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 3000)
  }

  const handleBuyNow = () => {
    const customization = buildCustomizationSummary(
      fabricPreference,
      embellishments,
      personalizationNotes
    )
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: selectedSize,
        color: selectedColor,
        quantity,
        customization,
      })
    )
    window.location.href = '/cart'
  }

  return (
    <div className="grid md:grid-cols-2 gap-12 pb-16">
      {/* Product Image */}
      <div className="relative aspect-[3/4] bg-muted rounded-xl overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-md text-sm font-semibold flex items-center gap-2">
          <Palette size={16} />
          Customize Your Design
        </div>
      </div>

      {/* Customization Options */}
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-2">
            Customize: {product.name}
          </h1>
          <p className="text-muted-foreground">
            Personalize this design to match your vision. Your selections will be included with your order.
          </p>
        </div>

        {/* Size */}
        <div>
          <label className="block font-semibold text-foreground mb-3">Size</label>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2.5 text-sm font-medium rounded-lg border-2 transition-all ${
                  selectedSize === size
                    ? 'border-primary bg-primary/10 text-foreground'
                    : 'border-border text-foreground hover:border-primary/50'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color */}
        <div>
          <label className="block font-semibold text-foreground mb-3">Color</label>
          <div className="flex flex-wrap gap-2">
            {product.colorOptions.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-4 py-2.5 text-sm font-medium rounded-lg border-2 transition-all ${
                  selectedColor === color
                    ? 'border-primary bg-primary/10 text-foreground'
                    : 'border-border text-foreground hover:border-primary/50'
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* Fabric Preference */}
        <div>
          <label htmlFor="fabric" className="block font-semibold text-foreground mb-3">
            Fabric Preference
          </label>
          <select
            id="fabric"
            value={fabricPreference}
            onChange={(e) => setFabricPreference(e.target.value)}
            className="w-full h-11 rounded-md border border-border bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {FABRIC_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Embellishments */}
        <div>
          <label className="block font-semibold text-foreground mb-3 flex items-center gap-2">
            <Sparkles size={18} className="text-primary" />
            Embellishments (optional)
          </label>
          <div className="flex flex-wrap gap-2">
            {EMBELLISHMENT_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => toggleEmbellishment(opt)}
                className={`px-4 py-2 text-sm font-medium rounded-lg border-2 transition-all ${
                  embellishments.includes(opt)
                    ? 'border-primary bg-primary/10 text-foreground'
                    : 'border-border text-foreground hover:border-primary/50'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          {embellishments.length > 0 && (
            <p className="text-sm text-muted-foreground mt-2">
              Selected: {embellishments.join(', ')}
            </p>
          )}
        </div>

        {/* Personalization Notes */}
        <div>
          <label htmlFor="notes" className="block font-semibold text-foreground mb-3">
            Personalization Notes (optional)
          </label>
          <textarea
            id="notes"
            value={personalizationNotes}
            onChange={(e) => setPersonalizationNotes(e.target.value)}
            placeholder="Add monogram, special measurements, style preferences, or any other custom requests..."
            rows={4}
            className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block font-semibold text-foreground mb-3">Quantity</label>
          <div className="flex items-center gap-3 w-32">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="shrink-0 w-10 h-10 p-0"
            >
              −
            </Button>
            <span className="flex-1 text-center font-semibold text-foreground">{quantity}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setQuantity(quantity + 1)}
              className="shrink-0 w-10 h-10 p-0"
            >
              +
            </Button>
          </div>
        </div>

        {/* Price & Actions */}
        <div className="pt-6 border-t border-border space-y-4">
          <div className="flex items-baseline gap-3">
            <p className="text-3xl font-bold text-primary">${product.price}</p>
            {product.originalPrice && (
              <p className="text-muted-foreground line-through">${product.originalPrice}</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              className="flex-1 h-12 text-base bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={handleAddToCart}
            >
              {addedToCart ? (
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={20} /> Added to Cart!
                </span>
              ) : (
                'Add to Cart'
              )}
            </Button>
            <Button
              variant="outline"
              className="flex-1 h-12 text-base border-border text-foreground hover:bg-secondary"
              onClick={handleBuyNow}
            >
              Buy Now
            </Button>
          </div>

          <Link href={`/product/${product.id}`} className="block text-center text-sm text-primary hover:underline">
            View product without customization →
          </Link>
        </div>
      </div>
    </div>
  )
}
