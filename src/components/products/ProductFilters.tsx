'use client'

import { Button } from '@/components/ui/Button'
import { X } from 'lucide-react'
import { Product } from '@/types/product'

interface ProductFiltersProps {
  products: Product[]
  selectedCategory: string
  selectedCollection: string
  selectedPrice: string
  onCategoryChange: (category: string) => void
  onCollectionChange: (collection: string) => void
  onPriceChange: (price: string) => void
  onClearFilters: () => void
  mobileFiltersOpen: boolean
  onCloseMobileFilters: () => void
}

export default function ProductFilters({
  products,
  selectedCategory,
  selectedCollection,
  selectedPrice,
  onCategoryChange,
  onCollectionChange,
  onPriceChange,
  onClearFilters,
  mobileFiltersOpen,
  onCloseMobileFilters,
}: ProductFiltersProps) {
  const womenCount = products.filter(p => p.category === 'women').length
  const girlsCount = products.filter(p => p.category === 'girls').length

  return (
    <aside className={`${mobileFiltersOpen ? 'block fixed inset-0 z-50 bg-background overflow-y-auto lg:relative lg:inset-auto lg:z-auto' : 'hidden'} lg:block lg:col-span-1`}>
      <div className="lg:sticky lg:top-24 p-6 lg:p-0">
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <h2 className="text-xl font-playfair font-bold text-foreground">Filters</h2>
          <button
            onClick={onCloseMobileFilters}
            className="p-2 hover:bg-secondary rounded-lg"
          >
            <X size={20} />
          </button>
        </div>
        <div className="space-y-8">
          {/* Category Filter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-base">Category</h3>
            <div className="space-y-3">
              {[
                { value: 'all', label: 'All Designs', count: products.length },
                { value: 'women', label: 'Women', count: womenCount },
                { value: 'girls', label: 'Girls', count: girlsCount },
              ].map(cat => (
                <label key={cat.value} className="flex items-center justify-between gap-3 cursor-pointer group p-2 rounded-lg hover:bg-secondary transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="category"
                      value={cat.value}
                      checked={selectedCategory === cat.value}
                      onChange={e => onCategoryChange(e.target.value)}
                      className="w-4 h-4 border-2 border-primary rounded-full cursor-pointer"
                    />
                    <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                      {cat.label}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">({cat.count})</span>
                </label>
              ))}
            </div>
          </div>

          {/* Collection Filter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-base">Collection</h3>
            <div className="space-y-3">
              {[
                { value: 'all', label: 'All Collections' },
                { value: 'evening', label: 'Evening Wear' },
                { value: 'casual', label: 'Casual' },
                { value: 'formal', label: 'Formal' },
                { value: 'bridal', label: 'Bridal' },
                { value: 'contemporary', label: 'Contemporary' },
              ].map(collection => (
                <label key={collection.value} className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-secondary transition-colors">
                  <input
                    type="radio"
                    name="collection"
                    value={collection.value}
                    checked={selectedCollection === collection.value}
                    onChange={e => onCollectionChange(e.target.value)}
                    className="w-4 h-4 border-2 border-primary rounded-full cursor-pointer"
                  />
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                    {collection.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-base">Price Range</h3>
            <div className="space-y-3">
              {[
                { value: 'all', label: 'All Prices' },
                { value: '0-249', label: 'Under $250' },
                { value: '250-279', label: '$250 - $279' },
                { value: '280-349', label: '$280 - $349' },
                { value: '350-500', label: '$350 and Above' },
              ].map(price => (
                <label key={price.value} className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-secondary transition-colors">
                  <input
                    type="radio"
                    name="price"
                    value={price.value}
                    checked={selectedPrice === price.value}
                    onChange={e => onPriceChange(e.target.value)}
                    className="w-4 h-4 border-2 border-primary rounded-full cursor-pointer"
                  />
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                    {price.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          <Button
            variant="outline"
            className="w-full"
            onClick={onClearFilters}
          >
            Clear All Filters
          </Button>
        </div>
      </div>
    </aside>
  )
}



