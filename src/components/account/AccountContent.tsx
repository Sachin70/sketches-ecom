'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import AccountSidebar from './AccountSidebar'
import AccountProfile from './AccountProfile'
import AccountOrders from './AccountOrders'
import AccountWishlist from './AccountWishlist'
import AccountSettings from './AccountSettings'

type AccountTab = 'profile' | 'orders' | 'wishlist' | 'settings'

export default function AccountContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<AccountTab>('profile')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('authToken')
    if (!token) {
      router.push('/login')
    } else {
      setIsAuthenticated(true)
    }

    // Check for tab in URL
    const tab = searchParams.get('tab')
    if (tab && ['profile', 'orders', 'wishlist', 'settings'].includes(tab)) {
      setActiveTab(tab as AccountTab)
    }
  }, [router, searchParams])

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-playfair font-bold text-foreground mb-8">My Account</h1>
      
      <div className="grid lg:grid-cols-4 gap-8">
        <AccountSidebar activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="lg:col-span-3">
          {activeTab === 'profile' && <AccountProfile />}
          {activeTab === 'orders' && <AccountOrders />}
          {activeTab === 'wishlist' && <AccountWishlist />}
          {activeTab === 'settings' && <AccountSettings />}
        </div>
      </div>
    </div>
  )
}



