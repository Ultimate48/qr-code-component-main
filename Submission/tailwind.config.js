/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'background' : "hsl(212, 45%, 89%)",
        'para' : "hsl(220, 15%, 55%)",
        'heading' : 'hsl(218, 44%, 22%)'
      },
    },
  },
  plugins: [],
}