// components/product/ProductCard.js
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, Star, Eye, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export default function ProductCard({ product, className }) {
  const [isLiked, setIsLiked] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleWhatsAppOrder = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    const message = `Hi! I'm interested in:\n\n📿 ${product.title}\n💰 ৳${product.price}\n🔗 ${window.location.origin}/products/${product.id}\n\nPlease share more details!`
    const whatsappUrl = `https://wa.me/8801712345678?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleWishlist = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsLiked(!isLiked)
    // Add to wishlist logic here
  }

  const handleQuickView = (e) => {
    e.preventDefault()
    e.stopPropagation()
    // Quick view modal logic here
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className={cn('group', className)}
    >
      <Link href={`/products/${product.id}`}>
        <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-gray-100">
            {/* Badges */}
            <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
              {product.featured && (
                <Badge className="text-xs bg-blue-500 hover:bg-blue-600">
                  ⭐ Featured
                </Badge>
              )}
              {product.trending && (
                <Badge variant="secondary" className="text-xs">
                  🔥 Trending
                </Badge>
              )}
              {discountPercent > 0 && (
                <Badge variant="destructive" className="text-xs">
                  -{discountPercent}%
                </Badge>
              )}
            </div>

            {/* Actions */}
            <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Button
                variant="secondary"
                size="icon"
                className="h-8 w-8 rounded-full shadow-md"
                onClick={handleWishlist}
              >
                <Heart className={cn("h-4 w-4", isLiked && "fill-red-500 text-red-500")} />
              </Button>
              
              <Button
                variant="secondary"
                size="icon"
                className="h-8 w-8 rounded-full shadow-md"
                onClick={handleQuickView}
              >
                <Eye className="h-4 w-4" />
              </Button>
            </div>

            {/* Product Image */}
            <div className="relative w-full h-full">
              <Image
                src={product.images?.[0] || 'https://via.placeholder.com/400x400?text=No+Image'}
                alt={product.title}
                fill
                className={cn(
                  "object-cover transition-all duration-500 group-hover:scale-105",
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                )}
                onLoad={() => setImageLoaded(true)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              
              {/* Loading Skeleton */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            {/* Quick Actions on Hover */}
            <div className="absolute bottom-3 left-3 right-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-200">
              <Button
                className="w-full text-xs bg-green-600 hover:bg-green-700 text-white"
                size="sm"
                onClick={handleWhatsAppOrder}
              >
                <MessageCircle className="h-3 w-3 mr-1" />
                Order Now
              </Button>
            </div>
          </div>

          {/* Product Info */}
          <CardContent className="p-4">
            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-1 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-3 w-3",
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      )}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-600">
                  ({product.reviewCount})
                </span>
              </div>
            )}

            {/* Title */}
            <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {product.title}
            </h3>

            {/* Short Description */}
            {product.shortDescription && (
              <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                {product.shortDescription}
              </p>
            )}

            {/* Price */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-green-600">
                  ৳{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ৳{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              
              {/* Stock Status */}
              <Badge
                className={cn(
                  "text-xs",
                  product.inStock 
                    ? "bg-green-100 text-green-800 hover:bg-green-200" 
                    : "bg-red-100 text-red-800"
                )}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </Badge>
            </div>

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-3">
                {product.tags.slice(0, 3).map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-xs px-2 py-0 capitalize"
                  >
                    {tag}
                  </Badge>
                ))}
                {product.tags.length > 3 && (
                  <Badge
                    variant="outline"
                    className="text-xs px-2 py-0"
                  >
                    +{product.tags.length - 3}
                  </Badge>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}