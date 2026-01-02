/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'card-dark': '#130234',
        'price-green': '#6BB27C', // Cor verde do guia
      },
      borderRadius: {
        'card': '16px',
      }
    },
  },
  plugins: [],
}