import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductImageGallery from '@/components/products/ProductImageGallery'
import ProductInfo from '@/components/products/ProductInfo'
import ProductDetails from '@/components/products/ProductDetails'
import ProductReviews from '@/components/products/ProductReviews'
import SimilarProducts from '@/components/products/SimilarProducts'
import { getProductById, getSimilarProducts } from '@/lib/api/products'
import Link from 'next/link'

export const revalidate = 3600 // Revalidate every hour

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const productId = parseInt(id)

  if (isNaN(productId)) {
    notFound()
  }

  let productResponse
  let similarProducts: Awaited<ReturnType<typeof getSimilarProducts>> = []

  try {
    productResponse = await getProductById(productId)
    similarProducts = await getSimilarProducts(productId)
  } catch (error) {
    console.error('Failed to load product:', error)
    notFound()
  }

  const product = productResponse.product

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-foreground transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Images */}
            <ProductImageGallery product={product} />

            {/* Product Info */}
            <ProductInfo product={product} />
          </div>

          {/* Product Details */}
          <ProductDetails product={product} />

          {/* Reviews Section */}
          <ProductReviews product={product} />

          {/* Similar Products */}
          {similarProducts.length > 0 && (
            <SimilarProducts products={similarProducts} />
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
