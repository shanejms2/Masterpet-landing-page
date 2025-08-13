import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts, searchPosts, getPostsByTag } from '@/lib/blog';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');
  const tag = searchParams.get('tag');
  const limit = parseInt(searchParams.get('limit') || '10');

  let results = getAllPosts();

  if (query) {
    results = searchPosts(query);
  }

  if (tag) {
    results = getPostsByTag(tag);
  }

  // Limit results
  results = results.slice(0, limit);

  // Return only necessary data for search results
  const searchResults = results.map(post => ({
    slug: post.slug,
    title: post.meta.title,
    description: post.meta.description,
    date: post.meta.date,
    author: post.meta.author,
    tags: post.meta.tags,
    image: post.meta.image,
    excerpt: post.excerpt
  }));

  return NextResponse.json({
    results: searchResults,
    total: searchResults.length,
    query: query || null,
    tag: tag || null
  });
}
