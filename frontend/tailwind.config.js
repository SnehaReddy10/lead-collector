/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#272829',
        gray: {
          100: '#EEEEEE',
          900: '#31363F',
        },
        'teal-400': '#76ABAE',
      },
    },
  },
  plugins: [],
};
