'use client'

import Link from 'next/link'
import { ShoppingCart, Menu, X, Search, User, Heart, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { useAppSelector } from '@/store/hooks'
import { selectTotalItems } from '@/store/cartSlice'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [accountMenuOpen, setAccountMenuOpen] = useState(false)
  const totalItems = useAppSelector(selectTotalItems)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <header className="bg-background/98 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-md">
      {/* Top Bar */}
      <div className="bg-primary/5 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-xs">
            <div className="flex items-center gap-4 text-muted-foreground">
              <span>Free shipping on orders over $150</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Instant digital delivery</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                Help
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <span className="text-primary-foreground font-bold text-xl">A</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-playfair font-bold text-foreground block">Atelier</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Design Studio</span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full relative">
              <Input
                type="text"
                placeholder="Search designs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            </form>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/shop" className="text-foreground hover:text-primary transition-colors text-sm font-medium relative group">
              Shop
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <div className="relative group">
              <Link href="/shop" className="text-foreground hover:text-primary transition-colors text-sm font-medium flex items-center gap-1">
                Collections
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-2">
                  <Link href="/shop?collection=evening" className="block px-3 py-2 text-sm text-foreground hover:bg-secondary rounded-md">Evening Wear</Link>
                  <Link href="/shop?collection=casual" className="block px-3 py-2 text-sm text-foreground hover:bg-secondary rounded-md">Casual</Link>
                  <Link href="/shop?collection=formal" className="block px-3 py-2 text-sm text-foreground hover:bg-secondary rounded-md">Formal</Link>
                  <Link href="/shop?collection=bridal" className="block px-3 py-2 text-sm text-foreground hover:bg-secondary rounded-md">Bridal</Link>
                </div>
              </div>
            </div>
            <Link href="/custom" className="text-foreground hover:text-primary transition-colors text-sm font-medium relative group">
              Custom
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors text-sm font-medium relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Search - Mobile */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* Wishlist */}
            <Link href="/wishlist" className="hidden sm:block relative p-2 text-foreground hover:text-primary transition-colors">
              <Heart size={20} />
            </Link>

            {/* Account */}
            <div className="relative">
              <button
                onClick={() => setAccountMenuOpen(!accountMenuOpen)}
                className="p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Account"
              >
                <User size={20} />
              </button>
              {accountMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-50">
                  <div className="p-2">
                    {typeof window !== 'undefined' && localStorage.getItem('authToken') ? (
                      <>
                        <Link href="/account" className="block px-3 py-2 text-sm text-foreground hover:bg-secondary rounded-md">My Account</Link>
                        <Link href="/account?tab=orders" className="block px-3 py-2 text-sm text-foreground hover:bg-secondary rounded-md">My Orders</Link>
                        <Link href="/account?tab=wishlist" className="block px-3 py-2 text-sm text-foreground hover:bg-secondary rounded-md">Wishlist</Link>
                        <div className="border-t border-border my-1"></div>
                        <button 
                          onClick={() => {
                            localStorage.removeItem('authToken')
                            localStorage.removeItem('userEmail')
                            localStorage.removeItem('userName')
                            window.location.href = '/login'
                          }}
                          className="w-full text-left px-3 py-2 text-sm text-foreground hover:bg-secondary rounded-md"
                        >
                          Sign Out
                        </button>
                      </>
                    ) : (
                      <>
                        <Link href="/login" className="block px-3 py-2 text-sm text-foreground hover:bg-secondary rounded-md">Sign In</Link>
                        <Link href="/register" className="block px-3 py-2 text-sm text-foreground hover:bg-secondary rounded-md">Sign Up</Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Cart */}
            <Link href="/cart" className="relative p-2 text-foreground hover:text-primary transition-colors">
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs flex items-center justify-center rounded-full font-semibold animate-scale-in shadow-md">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="lg:hidden pb-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search designs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4"
                autoFocus
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden pb-4 space-y-1 border-t border-border pt-4 mt-4">
            <Link 
              href="/shop" 
              className="block px-4 py-3 text-foreground hover:bg-secondary rounded-lg text-base font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              href="/shop?collection=evening" 
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg text-sm ml-4"
              onClick={() => setMenuOpen(false)}
            >
              Evening Wear
            </Link>
            <Link 
              href="/shop?collection=casual" 
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg text-sm ml-4"
              onClick={() => setMenuOpen(false)}
            >
              Casual
            </Link>
            <Link 
              href="/shop?collection=formal" 
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg text-sm ml-4"
              onClick={() => setMenuOpen(false)}
            >
              Formal
            </Link>
            <Link 
              href="/custom" 
              className="block px-4 py-3 text-foreground hover:bg-secondary rounded-lg text-base font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Custom Orders
            </Link>
            <Link 
              href="/about" 
              className="block px-4 py-3 text-foreground hover:bg-secondary rounded-lg text-base font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block px-4 py-3 text-foreground hover:bg-secondary rounded-lg text-base font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="border-t border-border my-2"></div>
            <Link 
              href="/wishlist" 
              className="block px-4 py-3 text-foreground hover:bg-secondary rounded-lg text-base font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Wishlist
            </Link>
            <Link 
              href="/account" 
              className="block px-4 py-3 text-foreground hover:bg-secondary rounded-lg text-base font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              My Account
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
