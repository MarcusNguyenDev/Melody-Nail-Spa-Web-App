/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../src/images/HeroBg.jpg')",
        hero2:
          "url('../src/images/Pink_flower_frame_background_with_watercolor.jpg')",
      },
      fontFamily: {
        "Dancing-Script": ["Dancing Script", "cursive"],
        Bilbo: ["Bilbo", "cursive"],
        Farsan: ["Farsan", "cursive"],
        Pacifico: ["Pacifico", "cursive"],
        Lobster: ["Lobster", "cursive"],
      },
    },
  },
  plugins: [],
};
