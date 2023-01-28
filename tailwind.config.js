/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-1': '#b085f5',
        'primary-2': '#7e57c2',
        'primary-3': '#4d2c91',
        'secondary-1': '#63a4ff',
        'secondary-2': '#1976d2',
        'secondary-3': '#004ba0',
        'light-1': '#ffffff',
        'light-2': '#e0e0e0',
        'light-3': '#b0b0b0',
        'dark-1': '#313131',
        'dark-2': '#1e1e1e',
        'dark-3': '#000000',
      },
    },
  },
  plugins: [],
}
