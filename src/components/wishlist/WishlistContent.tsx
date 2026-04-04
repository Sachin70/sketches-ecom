'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Heart } from 'lucide-react'
import { useAppSelector } from '@/store/hooks'
import { selectWishlistItems } from '@/store/wishlistSlice'
import WishlistGrid from './WishlistGrid'

export default function WishlistContent() {
  const items = useAppSelector(selectWishlistItems)

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-md mx-auto">
          <Heart className="mx-auto text-muted-foreground mb-6" size={64} />
          <h1 className="text-3xl font-playfair font-bold text-foreground mb-4">Your wishlist is empty</h1>
          <p className="text-muted-foreground mb-8">
            Save designs you love by tapping the heart on any product page.
          </p>
          <Link href="/shop">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Browse designs
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-playfair font-bold text-foreground mb-2">Wishlist</h1>
      <p className="text-muted-foreground mb-10">
        {items.length} saved {items.length === 1 ? 'design' : 'designs'}
      </p>
      <WishlistGrid />
    </div>
  )
}
