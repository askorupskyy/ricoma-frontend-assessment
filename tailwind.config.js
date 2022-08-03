const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'src/components/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'src/styles/components/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'src/data/**/*.json'),
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        work: ['Work Sans', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
