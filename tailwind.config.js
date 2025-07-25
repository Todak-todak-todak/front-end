/ @type {import('tailwindcss').Config} */;
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'lg-max': { max: '1900px' },
        xl: '1300px',
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      colors: {
        mainBlue: '#275AEC', // 메인 블루
        softBlue: 'rgba(30, 111, 255, 0.15)',
        inputBlue: 'rgba(1, 88, 254, 0.70)',
        skyBlue: '#BAE6FD',
        mainGray: '#B2B3B5',
      },
      boxShadow: {
        footer: '0 -2px 6px 1px rgba(0, 0, 0, 0.08)',
        commonBox: '2px 2px 10px 0px rgba(0, 0, 0, 0.08)',
      },
      keyframes: {
        'bounce-x-repeat': {
          '0%': { transform: 'translateX(0)' },
          '10%': { transform: 'translateX(6px)' },
          '20%': { transform: 'translateX(0)' },
          '30%': { transform: 'translateX(6px)' },
          '40%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(0)' }, // 나머지는 정지 상태
        },
      },
      animation: {
        'bounce-x-repeat': 'bounce-x-repeat 2s infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
