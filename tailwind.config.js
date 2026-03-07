/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        raisin: '#211D20',
        accent: {
          50: '#FFF5E7',
          100: '#FFE7C5',
          200: '#FFD495',
          300: '#FFC068',
          400: '#FFB24E',
          500: '#FFAC4A',
          600: '#E28A2F',
          700: '#B76523',
          800: '#8B4C1D',
          900: '#633414',
        },
        neutral: {
          50: '#f6f7fb',
          100: '#eceef7',
          200: '#d9def0',
          300: '#c4cbe0',
          400: '#9fa8c3',
          500: '#7c86a7',
          600: '#5b6589',
          700: '#414b6a',
          800: '#28304a',
          900: '#121a2e',
          950: '#070c17',
        },
        brand: {
          50: '#eff5ff',
          100: '#dbe8ff',
          200: '#b7d0ff',
          300: '#91b6ff',
          400: '#699afc',
          500: '#467ef2',
          600: '#2f63d6',
          700: '#1f4eb1',
          800: '#153a86',
          900: '#0d2658',
        },
      },
      fontFamily: {
        // Use the actual Inter font variable defined in app/layout.tsx
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-caveat)', 'Caveat', 'cursive'],
        accent: ['var(--font-caveat)', 'Caveat', 'cursive'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#171717',
            lineHeight: '1.75',
          },
        },
      },
      boxShadow: {
        glow: '0 25px 65px rgba(70, 126, 242, 0.35)',
        'soft-card': '0 20px 60px rgba(7, 12, 23, 0.08)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at 25% 25%, rgba(70,126,242,0.15), transparent 45%), radial-gradient(circle at 75% 0%, rgba(243,111,43,0.1), transparent 35%)',
        'panel-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(231,238,255,0.9) 100%)',
        'panel-muted': 'linear-gradient(135deg, rgba(239,244,255,0.9) 0%, rgba(250,251,255,0.95) 100%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
