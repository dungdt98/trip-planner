/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js}"],
  theme: {
    extend: {
      colors: {
        'gray-1': '#23262F',
        'gray-2': '#353945',
        'gray-3': '#777E90',
        'gray-6': '#F4F5F6',
        'gray-7': '#F4F5F9',
        'green-10': '#EEF9F2',
        'green-success': '#58C27D',
        'orange-secondary': '#FA8F54',
        'orange-9': '#FEE2B6',
        'orange-10': '#FFF4EE',
        'orange-11': '#F5B318',
        'yellow-1': '#FBF6C7',
        'blue-10': '#EBF1FF',
        'blue-11': '#EAF0FF',
        'blue-12': '#3B71FE',
        'red-20': '#FFE0E2'
      },
      fontSize: {
        base: '1rem',
        sm: '0.8rem',
        md: '1rem',
        lg: '1.1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      screens: {
        xs: '320px'
      }
    },
  },
  plugins: [],
}
