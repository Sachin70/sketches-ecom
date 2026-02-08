'use client'

import { Button } from '@/components/ui/Button'
import { Grid3x3, List, Filter } from 'lucide-react'

interface ShopToolbarProps {
  viewMode: 'grid' | 'list'
  sortBy: string
  totalShown: number
  totalProducts: number
  mobileFiltersOpen: boolean
  onViewModeChange: (mode: 'grid' | 'list') => void
  onSortChange: (sort: string) => void
  onToggleFilters: () => void
}

export default function ShopToolbar({
  viewMode,
  sortBy,
  totalShown,
  totalProducts,
  mobileFiltersOpen,
  onViewModeChange,
  onSortChange,
  onToggleFilters,
}: ShopToolbarProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-border">
      <div className="flex items-center gap-4">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{totalShown}</span> of <span className="font-semibold text-foreground">{totalProducts}</span> designs
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        {/* Mobile Filters Toggle */}
        <Button
          variant="outline"
          className="lg:hidden"
          onClick={onToggleFilters}
        >
          <Filter size={16} className="mr-2" />
          {mobileFiltersOpen ? 'Hide Filters' : 'Filters'}
        </Button>

        {/* View Mode Toggle */}
        <div className="hidden sm:flex items-center gap-1 border border-border rounded-md p-1 bg-secondary">
          <button
            onClick={() => onViewModeChange('grid')}
            className={`p-2 rounded transition-colors ${
              viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-secondary'
            }`}
            aria-label="Grid view"
          >
            <Grid3x3 size={18} />
          </button>
          <button
            onClick={() => onViewModeChange('list')}
            className={`p-2 rounded transition-colors ${
              viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-secondary'
            }`}
            aria-label="List view"
          >
            <List size={18} />
          </button>
        </div>

        {/* Sort Dropdown */}
        <select
          value={sortBy}
          onChange={e => onSortChange(e.target.value)}
          className="px-4 py-2 bg-secondary border border-border rounded-md text-foreground text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="featured">Featured</option>
          <option value="newest">Newest First</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>
    </div>
  )
}



