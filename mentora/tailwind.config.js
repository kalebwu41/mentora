/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        mentora: {
          mint: '#7CFAD3',
          teal: '#19B8C9',
          navy: '#061332',
          midnight: '#010712',
          sand: '#F0F5FF',
          foam: '#E0FBFB',
        },
      },
      boxShadow: {
        glow: '0 30px 80px -35px rgba(15, 192, 189, 0.65)',
        panel: '0 25px 60px -35px rgba(6, 19, 50, 0.45)',
      },
      borderRadius: {
        bubble: '2rem',
      },
      backgroundImage: {
        'mentora-grid':
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)',
        'mentora-hero':
          'linear-gradient(135deg, rgba(124, 250, 211, 0.35), rgba(25, 184, 201, 0.15)), radial-gradient(100% 120% at 0% 0%, rgba(25, 184, 201, 0.35) 0%, transparent 55%), radial-gradient(100% 120% at 100% 0%, rgba(6, 19, 50, 0.9) 0%, rgba(1,7,18,0.95) 55%)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.7, transform: 'scale(0.95)' },
          '50%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

