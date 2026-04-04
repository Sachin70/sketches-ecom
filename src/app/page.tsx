import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import FeaturedCollection from '@/components/FeaturedCollection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { siteConfig } from '@/config/site'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Hand-drawn dress designs for women and girls',
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.fullName,
    description: siteConfig.description,
  },
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <Hero />
        <FeaturedCollection />
      </main>
      <Footer />
    </>
  )
}
