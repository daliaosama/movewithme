/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          500: '#e91e8c',
          600: '#d01a7e',
          700: '#b01569',
        }
      },
      fontFamily: {
        heading: ['Bebas Neue', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
        body: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
