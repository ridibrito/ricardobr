/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#007da8'
      },
      spacing: {
        '132': '35rem',
        '33': '20rem'

      }
    },
  },
  plugins: [],
}