/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '392px'}, // Add your custom breakpoint name and size
        '2xs': {'max': '340px'},
      },
    },
  },
  plugins: [],
}

