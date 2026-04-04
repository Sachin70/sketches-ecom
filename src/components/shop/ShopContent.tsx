'use client'

import { useState, useMemo } from 'react'
import { Button } from '@/components/ui/Button'
import { Product } from '@/types/product'
import ProductGrid from '@/components/products/ProductGrid'
import ProductFilters from '@/components/products/ProductFilters'
import ShopToolbar from './ShopToolbar'
import ShopHero from './ShopHero'
import Pagination from './Pagination'

interface ShopContentProps {
  initialProducts: Product[]
  totalProducts: number
  currentPage?: number
  itemsPerPage?: number
}

export default function ShopContent({ 
  initialProducts, 
  totalProducts,
  currentPage = 1,
  itemsPerPage = 12
}: ShopContentProps) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPrice, setSelectedPrice] = useState('all')
  const [selectedCollection, setSelectedCollection] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [, setAddedToCart] = useState<Record<number, boolean>>({})

  const filteredAndSorted = useMemo(() => {
    let filtered = [...initialProducts]

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }

    if (selectedCollection !== 'all') {
      filtered = filtered.filter(p => p.collection === selectedCollection)
    }

    if (selectedPrice !== 'all') {
      const [min, max] = selectedPrice.split('-').map(Number)
      filtered = filtered.filter(p => p.price >= min && (max ? p.price <= max : true))
    }

    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating)
    } else if (sortBy === 'newest') {
      filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    } else if (sortBy === 'featured') {
      filtered.sort((a, b) => (b.featured ? 1 : -1) - (a.featured ? 1 : -1))
    }

    return filtered
  }, [initialProducts, selectedCategory, selectedCollection, selectedPrice, sortBy])

  const handleAddToCart = (productId: number) => {
    setAddedToCart(prev => ({ ...prev, [productId]: true }))
    setTimeout(() => {
      setAddedToCart(prev => {
        const newState = { ...prev }
        delete newState[productId]
        return newState
      })
    }, 2000)
  }

  const totalPages = Math.ceil(filteredAndSorted.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedProducts = filteredAndSorted.slice(startIndex, endIndex)

  return (
    <>
      <ShopHero totalShown={filteredAndSorted.length} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <ProductFilters
            products={initialProducts}
            selectedCategory={selectedCategory}
            selectedCollection={selectedCollection}
            selectedPrice={selectedPrice}
            onCategoryChange={setSelectedCategory}
            onCollectionChange={setSelectedCollection}
            onPriceChange={setSelectedPrice}
            onClearFilters={() => {
              setSelectedCategory('all')
              setSelectedCollection('all')
              setSelectedPrice('all')
            }}
            mobileFiltersOpen={mobileFiltersOpen}
            onCloseMobileFilters={() => setMobileFiltersOpen(false)}
          />

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <ShopToolbar
              viewMode={viewMode}
              sortBy={sortBy}
              totalShown={filteredAndSorted.length}
              totalProducts={totalProducts}
              mobileFiltersOpen={mobileFiltersOpen}
              onViewModeChange={setViewMode}
              onSortChange={setSortBy}
              onToggleFilters={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            />

            {/* Products Grid/List */}
            {paginatedProducts.length > 0 ? (
              <>
                <ProductGrid 
                  products={paginatedProducts} 
                  viewMode={viewMode}
                  onAddToCart={handleAddToCart}
                />
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  totalItems={filteredAndSorted.length}
                  itemsPerPage={itemsPerPage}
                />
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No designs match your filters.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory('all')
                    setSelectedCollection('all')
                    setSelectedPrice('all')
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
