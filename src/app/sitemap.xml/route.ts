import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/blog';

const BASE_URL = 'https://www.masterpet.co.in';

const staticPages = [
  '', // Home
  'privacy',
  'terms-and-conditions',
  'cancellation-policy',
  'return-policy',
  'contact',
  'kochi-pet-grooming',
  'blog',
];

export async function GET() {
  // Generate blog post URLs
  const blogPosts = getAllPosts();
  const blogUrls = blogPosts.map(post => `blog/${post.slug}`);

  // Keep the sitemap focused on indexable, canonical pages.
  const allPages = [...staticPages, ...blogUrls];

  // Get current date for lastmod
  const currentDate = new Date().toISOString().split('T')[0];

  const urls = allPages.map(
    (page) => {
      const url = page === '' ? BASE_URL : `${BASE_URL}/${page}`;
      
      // Set priority based on page type
      let priority = '0.8';
      if (page === '') priority = '1.0';
      else if (page === 'blog') priority = '0.9';
      else if (page.startsWith('blog/')) priority = '0.7';
      
      // Set change frequency based on page type
      let changefreq = 'monthly';
      if (page.startsWith('blog/')) changefreq = 'weekly';
      else if (page === 'blog') changefreq = 'daily';
      
      return `<url>
  <loc>${url}</loc>
  <lastmod>${currentDate}</lastmod>
  <changefreq>${changefreq}</changefreq>
  <priority>${priority}</priority>
</url>`;
    }
  ).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
} 