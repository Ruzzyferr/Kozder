# Proje Yapısı

Bu doküman, KOZ-DER web sitesinin dosya yapısını açıklar.

```
koz-der-website/
│
├── content/                    # İçerik dosyaları (MDX)
│   ├── projects/               # Proje dosyaları
│   │   ├── esc-genclik-egitimi-2024.mdx
│   │   ├── erasmus-kultur-diyalogu-2023.mdx
│   │   └── esc-kodlama-atolyesi-2024.mdx
│   ├── events/                # Etkinlik dosyaları
│   │   ├── zeka-oyunlari-turnuvasi-2024.mdx
│   │   └── genclik-bulusturma-2024.mdx
│   ├── posts/                  # Duyuru dosyaları
│   │   ├── yeni-proje-basvurulari.mdx
│   │   └── etkinlik-duyurusu-bahar.mdx
│   └── templates/              # İçerik şablonları
│       └── project-template.mdx
│
├── public/                     # Statik dosyalar
│   ├── images/                 # Resimler
│   │   ├── projects/          # Proje resimleri
│   │   ├── events/            # Etkinlik resimleri
│   │   └── team/              # Ekip fotoğrafları
│   ├── favicon.svg            # Site ikonu
│   ├── og-image.svg           # Open Graph resmi
│   └── robots.txt             # SEO için
│
├── src/
│   ├── components/            # Bileşenler
│   │   ├── Header.astro      # Site başlığı
│   │   ├── Footer.astro      # Site alt bilgisi
│   │   ├── ProjectCard.astro # Proje kartı
│   │   ├── EventCard.astro   # Etkinlik kartı
│   │   └── PostCard.astro     # Duyuru kartı
│   │
│   ├── layouts/              # Sayfa şablonları
│   │   └── BaseLayout.astro  # Ana şablon
│   │
│   ├── pages/                # Sayfalar (routing)
│   │   ├── index.astro       # Ana sayfa (/)
│   │   ├── hakkimizda.astro # Hakkımızda (/hakkimizda)
│   │   ├── iletisim.astro    # İletişim (/iletisim)
│   │   ├── baglantilar.astro # Bağlantılar (/baglantilar)
│   │   ├── kvkk.astro        # KVKK (/kvkk)
│   │   ├── projeler/         # Projeler
│   │   │   ├── index.astro   # Proje listesi (/projeler)
│   │   │   └── [slug].astro  # Proje detay (/projeler/[slug])
│   │   ├── etkinlikler/      # Etkinlikler
│   │   │   ├── index.astro   # Etkinlik listesi
│   │   │   └── [slug].astro  # Etkinlik detay
│   │   └── duyurular/        # Duyurular
│   │       ├── index.astro   # Duyuru listesi
│   │       └── [slug].astro  # Duyuru detay
│   │
│   ├── content/               # İçerik şemaları
│   │   └── config.ts         # Zod şemaları
│   │
│   └── data/                 # Statik veriler
│       └── team.json         # Ekip bilgileri
│
├── docs/                     # Dokümantasyon
│   └── PROJE_EKLEME_REHBERI.md  # Proje ekleme rehberi (Türkçe)
│
├── astro.config.mjs          # Astro yapılandırması
├── tailwind.config.mjs       # Tailwind CSS yapılandırması
├── tsconfig.json             # TypeScript yapılandırması
├── package.json              # Bağımlılıklar
├── vercel.json               # Vercel yapılandırması
├── README.md                 # Ana dokümantasyon
├── DEPLOYMENT.md             # Deployment rehberi
├── FRAMEWORK_CHOICE.md       # Framework seçimi açıklaması
└── PROJECT_STRUCTURE.md      # Bu dosya
```

## Önemli Notlar

### İçerik Dosyaları

- Tüm içerik dosyaları `.mdx` uzantılıdır
- Frontmatter (üstteki `---` arası) zorunludur
- Dosya adlarında Türkçe karakter kullanmayın

### Resimler

- Resimler `public/images/` altında organize edilir
- Dosya adlarında Türkçe karakter kullanmayın
- Yol: `/images/projects/resim.jpg` formatında

### Sayfalar

- `src/pages/` altındaki dosyalar otomatik olarak route oluşturur
- `index.astro` → `/`
- `hakkimizda.astro` → `/hakkimizda`
- `[slug].astro` → Dinamik route (örn: `/projeler/proje-adi`)

### Bileşenler

- `.astro` dosyaları Astro bileşenleridir
- HTML benzeri syntax kullanır
- Frontmatter bölümünde JavaScript/TypeScript yazılır

## Yeni İçerik Ekleme

Yeni içerik eklemek için ilgili klasöre `.mdx` dosyası ekleyin:

- **Proje:** `content/projects/yeni-proje.mdx`
- **Etkinlik:** `content/events/yeni-etkinlik.mdx`
- **Duyuru:** `content/posts/yeni-duyuru.mdx`

Detaylı talimatlar için `docs/PROJE_EKLEME_REHBERI.md` dosyasına bakın.

