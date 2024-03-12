import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "768px",
        desktop: "1440px",
      },
      colors: {
        "primary-color": "#5F90F0",
        "second-primary-color": "#185AD9",
        "footer-color": "#0E1025",
        "accent-color": "#FBA017",
        "footer-border": "rgba(255, 255, 255, 0.20)",
        "card-left-icon": "rgba(24, 90, 217, 0.10)",
        "banner-bg": "rgba(255, 140, 56, 0.10)",
        "banner-bg-circle": "rgba(153, 101, 207, 0.10)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
