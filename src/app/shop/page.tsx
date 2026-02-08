import { Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ShopContent from '@/components/shop/ShopContent'
import { getProducts } from '@/lib/api/products'

export const revalidate = 3600 // Revalidate every hour

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ 
    category?: string
    collection?: string
    search?: string
    page?: string
  }>
}) {
  const params = await searchParams
  const category = params.category || 'all'
  const collection = params.collection || 'all'
  const search = params.search
  const currentPage = parseInt(params.page || '1')
  const itemsPerPage = 12

  // Fetch products on server
  const productsResponse = await getProducts({
    category: category !== 'all' ? category : undefined,
    collection: collection !== 'all' ? collection : undefined,
    search,
    limit: 100, // Fetch more for client-side filtering
  })

  return (
    <>
      <Header />
      <main className="bg-background">
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-foreground">Loading products...</p>
            </div>
          </div>
        }>
          <ShopContent 
            initialProducts={productsResponse.products} 
            totalProducts={productsResponse.total}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
          />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
