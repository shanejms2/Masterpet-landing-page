import { format } from 'date-fns';

// Client-safe utility functions for blog components

/**
 * Format date for display (client-side safe)
 */
export const formatDate = (dateString: string): string => {
  try {
    return format(new Date(dateString), 'MMMM dd, yyyy');
  } catch {
    return dateString;
  }
};

/**
 * Calculate reading time for a post (client-side safe)
 */
export const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};
