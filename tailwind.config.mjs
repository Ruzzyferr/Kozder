/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FDF2E3', // Açık krem (gradient üst)
          100: '#F6E2C9', // Açık turuncu-kahverengi
          200: '#E0B683', // Orta turuncu-kahverengi
          300: '#C88C55', // Koyu turuncu-kahverengi (gradient alt)
          400: '#AF8560', // Açık ceviz kahverengi
          500: '#8B5E3C', // Ana ceviz kahverengi
          600: '#7A5135', // Orta ceviz kahverengi
          700: '#6B4630', // Koyu ceviz kahverengi
          800: '#5A3A22', // Çok koyu kahverengi
          900: '#382F2F', // Koyu metin rengi (logo metni)
        },
        accent: {
          50: '#FFF9E6', // Açık sarı
          100: '#FEF5CC',
          200: '#FDE899',
          300: '#F7C548', // Sarı (logo içindeki simgeler)
          400: '#F1913B', // Turuncu (logo içindeki simgeler)
          500: '#E44933', // Kırmızı (logo içindeki simgeler)
          600: '#84BB4B', // Yeşil (logo içindeki simgeler)
          700: '#4AB8B5', // Turkuaz (logo içindeki simgeler)
          800: '#A06AAB', // Mor (logo içindeki simgeler)
          900: '#2B678F', // Orta mavi (ışık ışınları)
        },
        brain: {
          light: '#99D5D6', // Açık mavi (beyin çizgisi)
          DEFAULT: '#2B678F', // Orta mavi (ışık ışınları)
          dark: '#1A4A6B',
        },
        dark: {
          DEFAULT: '#382F2F', // Logo metin rengi
          text: '#5A3A22', // Koyu kahverengi metin
          muted: '#6B4630', // Yumuşak koyu kahverengi
        },
        light: {
          DEFAULT: '#F8F4ED', // Logo arka plan krem
          surface: '#FFFFFF', // Beyaz yüzey
          cream: '#FDF2E3', // Açık krem
        },
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

