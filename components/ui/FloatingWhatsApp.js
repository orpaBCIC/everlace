// components/ui/FloatingWhatsApp.js
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Show the button after page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000) // Delay 2 seconds after page load

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const message = `Hi! I'm interested in Everlace products. Could you please help me with:

• Product recommendations
• Current offers and deals  
• Delivery information
• Custom order options

Thank you! 🛍️`

    const whatsappUrl = `https://wa.me/8801712345678?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  const quickMessages = [
    {
      text: "👋 Say Hello",
      message: "Hi! I'm interested in your products."
    },
    {
      text: "🛍️ Browse Products", 
      message: "Hi! Could you show me your latest collection?"
    },
    {
      text: "🚚 Delivery Info",
      message: "Hi! I'd like to know about delivery options and timing."
    },
    {
      text: "💰 Current Offers",
      message: "Hi! Do you have any special offers or discounts available?"
    }
  ]

  const sendQuickMessage = (message) => {
    const whatsappUrl = `https://wa.me/8801712345678?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Quick Messages Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="mb-4 bg-white rounded-lg shadow-2xl border p-4 w-72 max-w-[calc(100vw-3rem)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Everlace Team</h3>
                  <p className="text-xs text-green-600">• Online now</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Welcome Message */}
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-700">
                👋 Hi there! How can we help you today?
              </p>
            </div>

            {/* Quick Message Buttons */}
            <div className="space-y-2">
              {quickMessages.map((item, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => sendQuickMessage(item.message)}
                  className="w-full text-left p-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded border border-gray-200 hover:border-green-300 transition-colors"
                >
                  {item.text}
                </motion.button>
              ))}
            </div>

            {/* Custom Message */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
            >
              💬 Start Custom Chat
            </button>

            {/* Powered by */}
            <p className="text-xs text-gray-500 text-center mt-3">
              Powered by WhatsApp
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 group"
      >
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-20"></div>
        
        {/* Icon */}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification badge */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
          1
        </div>
      </motion.button>

      {/* Tooltip on first visit */}
      <AnimatePresence>
        {isVisible && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap"
          >
            💬 Chat with us!
            <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}