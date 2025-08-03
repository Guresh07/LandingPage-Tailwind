/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'body':["Inter", 'sans-serif'],
        'content':["Poppins", 'sans-serif']
      }

    },
  },
  plugins: [],
}

