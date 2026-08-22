/** @type {import('tailwindcss').Config} */
//
// Editoryal lüks sistemi. İki kural belirliyor:
//
// 1. Yüzeyler birbirinden RENKLE DEĞİL IŞIKLA ayrılır. Zemin (paper) ile kart
//    (cream) arasındaki fark küçüktür; ayrımı saç teli çizgi ve yumuşak gölge
//    yapar. Eski sistemde zemin çok doygundu ve her kart sert ofset gölgeyle
//    çiziliyordu; bu yüzden sayfa hem solgun hem de tek ses tonundaydı.
//
// 2. Token ADLARI korunur, DEĞERLERİ değişir. Sayfalarda `brand-paper`,
//    `brand-cream`, `brand-ink` gibi 200'den fazla kullanım var; adları
//    değiştirmek yerine değerleri yenilemek tüm siteyi tek hamlede taşır.
//
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // Zemin: eskisi (#F4ECD8) çok doygun sarıydı, fotoğrafları ve
          // mürekkebi boğuyordu. Sıcaklığı koruyup doygunluğu düşürdük.
          paper: '#F5F1E7',
          // Kart yüzeyi: neredeyse beyaz. Zeminden ışıkla ayrılır.
          cream: '#FFFDF8',
          ink: '#14100F',
          walnut: '#6B4630',
          stamp: '#9C2A1B',
          postage: '#D8452F',
          sun: '#F0C24A',
          ocean: '#2B678F',
          leaf: '#6FA83F',
        },
        surface: {
          base: '#F5F1E7',
          card: '#FFFDF8',
          // Girintili / ikincil alanlar
          sunken: '#EFE9DC',
          muted: '#EDE7D9',
          dim: '#E4DBC9',
          ink: '#14100F',
        },
        // Sıcak nötr metin rampası
        ink: {
          DEFAULT: '#1A1512',
          soft: '#4A403A',
          muted: '#776C63',
          subtle: '#948A80',
        },
        // Saç teli çizgiler — kalın mürekkep kenarlığın yerini alır
        line: {
          subtle: 'rgb(20 16 15 / 0.07)',
          DEFAULT: 'rgb(20 16 15 / 0.13)',
          strong: 'rgb(20 16 15 / 0.26)',
        },
        // Eski isimler (geriye dönük uyum)
        primary: {
          50: '#FBF8F2', 100: '#F3EADB', 200: '#E2CBA9', 300: '#C89F62',
          400: '#AF8560', 500: '#8B5E3C', 600: '#7A5135', 700: '#6B4630',
          800: '#553826', 900: '#33241A',
        },
        accent: {
          50: '#FFF9E6', 100: '#FDF2CC', 200: '#F8E29B', 300: '#F0C24A',
          400: '#E58F38', 500: '#D8452F', 600: '#6FA83F', 700: '#3FA3A0',
          800: '#8E5C99', 900: '#2B678F',
        },
        dark: { DEFAULT: '#1A1512', text: '#4A403A', muted: '#776C63' },
        light: { DEFAULT: '#F5F1E7', surface: '#FFFDF8', cream: '#FBF6EA' },
      },

      fontFamily: {
        // Fraunces başlıklarda kalır; Instrument Sans menü/buton/etiket/gövdeyi
        // devralır. Oswald ve Montserrat kaldırıldı.
        display: ['Fraunces', 'Georgia', 'serif'],
        heading: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        body: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Instrument Sans"', 'ui-monospace', 'monospace'],
      },

      letterSpacing: {
        tightest: '-0.045em',
        tighter: '-0.03em',
      },

      boxShadow: {
        // Üç kademeli yumuşak sistem. Gölgeler ceviz tonuna çalar; nötr gri
        // gölge sıcak kâğıt zeminde kirli görünüyor.
        'e1': '0 1px 2px rgb(20 16 15 / 0.04), 0 2px 8px -3px rgb(107 70 48 / 0.10)',
        'e2': '0 2px 4px rgb(20 16 15 / 0.04), 0 10px 26px -8px rgb(107 70 48 / 0.16)',
        'e3': '0 4px 10px rgb(20 16 15 / 0.05), 0 22px 54px -14px rgb(107 70 48 / 0.22)',
        // Eski adlar yeni sisteme bağlandı — sert ofset gölge artık üretilmiyor
        soft: '0 1px 2px rgb(20 16 15 / 0.04), 0 2px 8px -3px rgb(107 70 48 / 0.10)',
        card: '0 2px 4px rgb(20 16 15 / 0.04), 0 10px 26px -8px rgb(107 70 48 / 0.16)',
        cardHover: '0 4px 10px rgb(20 16 15 / 0.05), 0 22px 54px -14px rgb(107 70 48 / 0.22)',
        stamp: '0 1px 2px rgb(20 16 15 / 0.04), 0 2px 8px -3px rgb(107 70 48 / 0.10)',
        stampLg: '0 2px 4px rgb(20 16 15 / 0.04), 0 10px 26px -8px rgb(107 70 48 / 0.16)',
        postcard: '0 2px 4px rgb(20 16 15 / 0.04), 0 10px 26px -8px rgb(107 70 48 / 0.16)',
      },

      borderRadius: {
        DEFAULT: '2px',
        sm: '2px',
        md: '3px',
        lg: '4px',
        xl: '6px',
        '2xl': '8px',
        '3xl': '12px',
      },

      maxWidth: {
        prose: '68ch',
        measure: '72ch',
      },

      backgroundImage: {
        'paper-grain':
          'radial-gradient(ellipse at 15% 20%, rgba(107,70,48,0.030), transparent 55%), radial-gradient(ellipse at 85% 75%, rgba(155,90,50,0.026), transparent 55%)',
        perforation:
          'radial-gradient(circle at 4px 50%, transparent 3px, #14100F 3px, #14100F 4px, transparent 4px)',
      },

      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
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
        'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        'marquee-x': 'marquee-x 34s linear infinite',
        'stamp-wobble': 'stamp-wobble 4s ease-in-out infinite',
      },

      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
