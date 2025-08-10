// components/layout/Footer.js
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const footerLinks = {
  shop: [
    { name: 'All Products', href: '/products' },
    { name: 'Jewelry', href: '/category/jewelry' },
    { name: 'Wedding Accessories', href: '/category/wedding' },
    { name: 'Baby Products', href: '/category/baby' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ]
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-gold-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold">Everlace</span>
            </div>
            <p className="text-gray-400 text-sm">
              Beautiful handicraft jewelry and wedding accessories made with love and tradition. 
              Quality craftsmanship for your special moments.
            </p>
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-400 hover:text-white hover:bg-white/10"
              >
                📱
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-400 hover:text-white hover:bg-white/10"
              >
                📧
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-400 hover:text-white hover:bg-white/10"
              >
                🌐
              </Button>
            </div>
          </motion.div>

          {/* Shop Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                +880 1XXX-XXXXXX
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                hello@everlace.com
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="h-4 w-4" />
                Dhaka, Bangladesh
              </li>
            </ul>
            <Button 
              variant="whatsapp" 
              size="sm" 
              className="mt-4 w-full"
              onClick={() => window.open('https://wa.me/8801234567890', '_blank')}
            >
              💬 WhatsApp Us
            </Button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-gray-400">
            © 2024 Everlace. Made with <Heart className="h-4 w-4 inline text-red-500" /> in Bangladesh
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>🇧🇩 Bangladesh</span>
            <span>•</span>
            <span>💳 Cash on Delivery</span>
            <span>•</span>
            <span>📱 WhatsApp Orders</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}