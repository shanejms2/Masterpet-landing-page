'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { formatDate, calculateReadingTime } from '@/lib/client-utils';

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

const BlogCard = ({ post, className = '' }: BlogCardProps) => {
  const readingTime = post.meta.readingTime || calculateReadingTime(post.content);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      window.location.href = `/blog/${post.slug}`;
    }
  };

  return (
    <Card 
      className={`group overflow-hidden border-0 bg-white shadow-sm hover:shadow-md transition-all duration-300 ${className}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="button"
      aria-label={`Read blog post: ${post.meta.title}`}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Image */}
        {post.meta.image && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.meta.image}
              alt={post.meta.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        
        <CardContent className="p-6">
          {/* Meta Information */}
          <div className="text-xs text-gray-500 mb-3">
            <span className="font-noto-sans">{post.meta.author}</span>
            <span className="text-gray-300 mx-2">•</span>
            <span className="font-noto-sans">{formatDate(post.meta.date)}</span>
            <span className="text-gray-300 mx-2">•</span>
            <span className="font-noto-sans">{readingTime} min read</span>
          </div>

          {/* Title */}
          <h3 className="font-lora text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200">
            {post.meta.title}
          </h3>

          {/* Description */}
          <p className="font-noto-sans text-sm text-gray-600 mb-4 line-clamp-2">
            {post.meta.description}
          </p>

          {/* Read More */}
          <div className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all duration-200">
            <span className="font-noto-sans">Read more</span>
            <ArrowRight className="h-3 w-3" />
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default BlogCard;
