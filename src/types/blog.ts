// Blog Types for Masterpet Blog System

export interface BlogMeta {
  title: string;
  description: string;
  date: string;
  author: string;
  tags?: string[];
  image?: string;
  readingTime?: number;
}

export interface BlogPost {
  slug: string;
  meta: BlogMeta;
  content: string;
  excerpt: string;
}

export type BlogTag = string;

export interface BlogSearchParams {
  query?: string;
  tag?: string;
  tags?: string[];
  page?: number;
  limit?: number;
}

export interface BlogPagination {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  postsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface BlogListProps {
  posts: BlogPost[];
  pagination?: BlogPagination;
  searchParams?: BlogSearchParams;
}

export interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export interface BlogPostProps {
  post: BlogPost;
  relatedPosts?: BlogPost[];
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export interface TagCloudProps {
  tags: string[];
  selectedTags?: string[];
  onTagClick: (tag: string) => void;
  className?: string;
}

export interface TagFilterProps {
  tags: string[];
  selectedTags?: string[];
  onTagChange: (tags: string[]) => void;
  className?: string;
}

export interface PaginationProps {
  pagination: BlogPagination;
  onPageChange: (page: number) => void;
  className?: string;
}

export interface BlogNavigationProps {
  currentPost: BlogPost;
  previousPost?: BlogPost;
  nextPost?: BlogPost;
  className?: string;
}

export interface SocialShareProps {
  post: BlogPost;
  className?: string;
}

export interface RelatedPostsProps {
  posts: BlogPost[];
  className?: string;
}

export interface AuthorInfoProps {
  author: string;
  date: string;
  readingTime?: number;
  className?: string;
}

export interface TableOfContentsProps {
  headings: Array<{
    id: string;
    text: string;
    level: number;
  }>;
  className?: string;
}

export interface BlogSEOProps {
  post: BlogPost;
}

export interface BlogListSEOProps {
  posts: BlogPost[];
  pagination?: BlogPagination;
  searchParams?: BlogSearchParams;
}
