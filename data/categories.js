// data/categories.js
export const categories = [
  {
    id: 'jewelry',
    name: 'Handicraft Jewelry',
    slug: 'jewelry',
    description: 'Beautiful handmade jewelry pieces crafted with love and tradition',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=400&fit=crop',
    icon: '💎',
    color: 'from-gold-400 to-gold-600',
    featured: true
  },
  {
    id: 'wedding',
    name: 'Wedding Accessories',
    slug: 'wedding',
    description: 'Special items for Haldi, Mehndi and wedding ceremonies',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop',
    icon: '💒',
    color: 'from-rose-400 to-pink-600',
    featured: true
  },
  {
    id: 'baby',
    name: 'Baby Products',
    slug: 'baby',
    description: 'Adorable and safe accessories for your little ones',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    icon: '👶',
    color: 'from-blue-400 to-purple-600',
    featured: true
  }
];

export const getCategoryBySlug = (slug) => categories.find(c => c.slug === slug);
export const getFeaturedCategories = () => categories.filter(c => c.featured);