/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {

    screens: {
      sm: '480px',
      md: '768px',
      lg: '979px',
      xl: '1440px'
    },

    extend: {
      colors: {
        deepBlue: '#22202d',
        orange: '#ED760D',
        black: '#000',
        bG: '#d5dae6',
      },
    },
  },
  plugins: [],
}
