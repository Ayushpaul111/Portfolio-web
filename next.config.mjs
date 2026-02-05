/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // SEO optimizations
  compress: true,
  poweredByHeader: false,

  // Image optimization for better performance
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },

  // Headers for security and SEO
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=43200",
          },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/resume",
        destination:
          "/?utm_source=resume&utm_medium=pdf&utm_campaign=job_application",
        permanent: false,
      },
      {
        source: "/insta",
        destination:
          "/?utm_source=instagram&utm_medium=social&utm_campaign=bio_link",
        permanent: false,
      },
      {
        source: "/linkedin",
        destination:
          "/?utm_source=linkedin&utm_medium=social&utm_campaign=profile_link",
        permanent: false,
      },
      {
        source: "/fb",
        destination:
          "/?utm_source=facebook&utm_medium=social&utm_campaign=profile_link",
        permanent: false,
      },
      {
        source: "/email",
        destination:
          "/?utm_source=email&utm_medium=email&utm_campaign=signature",
        permanent: false,
      },
    ];
  },

  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
