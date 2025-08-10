// components/product/WhatsAppOrder.js
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, User, Phone, MapPin, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function WhatsAppOrder({ product }) {
  const [isLoading, setIsLoading] = useState(false)

  const handleWhatsAppOrder = async () => {
    setIsLoading(true)
    
    // Create WhatsApp message
    const message = `🛍️ *EVERLACE ORDER REQUEST*

📿 *Product:* ${product.title}
💰 *Price:* ৳${product.price.toLocaleString()}
${product.originalPrice ? `~~৳${product.originalPrice.toLocaleString()}~~` : ''}
🔗 *Link:* ${window.location.href}

*Product Details:*
${product.shortDescription || product.description?.substring(0, 100) + '...'}

${product.features ? `\n*Features:*\n${product.features.slice(0, 3).map(f => `• ${f}`).join('\n')}` : ''}

📦 *Please confirm:*
• Product availability
• Delivery time & cost
• Payment options

Thank you! 🙏`

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    setIsLoading(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Main Order Button */}
      <Button
        onClick={handleWhatsAppOrder}
        disabled={!product.inStock || isLoading}
        variant="whatsapp"
        size="xl"
        className="w-full text-base font-semibold shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Opening WhatsApp...
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Order via WhatsApp
          </div>
        )}
      </Button>

      {/* Order Benefits */}
      <Card className="border-green-200 bg-green-50">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-green-800 flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            Why Order via WhatsApp?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-green-700">
            <Badge variant="success" className="w-2 h-2 p-0 rounded-full" />
            Direct communication with our team
          </div>
          <div className="flex items-center gap-2 text-sm text-green-700">
            <Badge variant="success" className="w-2 h-2 p-0 rounded-full" />
            Custom size & color options available
          </div>
          <div className="flex items-center gap-2 text-sm text-green-700">
            <Badge variant="success" className="w-2 h-2 p-0 rounded-full" />
            Flexible payment options (Cash on Delivery)
          </div>
          <div className="flex items-center gap-2 text-sm text-green-700">
            <Badge variant="success" className="w-2 h-2 p-0 rounded-full" />
            Quick response within 30 minutes
          </div>
        </CardContent>
      </Card>

      {/* Additional Info */}
      <div className="text-center space-y-2">
        <p className="text-sm text-gray-600">
          Need help choosing? Our team is here to assist you!
        </p>
        <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Phone className="h-3 w-3" />
            <span>30min response</span>
          </div>
          <div className="flex items-center gap-1">
            <Package className="h-3 w-3" />
            <span>Same day processing</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span>Dhaka delivery</span>
          </div>
        </div>
      </div>

      {/* Stock Warning */}
      {!product.inStock && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="font-medium text-red-800 mb-1">Out of Stock</p>
              <p className="text-sm text-red-700">
                Contact us via WhatsApp to get notified when this item is back in stock!
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </motion.div>
  )
}