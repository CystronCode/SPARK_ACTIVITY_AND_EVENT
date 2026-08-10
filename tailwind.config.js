/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sparkBlue: '#0B2447',
        sparkLightBlue: '#19376D',
        sparkAccent: '#19A7CE',
        sparkGreen: '#85C227', /* Derived from SPARK logo */
        sparkYellow: '#F1C40F', /* Derived from SPARK logo */
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
