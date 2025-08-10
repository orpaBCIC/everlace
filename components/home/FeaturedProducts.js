// components/home/FeaturedProducts.js
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/product/ProductCard'

export default function FeaturedProducts({ products }) {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured <span className="gradient-text">Products</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover our most popular handcrafted jewelry and accessories, 
          loved by customers across Bangladesh.
        </p>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center"
      >
        <Link href="/products">
          <Button
            size="lg"
            className="group hover:shadow-lg transition-all duration-200"
          >
            View All Products
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </Link>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200"
      >
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">500+</div>
          <div className="text-gray-600 text-sm">Happy Customers</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">100+</div>
          <div className="text-gray-600 text-sm">Unique Products</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">4.9</div>
          <div className="text-gray-600 text-sm">Average Rating</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">24h</div>
          <div className="text-gray-600 text-sm">Fast Delivery</div>
        </div>
      </motion.div>
    </div>
  )
}