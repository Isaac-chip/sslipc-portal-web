const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#85d7ff',
          DEFAULT: "#3078EC",
          dark: '#009eeb',
        },
        yellow:{
          DEFAULT:"#EF8641"
        }
      },
    },
    fontSize: {
      xs:"12px",
      sm: "14px",
      md: "16px",
      lg: "24px",
      xl: "48px",
    },
    minWidth:{
      '1/7':"14.285%"
    }
  },

  plugins: [require("flowbite/plugin")],
};
