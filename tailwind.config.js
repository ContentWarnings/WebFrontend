/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-black': '#222222',
        'light-pink': '#7e57c2',
        'dark-pink': '#4d2c91',
      },
    },
  },
  plugins: [],
}
