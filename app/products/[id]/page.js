// app/products/[id]/page.js
import { notFound } from 'next/navigation'
import { getProductById, getProductsByCategory } from '@/data/products'
import ProductPageClient from './ProductPageClient'

export async function generateMetadata({ params }) {
  const { id } = await params // Fix: await params
  const product = getProductById(id)
  
  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.title} - Everlace`,
    description: product.shortDescription || product.description,
    openGraph: {
      title: product.title,
      description: product.shortDescription || product.description,
      images: product.images?.map(img => ({ url: img })) || [],
    },
  }
}

export default async function ProductPage({ params }) {
  const { id } = await params // Fix: await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  // Get related products from same category
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4)

  return (
    <ProductPageClient 
      product={product} 
      relatedProducts={relatedProducts} 
    />
  )
}