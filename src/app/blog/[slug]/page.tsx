import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog';
import BlogPost from '@/components/blog/BlogPost';
import BlogNavigation from '@/components/blog/BlogNavigation';
import BlogCard from '@/components/blog/BlogCard';
import BlogPostTracker from '@/components/blog/BlogPostTracker';
import { COMPANY_INFO, absoluteUrl } from '@/lib/constants';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - Masterpet Blog',
    };
  }

  return {
    title: `${post.meta.title} - Masterpet Blog`,
    description: post.meta.description,
    keywords: `${post.meta.tags?.join(', ') || ''}, pet grooming, kochi pet grooming, at-home pet grooming`,
    authors: [{ name: post.meta.author }],
    creator: COMPANY_INFO.legalName,
    publisher: COMPANY_INFO.legalName,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: 'article',
      url: absoluteUrl(`/blog/${post.slug}`),
      siteName: COMPANY_INFO.siteName,
      publishedTime: post.meta.date,
      modifiedTime: post.meta.date,
      authors: [post.meta.author],
      images: post.meta.image ? [
        {
          url: post.meta.image.startsWith('http') ? post.meta.image : absoluteUrl(post.meta.image),
          width: 1200,
          height: 630,
          alt: post.meta.title,
        }
      ] : [
        {
          url: absoluteUrl(COMPANY_INFO.logoPath),
          width: 1200,
          height: 630,
          alt: 'Masterpet Blog',
        }
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.meta.title,
      description: post.meta.description,
      images: post.meta.image ? 
        (post.meta.image.startsWith('http') ? post.meta.image : absoluteUrl(post.meta.image)) :
        absoluteUrl(COMPANY_INFO.logoPath),
    },
    alternates: {
      canonical: absoluteUrl(`/blog/${post.slug}`),
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  // Get related posts
  const relatedPosts = getRelatedPosts(
    post.slug,
    post.meta.tags || []
  );

  // Get previous and next posts
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex(p => p.slug === post.slug);
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : undefined;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : undefined;

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.meta.title,
    description: post.meta.description,
    author: {
      '@type': 'Person',
      name: post.meta.author,
    },
    datePublished: post.meta.date,
    dateModified: post.meta.date,
    publisher: {
      '@type': 'Organization',
      name: COMPANY_INFO.brandName,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(COMPANY_INFO.logoPath),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(`/blog/${post.slug}`),
    },
    image: post.meta.image ? {
      '@type': 'ImageObject',
      url: post.meta.image.startsWith('http') ? post.meta.image : absoluteUrl(post.meta.image),
    } : undefined,
    keywords: post.meta.tags?.join(', '),
  };

  return (
    <>
      <BlogPostTracker postTitle={post.meta.title} postSlug={post.slug} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Navigation */}
        <div className="container mx-auto px-4 py-8">
          <BlogNavigation
            currentPost={post}
            previousPost={previousPost}
            nextPost={nextPost}
          />
        </div>

        {/* Blog Post Content */}
        <div className="container mx-auto px-4 pb-16">
          <BlogPost post={post} />
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-white/80 backdrop-blur-sm border-t border-gray-100 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="font-lora text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    Related Posts
                  </h2>
                  <p className="font-noto-sans text-gray-600 max-w-2xl mx-auto">
                    Discover more insights and tips from our pet care experts
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <BlogCard key={relatedPost.slug} post={relatedPost} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default BlogPostPage;
