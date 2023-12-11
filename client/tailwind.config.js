/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "#050816",
      secondary: "#aaa6c3",
      tertiary: "#151030",
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
    },
    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
    },
    screens: {
      xs: "450px",
    },
    backgroundImage: {
      // "hero-pattern": "url('/src/assets/herobg.png')",
      "hero-pattern": "url('/src/assets/1.jpeg')",
      "gallery": "url('/bg-gallery1.jpeg')",
    },
    fontFamily: {
      Teko: ['Teko', "sans-serif"],
      Eczar: ['Eczar', 'serif'],
      Londrina_shadow: ['Londrina Shadow', "cursive"],
      Londrina_sketch: ['Londrina Sketch', "cursive"],
      Bungee_outline: ['Bungee Outline', 'cursive'],
      nova_square: ['Nova Square', 'sans'],
      roboto: ["Roboto Condensed", 'sans-serif'],
      robm: ['Roboto Mono', 'monospace'],
    },
  },
};
export const plugins = [];
