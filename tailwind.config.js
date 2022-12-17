/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Dancing-Script': ['Dancing Script',"cursive"],
        'Bilbo':['Bilbo', 'cursive'],
        'Farsan':['Farsan', 'cursive']
      },
    },
  },
  plugins: [],
}
