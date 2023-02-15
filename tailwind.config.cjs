/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heebo: ["Heebo", "Verdana", "sans-serif"],
      },
      keyframes: {
        scroll: {
          '0%': {  left:'0' },
          '100%': { left:'-100%' },
        }
      },
      animation: {
        scroll: 'scroll 10s linear infinite'
      }
    },
  },
  plugins: [],
};
