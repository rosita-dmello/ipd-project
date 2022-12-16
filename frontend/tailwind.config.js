/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins'",
      },
      colors: {
        btn: '#37C9EF',
        label: '#909090',
        optBg: '#F7F7F7',
        bor: '#D6D6D6',
        qBor: '#D2D2D2',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
};
