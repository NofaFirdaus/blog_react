/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "Poppins": ["Poppins", "sans-serif"],
          
      },
      colors:{
        'port-gore': {
        '50': '#eef4ff',
        '100': '#dfeaff',
        '200': '#c6d7ff',
        '300': '#a3bbfe',
        '400': '#7e95fb',
        '500': '#5f71f5',
        '600': '#424ae9',
        '700': '#3437ce',
        '800': '#2d32a6',
        '900': '#2c3283',
        '950': '#1c1e53',
    },
    
      },
    },
  },
  plugins: [],
}

