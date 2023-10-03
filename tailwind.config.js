/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primarybg: '#1a1a1a', 
      },
      fontFamily: {
        body: ['Netflix Sans', 'Helvetica Neue', 'Segoe UI', 'Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}