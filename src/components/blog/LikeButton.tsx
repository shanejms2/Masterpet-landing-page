'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { trackBlogLike } from '@/lib/analytics';

interface LikeButtonProps {
  post: BlogPost;
  className?: string;
}

const LikeButton = ({ post, className = '' }: LikeButtonProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Load like state from localStorage
    const storageKey = `blog_like_${post.slug}`;
    const storedLike = localStorage.getItem(storageKey);
    const storedCount = localStorage.getItem(`${storageKey}_count`);
    
    if (storedLike === 'true') {
      setIsLiked(true);
    }
    
    if (storedCount) {
      setLikeCount(parseInt(storedCount, 10));
    } else {
      // Initialize with a random number for demo purposes
      setLikeCount(Math.floor(Math.random() * 50) + 5);
    }
  }, [post.slug]);

  const handleLike = () => {
    const storageKey = `blog_like_${post.slug}`;
    
    if (isLiked) {
      // Unlike
      setIsLiked(false);
      setLikeCount(prev => Math.max(0, prev - 1));
      localStorage.setItem(storageKey, 'false');
      localStorage.setItem(`${storageKey}_count`, (likeCount - 1).toString());
    } else {
      // Like
      setIsLiked(true);
      setLikeCount(prev => prev + 1);
      setIsAnimating(true);
      localStorage.setItem(storageKey, 'true');
      localStorage.setItem(`${storageKey}_count`, (likeCount + 1).toString());
      
      // Reset animation after 1 second
      setTimeout(() => setIsAnimating(false), 1000);
    }

    // Track like event for analytics
    trackBlogLike(post.meta.title, isLiked ? 'unlike' : 'like');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleLike}
      className={`flex items-center gap-2 transition-all duration-200 ${
        isLiked 
          ? 'text-red-500 hover:text-red-600' 
          : 'text-gray-500 hover:text-red-500'
      } ${isAnimating ? 'scale-110' : ''} ${className}`}
      aria-label={isLiked ? 'Unlike this post' : 'Like this post'}
    >
      <Heart 
        className={`h-4 w-4 transition-all duration-200 ${
          isLiked ? 'fill-current' : ''
        } ${isAnimating ? 'animate-pulse' : ''}`}
      />
      <span className="font-medium font-noto-sans">{likeCount}</span>
    </Button>
  );
};

export default LikeButton;
