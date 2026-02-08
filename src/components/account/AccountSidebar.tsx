'use client'

import { User, Package, Heart, Settings, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

type AccountTab = 'profile' | 'orders' | 'wishlist' | 'settings'

interface AccountSidebarProps {
  activeTab: AccountTab
  onTabChange: (tab: AccountTab) => void
}

export default function AccountSidebar({ activeTab, onTabChange }: AccountSidebarProps) {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userName')
    router.push('/login')
  }

  const menuItems = [
    { id: 'profile' as AccountTab, label: 'Profile', icon: User },
    { id: 'orders' as AccountTab, label: 'Orders', icon: Package },
    { id: 'wishlist' as AccountTab, label: 'Wishlist', icon: Heart },
    { id: 'settings' as AccountTab, label: 'Settings', icon: Settings },
  ]

  return (
    <aside className="bg-card border border-border rounded-lg p-4 lg:p-6 h-fit">
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-secondary'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          )
        })}
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-destructive/10 hover:text-destructive transition-colors mt-4"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </nav>
    </aside>
  )
}

