'use client'

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

  const tabParam = searchParams.get('tab')
  const activeTab: AccountTab = (tabParam && ['profile', 'orders', 'wishlist', 'settings'].includes(tabParam)
    ? tabParam
    : 'profile') as AccountTab

  const handleTabChange = (tab: AccountTab) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('tab', tab)
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-playfair font-bold text-foreground mb-8">My Account</h1>
      
      <div className="grid lg:grid-cols-4 gap-8">
        <AccountSidebar activeTab={activeTab} onTabChange={handleTabChange} />
        
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



