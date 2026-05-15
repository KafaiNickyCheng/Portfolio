import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        neon: {
          DEFAULT: "#7c3aed",
          2: "#4f46e5",
          3: "#a78bfa",
        },
        accent: "#c4b5fd",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
