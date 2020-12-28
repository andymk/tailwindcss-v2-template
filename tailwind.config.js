const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightblue: colors.lightBlue,
        gray: colors.trueGray,
      },
    },
  },
  variants: {
    extend: {
      ringColor: ["hover"],
      ringOpacity: ["hover"],
      ringWidth: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
