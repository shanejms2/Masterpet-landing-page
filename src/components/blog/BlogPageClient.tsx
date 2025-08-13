'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { BlogList, SearchBar, Pagination } from './index';
import { BlogPost, BlogPagination } from '@/types/blog';

interface BlogPageClientProps {
  posts: BlogPost[];
  pagination: BlogPagination;
  searchParams: {
    query?: string;
    page?: string;
  };
}

const BlogPageClient = ({ 
  posts, 
  pagination, 
  searchParams 
}: BlogPageClientProps) => {
  // Convert searchParams to match BlogSearchParams type
  const convertedSearchParams = {
    ...searchParams,
    page: searchParams.page ? parseInt(searchParams.page, 10) : undefined
  };
  const router = useRouter();
  const currentSearchParams = useSearchParams();

  const createQueryString = useCallback((params: Record<string, string | undefined>) => {
    const newSearchParams = new URLSearchParams(currentSearchParams);
    
    Object.entries(params).forEach(([key, value]) => {
      if (value === undefined || value === '') {
        newSearchParams.delete(key);
      } else {
        newSearchParams.set(key, value);
      }
    });
    
    // Reset to page 1 when changing filters
    if (params.query !== undefined) {
      newSearchParams.delete('page');
    }
    
    return newSearchParams.toString();
  }, [currentSearchParams]);

  const handleSearch = useCallback((query: string) => {
    const queryString = createQueryString({ query });
    router.push(`/blog?${queryString}`);
  }, [createQueryString, router]);

  const handlePageChange = useCallback((page: number) => {
    const queryString = createQueryString({ page: page.toString() });
    router.push(`/blog?${queryString}`);
  }, [createQueryString, router]);

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="flex justify-center">
        <SearchBar 
          onSearch={handleSearch}
          placeholder="Search blog posts..."
          className="max-w-md w-full"
        />
      </div>

      {/* Blog List */}
      <div>
        <BlogList 
          posts={posts}
          pagination={pagination}
          searchParams={convertedSearchParams}
        />
      </div>

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="mt-12 flex justify-center">
          <Pagination
            pagination={pagination}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default BlogPageClient;
