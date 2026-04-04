'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Heart } from 'lucide-react'
import { useAppSelector } from '@/store/hooks'
import { selectWishlistItems } from '@/store/wishlistSlice'
import WishlistGrid from '@/components/wishlist/WishlistGrid'

export default function AccountWishlist() {
  const items = useAppSelector(selectWishlistItems)

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h2 className="text-2xl font-playfair font-bold text-foreground mb-6">My Wishlist</h2>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="mx-auto text-muted-foreground mb-4" size={48} />
          <p className="text-muted-foreground mb-4">Your wishlist is empty.</p>
          <Link href="/shop">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Start Shopping</Button>
          </Link>
        </div>
      ) : (
        <WishlistGrid />
      )}
    </div>
  )
}
