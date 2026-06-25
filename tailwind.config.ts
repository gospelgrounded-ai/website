import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#01BAB4',
          50: '#E5FBFA',
          100: '#C2F5F3',
          400: '#22D3CC',
          500: '#01BAB4',
          600: '#019A95',
          700: '#017772',
        },
        bg: '#0A0A0A',
        surface: '#141414',
        surface2: '#1E1E1E',
        line: '#252525',
        muted: '#777777',
        muted2: '#555555',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, #252525 1px, transparent 1px), linear-gradient(to bottom, #252525 1px, transparent 1px)',
        'teal-glow':
          'radial-gradient(circle at 50% 0%, rgba(1,186,180,0.18), transparent 60%)',
        'teal-glow-tr':
          'radial-gradient(circle at 100% 0%, rgba(1,186,180,0.14), transparent 55%)',
      },
      backgroundSize: {
        grid: '64px 64px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
