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
        light_primary: '#222831',
        light_details: '#c5e1e2',
        light_background: '#EEEEEE',
        light_selected: '#393E46',
        light_text: '#4B5563'
      },
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
      }
    },
  },
  plugins: [],
}
