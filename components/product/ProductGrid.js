// components/product/ProductGrid.js
'use client'

import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import { Button } from '@/components/ui/button'

export default function ProductGrid({ 
  products, 
  className = '',
  showLoadMore = false,
  onLoadMore,
  loading = false,
  emptyMessage = "No Products Found",
  emptyDescription = "We couldn't find any products matching your criteria."
}) {
  if (!products || products.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12"
      >
        <div className="text-6xl mb-4">🛍️</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          {emptyMessage}
        </h3>
        <p className="text-gray-500 max-w-md mx-auto">
          {emptyDescription}
        </p>
      </motion.div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Products Grid */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}>
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      {showLoadMore && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center pt-8"
        >
          <Button
            onClick={onLoadMore}
            disabled={loading}
            variant="outline"
            size="lg"
            className="min-w-32"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary mr-2"></div>
                Loading...
              </>
            ) : (
              'Load More Products'
            )}
          </Button>
        </motion.div>
      )}

      {/* Loading State for Additional Products */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <motion.div
              key={`skeleton-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="animate-pulse"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-square bg-gray-200"></div>
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-5 bg-gray-200 rounded w-1/3"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}