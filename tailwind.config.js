/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#06070a',
          900: '#0a0c12',
          800: '#10131c',
          700: '#181c28',
          600: '#232838',
          500: '#303648',
          400: '#4a5163',
          300: '#6b7388',
          200: '#9ba3b8',
          100: '#c8cfde',
          50: '#e8ebf3',
        },
        accent: {
          600: '#c98a2e',
          500: '#e0a342',
          400: '#edbb62',
          300: '#f4d391',
        },
        signal: {
          500: '#3b82f6',
          400: '#60a5fa',
          300: '#93c5fd',
        },
        emerald2: {
          500: '#10b981',
          400: '#34d399',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'ultra-wide': '0.35em',
        'wide-lg': '0.2em',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease forwards',
        'slide-up': 'slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
      },
    },
  },
  plugins: [],
};
