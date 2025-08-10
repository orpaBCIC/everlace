// app/layout.js
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import "./globals.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Everlace - Beautiful Handicraft Jewelry & Wedding Accessories',
  description: 'Discover beautiful handmade jewelry, wedding accessories, and baby products. Order easily via WhatsApp with fast delivery across Bangladesh.',
  keywords: 'handicraft jewelry, wedding accessories, baby products, handmade, Bangladesh, online shopping, WhatsApp ordering',
  authors: [{ name: 'Everlace Team' }],
  creator: 'Everlace',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Everlace - Beautiful Handicraft Jewelry & Wedding Accessories',
    description: 'Discover beautiful handmade jewelry, wedding accessories, and baby products. Order easily via WhatsApp.',
    url: '/',
    siteName: 'Everlace',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Everlace - Handicraft Jewelry & Accessories',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Everlace - Beautiful Handicraft Jewelry',
    description: 'Discover beautiful handmade jewelry and accessories. Order via WhatsApp.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
          
          {/* Floating WhatsApp Button */}
          <FloatingWhatsApp />
        </div>
      </body>
    </html>
  )
}