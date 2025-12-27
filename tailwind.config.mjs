/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f8ff',
          100: '#e0f0fe',
          200: '#b9e0fe',
          300: '#7cc2fd',
          400: '#36a2fa',
          500: '#0c87eb',
          600: '#1e73be', // Official Brand Blue
          700: '#1a65ab',
          800: '#1e5285',
          900: '#1e466e',
        },
        accent: {
          50: '#fefbec',
          100: '#fef5cc',
          200: '#fdee99',
          300: '#fde05d',
          400: '#fccc26',
          500: '#f5b00b', // A nice complementary yellow/orange if needed
          600: '#d98c06',
          700: '#b46709',
          800: '#92500e',
          900: '#78430f',
        },
        dark: {
          DEFAULT: '#4e4e4e',
          text: '#707070',
        },
        light: {
          DEFAULT: '#f6f6f6',
          surface: '#ffffff',
        },
      },
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
  },
  plugins: [],
}

