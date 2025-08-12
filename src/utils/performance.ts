// Performance optimization utilities

/**
 * Intersection Observer for lazy loading components
 */
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
) => {
  if (typeof window === 'undefined') return null;
  
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};

/**
 * Lazy load images with intersection observer
 */
export const lazyLoadImage = (
  imgElement: HTMLImageElement,
  src: string,
  onLoad?: () => void,
  onError?: () => void
) => {
  const observer = createIntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = src;
        img.onload = () => {
          img.classList.add('loaded');
          onLoad?.();
        };
        img.onerror = () => {
          img.classList.add('error');
          onError?.();
        };
        observer?.unobserve(img);
      }
    });
  });

  if (observer) {
    observer.observe(imgElement);
  }

  return observer;
};

/**
 * Debounce function for performance optimization
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function for performance optimization
 */
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Preload critical resources
 */
export const preloadResource = (href: string, as: string) => {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
};

/**
 * Monitor Core Web Vitals
 */
export const monitorCoreWebVitals = () => {
  if (typeof window === 'undefined') return;

  // Monitor LCP (Largest Contentful Paint)
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
            // Send to analytics if needed
            if (entry.startTime > 2500) {
              console.warn('LCP is slow:', entry.startTime);
            }
          }
          if (entry.entryType === 'first-input') {
            const firstInputEntry = entry as PerformanceEventTiming;
            const fid = firstInputEntry.processingStart - firstInputEntry.startTime;
            console.log('FID:', fid);
            if (fid > 100) {
              console.warn('FID is slow:', fid);
            }
          }
          if (entry.entryType === 'layout-shift') {
            const layoutShiftEntry = entry as PerformanceEntry & { value: number };
            console.log('CLS:', layoutShiftEntry.value);
            if (layoutShiftEntry.value > 0.1) {
              console.warn('CLS is poor:', layoutShiftEntry.value);
            }
          }
        }
      });
      
      observer.observe({ 
        entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] 
      });
    } catch (error) {
      console.warn('Performance monitoring failed:', error);
    }
  }
};

/**
 * Optimize scroll performance
 */
export const optimizeScroll = (element: HTMLElement) => {
  element.style.willChange = 'transform';
  element.style.transform = 'translateZ(0)';
};

/**
 * Clean up performance optimizations
 */
export const cleanupPerformance = (element: HTMLElement) => {
  element.style.willChange = 'auto';
  element.style.transform = 'none';
};

/**
 * Check if element is in viewport
 */
export const isInViewport = (element: HTMLElement): boolean => {
  if (typeof window === 'undefined') return false;
  
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Get device performance tier
 */
export const getPerformanceTier = (): 'low' | 'medium' | 'high' => {
  if (typeof navigator === 'undefined') return 'medium';
  
  const connection = (navigator as Navigator & { connection?: { effectiveType?: string } }).connection;
  if (connection) {
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      return 'low';
    }
    if (connection.effectiveType === '3g') {
      return 'medium';
    }
  }
  
  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return 'low';
  }
  
  return 'high';
};

/**
 * Adaptive loading based on performance tier
 */
export const adaptiveLoad = (
  lowTier: () => void,
  mediumTier: () => void,
  highTier: () => void
) => {
  const tier = getPerformanceTier();
  
  switch (tier) {
    case 'low':
      lowTier();
      break;
    case 'medium':
      mediumTier();
      break;
    case 'high':
      highTier();
      break;
  }
};
