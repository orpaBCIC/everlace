// components/sections/ContactForm.js
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Send, AlertCircle } from 'lucide-react'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    category: '',
    quantity: '',
    timeline: ''
  })

  async function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitting(true)
    setError('')

    const form = new FormData(event.target)

    // Validate required fields
    if (!formData.category || !formData.quantity || !formData.timeline) {
      setError('Please fill in all required fields.')
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/rfq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.get('name'),
          email: form.get('email'),
          company: form.get('company'),
          phone: form.get('phone'),
          category: formData.category,
          quantity: formData.quantity,
          timeline: formData.timeline,
          message: form.get('message'),
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (err) {
      setError('Failed to submit request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-4">
          Your RFQ has been submitted successfully. We'll get back to you within 2 hours.
        </p>
        <Badge variant="secondary">Response Time: 2 Hours</Badge>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <Input
            id="name"
            name="name"
            required
            placeholder="John Smith"
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@company.com"
            className="w-full"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company Name *
          </label>
          <Input
            id="company"
            name="company"
            required
            placeholder="Your Company Ltd"
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            placeholder="+1 (555) 123-4567"
            className="w-full"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            Product Category *
          </label>
          <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({...prev, category: value}))}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mens-casual">Men's Casual</SelectItem>
              <SelectItem value="kids-wear">Kids' Wear</SelectItem>
              <SelectItem value="womens-casual">Women's Casual</SelectItem>
              <SelectItem value="activewear">Activewear</SelectItem>
              <SelectItem value="accessories">Accessories</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
            Order Quantity *
          </label>
          <Select value={formData.quantity} onValueChange={(value) => setFormData(prev => ({...prev, quantity: value}))}>
            <SelectTrigger>
              <SelectValue placeholder="Select quantity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="500-1000">500 - 1,000 pcs</SelectItem>
              <SelectItem value="1000-5000">1,000 - 5,000 pcs</SelectItem>
              <SelectItem value="5000-10000">5,000 - 10,000 pcs</SelectItem>
              <SelectItem value="10000+">10,000+ pcs</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
            Timeline *
          </label>
          <Select value={formData.timeline} onValueChange={(value) => setFormData(prev => ({...prev, timeline: value}))}>
            <SelectTrigger>
              <SelectValue placeholder="Select timeline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asap">ASAP</SelectItem>
              <SelectItem value="1-month">Within 1 Month</SelectItem>
              <SelectItem value="2-months">Within 2 Months</SelectItem>
              <SelectItem value="3-months">Within 3 Months</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Additional Requirements
        </label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Please describe your specific requirements, target price, quality standards, certifications needed, etc."
          className="w-full"
        />
      </div>

      {error && (
        <div className="flex items-center gap-2 text-red-600 text-sm">
          <AlertCircle className="w-4 h-4" />
          {error}
        </div>
      )}

      <Button 
        type="submit" 
        size="lg" 
        className="w-full text-lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Submit RFQ
          </>
        )}
      </Button>
    </form>
  )
}