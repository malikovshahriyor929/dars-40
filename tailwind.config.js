/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#007db6",
      },
      fontFamily:{
        "sans" :["Inter"]
      },
    },
  },
  plugins: [],
};
