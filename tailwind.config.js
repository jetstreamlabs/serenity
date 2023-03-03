/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

// prettier-ignore
module.exports = {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './vendor/protonemedia/laravel-splade/lib/**/*.vue',
    './vendor/protonemedia/laravel-splade/resources/views/**/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        ui: 'Inter',
      },

      colors: {
        blue: {
          DEFAULT: '#00B4E2',
          50: '#9BEBFF',
          100: '#86E6FF',
          200: '#5DDEFF',
          300: '#35D6FF',
          400: '#0CCDFF',
          500: '#00B4E2',
          600: '#0087AA',
          700: '#005B72',
          800: '#002E3A',
          900: '#000102',
        },
        red: {
          DEFAULT: '#C53030',
          50: '#EFBEBE',
          100: '#EBADAD',
          200: '#E38C8C',
          300: '#DB6C6C',
          400: '#D34B4B',
          500: '#C53030',
          600: '#982525',
          700: '#6B1A1A',
          800: '#3E0F0F',
          900: '#110404',
        },
        orange: {
          DEFAULT: '#ED8936',
          50: '#FCECDF',
          100: '#FAE1CC',
          200: '#F7CBA6',
          300: '#F4B581',
          400: '#F09F5B',
          500: '#ED8936',
          600: '#D86C13',
          700: '#A4520F',
          800: '#71390A',
          900: '#3D1F05',
        },
        gray: colors.slate
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
