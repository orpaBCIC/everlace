// components/product/ProductDetails.js
'use client'

import { motion } from 'framer-motion'
import { Star, Heart, Share2, Shield, Truck, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export default function ProductDetails({ product }) {
  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Category & Badges */}
      <div className="flex items-center gap-2 flex-wrap">
        <Badge variant="outline" className="capitalize">
          {product.category}
        </Badge>
        {product.featured && (
          <Badge variant="default">⭐ Featured</Badge>
        )}
        {product.trending && (
          <Badge variant="secondary">🔥 Trending</Badge>
        )}
      </div>

      {/* Title */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {product.title}
        </h1>
        {product.shortDescription && (
          <p className="text-gray-600 text-lg">
            {product.shortDescription}
          </p>
        )}
      </div>

      {/* Rating */}
      {product.rating && (
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-5 w-5",
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                )}
              />
            ))}
          </div>
          <span className="text-gray-600">
            {product.rating} ({product.reviewCount} reviews)
          </span>
        </div>
      )}

      {/* Price */}
      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-green-600">
            ৳{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <>
              <span className="text-xl text-gray-500 line-through">
                ৳{product.originalPrice.toLocaleString()}
              </span>
              <Badge variant="destructive" className="text-sm">
                Save {discountPercent}%
              </Badge>
            </>
          )}
        </div>
        <p className="text-sm text-gray-600">
          💳 Cash on Delivery Available • 🚚 Free Delivery in Dhaka
        </p>
      </div>

      {/* Stock Status */}
      <div className="flex items-center gap-2">
        <div className={cn(
          "w-3 h-3 rounded-full",
          product.inStock ? "bg-green-500" : "bg-red-500"
        )} />
        <span className={cn(
          "font-medium",
          product.inStock ? "text-green-600" : "text-red-600"
        )}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      {/* Description */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Description</h3>
        <p className="text-gray-700 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Features */}
      {product.features && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Key Features</h3>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Product Details */}
      <Card className="bg-gray-50">
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-4">Product Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {product.material && (
              <div>
                <span className="font-medium text-gray-600">Material:</span>
                <span className="ml-2">{product.material}</span>
              </div>
            )}
            {product.dimensions && (
              <div>
                <span className="font-medium text-gray-600">Dimensions:</span>
                <span className="ml-2">{product.dimensions}</span>
              </div>
            )}
            {product.weight && (
              <div>
                <span className="font-medium text-gray-600">Weight:</span>
                <span className="ml-2">{product.weight}</span>
              </div>
            )}
            {product.ageRange && (
              <div>
                <span className="font-medium text-gray-600">Age Range:</span>
                <span className="ml-2">{product.ageRange}</span>
              </div>
            )}
            {product.chainLength && (
              <div>
                <span className="font-medium text-gray-600">Chain Length:</span>
                <span className="ml-2">{product.chainLength}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4">
        <Button variant="outline" size="icon" className="flex-shrink-0">
          <Heart className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" className="flex-shrink-0">
          <Share2 className="h-4 w-4" />
        </Button>
      </div>

      {/* Guarantees */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t">
        <div className="flex items-center gap-3 text-sm">
          <Shield className="h-5 w-5 text-primary" />
          <div>
            <div className="font-medium">Quality Guarantee</div>
            <div className="text-gray-600">Handcrafted with care</div>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Truck className="h-5 w-5 text-primary" />
          <div>
            <div className="font-medium">Fast Delivery</div>
            <div className="text-gray-600">Same day in Dhaka</div>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Clock className="h-5 w-5 text-primary" />
          <div>
            <div className="font-medium">Quick Response</div>
            <div className="text-gray-600">WhatsApp within 30min</div>
          </div>
        </div>
      </div>

      {/* Tags */}
      {product.tags && product.tags.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium text-gray-700">Tags:</h4>
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs capitalize cursor-pointer hover:bg-primary hover:text-white transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}