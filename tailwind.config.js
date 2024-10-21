/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hover-color': '#C6783E',
        'hover-color-2': '#A08F74',
      }
    },
  },
  plugins: [],
}

