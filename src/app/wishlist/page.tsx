import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WishlistContent from '@/components/wishlist/WishlistContent'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: `Wishlist | ${siteConfig.fullName}`,
  description: 'Saved dress designs and favorites.',
}

export default function WishlistPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        <WishlistContent />
      </main>
      <Footer />
    </>
  )
}
