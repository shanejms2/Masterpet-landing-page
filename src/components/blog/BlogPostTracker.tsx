'use client';

import { useEffect } from 'react';
import { trackBlogView } from '@/lib/analytics';

interface BlogPostTrackerProps {
  postTitle: string;
  postSlug: string;
}

const BlogPostTracker = ({ postTitle, postSlug }: BlogPostTrackerProps) => {
  useEffect(() => {
    // Track blog post view
    trackBlogView(postTitle, postSlug);
  }, [postTitle, postSlug]);

  return null; // This component doesn't render anything
};

export default BlogPostTracker;
