import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
  },
  compiler: {
    removeConsole: false, // Temporarily disabled for debugging
  },
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}',
    },
  },
  // Target modern browsers to reduce legacy JavaScript
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // SEO: Ensure consistent URLs with trailing slashes
  trailingSlash: false,
  async redirects() {
    return [
      // ─── WordPress legacy pages ───────────────────────────────────────────
      {
        source: '/wp-travel-engine-cart',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-travel-engine-cart/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/category/uncategorized',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/category/uncategorized/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/terms-and-conditions',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/terms-and-conditions/',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/thank-you',
        destination: '/',
        permanent: true,
      },
      {
        source: '/thank-you/',
        destination: '/',
        permanent: true,
      },
      // ─── Old route formats ────────────────────────────────────────────────
      {
        source: '/ourcountries/:slug',
        destination: '/services/tourist-visa/:slug',
        permanent: true,
      },
      {
        source: '/laos',
        destination: '/services/tourist-visa/laos',
        permanent: true,
      },
      {
        source: '/laos/',
        destination: '/services/tourist-visa/laos',
        permanent: true,
      },
      {
        source: '/study-abroad',
        destination: '/services/study-abroad',
        permanent: true,
      },
      {
        source: '/study-abroad/',
        destination: '/services/study-abroad',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*.(svg|jpg|jpeg|png|webp|avif|gif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.(woff|woff2|eot|ttf|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.(js|css)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
