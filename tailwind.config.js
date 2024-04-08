/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('src/assets/images/heroimage.jpg')",
        'offerCard': "url('src/assets/images/bg-card.jpg')",
        'abstract-white': "url('src/assets/images/abstract-white.jpg')",
        'abstract-black': "url('src/assets/images/abstract-black.jpg')",
        'featured-cta': "url('src/assets/images/break.png')",
        'bmi': "url('src/assets/images/bg-bmi.jpg')",
        'cta': "url('src/assets/images/bg-cta.jpg')",
        'banner': "url('src/assets/images/banner.jpg')",
      },
      fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      },
      gridCol: {
        'span-blog': 'span 3 / span 4',
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