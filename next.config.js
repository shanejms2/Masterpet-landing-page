/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'obyaomptxztycjjakykm.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  productionBrowserSourceMaps: true,
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