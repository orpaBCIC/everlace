// app/privacy/page.js

import Link from 'next/link'
import { Shield, Lock, Eye, MessageCircle } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy - Everlace',
  description: 'Learn how Everlace protects your privacy and handles your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="h-16 w-16 mx-auto mb-4 opacity-90" />
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-white/90">
              Your privacy is important to us. Learn how we protect your personal information.
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
          {/* Quick Overview */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Eye className="h-6 w-6 text-primary" />
              Quick Overview
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <Lock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Data Protection</h3>
                <p className="text-sm text-gray-600">We only collect necessary information to process your orders</p>
              </div>
              <div className="text-center p-4">
                <MessageCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">WhatsApp Orders</h3>
                <p className="text-sm text-gray-600">Communication via WhatsApp for order processing</p>
              </div>
              <div className="text-center p-4">
                <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">No Third Parties</h3>
                <p className="text-sm text-gray-600">We don't sell your data to third parties</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
              <p className="text-gray-700 mb-4">
                When you interact with Everlace, we may collect the following information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Contact Information:</strong> Name, phone number, WhatsApp number, email address</li>
                <li><strong>Delivery Information:</strong> Shipping address, delivery preferences</li>
                <li><strong>Order Information:</strong> Product preferences, custom requirements, order history</li>
                <li><strong>Communication Data:</strong> WhatsApp messages, inquiries, feedback</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Website Usage Information</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>IP address and browser information</li>
                <li>Pages visited and time spent on our website</li>
                <li>Device type and operating system</li>
                <li>Referral source (how you found our website)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Process Orders:</strong> Handle your product inquiries and orders via WhatsApp</li>
                <li><strong>Delivery Services:</strong> Arrange delivery and provide order updates</li>
                <li><strong>Customer Support:</strong> Respond to your questions and provide assistance</li>
                <li><strong>Product Recommendations:</strong> Suggest products based on your preferences</li>
                <li><strong>Business Communication:</strong> Send order confirmations, delivery updates</li>
                <li><strong>Website Improvement:</strong> Analyze usage to improve our website experience</li>
                <li><strong>Legal Compliance:</strong> Comply with applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. WhatsApp Communication</h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <h3 className="text-lg font-semibold text-green-800 mb-2">🔐 WhatsApp Privacy</h3>
                <p className="text-green-700 text-sm">
                  WhatsApp messages are end-to-end encrypted. We only see messages you send to our business number.
                </p>
              </div>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>We use WhatsApp Business for customer communication</li>
                <li>Your WhatsApp number is used solely for order-related communication</li>
                <li>We don't share your WhatsApp data with third parties</li>
                <li>You can opt out of WhatsApp communication at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We don't sell, rent, or trade your personal information. We only share information in these limited cases:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Delivery Partners:</strong> Name and address for product delivery</li>
                <li><strong>Payment Processors:</strong> For cash on delivery confirmation</li>
                <li><strong>Legal Requirements:</strong> When required by law or legal process</li>
                <li><strong>Business Protection:</strong> To protect our rights and prevent fraud</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700 mb-4">We protect your information through:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Secure data storage and transmission</li>
                <li>Regular security assessments</li>
                <li>Limited access to personal information</li>
                <li>WhatsApp's end-to-end encryption for messages</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Website Technologies</h2>
              <p className="text-gray-700 mb-4">
                Our website uses cookies and similar technologies to improve your browsing experience:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand website usage</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              <p className="text-gray-600 text-sm mt-4">
                You can control cookies through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Access:</strong> Request information about data we hold about you</li>
                <li><strong>Correction:</strong> Update or correct your personal information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Data Portability:</strong> Request a copy of your data</li>
              </ul>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                <p className="text-blue-800 text-sm">
                  <strong>To exercise these rights:</strong> Contact us via WhatsApp at +880 1712-345678 or email hello@everlace.com
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
              <p className="text-gray-700">
                Our services are not directed to children under 13. We don't knowingly collect personal information from children under 13. If you're a parent and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We'll notify you of any material changes by posting the new policy on our website and updating the "Last updated" date. Your continued use of our services after changes are posted constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy or how we handle your information, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <ul className="space-y-2 text-gray-700">
                  <li><strong>WhatsApp:</strong> +880 1712-345678</li>
                  <li><strong>Email:</strong> hello@everlace.com</li>
                  <li><strong>Address:</strong> Dhaka, Bangladesh</li>
                  <li><strong>Business Hours:</strong> 9 AM - 9 PM (Bangladesh Time)</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between items-center">
            <Link 
              href="/terms" 
              className="text-primary hover:text-primary/80 font-medium"
            >
              ← Terms of Service
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