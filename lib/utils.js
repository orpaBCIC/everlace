import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price, currency = 'BDT') {
  if (currency === 'BDT') {
    return `৳${price.toLocaleString()}`
  }
  return `${currency} ${price.toLocaleString()}`
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-BD', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

export function truncate(text, length = 100) {
  if (text.length <= length) return text
  return text.slice(0, length).trim() + '...'
}

export function getInitials(name) {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function generateWhatsAppLink(number, message) {
  const cleanNumber = number.replace(/\D/g, '')
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`
}

export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}