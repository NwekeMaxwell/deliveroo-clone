/** @type {import('tailwindcss').Config} */
// Remember to replace <custom directory> with the actual
//  name of your directory e.g. screens.
module.exports = {
  // content: [],
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
