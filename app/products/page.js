// app/products/page.js
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import ProductGrid from '@/components/product/ProductGrid'
import { products, getFeaturedProducts, getProductsByCategory, searchProducts } from '@/data/products'
import { categories } from '@/data/categories'

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('featured')

  const handleCategoryFilter = (categorySlug) => {
    setActiveCategory(categorySlug)
    
    if (categorySlug === 'all') {
      setFilteredProducts(products)
    } else if (categorySlug === 'featured') {
      setFilteredProducts(getFeaturedProducts())
    } else {
      setFilteredProducts(getProductsByCategory(categorySlug))
    }
    
    setSearchQuery('')
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
    if (query.trim()) {
      setFilteredProducts(searchProducts(query))
      setActiveCategory('search')
    } else {
      setFilteredProducts(products)
      setActiveCategory('all')
    }
  }

  const handleSort = (sortType) => {
    setSortBy(sortType)
    let sorted = [...filteredProducts]
    
    switch (sortType) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0))
        break
      case 'featured':
        sorted.sort((a, b) => {
          if (a.featured && !b.featured) return -1
          if (!a.featured && b.featured) return 1
          return 0
        })
        break
      default:
        break
    }
    
    setFilteredProducts(sorted)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Products</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our complete collection of handcrafted jewelry, 
              wedding accessories, and baby products.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative max-w-md mx-auto"
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
            />
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-64 space-y-6"
          >
            {/* Categories */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Categories
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryFilter('all')}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeCategory === 'all'
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    All Products ({products.length})
                  </button>
                  <button
                    onClick={() => handleCategoryFilter('featured')}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeCategory === 'featured'
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    ⭐ Featured ({getFeaturedProducts().length})
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryFilter(category.slug)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        activeCategory === category.slug
                          ? 'bg-primary text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {category.icon} {category.name} ({getProductsByCategory(category.slug).length})
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sort Options */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Sort By</h3>
                <div className="space-y-2">
                  {[
                    { key: 'featured', label: 'Featured First' },
                    { key: 'price-low', label: 'Price: Low to High' },
                    { key: 'price-high', label: 'Price: High to Low' },
                    { key: 'rating', label: 'Highest Rated' },
                  ].map((option) => (
                    <button
                      key={option.key}
                      onClick={() => handleSort(option.key)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
                        sortBy === option.key
                          ? 'bg-primary text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-between mb-6"
            >
              <div>
                <h2 className="text-xl font-semibold">
                  {activeCategory === 'all' && 'All Products'}
                  {activeCategory === 'featured' && 'Featured Products'}
                  {activeCategory === 'search' && `Search Results for "${searchQuery}"`}
                  {categories.find(c => c.slug === activeCategory)?.name}
                </h2>
                <p className="text-gray-600 text-sm">
                  {filteredProducts.length} products found
                </p>
              </div>

              {/* Mobile Sort */}
              <div className="lg:hidden">
                <select
                  value={sortBy}
                  onChange={(e) => handleSort(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </motion.div>

            {/* Active Filters */}
            {(activeCategory !== 'all' || searchQuery) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-2 mb-6"
              >
                {activeCategory !== 'all' && activeCategory !== 'search' && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    {activeCategory === 'featured' ? '⭐ Featured' : categories.find(c => c.slug === activeCategory)?.name}
                    <button
                      onClick={() => handleCategoryFilter('all')}
                      className="ml-1 text-xs hover:text-red-500"
                    >
                      ✕
                    </button>
                  </Badge>
                )}
                {searchQuery && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Search: "{searchQuery}"
                    <button
                      onClick={() => handleSearch('')}
                      className="ml-1 text-xs hover:text-red-500"
                    >
                      ✕
                    </button>
                  </Badge>
                )}
              </motion.div>
            )}

            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ProductGrid products={filteredProducts} />
            </motion.div>

            {/* WhatsApp CTA */}
            {filteredProducts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center mt-12 p-8 bg-green-50 rounded-xl border border-green-200"
              >
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  Need Help Choosing?
                </h3>
                <p className="text-green-700 mb-4">
                  Our team is ready to help you find the perfect product. 
                  Get personalized recommendations via WhatsApp!
                </p>
                <Button
                  variant="whatsapp"
                  onClick={() => {
                    const message = "Hi Everlace! I need help choosing the right product from your collection."
                    const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
                    window.open(whatsappUrl, '_blank')
                  }}
                >
                  💬 Get Help via WhatsApp
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}