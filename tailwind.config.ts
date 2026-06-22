import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FAF8F5",
          dark: "#F3EFE9",
        },
        teal: {
          light: "#EAF2F4",
          medium: "#5D8B83", // Sage
          DEFAULT: "#1E5F74",
          dark: "#143F4D",
        },
        gold: {
          light: "#F9E8D2",
          DEFAULT: "#E8A038",
          dark: "#D48B27",
        },
        charcoal: {
          DEFAULT: "#2D3748",
          light: "#4A5568",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
