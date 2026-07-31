/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5B21B6',
          hover: '#4C1D95',
          light: '#EDE9FE',
        },
        secondary: '#FFFFFF',
        background: '#F8FAFC',
        'text-main': '#0F172A',
        'text-muted': '#64748B',
        border: '#E2E8F0',
        success: '#10B981',
        warning: '#F59E0B',
      },
      boxShadow: {
        sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        glow: '0 0 40px -10px rgba(91, 33, 182, 0.3)',
        'btn-primary': '0 4px 12px rgba(91, 33, 182, 0.2)',
        'btn-primary-hover': '0 6px 16px rgba(91, 33, 182, 0.3)',
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '20px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      keyframes: {
        scroll: {
          to: { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
      },
    },
  },
  plugins: [],
}
