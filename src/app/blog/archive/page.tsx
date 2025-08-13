import { Metadata } from 'next';
import { getAllPosts, getAllTags } from '@/lib/blog';
import { formatDate } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog Archive - Masterpet Pet Grooming Services',
  description: 'Browse all blog posts from Masterpet. Expert pet grooming tips, customer stories, and insights organized by date and tags.',
  openGraph: {
    title: 'Blog Archive - Masterpet Pet Grooming Services',
    description: 'Browse all blog posts from Masterpet organized by date and tags.',
  },
};

const BlogArchivePage = () => {
  const posts = getAllPosts();
  const tags = getAllTags();

  // Group posts by year and month
  const postsByDate = posts.reduce((acc, post) => {
    const date = new Date(post.meta.date);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    const key = `${year}-${month}`;
    
    if (!acc[key]) {
      acc[key] = {
        year,
        month,
        posts: []
      };
    }
    
    acc[key].posts.push(post);
    return acc;
  }, {} as Record<string, { year: number; month: string; posts: typeof posts }>);

  const sortedDates = Object.values(postsByDate).sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year;
    return new Date(b.month + ' 1, ' + b.year).getTime() - new Date(a.month + ' 1, ' + a.year).getTime();
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h1 className="font-lora text-4xl font-bold text-gray-900 mb-4">
                Blog Archive
              </h1>
              <p className="font-noto-sans text-lg text-gray-600">
                Browse all our blog posts organized by date and topics.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg border border-primary/10">
                <div className="text-2xl font-bold text-primary mb-2">{posts.length}</div>
                <div className="text-sm text-gray-600">Total Posts</div>
              </div>
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg border border-primary/10">
                <div className="text-2xl font-bold text-primary mb-2">{tags.length}</div>
                <div className="text-sm text-gray-600">Topics Covered</div>
              </div>
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg border border-primary/10">
                <div className="text-2xl font-bold text-primary mb-2">
                  {new Date(posts[0]?.meta.date).getFullYear()}
                </div>
                <div className="text-sm text-gray-600">Years of Content</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archive Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {sortedDates.map(({ year, month, posts: monthPosts }) => (
              <div key={`${year}-${month}`} className="mb-12">
                <h2 className="font-lora text-2xl font-semibold text-gray-900 mb-6">
                  {month} {year}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {monthPosts.map((post) => (
                    <div key={post.slug} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="text-sm text-gray-500 mb-2">
                        {formatDate(post.meta.date)}
                      </div>
                      <h3 className="font-lora text-lg font-semibold text-gray-900 mb-2">
                        <a href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                          {post.meta.title}
                        </a>
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {post.meta.description}
                      </p>
                      {post.meta.tags && post.meta.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {post.meta.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                          {post.meta.tags.length > 3 && (
                            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded">
                              +{post.meta.tags.length - 3} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogArchivePage;
