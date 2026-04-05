/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Adding the Savor brand colors as custom utilities
        savorPink: '#FF007A',
        savorLime: '#CCFF00',
      },
    },
  },
  plugins: [],
}