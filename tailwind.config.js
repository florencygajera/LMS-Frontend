/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Army Colors
        army: {
          50: '#f3f5f0',
          100: '#e4e9de',
          200: '#c9d4bd',
          300: '#a5b894',
          400: '#7d9967',
          500: '#5e7d45',
          600: '#4a5e3a', // Primary Army Green
          700: '#3d4d2f',
          800: '#334027',
          900: '#2c3523',
        },
        // Navy Colors
        navy: {
          50: '#e8eef5',
          100: '#c5d4e6',
          200: '#9bb6d4',
          300: '#6d97c0',
          400: '#477eb0',
          500: '#2c6499',
          600: '#1a2d4a', // Primary Navy Blue
          700: '#15243d',
          800: '#111d33',
          900: '#0e172b',
        },
        // Air Force Colors
        airforce: {
          50: '#eef5fc',
          100: '#d5e7f8',
          200: '#a9cbf0',
          300: '#79afe8',
          400: '#5396e1',
          500: '#3581d9',
          600: '#1e6bc7', // Primary Air Force Blue
          700: '#1a5aa3',
          800: '#164c85',
          900: '#13406d',
        },
        // Accent Colors
        saffron: {
          50: '#fef5ef',
          100: '#fde6d6',
          200: '#f9c9aa',
          300: '#f5a876',
          400: '#f18a4c',
          500: '#ed732d',
          600: '#c8601a', // Primary Saffron
          700: '#a64d15',
          800: '#863d12',
          900: '#6b320f',
        },
        gold: {
          500: '#b8941a',
          600: '#a68317',
        },
        // Neutral
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Noto Sans', 'system-ui', 'sans-serif'],
        serif: ['Noto Serif', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'card-hover': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'nav': '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}
