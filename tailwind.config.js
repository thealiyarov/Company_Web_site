/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navColor": "#24204a",
        "footColor":"#071341",
        "lineColor":"#8e88c1",
        "textColor":"#7c88b9",
      }
    },
  },
  plugins: [],
};
