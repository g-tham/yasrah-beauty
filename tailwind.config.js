/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        ink: '#171715',
        bone: '#f1eee8',
        ash: '#c8c2b8',
        taupe: '#8c8378',
        smoke: '#54514d',
        champagne: '#b4a087'
      },
      letterSpacing: {
        luxury: '0.18em',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(0,0,0,0.16)'
      }
    },
  },
  plugins: [],
}
