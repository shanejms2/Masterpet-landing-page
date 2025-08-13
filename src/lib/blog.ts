import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { format } from 'date-fns';

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

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

/**
 * Get all blog posts sorted by date
 */
export const getAllPosts = (): BlogPost[] => {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Create excerpt from content
      const excerpt = matterResult.content
        .replace(/[#*`]/g, '') // Remove markdown syntax
        .substring(0, 160) // Limit to 160 characters
        .trim() + '...';

      return {
        slug,
        meta: matterResult.data as BlogMeta,
        content: matterResult.content,
        excerpt,
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.meta.date < b.meta.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

/**
 * Get a single blog post by slug
 */
export const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Create excerpt
    const excerpt = matterResult.content
      .replace(/[#*`]/g, '')
      .substring(0, 160)
      .trim() + '...';

    return {
      slug,
      meta: matterResult.data as BlogMeta,
      content: contentHtml,
      excerpt,
    };
  } catch {
    console.error(`Error reading post ${slug}:`, 'Unknown error');
    return null;
  }
};

/**
 * Search posts by query
 */
export const searchPosts = (query: string): BlogPost[] => {
  const allPosts = getAllPosts();
  const searchTerm = query.toLowerCase();

  return allPosts.filter((post) => {
    const titleMatch = post.meta.title.toLowerCase().includes(searchTerm);
    const descriptionMatch = post.meta.description.toLowerCase().includes(searchTerm);
    const contentMatch = post.content.toLowerCase().includes(searchTerm);
    const tagMatch = post.meta.tags?.some(tag => tag.toLowerCase().includes(searchTerm));

    return titleMatch || descriptionMatch || contentMatch || tagMatch;
  });
};

/**
 * Get all unique tags
 */
export const getAllTags = (): string[] => {
  const allPosts = getAllPosts();
  const allTags = allPosts.flatMap((post) => post.meta.tags || []);
  return [...new Set(allTags)];
};

/**
 * Get posts by tag
 */
export const getPostsByTag = (tag: string): BlogPost[] => {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => 
    post.meta.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
  );
};

/**
 * Get posts by multiple tags (AND logic)
 */
export const getPostsByTags = (tags: string[]): BlogPost[] => {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => 
    tags.every(tag => 
      post.meta.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
    )
  );
};

/**
 * Format date for display
 */
export const formatDate = (dateString: string): string => {
  try {
    return format(new Date(dateString), 'MMMM dd, yyyy');
  } catch {
    return dateString;
  }
};

/**
 * Calculate reading time for a post
 */
export const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

/**
 * Get related posts based on tags
 */
export const getRelatedPosts = (currentSlug: string, tags: string[] = []): BlogPost[] => {
  const allPosts = getAllPosts();
  
  return allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      let score = 0;
      
      // Tag matches
      const commonTags = tags.filter(tag => 
        post.meta.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
      );
      score += commonTags.length * 2; // Give more weight to tag matches
      
      return { post, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ post }) => post);
};
