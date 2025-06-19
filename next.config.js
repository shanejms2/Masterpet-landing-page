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