/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  theme: {
    darkMode: 'class',
    extend: {
      colors: {
        'red': {
          500: '#D6242B',
          600: '#c02027',
        },
      },
      fontFamily: {
        sans: ['Inter']
      },
    }
  },
}
