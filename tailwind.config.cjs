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
          "0%": { left: "0%" },
          "100%": { left: "-100%" },
        },
        scroll_reverse: {
          "0%": { left: "-100%" },
          "100%": { left: "0" },
        },
      },
      animation: {
        scroll: "scroll 10s linear infinite",
        scroll_revere: "scroll_reverse 10s linear infinite",
      },
    },
  },
  plugins: [],
};
