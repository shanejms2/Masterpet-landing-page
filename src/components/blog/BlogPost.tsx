'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, Tag, Link2 } from 'lucide-react';
import { BlogPost as BlogPostType } from '@/types/blog';
import { formatDate, calculateReadingTime } from '@/lib/client-utils';
import SocialShare from './SocialShare';
import LikeButton from './LikeButton';

interface BlogPostProps {
  post: BlogPostType;
  className?: string;
}

const BlogPost = ({ post, className = '' }: BlogPostProps) => {
  const readingTime = post.meta.readingTime || calculateReadingTime(post.content);

  const handleCopyLink = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // Clipboard unavailable; link still usable from address bar
    }
  };

  return (
    <article className={`max-w-4xl mx-auto ${className}`}>
      {/* Hero Section */}
      <div className="mb-16">
        {/* Tags */}
        {post.meta.tags && post.meta.tags.length > 0 && (
          <div className="flex items-center gap-2 mb-8 flex-wrap">
            {post.meta.tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="outline" 
                className="flex items-center gap-1 px-3 py-1 bg-primary/5 border-primary/20 text-primary text-sm font-medium font-noto-sans hover:bg-primary/10 transition-colors"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="font-lora text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-gray-900 tracking-tight">
          {post.meta.title}
        </h1>

        {/* Description */}
        <p className="font-noto-sans text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl font-light">
          {post.meta.description}
        </p>

        {/* Hero Image */}
        {post.meta.image && (
          <div className="relative h-80 md:h-96 lg:h-[500px] mb-10 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
            <Image
              src={post.meta.image}
              alt={post.meta.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>
        )}

        {/* Meta Information */}
        <div className="flex items-center justify-between flex-wrap gap-6">
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="font-noto-sans font-medium text-gray-700">{post.meta.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="font-noto-sans font-medium">{formatDate(post.meta.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="font-noto-sans font-medium">{readingTime} min read</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <LikeButton post={post} />
            <SocialShare post={post} />
            <button
              type="button"
              onClick={handleCopyLink}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-200 font-noto-sans"
              aria-label="Copy link to this post"
            >
              <Link2 className="h-4 w-4" aria-hidden="true" />
              <span className="font-noto-sans">Copy link</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <div 
          className="font-noto-sans text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
};

export default BlogPost;
