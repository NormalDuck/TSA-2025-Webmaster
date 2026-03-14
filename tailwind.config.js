/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        chivo: ['var(--font-chivo)'],
      },
      keyframes: {
        scrollUp: {
          from: { transform: "translateY(0)" },
          to:   { transform: "translateY(-50%)" },
        },
        scrollDown: {
          from: { transform: "translateY(-50%)" },
          to:   { transform: "translateY(0)" },
        },
      },
      animation: {
        "scroll-up":   "scrollUp 18s linear infinite",
        "scroll-down": "scrollDown 22s linear infinite",
      },
    },
  },
  plugins: [],
};