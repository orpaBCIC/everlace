// app/terms/page.js
import Link from 'next/link'
import { Scale, MessageCircle, Package, CreditCard } from 'lucide-react'

export const metadata = {
  title: 'Terms of Service - Everlace',
  description: 'Terms and conditions for using Everlace services and ordering products.',
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Scale className="h-16 w-16 mx-auto mb-4 opacity-90" />
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-white/90">
              Terms and conditions for using Everlace services and ordering products.
            </p>
            <p className="text-sm text-white/80 mt-2">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Quick Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Key Points Summary</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">WhatsApp Orders</h3>
                <p className="text-sm text-gray-600">Orders placed via WhatsApp are binding once confirmed</p>
              </div>
              <div className="text-center p-4">
                <CreditCard className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Cash on Delivery</h3>
                <p className="text-sm text-gray-600">Payment due upon product delivery</p>
              </div>
              <div className="text-center p-4">
                <Package className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Handcrafted Products</h3>
                <p className="text-sm text-gray-600">Slight variations in handmade items are normal</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing and using the Everlace website (everlace.com) and services, including placing orders via WhatsApp, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
              <p className="text-gray-700">
                These terms apply to all users, visitors, customers, and others who access or use our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. About Everlace</h2>
              <p className="text-gray-700 mb-4">
                Everlace is a Bangladesh-based business specializing in:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Handcrafted jewelry and accessories</li>
                <li>Wedding ceremony items (Haldi, Mehndi accessories)</li>
                <li>Baby products and accessories</li>
                <li>Custom-made items upon request</li>
              </ul>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                <p className="text-amber-800 text-sm">
                  <strong>🎨 Handcrafted Nature:</strong> Our products are handmade, so slight variations in color, design, and dimensions are natural and expected.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Ordering Process</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 WhatsApp Orders</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Orders are primarily placed via WhatsApp Business (+880 1712-345678)</li>
                <li>Product inquiries made through our website can be converted to WhatsApp orders</li>
                <li>Orders become binding once we confirm availability and pricing</li>
                <li>Order confirmation includes product details, price, and estimated delivery time</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Custom Orders</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Custom designs require detailed discussion via WhatsApp</li>
                <li>Custom orders may take longer to complete (5-15 business days)</li>
                <li>Final approval of custom designs is required before production</li>
                <li>Custom orders cannot be returned unless defective</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pricing and Payment</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Pricing</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>All prices are listed in Bangladeshi Taka (BDT)</li>
                <li>Prices are subject to change without notice</li>
                <li>Final price will be confirmed during order process</li>
                <li>Delivery charges may apply outside Dhaka city</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Payment Methods</h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-green-800 mb-2">💰 Cash on Delivery (COD)</h4>
                <ul className="list-disc pl-6 text-green-700 text-sm space-y-1">
                  <li>Payment due upon product delivery</li>
                  <li>Available within Dhaka and select areas</li>
                  <li>Exact change appreciated</li>
                </ul>
              </div>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Mobile banking (bKash, Nagad) for advance payment</li>
                <li>Bank transfer for large orders</li>
                <li>Payment method confirmed during order process</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Delivery Policy</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Delivery Areas</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>Dhaka City:</strong> Same-day or next-day delivery available</li>
                <li><strong>Dhaka Metropolitan:</strong> 1-3 business days</li>
                <li><strong>Outside Dhaka:</strong> 3-7 business days via courier</li>
                <li><strong>International:</strong> Available on request (additional charges apply)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Delivery Process</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Delivery tracking information provided via WhatsApp</li>
                <li>Customer must be available during estimated delivery time</li>
                <li>Failed deliveries may incur additional charges</li>
                <li>Delivery address changes must be notified immediately</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Returns and Exchanges</h2>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">🔄 Return Policy</h3>
                <p className="text-blue-700 text-sm">
                  Returns accepted within 7 days of delivery for defective items only.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Eligible Returns</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Defective or damaged products</li>
                <li>Significant discrepancy from order description</li>
                <li>Wrong item delivered</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Non-Returnable Items</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Custom-made products (unless defective)</li>
                <li>Items damaged by customer use</li>
                <li>Products returned after 7 days</li>
                <li>Items without original packaging</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.3 Exchange Process</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Contact us via WhatsApp within 7 days</li>
                <li>Provide photos of the issue</li>
                <li>Return shipping arranged by Everlace</li>
                <li>Replacement or refund processed within 5-10 business days</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Product Information</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>We strive for accurate product descriptions and images</li>
                <li>Colors may vary due to screen settings and lighting</li>
                <li>Handcrafted items may have slight variations</li>
                <li>Product availability is subject to stock</li>
                <li>We reserve the right to limit quantities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content on the Everlace website, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Product designs and images</li>
                <li>Website design and layout</li>
                <li>Text content and descriptions</li>
                <li>Logos and branding</li>
              </ul>
              <p className="text-gray-700">
                Are the intellectual property of Everlace and are protected by copyright and other laws. Unauthorized use is prohibited.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. User Conduct</h2>
              <p className="text-gray-700 mb-4">When using our services, you agree not to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide false or misleading information</li>
                <li>Use our services for illegal purposes</li>
                <li>Interfere with the operation of our website</li>
                <li>Harass our staff via WhatsApp or other channels</li>
                <li>Attempt to reverse engineer our products</li>
                <li>Use our content without permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <p className="text-yellow-800 text-sm">
                  <strong>⚠️ Important:</strong> Please read this section carefully as it limits our liability.
                </p>
              </div>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Everlace's liability is limited to the purchase price of the product</li>
                <li>We are not liable for indirect, incidental, or consequential damages</li>
                <li>We don't guarantee uninterrupted service or error-free website operation</li>
                <li>Force majeure events (natural disasters, political instability) may affect service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Privacy</h2>
              <p className="text-gray-700">
                Your privacy is important to us. Please review our{' '}
                <Link href="/privacy" className="text-primary hover:text-primary/80 underline">
                  Privacy Policy
                </Link>
                {' '}to understand how we collect, use, and protect your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
              <p className="text-gray-700">
                These Terms of Service are governed by the laws of Bangladesh. Any disputes will be resolved in the courts of Dhaka, Bangladesh.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <ul className="space-y-2 text-gray-700">
                  <li><strong>WhatsApp:</strong> +880 1712-345678</li>
                  <li><strong>Email:</strong> hello@everlace.com</li>
                  <li><strong>Business Hours:</strong> 9 AM - 9 PM (Bangladesh Time)</li>
                  <li><strong>Address:</strong> Dhaka, Bangladesh</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                <p className="text-green-800 text-sm">
                  <strong>💬 Quick Contact:</strong> For immediate assistance, WhatsApp is the fastest way to reach us!
                </p>
              </div>
            </section>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between items-center">
            <Link 
              href="/privacy" 
              className="text-primary hover:text-primary/80 font-medium"
            >
              ← Privacy Policy
            </Link>
            <Link 
              href="/contact" 
              className="text-primary hover:text-primary/80 font-medium"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}