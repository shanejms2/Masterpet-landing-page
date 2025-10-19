/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  
  // Bundle optimization
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      '@radix-ui/react-icons', 
      'lucide-react',
      'react-icons',
      'framer-motion',
      'gsap'
    ],
  },
  // Ensure native deps are not bundled on server
  serverExternalPackages: ['ssh2','cpu-features'],

  // Modern JavaScript optimization - target browsers that support ES2020+
  // Note: swcMinify is enabled by default in Next.js 15+
  
  // Configure SWC to avoid transpiling modern features
  compiler: {
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Modern browser targets to avoid unnecessary polyfills
  transpilePackages: [],
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'obyaomptxztycjjakykm.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Disable source maps in production for better performance
  productionBrowserSourceMaps: false,

  // Webpack configuration to optimize bundle size
  webpack: (config, { dev, isServer }) => {
    // Bundle analyzer for development
    if (process.env.ANALYZE === 'true' && !isServer) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          reportFilename: '../reports/bundle-analyzer.html',
        })
      );
    }

    // Only apply optimizations in production
    if (!dev && !isServer) {
      // Optimize bundle splitting for better caching
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000,
        maxSize: 244000, // Limit chunk size to 244KB
        cacheGroups: {
          // Default vendor chunk
          default: {
            minChunks: 1,
            priority: -20,
            reuseExistingChunk: true,
          },
          // Vendor chunks for better caching
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: -10,
            enforce: true,
          },
          // Separate heavy libraries into individual chunks
          gsap: {
            test: /[\\/]node_modules[\\/]gsap[\\/]/,
            name: 'gsap',
            chunks: 'all',
            priority: 20,
            enforce: true,
          },
          framer: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: 'framer-motion',
            chunks: 'all',
            priority: 20,
            enforce: true,
          },
          reactIcons: {
            test: /[\\/]node_modules[\\/]react-icons[\\/]/,
            name: 'react-icons',
            chunks: 'all',
            priority: 15,
            enforce: true,
          },
          radix: {
            test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
            name: 'radix-ui',
            chunks: 'all',
            priority: 15,
            enforce: true,
          },
          supabase: {
            test: /[\\/]node_modules[\\/]@supabase[\\/]/,
            name: 'supabase',
            chunks: 'all',
            priority: 15,
            enforce: true,
          },
          // Heavy utilities
          utils: {
            test: /[\\/]node_modules[\\/](html2canvas|html2pdf\.js|puppeteer)[\\/]/,
            name: 'utils',
            chunks: 'all',
            priority: 15,
            enforce: true,
          },
          // Common chunks
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true,
            priority: 5,
          },
        },
      };

      // Optimize module resolution
      config.resolve.alias = {
        ...config.resolve.alias,
        // Reduce bundle size by using lighter alternatives
        'react-icons': 'react-icons/fa',
      };

      // Enable tree shaking
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }

    // Add performance hints
    config.performance = {
      ...config.performance,
      hints: dev ? false : 'warning',
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    };

    return config;
  },
  
  // Headers for caching and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
      {
        source: '/brand_assets/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Add cache headers for Supabase video files
      {
        source: '/api/proxy-video/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
  
  async redirects() {
    return [
      // Domain canonicalization - redirect non-www to www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'masterpet.co.in',
          },
        ],
        destination: 'https://www.masterpet.co.in/:path*',
        permanent: true,
      },
      // Legacy page redirects
      {
        source: '/privacy-policy.html',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/terms-and-conditions.html',
        destination: '/terms-and-conditions',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig 