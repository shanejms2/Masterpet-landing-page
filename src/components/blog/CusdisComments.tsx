'use client';

import { useEffect, useRef } from 'react';
import { BlogPost } from '@/types/blog';
import { BLOG_CONFIG } from '@/lib/blog-config';

interface CusdisCommentsProps {
  post: BlogPost;
  className?: string;
}

const CusdisComments = ({ post, className = '' }: CusdisCommentsProps) => {
  const styleRef = useRef<HTMLStyleElement | null>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadCusdis = async () => {
      try {
        // Load Cusdis script if not already loaded
        if (!window.Cusdis && !scriptRef.current) {
          scriptRef.current = document.createElement('script');
          scriptRef.current.src = `${BLOG_CONFIG.comments.cusdis.host}/js/cusdis.es.js`;
          scriptRef.current.async = true;
          scriptRef.current.defer = true;
          
          // Add error handling for script loading
          scriptRef.current.onerror = () => {
            console.warn('Failed to load Cusdis script');
          };
          
          document.head.appendChild(scriptRef.current);
        }

        // Add custom CSS to remove scrollbars and improve styling
        if (!styleRef.current) {
          styleRef.current = document.createElement('style');
          styleRef.current.textContent = `
            /* Remove scrollbars from Cusdis textarea */
            #cusdis_thread textarea {
              resize: none !important;
              overflow: hidden !important;
              scrollbar-width: none !important;
              -ms-overflow-style: none !important;
            }
            
            #cusdis_thread textarea::-webkit-scrollbar {
              display: none !important;
            }
            
            /* Auto-resize textarea */
            #cusdis_thread textarea {
              min-height: 60px !important;
              max-height: 200px !important;
              transition: height 0.2s ease !important;
            }
            
            /* Improve overall Cusdis styling */
            #cusdis_thread {
              font-family: 'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
            }
            
            #cusdis_thread .cusdis-comment-input {
              border-radius: 8px !important;
              border: 1px solid #e5e7eb !important;
            }
            
            #cusdis_thread .cusdis-comment-input:focus {
              border-color: #10b981 !important;
              box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1) !important;
            }
            
            #cusdis_thread .cusdis-comment-submit {
              background-color: #10b981 !important;
              border-color: #10b981 !important;
              border-radius: 6px !important;
              font-weight: 500 !important;
            }
            
            #cusdis_thread .cusdis-comment-submit:hover {
              background-color: #059669 !important;
              border-color: #059669 !important;
            }
          `;
          document.head.appendChild(styleRef.current);
        }

        // Initialize Cusdis when script loads
        const initCusdis = () => {
          if (!isMounted) return;
          
          try {
            if (window.Cusdis && typeof window.Cusdis.init === 'function') {
              window.Cusdis.init({
                host: BLOG_CONFIG.comments.cusdis.host,
                appId: BLOG_CONFIG.comments.cusdis.appId,
                pageId: post.slug,
                pageUrl: `https://www.masterpet.co.in/blog/${post.slug}`,
                pageTitle: post.meta.title,
              });
            }
          } catch (error) {
            console.warn('Failed to initialize Cusdis:', error);
          }
        };

        // Check if script is already loaded
        if (window.Cusdis) {
          initCusdis();
        } else {
          // Wait for script to load
          const handleLoad = () => {
            if (isMounted) {
              // Add a small delay to ensure script is fully loaded
              setTimeout(initCusdis, 100);
            }
          };
          
          window.addEventListener('load', handleLoad);
          
          // Also try to initialize after a timeout as fallback
          setTimeout(() => {
            if (isMounted && window.Cusdis) {
              initCusdis();
            }
          }, 2000);
        }
      } catch (error) {
        console.warn('Error loading Cusdis:', error);
      }
    };

    loadCusdis();

    return () => {
      isMounted = false;
      
      // Clean up script and style
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
      
      if (styleRef.current && styleRef.current.parentNode) {
        styleRef.current.parentNode.removeChild(styleRef.current);
        styleRef.current = null;
      }
    };
  }, [post.slug, post.meta.title]);

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="flex items-center gap-2">
        <svg className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
        </svg>
        <h3 className="font-lora text-xl font-semibold text-gray-900">
          Comments
        </h3>
      </div>

      {/* Cusdis Comments Container */}
      <div 
        id="cusdis_thread"
        data-host={BLOG_CONFIG.comments.cusdis.host}
        data-app-id={BLOG_CONFIG.comments.cusdis.appId}
        data-page-id={post.slug}
        data-page-url={`https://www.masterpet.co.in/blog/${post.slug}`}
        data-page-title={post.meta.title}
        className="min-h-[200px]"
      />
    </div>
  );
};

// Add Cusdis to global window object
declare global {
  interface Window {
    Cusdis?: {
      init: (config: {
        host: string;
        appId: string;
        pageId: string;
        pageUrl: string;
        pageTitle: string;
      }) => void;
    };
  }
}

export default CusdisComments;
