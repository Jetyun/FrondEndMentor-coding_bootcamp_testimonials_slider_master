import('tailwindcss').Config
module.exports = {
  mode: 'jit',
  content: [".{html,js}"],
  theme: {
    fontFamily: {
      'inter':['Inter', 'sans-serif']},
    extend: {},
  },
  plugins: [],
}