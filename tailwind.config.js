/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      primary: '#1a1f71',
      secondary: '#82b1ff',
      neutral: '#b0bec5',
      gray: '#84817a',
      white: '#ffffff',
      black: '#000000'
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        Inter : ["Inter", "sans-serif"],
        Mulish : ["Mulish", "sans-serif"],
        Quicksand : ["Quicksand", "serif"]
      },
    },
  },
  plugins: [],
}

