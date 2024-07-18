import path from "path";
const __dirname = path.resolve();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@type": path.resolve(__dirname, "./types"),
      "@axios": path.resolve(__dirname, "./src/plugin/axios.ts"),
      "@dayjs": path.resolve(__dirname, "./src/plugin/dayjs.ts"),
    };
    return config;
  },
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
};

export default nextConfig;
