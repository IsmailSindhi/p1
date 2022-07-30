/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF0032',
        secondary: '#263238',
      },
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
      },
    },
    screens: {
      // xs: '360px',
      sm: '480px',
      md: '768px',
      // ipad: '830px',
      lg: '1200px',
      // minixl: '1200px',
      xl: '1440px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
