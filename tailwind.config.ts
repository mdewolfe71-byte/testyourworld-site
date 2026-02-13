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
        navy: {
          DEFAULT: "#0B1426",
          light: "#132040",
          mid: "#1a2d54",
        },
        cyan: {
          DEFAULT: "#00E5FF",
          dim: "#00B8D4",
        },
        coral: "#FF6B6B",
        ice: {
          DEFAULT: "#E8F4F8",
          dark: "#d0e8ef",
        },
      },
      fontFamily: {
        outfit: ["'Outfit'", "sans-serif"],
        "dm-sans": ["'DM Sans'", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 229, 255, 0.15)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 229, 255, 0.3)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
