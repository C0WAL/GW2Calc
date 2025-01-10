/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        'custom-outline': `0 0 0 3px theme('colors.text_color')`, 
      },
      colors: {
        primary_color: "var(--primary)",
        details_color: "var(--details)",
        background_color: "var(--background)",
        selected_color: "var(--selected)",
        text_color: "var(--text)",
        nav_text_color: "var(--nav_text)",
        border_color: "var(--border)",
        hover_color: "var(--hover)",
      },
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
      }
    },
  },
  plugins: [],
}
