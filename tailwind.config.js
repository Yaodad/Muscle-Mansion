/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/heroimage.jpg')",
        'offerCard': "url('/bg-card.jpg')",
        'abstract-white': "url('/abstract-white.jpg')",
        'abstract-black': "url('/abstract-black.jpg')",
        'featured-cta': "url('/break.png')",
        'bmi': "url('/bg-bmi.jpg')",
        'cta': "url('/bg-cta.jpg')",
        'banner': "url('/banner.jpg')",
      },
      fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': '#ff6a84',
        'secondary': '#646464',
        'semi-light-gray': '#b4b4b4',
        'light-gray': '#898989'
      },
      screens: {
        'xs': "425px"
      }
    },
  },
  plugins: [],
}