import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getProductById } from '@/lib/api/products'
import CustomizeProduct from '@/components/products/CustomizeProduct'
import Link from 'next/link'

export const revalidate = 3600

export default async function CustomizeProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const productId = parseInt(id)

  if (isNaN(productId)) {
    notFound()
  }

  let product
  try {
    const res = await getProductById(productId)
    product = res.product
  } catch {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-foreground transition-colors">
              Shop
            </Link>
            <span>/</span>
            <Link href={`/product/${product.id}`} className="hover:text-foreground transition-colors">
              {product.name}
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Customize</span>
          </div>

          <CustomizeProduct product={product} />
        </div>
      </main>
      <Footer />
    </>
  )
}
