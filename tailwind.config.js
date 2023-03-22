/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

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
        'warning': '#bfa057',
        'error': '#bf5757'
      },
      fontFamily: {
        'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'action-image': "url('/public/images_button/Action.png')",
        'adventure-image': "url('/public/images_button/Adventure.png')",
        'animation-image': "url('/public/images_button/Animation.png')",
        'comedy-image': "url('/public/images_button/Comedy.png')",
        'crime-image': "url('/public/images_button/Crime.png')",
        'documentary-image': "url('/public/images_button/Documentary.png')",
        'drama-image': "url('/public/images_button/Drama.png')",
        'family-image': "url('/public/images_button/Family.png')",
        'fantasy-image': "url('/public/images_button/Fantasy.png')",
        'history-image': "url('/public/images_button/History.png')",
        'horror-image': "url('/public/images_button/Horror.png')",
        'music-image': "url('/public/images_button/Music.png')",
        'mystery-image': "url('/public/images_button/Mystery.png')",
        'romance-image': "url('/public/images_button/Romance.png')",
        'scifi-image': "url('/public/images_button/Scifi.png')",
        'tvmovie-image': "url('/public/images_button/Tvmovie.png')",
        'thriller-image': "url('/public/images_button/Thriller.png')",
        'war-image': "url('/public/images_button/War.png')",      
        'western-image': "url('/public/images_button/Western.png')",      
      }
    },
  },
  plugins: [],
}
