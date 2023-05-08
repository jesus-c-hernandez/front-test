/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: '#e2e8f0',
        'g-second': '#566573',
        'gray-200': '#ABB2B9',
        'purple-main': '#e1dbfd',
        'purple-second': '#6949f7',
        'gray-transparent': 'rgba(0, 0, 0, .5);',
      },
    },
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
};
