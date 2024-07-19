/** @type {import('postcss-load-config').Config} */
const config = {
  // plugins: {
  //   tailwindcss: {},
  // },
  plugins: {
    tailwindcss: {},
    // autoprefixer: {},//自动前缀
    ...(process.env.NEXT_PUBLIC_ISPRO
      ? {
          cssnano: {},
        }
      : {}),
  },
};

export default config;
