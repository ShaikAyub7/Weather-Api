module.exports = {
  darkMode: "class", // Ensures dark mode works properly
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // Correct way to use DaisyUI
  daisyui: {
    themes: ["light", "dark"], // Enables light and dark mode
  },
};
