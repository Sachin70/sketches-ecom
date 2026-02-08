import Hero from '@/components/Hero'
import FeaturedCollection from '@/components/FeaturedCollection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export const revalidate = 3600 // Revalidate every hour

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
