import { Suspense } from 'react';
import { Metadata } from 'next';
import { getAllPosts, searchPosts } from '@/lib/blog';
import BlogPageClient from '@/components/blog/BlogPageClient';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';

export const metadata: Metadata = {
  title: 'Blog - Masterpet Pet Grooming Services',
  description: 'Discover expert pet grooming tips, customer stories, and behind-the-scenes content from Masterpet. Your trusted source for pet care knowledge.',
  keywords: 'pet grooming blog, pet care tips, dog grooming, cat grooming, pet health, grooming advice, kochi pet grooming, at-home pet grooming',
  authors: [{ name: 'Masterpet Care Private Limited' }],
  creator: 'Masterpet Care Private Limited',
  publisher: 'Masterpet Care Private Limited',
  openGraph: {
    title: 'Blog - Masterpet Pet Grooming Services',
    description: 'Expert pet grooming tips and insights from Masterpet',
    type: 'website',
    url: 'https://www.masterpet.co.in/blog',
    siteName: 'Masterpet',
    images: [
      {
        url: '/brand_assets/Logo-Mark/Green/MP_LogoMark_greenfill.png',
        width: 1200,
        height: 630,
        alt: 'Masterpet Blog - Expert Pet Grooming Tips and Insights',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Masterpet Pet Grooming Services',
    description: 'Expert pet grooming tips and insights from Masterpet',
    images: ['/brand_assets/Logo-Mark/Green/MP_LogoMark_greenfill.png'],
  },
  alternates: {
    canonical: 'https://www.masterpet.co.in/blog',
  },
};

interface BlogPageProps {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
}

const POSTS_PER_PAGE = 9;

const BlogPage = async ({ searchParams }: BlogPageProps) => {
  const { query, page = '1' } = await searchParams;
  const currentPage = parseInt(page, 10);
  
  // Get all posts and filter based on search params
  let filteredPosts = getAllPosts();
  
  if (query) {
    filteredPosts = searchPosts(query);
  }
  
  // Pagination
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
  
  const pagination = {
    currentPage,
    totalPages,
    totalPosts,
    postsPerPage: POSTS_PER_PAGE,
    hasNextPage: currentPage < totalPages,
    hasPreviousPage: currentPage > 1,
  };

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Masterpet Blog',
    description: 'Expert pet grooming tips, customer stories, and behind-the-scenes content from Masterpet',
    url: 'https://www.masterpet.co.in/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Masterpet Care Private Limited',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.masterpet.co.in/brand_assets/Logo-Mark/Green/MP_LogoMark_greenfill.png',
      },
    },
    blogPost: paginatedPosts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.meta.title,
      description: post.meta.description,
      author: {
        '@type': 'Person',
        name: post.meta.author,
      },
      datePublished: post.meta.date,
      url: `https://www.masterpet.co.in/blog/${post.slug}`,
      image: post.meta.image ? 
        (post.meta.image.startsWith('http') ? post.meta.image : `https://www.masterpet.co.in${post.meta.image}`) : 
        'https://www.masterpet.co.in/brand_assets/Logo-Mark/Green/MP_LogoMark_greenfill.png',
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-white">
        {/* Breadcrumb Navigation */}
        <BreadcrumbNavigation
          items={[
            { label: 'Blog', href: '/blog' }
          ]}
        />
      
      {/* Header */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h1 className="font-lora text-4xl font-bold text-gray-900 mb-4">
                Blog
              </h1>
              <p className="font-noto-sans text-lg text-gray-600">
                Updated with helpful articles and information relevant to you & your pet.
              </p>
            </div>
            
            {/* Search */}
            <Suspense fallback={<div className="h-20" />}>
              <BlogPageClient
                posts={paginatedPosts}
                pagination={pagination}
                searchParams={await searchParams}
              />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Results Info */}
            <div className="mb-8 text-center">
              {totalPosts === 0 ? (
                <div className="max-w-md mx-auto">
                  <h3 className="font-lora text-xl font-semibold text-gray-900 mb-2">No posts found</h3>
                  <p className="font-noto-sans text-gray-600">Try adjusting your search criteria</p>
                </div>
              ) : (
                <p className="font-noto-sans text-gray-600">
                  {`Showing ${startIndex + 1}-${Math.min(endIndex, totalPosts)} of ${totalPosts} posts`}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default BlogPage;
