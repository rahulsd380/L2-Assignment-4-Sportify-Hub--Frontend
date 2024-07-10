/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        white: '#FFFFFF',
        // coral: '#FF9300',
        // red: '#EF233C',
        // card: {
        //   fill: '#121721',
        //   stroke: '#252526',
        // },
        primary: {
          10: '#D3E1FF',
          20: '#B6CEFE',
          30: '#91B5FE', //primary for dark mode
          35: '#6E40FF',
          40: '#6D9CFE',
          50: '#4884FD',
          55: '#246BFD',
          60: '#1E59D3', //primary for light mode
          70: '#1847A9',
          80: '#12357E',
          90: '#0C2454',
          95: '#246BFD1A',
          100: '#071533',
        },
        neutral: {
          5: '#f5f5f5',
          10 : '#F6F6F6',
          15: '#E9ECF2',
          20: '#DCDFE5',
          25: '#202635',
          30: '#C4C7CC',
          35: '#D9D9D9',
          40: '#ABAEB2', //For Dark theme/Body Text
          45: '#252525',
          55: '#4B494D',
          60: '#333333', //For Light theme/Body Text
          100: '#141414', //For Light theme/Heading
        },
      },
    },
  },
  plugins: [],
}