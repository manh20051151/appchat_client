/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/index.html",
],
  
  theme: {
    extend: {
      backgroundColor:{
        overlay: 'rgba(0,0,0,0.3)',
      }
        
    },
  },
  plugins: [],
}