/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'army': {
          DEFAULT: '#4a5e3a',
          dark: '#344228',
        },
        'navy': {
          DEFAULT: '#1a2d4a',
          light: '#243d61',
        },
        'saffron': '#c8601a',
        'gold': '#b8941a',
        'army-red': '#c0392b',
        'army-blue': '#1565c0',
        'green-text': '#2e7d32',
        'orange-text': '#e65100',
        'off-white': '#f5f5f0',
        'light-gray': '#eaeae5',
        'border-color': '#d0d0c8',
      },
      fontFamily: {
        'sans': ['Noto Sans', 'sans-serif'],
        'serif': ['Noto Serif', 'serif'],
      },
    },
  },
  plugins: [],
}
