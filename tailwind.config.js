/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        military: {
          50: '#f0f2f0',
          100: '#d9ddd9',
          200: '#b4bcb4',
          300: '#8a968a',
          400: '#5d6f5d',
          500: '#3a4a3a',
          600: '#2d3b2d',
          700: '#1f2a1f',
          800: '#141d14',
          900: '#0a100a',
          950: '#040704',
        },
        tactical: {
          50: '#f0f4f0',
          100: '#dce3dc',
          200: '#b9c7b9',
          300: '#8fa08f',
          400: '#637563',
          500: '#3a4a3a',
          600: '#2d3b2d',
          700: '#1f2a1f',
          800: '#141d14',
          900: '#0a100a',
          950: '#040704',
        },
        warning: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        danger: {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
        }
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      backgroundImage: {
        'military-gradient': 'linear-gradient(135deg, #1f2a1f 0%, #2d3b2d 50%, #3a4a3a 100%)',
        'tactical-grid': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
      }
    },
  },
  plugins: [],
}