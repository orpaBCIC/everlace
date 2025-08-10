// data/products.js
export const products = [
  {
    id: 'traditional-jhumka-001',
    title: 'Traditional Gold Plated Jhumka',
    slug: 'traditional-gold-plated-jhumka',
    category: 'jewelry',
    price: 1200,
    originalPrice: 1500,
    currency: 'BDT',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1588444853019-d3829e752655?w=500&h=500&fit=crop'
    ],
    description: 'Elegant traditional jhumka earrings with intricate gold plating and delicate pearl drops. Perfect for weddings and special occasions.',
    shortDescription: 'Elegant traditional jhumka with gold plating',
    features: [
      'Handcrafted design',
      'Gold plated finish', 
      'Hypoallergenic materials',
      'Secure hook closure',
      'Comes with gift box'
    ],
    material: 'Brass with gold plating',
    dimensions: '4cm x 2.5cm',
    weight: '15g (pair)',
    inStock: true,
    featured: true,
    trending: true,
    tags: ['traditional', 'wedding', 'festive', 'gold', 'jhumka'],
    rating: 4.8,
    reviewCount: 45,
    colors: ['gold', 'rose-gold'],
    occasions: ['wedding', 'festival', 'party']
  },
  {
    id: 'mehndi-ceremony-set-001',
    title: 'Mehndi Ceremony Decoration Set',
    slug: 'mehndi-ceremony-decoration-set',
    category: 'wedding',
    price: 2500,
    originalPrice: 3000,
    currency: 'BDT',
    images: [
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?w=500&h=500&fit=crop'
    ],
    description: 'Complete mehndi ceremony decoration set including decorative tray, henna cones holder, and beautiful marigold garlands.',
    shortDescription: 'Complete mehndi ceremony decoration set',
    features: [
      'Complete decoration set',
      'Handcrafted wooden tray',
      'Marigold garlands included',
      'Henna cone holders',
      'Traditional design'
    ],
    material: 'Wood, fabric, artificial flowers',
    inStock: true,
    featured: true,
    tags: ['mehndi', 'wedding', 'decoration', 'ceremony', 'traditional'],
    rating: 4.9,
    reviewCount: 28,
    occasions: ['mehndi', 'haldi', 'engagement']
  },
  {
    id: 'baby-hair-clips-rainbow-001',
    title: 'Rainbow Baby Hair Clips Set',
    slug: 'rainbow-baby-hair-clips-set',
    category: 'baby',
    price: 350,
    currency: 'BDT',
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1578662996447-5cca3c93c2fa?w=500&h=500&fit=crop'
    ],
    description: 'Adorable set of 8 colorful hair clips for babies and toddlers. Safe, comfortable, and beautiful.',
    shortDescription: 'Set of 8 colorful hair clips for babies',
    features: [
      'Set of 8 clips',
      'Baby-safe materials',
      'No sharp edges',
      'Vibrant colors',
      'Easy to use'
    ],
    material: 'Safe plastic and fabric',
    ageRange: '0-3 years',
    inStock: true,
    featured: false,
    trending: true,
    tags: ['baby', 'hair-accessories', 'colorful', 'safe', 'gift'],
    rating: 4.7,
    reviewCount: 62,
    colors: ['multi-color']
  },
  {
    id: 'silver-pendant-001',
    title: 'Elegant Silver Pendant Necklace',
    slug: 'elegant-silver-pendant-necklace',
    category: 'jewelry',
    price: 850,
    originalPrice: 1000,
    currency: 'BDT',
    images: [
      'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1588444853019-d3829e752655?w=500&h=500&fit=crop'
    ],
    description: 'Beautiful silver-plated pendant necklace with intricate floral design. Perfect for daily wear or special occasions.',
    shortDescription: 'Beautiful silver pendant with floral design',
    features: [
      'Silver plated',
      'Floral design',
      'Adjustable chain',
      'Anti-tarnish coating',
      'Gift packaging'
    ],
    material: 'Brass with silver plating',
    chainLength: '18 inches (adjustable)',
    inStock: true,
    featured: true,
    tags: ['silver', 'pendant', 'necklace', 'floral', 'elegant'],
    rating: 4.6,
    reviewCount: 33,
    occasions: ['daily-wear', 'office', 'casual']
  },
  {
    id: 'haldi-gift-box-001',
    title: 'Haldi Ceremony Gift Box',
    slug: 'haldi-ceremony-gift-box',
    category: 'wedding',
    price: 1800,
    currency: 'BDT',
    images: [
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?w=500&h=500&fit=crop'
    ],
    description: 'Beautifully curated gift box for haldi ceremony with traditional items and decorative elements.',
    shortDescription: 'Curated haldi ceremony gift box',
    features: [
      'Traditional items included',
      'Decorative gift box',
      'Ready to gift',
      'Authentic products',
      'Beautiful presentation'
    ],
    material: 'Mixed traditional materials',
    inStock: true,
    featured: false,
    tags: ['haldi', 'gift-box', 'ceremony', 'traditional', 'wedding'],
    rating: 4.8,
    reviewCount: 19,
    occasions: ['haldi', 'wedding-prep']
  },
  {
    id: 'baby-anklet-001',
    title: 'Delicate Baby Silver Anklet',
    slug: 'delicate-baby-silver-anklet',
    category: 'baby',
    price: 450,
    currency: 'BDT',
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop'
    ],
    description: 'Delicate silver-plated anklet for babies with tiny bells. Traditional and beautiful.',
    shortDescription: 'Delicate silver anklet with bells',
    features: [
      'Baby-safe materials',
      'Adjustable size',
      'Tiny bells',
      'Traditional design',
      'Soft finish'
    ],
    material: 'Silver plated brass',
    ageRange: '3 months - 2 years',
    inStock: true,
    featured: false,
    tags: ['baby', 'anklet', 'silver', 'traditional', 'bells'],
    rating: 4.5,
    reviewCount: 25,
    occasions: ['naming-ceremony', 'gift', 'traditional']
  }
];

// Helper functions
export const getProductById = (id) => products.find(p => p.id === id);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getTrendingProducts = () => products.filter(p => p.trending);
export const getProductsByTag = (tag) => products.filter(p => p.tags.includes(tag));
export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(p => 
    p.title.toLowerCase().includes(lowercaseQuery) ||
    p.description.toLowerCase().includes(lowercaseQuery) ||
    p.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};