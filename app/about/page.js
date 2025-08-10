// app/about/page.js
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, Users, Award, Sparkles, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Crafted with Love',
      description: 'Every piece is handmade with passion and attention to detail by skilled artisans who take pride in their craft.'
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Quality First',
      description: 'We use only premium materials and time-tested techniques to ensure our products meet the highest standards.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Customer Focused',
      description: 'Your satisfaction is our priority. We provide personalized service and support every step of the way.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Traditional Excellence',
      description: 'Preserving ancient craftsmanship traditions while adapting to modern preferences and styles.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '1000+', label: 'Products Crafted' },
    { number: '50+', label: 'Cities Delivered' },
    { number: '4.9/5', label: 'Customer Rating' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-gold-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                ✨ Our Story
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Celebrating <span className="gradient-text">Tradition</span>
                <br />
                Through Handcrafted Beauty
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a passion for preserving traditional craftsmanship, Everlace brings you 
                exquisite handmade jewelry and accessories that tell a story of heritage, love, and artistry.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={() => {
                    const message = "Hi Everlace! I'd love to learn more about your story and products."
                    const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
                    window.open(whatsappUrl, '_blank')
                  }}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Connect with Us
                </Button>
                <a href="/products">
                  <Button variant="outline" size="lg">
                    View Our Collection
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=500&fit=crop"
                  alt="Everlace Craftsmanship"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What We <span className="gradient-text">Stand For</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our values guide everything we do, from the way we craft our products 
              to how we serve our customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-gold-500 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Journey in Numbers
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Every number tells a story of trust, quality, and the beautiful relationships 
              we've built with our customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The <span className="gradient-text">Everlace</span> Story
              </h2>
              <p className="text-gray-600 text-lg">
                Every piece we create carries forward centuries of tradition and craftsmanship.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none text-gray-700"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Beginning</h3>
                  <p className="mb-4">
                    Everlace was born from a simple belief: that handcrafted jewelry carries a soul 
                    that mass-produced items simply cannot match. Our founders, passionate about 
                    preserving traditional Bengali craftsmanship, started this journey in 2020.
                  </p>
                  <p>
                    What began as a small workshop in Dhaka has now grown into a trusted name, 
                    serving customers across Bangladesh with authentic, handmade jewelry and accessories.
                  </p>
                </div>
                <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&h=400&fit=crop"
                    alt="Traditional Craftsmanship"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-80 rounded-xl overflow-hidden shadow-lg md:order-1">
                  <Image
                    src="https://images.unsplash.com/photo-1588444853019-d3829e752655?w=500&h=400&fit=crop"
                    alt="Modern Designs"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:order-2">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
                  <p className="mb-4">
                    We're dedicated to making beautiful, handcrafted jewelry accessible to everyone. 
                    Our mission is to connect traditional artisans with modern customers through 
                    innovative e-commerce solutions.
                  </p>
                  <p>
                    By embracing WhatsApp ordering and personal customer service, we've made it 
                    easier than ever to own a piece of authentic Bengali craftsmanship.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-white"
          >
            <div className="text-5xl mb-6">🤝</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Be Part of Our Story?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of happy customers who trust Everlace for their special moments. 
              Let's create something beautiful together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="xl"
                className="bg-white text-green-600 hover:bg-green-50 border-white"
                onClick={() => window.location.href = '/products'}
              >
                Explore Our Collection
              </Button>
              <Button
                variant="secondary"
                size="xl"
                className="bg-green-500 hover:bg-green-400 text-white border-green-500"
                onClick={() => {
                  const message = "Hi Everlace! I'd love to learn more about your products and services. Could you help me get started?"
                  const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
                  window.open(whatsappUrl, '_blank')
                }}
              >
                💬 Start WhatsApp Chat
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}