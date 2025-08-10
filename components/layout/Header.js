// components/layout/Header.js
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Search, Menu, Heart, User, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Jewelry', href: '/category/jewelry' },
  { name: 'Wedding', href: '/category/wedding' },
  { name: 'Baby', href: '/category/baby' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
            : 'bg-transparent'
        )}
      >
        <nav className="container mx-auto px-3 sm:px-4 lg:px-6 h-14 sm:h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-primary to-gold-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-base sm:text-lg">E</span>
              </div>
              <span className="text-lg sm:text-xl font-bold gradient-text">Everlace</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary relative py-2',
                  pathname === item.href
                    ? 'text-primary'
                    : isScrolled
                    ? 'text-gray-700 hover:text-primary'
                    : 'text-gray-800 hover:text-primary'
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeTab"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                'hidden sm:flex h-8 w-8 sm:h-9 sm:w-9',
                !isScrolled && 'text-gray-700 hover:text-primary hover:bg-gray-100'
              )}
            >
              <Search className="h-4 w-4" />
            </Button>

            {/* Wishlist */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                'hidden sm:flex relative h-8 w-8 sm:h-9 sm:w-9',
                !isScrolled && 'text-gray-700 hover:text-primary hover:bg-gray-100'
              )}
            >
              <Heart className="h-4 w-4" />
              <Badge
                variant="destructive"
                className="absolute -top-1 -right-1 h-4 w-4 sm:h-5 sm:w-5 rounded-full p-0 flex items-center justify-center text-xs"
              >
                2
              </Badge>
            </Button>

            {/* User */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                'hidden sm:flex h-8 w-8 sm:h-9 sm:w-9',
                !isScrolled && 'text-gray-700 hover:text-primary hover:bg-gray-100'
              )}
            >
              <User className="h-4 w-4" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                'md:hidden h-8 w-8 sm:h-9 sm:w-9',
                !isScrolled && 'text-gray-700 hover:text-primary hover:bg-gray-100'
              )}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-xl"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-gradient-to-r from-primary to-gold-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-base">E</span>
                  </div>
                  <span className="text-lg font-bold gradient-text">Everlace</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="h-8 w-8"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Navigation Links */}
              <nav className="p-4 sm:p-6 space-y-1">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'block py-3 px-3 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200',
                        pathname === item.href && 'text-primary font-medium bg-primary/10'
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Actions */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 border-t border-gray-100 space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Search className="h-4 w-4" />
                  Search Products
                </Button>
                
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 justify-start gap-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Heart className="h-4 w-4" />
                    Wishlist (2)
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="flex-1 justify-start gap-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User className="h-4 w-4" />
                    Account
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}