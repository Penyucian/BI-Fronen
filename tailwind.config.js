const color = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: color.white,
      gray: color.coolGray,
      blue: color.blue,
      yellow: color.amber,
      fuschia: color.fuschia,
      green: color.lime,
      red: color.rose
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
