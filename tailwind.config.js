/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Sono'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        flip: {
          '0%': {
            transform: 'rotateX(0)',
          },
          '45%': {
            transform: 'rotateX(90deg)',
          },
          '55%': {
            transform: 'rotateX(90deg)',
          },
          '100%': {
            transform: 'rotateX(0)',
          },
        }

      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        flip: 'flip 0.5 ease forwards'
      }
    },
  },
  plugins: [],
}

