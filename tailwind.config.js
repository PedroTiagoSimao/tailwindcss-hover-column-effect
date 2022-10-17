/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
      },
      backgroundImage: {
        'column1': "url('/images/media-1.jpg')",
        'column2': "url('/images/media-2.jpg')",
        'column3': "url('/images/media-3.jpg')",
      }
    },
  },
  plugins: [],
}
