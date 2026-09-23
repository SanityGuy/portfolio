/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx}",
    "./src/App.tsx",
    "./postcss.config.js",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          accent: "#0b84ff",
          accent2: "#5b5cff",
          darkBg: "#070a0f",
          lightBg: "#f4f7fb",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "float-slow": "float 4.4s ease-in-out infinite",
        "float-reverse": "float 5.2s ease-in-out infinite reverse",
        "float-mid": "float 4.8s ease-in-out infinite",
        "pulse-fast": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px) scale(1)",
          },
          "50%": {
            transform: "translateY(-14px) scale(1.02)",
          },
        },
      },
    },
  },
  plugins: [],
};