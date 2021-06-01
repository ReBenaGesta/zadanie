const pxToRem = (px) => `${px/16}rem`;

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'fhd': '1920px',
    },
    margin: {
      zero: "0px",
      sm: pxToRem(16),
      md: pxToRem(96),
      lg: pxToRem(168),
      xl: pxToRem(195),
      fhdxl: pxToRem(220), 
     },
    lineHeight:{
      'mobile-sm': pxToRem(20/2),
      'mobile-md': pxToRem(40/2),
      'mobile-lg': pxToRem(90/3),
      'mobile-xl': pxToRem(260/3.5),
      'tablet-sm': pxToRem(20/2),
      'tablet-md': pxToRem(40/1.5),
      'tablet-lg': pxToRem(90/2),
      'tablet-xl': pxToRem(260/2),
      'desktop-sm': pxToRem(20),
      'desktop-md': pxToRem(40),
      'desktop-lg': pxToRem(90),
      'desktop-xl': pxToRem(260),
    },
    fontWeight: {
      thin: 100,
      light: 300,
      regular: 400,
      bold: 700,
    },
    fontSize: {
      'mobile-sm': pxToRem(20/2),
      'mobile-md': pxToRem(40/2),
      'mobile-lg': pxToRem(90/3),
      'mobile-xl': pxToRem(260/3.5),
      'tablet-sm': pxToRem(20/2),
      'tablet-md': pxToRem(40/1.5),
      'tablet-lg': pxToRem(90/3),
      'tablet-xl': pxToRem(260/2),
      'desktop-sm': pxToRem(20),
      'desktop-md': pxToRem(40),
      'desktop-lg': pxToRem(90),
      'desktop-xl': pxToRem(260),
    },
    colors: {
      darkBlue: '#08132c',
      blue1: '#243765',
      blue2: '#233865',
      gray: '#a6a6a6',
      white: '#ffffff',
    },
    extend: {
      zIndex: {
        'minus-10': '-10',
        'minus-20': '-20',
        'minus-30': '-30',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
