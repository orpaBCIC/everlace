// components/sections/Hero-NoImages.js (Temporary version without images)
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, Globe, Users, Award } from 'lucide-react'
import AnimatedCounter from '@/components/common/AnimatedCounter'

const stats = [
  { label: 'Global Buyers', value: 150, icon: Globe },
  { label: 'Partner Factories', value: 50, icon: Users },
  { label: 'Quality Certifications', value: 25, icon: Award },
]

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 bg-[size:20px_20px] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <Badge variant="secondary" className="mb-4">
                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                Trusted by 150+ Global Brands
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Your Global{' '}
                <span className="gradient-text">Sourcing</span>{' '}
                Partner
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                From concept to delivery, we source and manufacture premium quality garments 
                for international buyers. Certified factories, guaranteed quality, on-time delivery.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/contact">
                  Get Quote Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8">
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8 border-t"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-brand-blue" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    <AnimatedCounter end={stat.value} duration={2000} />+
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual - Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">🏭</div>
                <div className="text-lg font-semibold">Modern Textile Factory</div>
                <div className="text-sm">Add hero-factory.jpg to public/images/</div>
              </div>
              
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-6 right-6 bg-white rounded-lg p-4 shadow-lg"
              >
                <div className="text-sm font-medium text-gray-900">Quality Score</div>
                <div className="text-2xl font-bold text-green-600">98.5%</div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-6 left-6 bg-white rounded-lg p-4 shadow-lg"
              >
                <div className="text-sm font-medium text-gray-900">Delivery Time</div>
                <div className="text-2xl font-bold text-blue-600">15 Days</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}