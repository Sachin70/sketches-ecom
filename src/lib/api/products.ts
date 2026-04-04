import type { Product, ProductListResponse, ProductResponse } from '@/types/product'
import productsData from '@/app/api/products/products-data'

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function getProducts(params?: {
  category?: string
  collection?: string
  search?: string
  page?: number
  limit?: number
  featured?: boolean
}): Promise<ProductListResponse> {
  await delay(100)

  let filtered = [...productsData]

  if (params?.category && params.category !== 'all') {
    filtered = filtered.filter((p) => p.category === params.category)
  }
  if (params?.collection && params.collection !== 'all') {
    filtered = filtered.filter((p) => p.collection === params.collection)
  }
  if (params?.featured !== undefined) {
    filtered = filtered.filter((p) => p.featured === params.featured)
  }
  if (params?.search) {
    const q = params.search.toLowerCase()
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    )
  }

  const page = params?.page ?? 1
  const limit = params?.limit ?? 50
  const start = (page - 1) * limit
  const products = filtered.slice(start, start + limit)

  return {
    products,
    total: filtered.length,
    page,
    limit,
  }
}

export async function getProductById(id: number): Promise<ProductResponse> {
  await delay(80)

  const product = productsData.find((p) => p.id === id)
  if (!product) {
    throw new Error('Product not found')
  }
  return { product }
}

export async function getSimilarProducts(productId: number): Promise<Product[]> {
  await delay(80)

  const product = productsData.find((p) => p.id === productId)
  if (!product?.similarProducts?.length) return []

  const similar = productsData.filter(
    (p) => product.similarProducts.includes(p.id) && p.id !== productId
  )
  return similar
}

export async function getFeaturedProducts(limit = 4): Promise<Product[]> {
  const res = await getProducts({ featured: true, limit })
  return res.products.slice(0, limit)
}
