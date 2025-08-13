// Analytics utilities for blog tracking

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export const trackBlogView = (postTitle: string, postSlug: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'blog_view', {
      event_category: 'Blog',
      event_label: postTitle,
      custom_parameter: {
        post_slug: postSlug,
      },
    });
  }
};

export const trackBlogSearch = (searchQuery: string, resultsCount: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'blog_search', {
      event_category: 'Blog',
      event_label: searchQuery,
      value: resultsCount,
    });
  }
};

export const trackBlogShare = (platform: string, postTitle: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'blog_share', {
      event_category: 'Blog',
      event_label: platform,
      custom_parameter: {
        post_title: postTitle,
      },
    });
  }
};

export const trackBlogLike = (postTitle: string, action: 'like' | 'unlike') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'blog_like', {
      event_category: 'Blog',
      event_label: postTitle,
      value: action === 'like' ? 1 : -1,
    });
  }
};

export const trackBlogComment = (postTitle: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'blog_comment', {
      event_category: 'Blog',
      event_label: postTitle,
    });
  }
};

export const trackBlogReadTime = (postTitle: string, readingTime: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'blog_read_time', {
      event_category: 'Blog',
      event_label: postTitle,
      value: readingTime,
    });
  }
};

export const trackPopularPosts = (posts: Array<{ title: string; views: number }>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'popular_posts', {
      event_category: 'Blog',
      custom_parameter: {
        posts: posts.map(post => ({ title: post.title, views: post.views })),
      },
    });
  }
};

export const trackSearchQueries = (queries: string[]) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'search_queries', {
      event_category: 'Blog',
      custom_parameter: {
        queries,
      },
    });
  }
};

export const trackConversion = (action: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      event_category: 'Blog',
      event_label: action,
      value,
    });
  }
};
