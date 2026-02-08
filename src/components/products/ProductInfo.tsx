'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Heart, Share2, Download, FileText, Sparkles, Shield } from 'lucide-react'
import { Product } from '@/types/product'
import { useAppDispatch } from '@/store/hooks'
import { addToCart } from '@/store/cartSlice'
import { CheckCircle2 } from 'lucide-react'

interface ProductInfoProps {
  product: Product
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const dispatch = useAppDispatch()
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [selectedColor, setSelectedColor] = useState(product.colorOptions[0])
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      dispatch(addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: selectedSize,
        color: selectedColor,
        quantity: quantity,
      }))
      setAddedToCart(true)
      setTimeout(() => setAddedToCart(false), 3000)
    }
  }

  const handleBuyNow = () => {
    if (selectedSize && selectedColor) {
      dispatch(addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: selectedSize,
        color: selectedColor,
        quantity: quantity,
      }))
      window.location.href = '/cart'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <p className="text-sm uppercase tracking-widest text-primary font-semibold">
                {product.category === 'women' ? 'Women' : 'Girls'}
              </p>
              <span className="text-muted-foreground">•</span>
              <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold capitalize">
                {product.collection}
              </p>
              {product.featured && (
                <>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded">Featured</span>
                </>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-3">{product.name}</h1>
            
            {/* Rating & Reviews */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-lg ${i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-muted-foreground/30'}`}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="font-semibold text-foreground">{product.rating}</span>
              </div>
              <span className="text-muted-foreground text-sm">({product.reviews} reviews)</span>
              {product.inStock && (
                <span className="text-sm text-primary font-semibold bg-primary/10 px-2 py-1 rounded">In Stock</span>
              )}
            </div>
          </div>
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`p-3 rounded-lg transition-all ${
              isWishlisted ? 'bg-accent text-accent-foreground shadow-md' : 'bg-secondary text-foreground hover:bg-accent/20'
            }`}
            aria-label="Add to wishlist"
          >
            <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-border">
          <p className="text-4xl font-bold text-primary">${product.price}</p>
          {product.originalPrice && (
            <>
              <p className="text-muted-foreground line-through text-xl">${product.originalPrice}</p>
              <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded font-semibold">
                Save ${(product.originalPrice - product.price).toFixed(0)}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="bg-secondary rounded-lg p-4 mb-6">
        <p className="text-foreground leading-relaxed mb-4">{product.description}</p>
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-sm">
            <FileText size={16} className="text-primary" />
            <div>
              <p className="text-muted-foreground text-xs">Design Type</p>
              <p className="text-foreground font-medium capitalize">{product.designType}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Download size={16} className="text-primary" />
            <div>
              <p className="text-muted-foreground text-xs">File Formats</p>
              <p className="text-foreground font-medium">{product.format.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Size Selection */}
      <div className="space-y-3">
        <label className="block font-semibold text-foreground">Size</label>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {product.sizes.map((size: string) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`py-3 px-4 text-sm font-medium rounded-lg border-2 transition-all ${
                selectedSize === size
                  ? 'border-primary bg-primary/10 text-foreground'
                  : 'border-border text-foreground hover:border-primary/50'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">Size guide available</p>
      </div>

      {/* Color Selection */}
      <div className="space-y-3">
        <label className="block font-semibold text-foreground">Color</label>
        <div className="flex flex-wrap gap-3">
          {product.colorOptions.map((color: string) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`px-4 py-2 text-sm font-medium rounded-lg border-2 transition-all ${
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

      {/* Quantity */}
      <div className="space-y-3">
        <label className="block font-semibold text-foreground">Quantity</label>
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

      {/* Add to Cart */}
      <div className="space-y-3 pt-6 border-t border-border">
        <Button
          className="w-full h-12 text-base bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          onClick={handleAddToCart}
          disabled={!selectedSize || !selectedColor}
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
          className="w-full h-12 text-base border-border text-foreground hover:bg-secondary transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          onClick={handleBuyNow}
          disabled={!selectedSize || !selectedColor}
        >
          Buy Now
        </Button>
      </div>

      {/* Shipping & Returns Info */}
      <div className="space-y-4 pt-6 border-t border-border">
        <div className="flex gap-4">
          <Download className="text-primary shrink-0 mt-1" size={20} />
          <div>
            <p className="font-semibold text-foreground">Instant Digital Delivery</p>
            <p className="text-sm text-muted-foreground">Receive design files immediately after purchase.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Sparkles className="text-primary shrink-0 mt-1" size={20} />
          <div>
            <p className="font-semibold text-foreground">Commercial License Included</p>
            <p className="text-sm text-muted-foreground">Use designs for personal and commercial projects.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Shield className="text-primary shrink-0 mt-1" size={20} />
          <div>
            <p className="font-semibold text-foreground">Secure Payment</p>
            <p className="text-sm text-muted-foreground">100% secure checkout with SSL encryption.</p>
          </div>
        </div>
      </div>

      {/* Share */}
      <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium">
        <Share2 size={16} />
        Share this design
      </button>
    </div>
  )
}

