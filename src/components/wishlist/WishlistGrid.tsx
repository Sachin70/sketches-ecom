'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { ShoppingCart, Trash2 } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addToCart } from '@/store/cartSlice'
import { removeFromWishlist, selectWishlistItems } from '@/store/wishlistSlice'

export default function WishlistGrid({ className }: { className?: string }) {
  const dispatch = useAppDispatch()
  const items = useAppSelector(selectWishlistItems)

  const handleAddToCart = (item: (typeof items)[0]) => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        size: item.defaultSize,
        color: item.defaultColor,
        quantity: 1,
      })
    )
  }

  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6', className)}>
      {items.map((item) => (
        <div
          key={item.id}
          className="group border border-border rounded-lg overflow-hidden bg-card hover:shadow-lg transition-shadow"
        >
          <Link href={`/product/${item.id}`} className="block">
            <div className="relative h-64 bg-muted">
              <Image
                src={item.image || '/placeholder.svg'}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </Link>
          <div className="p-4">
            <Link href={`/product/${item.id}`}>
              <h3 className="font-semibold text-foreground mb-2 hover:text-primary transition-colors">
                {item.name}
              </h3>
            </Link>
            <p className="text-primary font-bold mb-4">${item.price}</p>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => handleAddToCart(item)}
                className="flex-1 min-w-[120px] bg-primary hover:bg-primary/90 text-primary-foreground"
                size="sm"
              >
                <ShoppingCart size={16} className="mr-2" />
                Add to cart
              </Button>
              <Link
                href={`/customize/${item.id}`}
                className="inline-flex h-9 items-center justify-center rounded-md border border-border bg-background px-3 text-sm font-medium hover:bg-secondary"
              >
                Customize
              </Link>
              <Button
                variant="outline"
                size="sm"
                onClick={() => dispatch(removeFromWishlist(item.id))}
                className="text-destructive hover:bg-destructive/10"
                aria-label="Remove from wishlist"
              >
                <Trash2 size={16} />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
