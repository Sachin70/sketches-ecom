'use client'

import { Button } from '@/components/ui/Button'
import { Product } from '@/types/product'

interface ProductReviewsProps {
  product: Product
}

export default function ProductReviews({ product }: ProductReviewsProps) {
  const reviewCount = Math.min(3, product.reviews)

  return (
    <div className="mt-20 border-t border-border pt-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">Customer Reviews</h3>
          <p className="text-muted-foreground">Based on {product.reviews} verified reviews</p>
        </div>
        <Button variant="outline" size="sm">Write a Review</Button>
      </div>
      <div className="space-y-6">
        {[...Array(reviewCount)].map((_, idx) => (
          <div key={idx} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">
                    {['A', 'B', 'C', 'D', 'E'][idx]}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Customer {idx + 1}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-sm ${i < 5 ? 'text-yellow-500' : 'text-muted-foreground/30'}`}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">2 days ago</span>
            </div>
            <p className="text-foreground leading-relaxed">
              "Absolutely love this design! The quality is exceptional and the files were delivered instantly. 
              Highly recommend for anyone looking for professional dress designs."
            </p>
          </div>
        ))}
        {product.reviews > 3 && (
          <Button variant="outline" className="w-full">
            View All {product.reviews} Reviews
          </Button>
        )}
      </div>
    </div>
  )
}



