/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#080809',
          800: '#0F0F11',
          700: '#18181C',
          600: '#222226',
        },
        // Remap indigo → gold (propagates through whole codebase)
        indigo: {
          300: '#F5E2A0',
          400: '#E8C54A',
          500: '#D4AF37',
          600: '#B89B2A',
          700: '#9A7F20',
        },
        // Remap violet → amber-gold
        violet: {
          400: '#F0D060',
          500: '#C9A227',
          600: '#A67C00',
          700: '#8A6600',
        },
        emerald: {
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
        },
        gold: {
          50:  '#FFFBEB',
          100: '#FEF3C7',
          200: '#FCE68A',
          300: '#F5D060',
          400: '#E8C54A',
          500: '#D4AF37',
          600: '#B89B2A',
          700: '#9A7F20',
          800: '#7D6519',
          900: '#4D3D06',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'ripple': 'ripple 0.6s linear',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
        'fire': 'fire 0.5s ease-in-out infinite alternate',
        'spin-slow': 'spin 3s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'ticker': 'ticker 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(212,175,55,0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(212,175,55,0.6)' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: 1 },
          '100%': { transform: 'scale(4)', opacity: 0 },
        },
        'fade-in-up': {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-in-left': {
          from: { opacity: 0, transform: 'translateX(-30px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        'slide-in-right': {
          from: { opacity: 0, transform: 'translateX(30px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        fire: {
          from: { transform: 'scale(1) rotate(-2deg)' },
          to: { transform: 'scale(1.1) rotate(2deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
