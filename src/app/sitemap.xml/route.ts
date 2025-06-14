import { NextResponse } from 'next/server';

const BASE_URL = 'https://masterpet.co.in';

const staticPages = [
  '', // Home
  'privacy-policy',
  'terms-and-conditions',
  'cancellation-policy',
  'return-policy',
  'grooming-report',
];

export async function GET() {
  const urls = staticPages.map(
    (page) =>
      `<url><loc>${BASE_URL}/${page}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`
  ).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 