/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        maternify: {
          pink: '#FFC8DD',
          blue: '#BDE0FE',
          purple: '#CDB4DB',
          'light-pink': '#FFAFCC',
          'light-blue': '#A2D2FF',
        },
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};