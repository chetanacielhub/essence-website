import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/journey',
    '/tracks',
    '/eligibility',
    '/rules',
    '/timeline',
    '/awards',
    '/mentorship',
    '/showcase',
    '/finalists',
    '/results',
    '/colleges',
    '/faq',
    '/contact',
    '/privacy',
    '/terms',
    '/register',
  ];

  const now = new Date('2026-10-28T00:00:00Z');

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/register' ? 0.9 : 0.8,
  }));
}
