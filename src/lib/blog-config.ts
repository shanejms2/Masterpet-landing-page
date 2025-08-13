// Blog Configuration
export const BLOG_CONFIG = {
  // Comment System Configuration
  comments: {
    // Set to 'cusdis' to use Cusdis, 'local' to use localStorage-based comments
    system: 'cusdis' as 'cusdis' | 'local',
    
    // Cusdis Configuration
    cusdis: {
      host: 'https://cusdis.com',
      appId: 'e5e3c71c-b460-4f28-a0be-9249c8aba443',
    },
  },
  
  // Social Features
  social: {
    enabled: true,
    platforms: ['facebook', 'twitter', 'linkedin', 'whatsapp', 'email'],
  },
  
  // Analytics
  analytics: {
    enabled: true,
    trackComments: true,
    trackShares: true,
    trackLikes: true,
  },
  
  // Pagination
  pagination: {
    postsPerPage: 9,
  },
  
  // Search
  search: {
    enabled: true,
    debounceMs: 300,
  },
};

// Helper function to get comment system
export const getCommentSystem = () => BLOG_CONFIG.comments.system;

// Helper function to check if Cusdis is enabled
export const isCusdisEnabled = () => BLOG_CONFIG.comments.system === 'cusdis';

// Helper function to check if local comments are enabled
export const isLocalCommentsEnabled = () => BLOG_CONFIG.comments.system === 'local';
