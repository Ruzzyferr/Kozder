/** @type {import('tailwindcss').Config} */
//
// Açık ama tamamen çağdaş bir sistem. Önceki tema sıcak krem/kahve, sert köşeli
// ve serif ağırlıklıydı — "posta kartı" hissi veriyordu. Yeni sistem:
//
//   · Kırpık, neredeyse beyaz zemin; kahve/bej tonlar tamamen kaldırıldı
//   · Canlı tek aksan (vermilyon) — eski tozlu tuğla kırmızısının yerine
//   · Yuvarlatılmış geometri (kartlar 18px, butonlar hap) — modernliğin
//     en hızlı okunan sinyali
//   · Nötr, geniş ve yumuşak gölgeler; kahve tonlu gölge kirli görünüyordu
//
// Token ADLARI korunuyor (200+ kullanım var), DEĞERLERİ tamamen yenileniyor.
//
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          paper: '#FBFBFA',   // sayfa zemini
          cream: '#FFFFFF',   // kart yüzeyi
          ink: '#0B0B0C',     // başlık / koyu blok
          walnut: '#6E6E77',  // ikincil metin (eski kahve kaldırıldı)
          stamp: '#E1442B',   // aksan — canlı vermilyon
          postage: '#FF6B4A', // koyu zeminde aksan
          sun: '#F5B841',
          ocean: '#2F6BFF',
          leaf: '#3FA96B',
        },
        surface: {
          base: '#FBFBFA',
          card: '#FFFFFF',
          sunken: '#F3F3F1',
          muted: '#EFEFEC',
          dim: '#E4E4E0',
          ink: '#0B0B0C',
        },
        ink: {
          DEFAULT: '#16161A',
          soft: '#4B4B54',
          muted: '#7B7B85',
          subtle: '#A3A3AC',
        },
        line: {
          subtle: 'rgb(11 11 12 / 0.06)',
          DEFAULT: 'rgb(11 11 12 / 0.10)',
          strong: 'rgb(11 11 12 / 0.20)',
        },
        primary: {
          50: '#FFF3F0', 100: '#FFE2DB', 200: '#FFBFB0', 300: '#FF9781',
          400: '#F56A4D', 500: '#E1442B', 600: '#C2331D', 700: '#9C2717',
          800: '#761D11', 900: '#4F130B',
        },
        accent: {
          50: '#FFF8EC', 100: '#FDEFD3', 200: '#FADFA6', 300: '#F5B841',
          400: '#FF8A3D', 500: '#E1442B', 600: '#3FA96B', 700: '#2FB8B5',
          800: '#8B5CF6', 900: '#2F6BFF',
        },
        dark: { DEFAULT: '#16161A', text: '#4B4B54', muted: '#7B7B85' },
        light: { DEFAULT: '#FBFBFA', surface: '#FFFFFF', cream: '#F7F7F5' },
      },

      fontFamily: {
        // Fraunces (kıvrımlı, "wonky" serif) yerine çağdaş bir grotesk.
        // En hızlı hissedilen kimlik değişimi burada.
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        heading: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        body: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Instrument Sans"', 'ui-monospace', 'monospace'],
      },

      letterSpacing: {
        tightest: '-0.038em',
        tighter: '-0.025em',
      },

      boxShadow: {
        e1: '0 1px 2px rgb(11 11 12 / 0.04), 0 1px 3px rgb(11 11 12 / 0.05)',
        e2: '0 2px 4px rgb(11 11 12 / 0.03), 0 10px 28px -8px rgb(11 11 12 / 0.10)',
        e3: '0 4px 10px rgb(11 11 12 / 0.04), 0 28px 64px -16px rgb(11 11 12 / 0.16)',
        glow: '0 12px 32px -10px rgb(225 68 43 / 0.45)',
        soft: '0 1px 2px rgb(11 11 12 / 0.04), 0 1px 3px rgb(11 11 12 / 0.05)',
        card: '0 2px 4px rgb(11 11 12 / 0.03), 0 10px 28px -8px rgb(11 11 12 / 0.10)',
        cardHover: '0 4px 10px rgb(11 11 12 / 0.04), 0 28px 64px -16px rgb(11 11 12 / 0.16)',
        stamp: '0 1px 2px rgb(11 11 12 / 0.04), 0 1px 3px rgb(11 11 12 / 0.05)',
        stampLg: '0 2px 4px rgb(11 11 12 / 0.03), 0 10px 28px -8px rgb(11 11 12 / 0.10)',
        postcard: '0 2px 4px rgb(11 11 12 / 0.03), 0 10px 28px -8px rgb(11 11 12 / 0.10)',
      },

      borderRadius: {
        DEFAULT: '10px',
        sm: '8px',
        md: '12px',
        lg: '14px',
        xl: '18px',
        '2xl': '24px',
        '3xl': '32px',
      },

      maxWidth: { prose: '68ch', measure: '72ch' },

      backgroundImage: {
        // Bölüm arkalarına çok düşük yoğunluklu renk yıkamaları
        'wash-warm':
          'radial-gradient(1200px 600px at 12% -10%, rgb(225 68 43 / 0.07), transparent 60%), radial-gradient(900px 500px at 92% 8%, rgb(47 107 255 / 0.05), transparent 60%)',
        'wash-soft':
          'radial-gradient(900px 480px at 85% 0%, rgb(225 68 43 / 0.05), transparent 62%)',
        'paper-grain': 'none',
        perforation:
          'radial-gradient(circle at 4px 50%, transparent 3px, #0B0B0C 3px, #0B0B0C 4px, transparent 4px)',
      },

      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'marquee-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },

      animation: {
        'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'marquee-x': 'marquee-x 34s linear infinite',
      },

      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
