// app/page.js
'use client'
import HeroSection from '@/components/home/HeroSection'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import CategoryShowcase from '@/components/home/CategoryShowcase'
import { getFeaturedProducts } from '@/data/products'
import { getFeaturedCategories } from '@/data/categories'

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()
  const categories = getFeaturedCategories()

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Category Showcase */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <CategoryShowcase categories={categories} />
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <FeaturedProducts products={featuredProducts} />
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Order? Let's Chat! 💬
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get personalized assistance, custom sizes, and flexible payment options 
              through our friendly WhatsApp support.
            </p>
            <button
              onClick={() => {
                const message = "Hi Everlace! I'd like to explore your beautiful jewelry collection."
                const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
                window.open(whatsappUrl, '_blank')
              }}
              className="btn-whatsapp bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="text-2xl mr-2">📱</span>
              Start WhatsApp Chat
            </button>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-green-100">
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Quick Responses</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Custom Orders</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Cash on Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}