// app/contact/page.js
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const contactMethods = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'WhatsApp',
      description: 'Get instant responses for orders and queries',
      value: '+880 1XXX-XXXXXX',
      action: 'Chat Now',
      primary: true,
      onClick: () => {
        const message = "Hi Everlace! I'd like to get in touch with you."
        const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, '_blank')
      }
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      description: 'Call us during business hours',
      value: '+880 1XXX-XXXXXX',
      action: 'Call Now',
      onClick: () => window.open('tel:+8801XXXXXXXXX')
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      description: 'Send us a detailed message',
      value: 'hello@everlace.com',
      action: 'Send Email',
      onClick: () => window.open('mailto:hello@everlace.com')
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Visit Us',
      description: 'Our workshop location',
      value: 'Dhaka, Bangladesh',
      action: 'Get Directions',
      onClick: () => window.open('https://maps.google.com/?q=Dhaka,Bangladesh')
    }
  ]

  const faqs = [
    {
      question: 'How do I place an order?',
      answer: 'Simply click the WhatsApp button on any product page or contact us directly. Our team will guide you through the entire process.'
    },
    {
      question: 'Do you offer cash on delivery?',
      answer: 'Yes! We offer cash on delivery for all orders within Dhaka. Payment methods and delivery charges may vary for other cities.'
    },
    {
      question: 'Can you create custom designs?',
      answer: 'Absolutely! We specialize in custom jewelry and accessories. Share your ideas with us via WhatsApp and we\'ll create something unique for you.'
    },
    {
      question: 'How long does delivery take?',
      answer: 'Within Dhaka: Same day to 24 hours. Outside Dhaka: 2-5 business days depending on location. We\'ll provide tracking information.'
    },
    {
      question: 'What if I\'m not satisfied with my order?',
      answer: 'Customer satisfaction is our priority. Contact us within 7 days if you\'re not happy with your purchase, and we\'ll work to make it right.'
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create WhatsApp message from form data
    const message = `📝 Contact Form Submission

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
📋 Subject: ${formData.subject}

💬 Message:
${formData.message}

Please get back to me at your earliest convenience. Thank you!`

    const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-gold-500/10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="text-5xl mb-6">💬</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              We'd love to hear from you! Whether you have questions about our products, 
              need custom designs, or just want to say hello, we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                className={`h-full text-center cursor-pointer hover:shadow-lg transition-all duration-300 border-2 ${
                  method.primary ? 'border-green-200 bg-green-50' : 'border-gray-200 hover:border-primary/30'
                }`}
                onClick={method.onClick}
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    method.primary ? 'bg-green-600 text-white' : 'bg-primary/10 text-primary'
                  }`}>
                    {method.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                  <p className="font-medium text-gray-900 mb-4">{method.value}</p>
                  <Button 
                    variant={method.primary ? "whatsapp" : "outline"} 
                    size="sm" 
                    className="w-full"
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll send your message directly to our WhatsApp!
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                        placeholder="+880 1XXX-XXXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                      >
                        <option value="">Select a subject</option>
                        <option value="Product Inquiry">Product Inquiry</option>
                        <option value="Custom Order">Custom Order</option>
                        <option value="Order Status">Order Status</option>
                        <option value="Complaint">Complaint</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="whatsapp"
                    size="lg"
                    className="w-full"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send via WhatsApp
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, your message will be sent directly to our WhatsApp for faster response.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Business Hours & FAQ */}
          <div className="space-y-8">
            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-sm text-green-600 font-medium flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp support available 24/7
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqs.slice(0, 3).map((faq, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-medium text-gray-900">{faq.question}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                      {index < 2 && <div className="border-b border-gray-100"></div>}
                    </div>
                  ))}
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => {
                        const message = "Hi! I have some questions about your products and services. Could you help me?"
                        const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
                        window.open(whatsappUrl, '_blank')
                      }}
                    >
                      Ask More Questions via WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary/10 to-gold-500/10 rounded-2xl p-8 text-center border border-primary/20"
        >
          <div className="text-4xl mb-4">🚨</div>
          <h3 className="text-2xl font-bold mb-4">Urgent Order or Issue?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            For urgent orders, last-minute requests, or immediate assistance, 
            WhatsApp us directly for the fastest response!
          </p>
          <Button
            variant="whatsapp"
            size="xl"
            onClick={() => {
              const message = "🚨 URGENT: I need immediate assistance with my order/inquiry. Please respond ASAP!"
              const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
              window.open(whatsappUrl, '_blank')
            }}
          >
            💬 Urgent WhatsApp Support
          </Button>
        </motion.div>
      </div>
    </div>
  )
}