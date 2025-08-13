import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/blog';

const BASE_URL = 'https://www.masterpet.co.in';

export async function GET() {
  const posts = getAllPosts();

  const urls = posts.map((post) => {
    const url = `${BASE_URL}/blog/${post.slug}`;
    return `<url>
  <loc>${url}</loc>
  <lastmod>${post.meta.date}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.7</priority>
  <image:image>
    <image:loc>${BASE_URL}${post.meta.image || '/brand_assets/Logo-Mark/Green/MP_LogoMark_greenfill.png'}</image:loc>
    <image:title>${post.meta.title}</image:title>
    <image:caption>${post.meta.description}</image:caption>
  </image:image>
</url>`;
  }).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
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
