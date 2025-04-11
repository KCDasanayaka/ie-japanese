/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'red-brand': '#B93437', // your custom red
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Montserrat as the default sans-serif font
      },
    },
  },
  plugins: [],
}

