/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        dbrown: '#322C2B',
        sand: '#E4C59E',
        clay: '#AF8260',
        brick: '#803D3B',
      }
    },
  },
  plugins: [],
}
