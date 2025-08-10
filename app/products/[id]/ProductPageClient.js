// app/products/[id]/ProductPageClient.js
'use client'

import Link from 'next/link'
import ProductGallery from '@/components/product/ProductGallery'
import ProductDetails from '@/components/product/ProductDetails'
import WhatsAppOrder from '@/components/product/WhatsAppOrder'
import ProductGrid from '@/components/product/ProductGrid'

export default function ProductPageClient({ product, relatedProducts }) {
  const handleWhatsAppQuestion = () => {
    const message = `Hi! I have questions about:\n\n📿 ${product.title}\n💰 ৳${product.price}\n🔗 ${window.location.href}\n\nCould you please help me with more information?`
    const whatsappUrl = `https://wa.me/8801712345678?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/products" className="hover:text-primary">Products</Link>
            <span className="mx-2">›</span>
            <Link href={`/category/${product.category}`} className="hover:text-primary capitalize">
              {product.category}
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900">{product.title}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Gallery */}
          <div>
            <ProductGallery 
              images={product.images} 
              alt={product.title}
            />
          </div>

          {/* Product Info & Order */}
          <div className="space-y-8">
            <ProductDetails product={product} />
            <div className="border-t pt-8">
              <WhatsAppOrder product={product} />
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-16 max-w-4xl">
          <div className="border-t pt-16">
            <h2 className="text-2xl font-bold mb-6">Product Description</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p>{product.description}</p>
              
              {product.features && (
                <>
                  <h3 className="text-xl font-semibold mt-8 mb-4">Features & Benefits</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {product.occasions && product.occasions.length > 0 && (
                <>
                  <h3 className="text-xl font-semibold mt-8 mb-4">Perfect For</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.occasions.map((occasion) => (
                      <span
                        key={occasion}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm capitalize"
                      >
                        {occasion.replace('-', ' ')}
                      </span>
                    ))}
                  </div>
                </>
              )}

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  Why Choose Everlace? 🌟
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-700">
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <span>Handcrafted with premium materials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <span>Quality guarantee on all products</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <span>Fast delivery across Bangladesh</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <span>Easy WhatsApp ordering & support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                You Might Also <span className="gradient-text">Like</span>
              </h2>
              <p className="text-gray-600">
                Similar products from our {product.category} collection
              </p>
            </div>
            <ProductGrid products={relatedProducts} />
          </div>
        )}

        {/* WhatsApp CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <div className="text-5xl mb-4">💬</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Have Questions About This Product?
            </h2>
            <p className="text-green-100 mb-6 text-lg">
              Our friendly team is here to help! Get instant answers, check availability, 
              or request custom modifications via WhatsApp.
            </p>
            <button
              onClick={handleWhatsAppQuestion}
              className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-4 rounded-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="text-2xl mr-2">📱</span>
              Ask Questions via WhatsApp
            </button>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-green-100">
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Instant Response</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Expert Advice</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Custom Options</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}