import { NextResponse } from 'next/server'
import type { ProductResponse } from '@/types/product'
import productsData from '../products-data'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: idParam } = await params
    const id = parseInt(idParam, 10)

    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid product ID' }, { status: 400 })
    }

    const product = productsData.find((p) => p.id === id)

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    const result: ProductResponse = { product }

    await new Promise((resolve) => setTimeout(resolve, 150))

    return NextResponse.json(result)
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }
}
