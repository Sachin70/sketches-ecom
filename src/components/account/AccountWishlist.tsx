'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Heart, ShoppingCart, Trash2 } from 'lucide-react'
import { useAppDispatch } from '@/store/hooks'
import { addToCart } from '@/store/cartSlice'

// Mock wishlist data
const mockWishlist = [
  {
    id: 1,
    name: 'Evening Elegance Gown Design',
    price: 299,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop',
  },
  {
    id: 3,
    name: 'Modern Minimalist Dress Design',
    price: 269,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop',
  },
]

export default function AccountWishlist() {
  const dispatch = useAppDispatch()

  const handleAddToCart = (product: typeof mockWishlist[0]) => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: 'M',
      color: 'Black',
      quantity: 1,
    }))
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h2 className="text-2xl font-playfair font-bold text-foreground mb-6">My Wishlist</h2>
      
      {mockWishlist.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="mx-auto text-muted-foreground mb-4" size={48} />
          <p className="text-muted-foreground mb-4">Your wishlist is empty.</p>
          <Link href="/shop">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockWishlist.map((item) => (
            <div key={item.id} className="group border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <Link href={`/product/${item.id}`}>
                <div className="relative h-64 bg-muted">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
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
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleAddToCart(item)}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="sm"
                  >
                    <ShoppingCart size={16} className="mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}



