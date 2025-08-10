// app/sitemap.js
export default function sitemap() {
  const baseUrl = 'https://everlace.com'
  
  const routes = [
    '',
    '/about',
    '/category',
    '/contact',
    '/factories',
    '/case-studies',
    '/contact',
    '/privacy',
    '/terms'
  ]

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : route === '/privacy' || route === '/terms' ? 'yearly' : 'weekly',
    priority: route === '' ? 1 : route === '/privacy' || route === '/terms' ? 0.3 : 0.8
  }))
}