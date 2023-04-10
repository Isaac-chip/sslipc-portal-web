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
          light: '#F6F9FF',
          DEFAULT: "#3078EC",
          dark: '#3178EC',
          pagination:"#3C76F3"

        },
        yellow:{
          DEFAULT:"#EF8641"
        },
        gray:{
          light:"#A8A8A8",
          DEFAULT:"#8B8B8B" 
        }
      },
    },
    fontSize: {
      xs:"12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
      xxl:"22px",
      xxxl:"24px",
      28:"28px",
      30:"30px"


    },
    minWidth:{
      '1/7':"14.285%"
    },
   
  },

  plugins: [require("flowbite/plugin"),require('@tailwindcss/forms'),],
};
