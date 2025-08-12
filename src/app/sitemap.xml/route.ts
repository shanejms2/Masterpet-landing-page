import { NextResponse } from 'next/server';
import { areaConfig } from '@/lib/areaConfig';

const BASE_URL = 'https://www.masterpet.co.in';

const staticPages = [
  '', // Home
  'privacy',
  'terms-and-conditions',
  'cancellation-policy',
  'return-policy',
  'grooming-report',
  'contact',
  'account-deletion',
  'kochi-pet-grooming',
];

export async function GET() {
  // Generate area-specific URLs
  const areaUrls = areaConfig.map(area => 
    `kochi-pet-grooming/${area.slug}`
  );

  // Combine static pages with area pages
  const allPages = [...staticPages, ...areaUrls];

  // Get current date for lastmod
  const currentDate = new Date().toISOString().split('T')[0];

  const urls = allPages.map(
    (page) => {
      const url = page === '' ? BASE_URL : `${BASE_URL}/${page}`;
      return `<url>
  <loc>${url}</loc>
  <lastmod>${currentDate}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>${page === '' ? '1.0' : '0.8'}</priority>
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