/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily:{
        poppins: ['Jost', 'sans-serif'],
      },
      colors:{
        primary: '#FFFFFF ', 
        secondary: '#111111',
        tertiary: '#177983 ',
        quaternary:'#D73F0F ',
        quinary: '#DD7733',
        senary: '#757575', 
        septenary:'#EBEBEB',
        octonary:'#555555',
        septenary:'#DEDEDE'
      }
    },
  },
  plugins: [require('daisyui'),],
}