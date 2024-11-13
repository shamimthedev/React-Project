/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: ['#FAE3B6'],
        btnColor: ['#FFD687'] 
      },
      fontFamily: {
        poppins: ['Poppins']
      }
    },
  },
  plugins: [],
}