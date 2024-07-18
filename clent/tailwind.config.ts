import type { Config } from "tailwindcss";

const config: Config = {
  // content: [
  //   "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  // ],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
  //       "gradient-conic":
  //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  //     },
  //   },
  // },
  // screens: {
  //   // 设置PC端优先
  //   sm: { max: "768px" },
  // },
  // plugins: [],
  mode: "jit",
  content: ["./src/**/*.{tsx,html,ts}"],
  theme: {
    extend: {
      colors: {
        "statistics-cyan-color": "rgba(14, 253, 255, 1)",
        "statistics-cyan-border-color": "rgba(14, 253, 255, 0.5)",
      },
    },
    screens: {
      // 设置PC端优先
      sm: { max: "768px" },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
