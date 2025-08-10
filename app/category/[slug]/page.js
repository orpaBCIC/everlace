// app/category/[slug]/page.js

import { getCategoryBySlug } from '@/data/categories'
import { getProductsByCategory } from '@/data/products'
import CategoryPageClient from '@/components/category/CategoryPageClient'

// Fix: Await params before using
export async function generateMetadata({ params }) {
  const { slug } = await params // Add await here
  const category = getCategoryBySlug(slug)

  if (!category) {
    return {
      title: 'Category Not Found - Everlace',
    }
  }

  return {
    title: `${category.name} - Everlace`,
    description: category.description,
  }
}

export default async function CategoryPage({ params }) {
  const { slug } = await params // Add await here
  const category = getCategoryBySlug(slug)

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1>Category not found</h1>
      </div>
    )
  }

  const products = getProductsByCategory(category.id)

  return (
    <CategoryPageClient 
      category={category} 
      products={products} 
    />
  )
}