const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    cursor: {
      zoom: 'zoom-in',
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      crosshair: 'crosshair',
    },
    screens: {
      'print': {'raw': 'print'},
      'landscape': {'raw': '(orientation: landscape)'},
      'portrait': {'raw': '(orientation: portrait)'},

      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1536px',

      'mm-sm': {'max': '767px'},
      'mm-md': {'min': '768px', 'max': '1023px'},
      'mm-lg': {'min': '1024px', 'max': '1279px'},
      'mm-xl': {'min': '1280px', 'max': '1535px'},
      'mm-xxl': {'min': '1536px'},
    },
    colors: {
      black: colors.black,
      white: colors.white,
      yellow: "#fff000",
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {
      width: {
        'pxl': 'calc(100vw - 10rem)',
      },
      height: {
        'pxl': 'calc(100vh - 70px)',       
      },
      minHeight: {
        'pxl': 'calc(100vh - 70px)',
      },
      lineHeight: {
      'pxl': '5rem',
      },
      keyframes: {
        verticalTextScrolling: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          'to': { transform: 'translate3d(0, -50%, 0)' },
        },
        horizontalTextScrolling: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          'to': { transform: 'translate3d(-50%, 0, 0)' },
        },
      },
      animation: {
        verticalTextScrolling: 'verticalTextScrolling 30s linear infinite',
        horizontalTextScrolling: 'horizontalTextScrolling 30s linear infinite',
      },
      transitionDelay: {
        '0': '0ms',
      },
      transitionDuration: {
        '0': '0ms',
        '5000': '5000ms',
      },
      fontFamily: {
        'aliseo': ['"ALISEO"'],
        'aktura': ['"AKTURA"'],
      }
    }
  },
  variants: {

  },
  plugins: [],
}
