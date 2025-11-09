/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', 'system-ui', 'sans-serif'],
      },
      colors: {
        mentora: {
          blue: '#1D4ED8',
          navy: '#0F172A',
          sky: '#38BDF8',
          pale: '#EFF6FF',
        },
      },
      boxShadow: {
        glow: '0 15px 45px -15px rgba(29, 78, 216, 0.45)',
      },
      backgroundImage: {
        'gradient-mentora': 'radial-gradient(circle at top, rgba(56, 189, 248, 0.25), transparent 55%), linear-gradient(135deg, #0F172A, #1D4ED8)',
      },
    },
  },
  plugins: [],
};

