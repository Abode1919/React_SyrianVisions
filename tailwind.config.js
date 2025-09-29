/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',
        secondary: '#2d3748',
        'accent-color': '#66f2fa',
        'text-color': '#ffffff',
        'text-muted': '#a0aec0',
        'border-color': '#4a5568',
      },
      fontFamily: {
        'cairo': ['Cairo', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease-out forwards',
      },
      backdropBlur: {
        'sm': '4px',
        'md': '8px',
      }
    },
  },
  plugins: [],
};