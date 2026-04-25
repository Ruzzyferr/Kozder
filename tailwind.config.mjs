/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FDF2E3',
          100: '#F6E2C9',
          200: '#E0B683',
          300: '#C88C55',
          400: '#AF8560',
          500: '#8B5E3C',
          600: '#7A5135',
          700: '#6B4630',
          800: '#5A3A22',
          900: '#382F2F',
        },
        accent: {
          50: '#FFF9E6',
          100: '#FEF5CC',
          200: '#FDE899',
          300: '#F7C548',
          400: '#F1913B',
          500: '#E44933',
          600: '#84BB4B',
          700: '#4AB8B5',
          800: '#A06AAB',
          900: '#2B678F',
        },
        brand: {
          walnut: '#6B4630',
          cream: '#FBF6E9',
          paper: '#F4ECD8',
          ink: '#161110',
          stamp: '#9C2A1B',
          postage: '#E44933',
          sun: '#F7C548',
          ocean: '#2B678F',
          leaf: '#84BB4B',
        },
        surface: {
          base: '#F4ECD8',
          card: '#FBF6E9',
          muted: '#EFE3C7',
          dim: '#E5D4AE',
          ink: '#161110',
        },
        ink: {
          DEFAULT: '#231C1C',
          soft: '#3F3530',
          muted: '#5C4D45',
          subtle: '#6B5A4F',
        },
        brain: {
          light: '#99D5D6',
          DEFAULT: '#2B678F',
          dark: '#1A4A6B',
        },
        dark: {
          DEFAULT: '#231C1C',
          text: '#3F3530',
          muted: '#5C4D45',
        },
        light: {
          DEFAULT: '#F4ECD8',
          surface: '#FFFBF1',
          cream: '#F8F2E1',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        heading: ['Oswald', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        soft: '0 1px 2px 0 rgb(35 28 28 / 0.05), 0 1px 3px 0 rgb(35 28 28 / 0.06)',
        card: '0 6px 18px -6px rgb(35 28 28 / 0.12), 0 2px 4px -2px rgb(35 28 28 / 0.06)',
        cardHover: '0 16px 40px -10px rgb(107 70 48 / 0.22), 0 6px 12px -6px rgb(35 28 28 / 0.08)',
        stamp: '2px 2px 0 0 #231C1C',
        stampLg: '4px 4px 0 0 #231C1C',
        postcard: '0 1px 0 0 #231C1C, 0 0 0 1px #231C1C, 6px 6px 0 0 #6B4630',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      maxWidth: {
        prose: '70ch',
      },
      backgroundImage: {
        'paper-grain': "radial-gradient(ellipse at 20% 30%, rgba(107,70,48,0.04), transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(155,90,50,0.04), transparent 50%)",
        'perforation': "radial-gradient(circle at 4px 50%, transparent 3px, #231C1C 3px, #231C1C 4px, transparent 4px)",
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'marquee-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'stamp-wobble': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(-1deg)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out both',
        'marquee-x': 'marquee-x 35s linear infinite',
        'stamp-wobble': 'stamp-wobble 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
