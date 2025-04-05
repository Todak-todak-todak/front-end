/ @type {import('tailwindcss').Config} */;
module.exports = {
  content: ['./index.html', './src//*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'lg-max': { max: '1900px' },
        xl: '1300px',
      },
      fontFamily: {
        sans: ['Noto Sans KR'],
        title: ['Parkinsans'],
        //Ubuntu
        //Righteous
        // Parkinsans
      },
      colors: {
        mainBlue: '#275AEC', // 메인 블루
      },
    },
  },
  plugins: [],
};
