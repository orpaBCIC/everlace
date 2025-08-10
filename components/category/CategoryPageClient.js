// components/category/CategoryPageClient.js
'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Heart, 
  ShoppingCart, 
  Star,
  ArrowUpDown,
  MessageCircle,
  Zap
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

export default function CategoryPageClient({ category, products }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState('grid')
  const [priceRange, setPriceRange] = useState('all')
  const [filterType, setFilterType] = useState('all')

  // Mock user state (no Clerk)
  const isSignedIn = false
  const user = null

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products || []

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    // Price range filter
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number)
      filtered = filtered.filter(product => {
        const price = product.price
        if (max) {
          return price >= min && price <= max
        } else {
          return price >= min
        }
      })
    }

    // Filter by type (featured/trending)
    if (filterType === 'featured') {
      filtered = filtered.filter(product => product.featured)
    } else if (filterType === 'trending') {
      filtered = filtered.filter(product => product.trending)
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price)
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price)
      case 'name':
        return filtered.sort((a, b) => a.title.localeCompare(b.title))
      case 'rating':
        return filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0))
      case 'featured':
        return filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
      default:
        return filtered
    }
  }, [products, searchQuery, sortBy, priceRange, filterType])

  const handleWhatsAppOrder = (product = null, isCustomOrder = false) => {
    const userInfo = isSignedIn 
      ? `Name: ${user?.fullName || 'User'}\nEmail: ${user?.primaryEmailAddress?.emailAddress || 'N/A'}`
      : 'Name: Guest User\nEmail: N/A'
    
    let message = ''
    
    if (product) {
      message = `Hi! I'm interested in this product:\n\n*${product.title}*\nPrice: ৳${product.price}\nCategory: ${category.name}\n\n${userInfo}`
    } else if (isCustomOrder) {
      message = `Hi! I'd like to place a custom order from the ${category.name} category.\n\n${userInfo}`
    } else {
      message = `Hi! I'm interested in products from the ${category.name} category.\n\n${userInfo}`
    }
    
    const whatsappUrl = `https://wa.me/8801712345678?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleAddToWishlist = (productId) => {
    // Handle wishlist logic (local storage for now)
    console.log('Added to wishlist:', productId)
  }

  const handleAddToCart = (productId) => {
    // Handle cart logic (local storage for now)
    console.log('Added to cart:', productId)
  }

  const ProductCard = ({ product, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.images?.[0] || '/placeholder-product.jpg'}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.featured && (
              <Badge className="bg-blue-500 text-white">Featured</Badge>
            )}
            {product.trending && (
              <Badge className="bg-orange-500 text-white">
                <Zap className="h-3 w-3 mr-1" />
                Trending
              </Badge>
            )}
          </div>
          
          {product.originalPrice && (
            <Badge className="absolute top-2 right-2 bg-red-500 text-white">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </Badge>
          )}
          
          {/* Hover actions */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8"
              onClick={() => handleAddToWishlist(product.id)}
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8"
              onClick={() => handleAddToCart(product.id)}
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8"
              onClick={() => handleWhatsAppOrder(product)}
            >
              <MessageCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <CardContent className="p-4">
          <Link href={`/product/${product.slug}`}>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {product.title}
            </h3>
          </Link>
          
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.shortDescription || product.description}
          </p>
          
          {product.rating && (
            <div className="flex items-center gap-1 mb-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviewCount || 0})
              </span>
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ৳{product.originalPrice}
                </span>
              )}
              <span className="text-lg font-bold text-primary">
                ৳{product.price}
              </span>
            </div>
            
            <Badge variant={product.inStock ? "outline" : "destructive"} className={product.inStock ? "text-green-600" : ""}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </Badge>
          </div>

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {product.tags.slice(0, 3).map(tag => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {category.name}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {category.description}
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => handleWhatsAppOrder(null, false)}
              >
                Browse Collection
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-primary"
                onClick={() => handleWhatsAppOrder(null, true)}
              >
                Custom Order
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters and Search */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap gap-4">
            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <ArrowUpDown className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>

            {/* Price Range */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-500">৳0 - ৳500</SelectItem>
                <SelectItem value="500-1000">৳500 - ৳1,000</SelectItem>
                <SelectItem value="1000-2000">৳1,000 - ৳2,000</SelectItem>
                <SelectItem value="2000">৳2,000+</SelectItem>
              </SelectContent>
            </Select>

            {/* Filter Type */}
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Products</SelectItem>
                <SelectItem value="featured">Featured Only</SelectItem>
                <SelectItem value="trending">Trending Only</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-600">
            Showing {filteredAndSortedProducts.length} of {products?.length || 0} products
          </p>
        </div>

        {/* Products Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className={cn(
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-4'
          )}>
            {filteredAndSortedProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your filters or search terms
            </p>
            <Button 
              variant="outline"
              onClick={() => {
                setSearchQuery('')
                setSortBy('featured')
                setPriceRange('all')
                setFilterType('all')
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}

        {/* WhatsApp CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Need Help Finding the Perfect Item?
          </h3>
          <p className="text-green-100 mb-6">
            Our experts are here to help you choose the perfect {category.name.toLowerCase()} for your special occasion.
          </p>
          <Button 
            size="lg"
            variant="secondary"
            onClick={() => handleWhatsAppOrder(null, true)}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Chat with Us on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  )
}