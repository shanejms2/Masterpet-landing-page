import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/blog';

const BASE_URL = 'https://www.masterpet.co.in';

export async function GET() {
  const posts = getAllPosts();
  const currentDate = new Date().toISOString();

  const items = posts.map((post) => {
    const postUrl = `${BASE_URL}/blog/${post.slug}`;
    const imageUrl = post.meta.image ? 
      (post.meta.image.startsWith('http') ? post.meta.image : `${BASE_URL}${post.meta.image}`) : 
      `${BASE_URL}/brand_assets/Logo-Mark/Green/MP_LogoMark_greenfill.png`;

    return `<item>
  <title><![CDATA[${post.meta.title}]]></title>
  <link>${postUrl}</link>
  <guid>${postUrl}</guid>
  <pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>
  <description><![CDATA[${post.meta.description}]]></description>
  <content:encoded><![CDATA[${post.content}]]></content:encoded>
  <enclosure url="${imageUrl}" type="image/jpeg" />
  <author>${post.meta.author}</author>
  <category>Pet Grooming</category>
  ${post.meta.tags?.map(tag => `<category>${tag}</category>`).join('') || ''}
</item>`;
  }).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:wfw="http://wellformedweb.org/CommentAPI/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
     xmlns:slash="http://purl.org/rss/1.0/modules/slash/">
  <channel>
    <title>Masterpet Blog</title>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <link>${BASE_URL}/blog</link>
    <description>Expert pet grooming tips, customer stories, and behind-the-scenes content from Masterpet. Your trusted source for pet care knowledge.</description>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <language>en-US</language>
    <sy:updatePeriod>weekly</sy:updatePeriod>
    <sy:updateFrequency>1</sy:updateFrequency>
    <image>
      <url>${BASE_URL}/brand_assets/Logo-Mark/Green/MP_LogoMark_greenfill.png</url>
      <title>Masterpet Blog</title>
      <link>${BASE_URL}/blog</link>
    </image>
    ${items}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
