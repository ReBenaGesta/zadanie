module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    margin: {
      lg: '168px',
      xl: '195px',
     },
    lineHeight:{
      'sm': '20px',
      'md': '46px',
      'lg': '98px',
      'xl': '282px',
    },
    fontWeight: {
      thin: 100,
      light: 300,
      regular: 400,
      bold: 700,
    },
    fontSize: {
      'sm': '20px',
      'md': '40px',
      'lg': '90px',
      'xl': '260px',
    },
    colors: {
      darkBlue: '#08132c',
      blue1: '#243765',
      blue2: '#233865',
      gray: '#a6a6a6',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
