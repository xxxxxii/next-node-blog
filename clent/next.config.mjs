import path from "path";
const __dirname = path.resolve();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "standalone",
  experimental: {
    scrollRestoration: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@type": path.resolve(__dirname, "./types"),
      "@axios": path.resolve(__dirname, "./src/plugin/axios.ts"),
      "@dayjs": path.resolve(__dirname, "./src/plugin/dayjs.ts"),
    };
    return config;
  },
  // CDN地址
  assetPrefix: process.env.CDN || "",
  // 设置缓存
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|css|js|webp)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: process.env.NEXT_PUBLIC_ISPRO
              ? "public, max-age=9999999999, must-revalidate"
              : "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/sitemap/index:path*.xml",
        destination: "/sitemap/index[index].xml",
      },
      {
        source: "/sitemap/:path*",
        destination: "/sitemap/[index]",
        has: [
          {
            type: "query",
            key: "index",
          },
        ],
      },
    ];
  },
  images: process.env.CDN
    ? {
        remotePatterns: [
          {
            protocol: new URL(process.env.CDN).protocol.replace(":", ""), // 获取协议并去掉末尾的冒号
            hostname: new URL(process.env.CDN).hostname,
            pathname: "/**",
          },
        ],
        domains: [new URL(process.env.CDN).hostname],
      }
    : undefined,
};

export default nextConfig;
