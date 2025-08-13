'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { BlogNavigationProps } from '@/types/blog';

const BlogNavigation = ({ currentPost, previousPost, nextPost, className = '' }: BlogNavigationProps) => {
  return (
    <nav className={`space-y-8 ${className}`}>
      {/* Breadcrumbs */}
      <div className="flex items-center gap-3 text-sm overflow-hidden">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors duration-200 flex-shrink-0"
          aria-label="Go to home page"
        >
          <Home className="h-4 w-4" />
          <span className="font-noto-sans font-medium hidden sm:inline">Home</span>
        </Link>
        <ChevronRight className="h-4 w-4 text-gray-300 flex-shrink-0" />
        <Link 
          href="/blog" 
          className="text-gray-500 hover:text-primary transition-colors duration-200 font-medium flex-shrink-0"
          aria-label="Go to blog"
        >
          <span className="font-noto-sans">Blog</span>
        </Link>
        <ChevronRight className="h-4 w-4 text-gray-300 flex-shrink-0" />
        <span className="font-lora text-gray-900 font-semibold line-clamp-1 min-w-0 flex-1">
          {currentPost.meta.title}
        </span>
      </div>

      <Separator className="bg-gray-200" />

      {/* Previous/Next Navigation */}
      <div className="flex items-center justify-between gap-4">
        {previousPost ? (
          <Link href={`/blog/${previousPost.slug}`} className="flex-1">
            <Button 
              variant="outline" 
              className="w-full h-auto p-3 sm:p-4 flex items-center gap-2 sm:gap-3 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
            >
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 group-hover:bg-primary/10 transition-colors duration-200 flex-shrink-0">
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 group-hover:text-primary transition-colors duration-200" />
              </div>
              <div className="text-left flex-1 min-w-0 overflow-hidden">
                <div className="font-noto-sans text-xs text-gray-500 font-medium mb-1">Previous Post</div>
                <div className="font-lora font-semibold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors duration-200 text-sm sm:text-base hidden sm:block">
                  {previousPost.meta.title}
                </div>
              </div>
            </Button>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {nextPost ? (
          <Link href={`/blog/${nextPost.slug}`} className="flex-1">
            <Button 
              variant="outline" 
              className="w-full h-auto p-3 sm:p-4 flex items-center gap-2 sm:gap-3 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
            >
              <div className="text-right flex-1 min-w-0 overflow-hidden">
                <div className="font-noto-sans text-xs text-gray-500 font-medium mb-1">Next Post</div>
                <div className="font-lora font-semibold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors duration-200 text-sm sm:text-base hidden sm:block">
                  {nextPost.meta.title}
                </div>
              </div>
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 group-hover:bg-primary/10 transition-colors duration-200 flex-shrink-0">
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 group-hover:text-primary transition-colors duration-200" />
              </div>
            </Button>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </nav>
  );
};

export default BlogNavigation;
