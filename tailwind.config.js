/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme background
        dark: {
          950: '#0B0F19',  // Main background
          900: '#111827',  // Card background
          800: '#1E293B',  // Secondary
          700: '#334155',  // Borders
          600: '#475569',  // Muted
        },
        // Neon accents
        neon: {
          blue: '#00C2FF',
          cyan: '#00FFE5',
          green: '#00FF88',
          purple: '#A855F7',
          red: '#FF4C4C',
          orange: '#FF8C00',
        },
        // Glass effect
        glass: {
          white: 'rgba(255, 255, 255, 0.05)',
          border: 'rgba(255, 255, 255, 0.1)',
          hover: 'rgba(255, 255, 255, 0.1)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 194, 255, 0.3)',
        'neon-red': '0 0 20px rgba(255, 76, 76, 0.3)',
        'neon-green': '0 0 20px rgba(0, 255, 136, 0.3)',
        'glow': '0 0 30px rgba(0, 194, 255, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 194, 255, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 194, 255, 0.4)' },
        },
      },
    },
  },
  plugins: [],
}
