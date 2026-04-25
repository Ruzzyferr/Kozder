# KOZ-DER Web Sitesi

Gençlik Zeka Oyunları ve Kodlama Derneği (KOZ-DER) için profesyonel, hızlı ve güvenli statik web sitesi.

## 🎯 Özellikler

- ✅ Tamamen statik (veritabanı yok)
- ✅ Dosya tabanlı içerik yönetimi (MDX)
- ✅ SEO optimizasyonu
- ✅ Yüksek performans
- ✅ Responsive tasarım
- ✅ Vercel'de ücretsiz hosting

## 🚀 Hızlı Başlangıç

### Gereksinimler

- Node.js 18+ 
- npm veya yarn

### Kurulum

1. Projeyi klonlayın veya indirin
2. Bağımlılıkları yükleyin:

```bash
npm install
```

3. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

Tarayıcınızda `http://localhost:4321` adresini açın.

### Build

Üretim için build almak için:

```bash
npm run build
```

Build çıktısı `dist/` klasöründe olacaktır.

## 📝 İçerik Yönetimi

### Yeni Proje Ekleme

Yeni bir proje eklemek için:

1. `content/templates/project-template.mdx` dosyasını açın
2. Şablonu kopyalayın
3. `content/projects/` klasöründe yeni bir `.mdx` dosyası oluşturun
4. Dosya adı: `proje-adi-2024.mdx` (Türkçe karakter kullanmayın)
5. Şablonu yapıştırın ve bilgileri doldurun

**Detaylı rehber için:** `docs/PROJE_EKLEME_REHBERI.md` dosyasına bakın.

### Yeni Etkinlik Ekleme

1. `content/events/` klasöründe yeni bir `.mdx` dosyası oluşturun
2. Aşağıdaki formatı kullanın:

```mdx
---
title_tr: "Etkinlik Başlığı (Türkçe)"
title_en: "Event Title (English)"
date: "2024-05-15"
location: "İstanbul, Türkiye"
coverImage: "/images/events/etkinlik-resmi.jpg" # Opsiyonel
registrationUrl: "https://forms.example.com" # Opsiyonel
---

Etkinlik içeriği buraya...
```

### Yeni Duyuru Ekleme

1. `content/posts/` klasöründe yeni bir `.mdx` dosyası oluşturun
2. Aşağıdaki formatı kullanın:

```mdx
---
title_tr: "Duyuru Başlığı (Türkçe)"
title_en: "Announcement Title (English)"
date: "2024-01-15"
tags:
  - "Etiket1"
  - "Etiket2"
summary_tr: "Kısa özet (Türkçe)"
summary_en: "Short summary (English)"
---

Duyuru içeriği buraya...
```

## 🖼️ Resim Ekleme

Resimleri şu klasörlere ekleyin:

- Proje resimleri: `public/images/projects/`
- Etkinlik resimleri: `public/images/events/`
- Ekip fotoğrafları: `public/images/team/`

**Önemli:** Dosya adlarında Türkçe karakter kullanmayın!

## 🌐 Deployment (Vercel)

### İlk Deployment

1. GitHub'da bir repository oluşturun
2. Projeyi GitHub'a push edin
3. [Vercel](https://vercel.com) hesabınıza giriş yapın
4. "New Project" butonuna tıklayın
5. GitHub repository'nizi seçin
6. Vercel otomatik olarak Astro projesini algılayacaktır
7. "Deploy" butonuna tıklayın

### Özel Domain Ekleme

1. Vercel dashboard'da projenizi açın
2. "Settings" > "Domains" bölümüne gidin
3. Domain adresinizi ekleyin (örn: `kozder.com`)
4. Vercel size DNS kayıtlarını gösterecektir
5. Domain sağlayıcınızda (GoDaddy, Namecheap, vb.) bu DNS kayıtlarını ekleyin
6. `astro.config.mjs` dosyasındaki `site` değerini güncelleyin:

```js
site: 'https://kozder.com',
```

### Otomatik Deployment

Her GitHub'a push yaptığınızda Vercel otomatik olarak yeni bir build alır ve deploy eder.

## 📁 Proje Yapısı

```
.
├── content/
│   ├── projects/          # Proje dosyaları (.mdx)
│   ├── events/            # Etkinlik dosyaları (.mdx)
│   ├── posts/             # Duyuru dosyaları (.mdx)
│   └── templates/          # İçerik şablonları
├── public/
│   ├── images/            # Resimler
│   ├── favicon.svg        # Site ikonu
│   ├── og-image.jpg       # Open Graph resmi
│   └── robots.txt         # SEO için
├── src/
│   ├── components/        # React/Astro bileşenleri
│   ├── layouts/           # Sayfa şablonları
│   ├── pages/             # Sayfalar (routing)
│   ├── content/           # İçerik şemaları
│   └── data/              # Statik veriler (JSON)
├── docs/                  # Dokümantasyon
├── astro.config.mjs       # Astro yapılandırması
├── package.json           # Bağımlılıklar
└── README.md              # Bu dosya
```

## 🔧 Yapılandırma

### Site Bilgileri

`astro.config.mjs` dosyasında site URL'sini güncelleyin:

```js
site: 'https://kozder.com',
```

### İletişim Bilgileri

`src/pages/iletisim.astro` dosyasında iletişim bilgilerini güncelleyin.

### Ekip Bilgileri

`src/data/team.json` dosyasında ekip üyelerini güncelleyin.

## 🎨 Tasarım

Tasarım Tailwind CSS ile yapılmıştır. Renkleri değiştirmek için `tailwind.config.mjs` dosyasını düzenleyin.

## 📊 SEO

- Otomatik sitemap oluşturma (`/sitemap.xml`)
- Meta etiketleri (Open Graph, Twitter Cards)
- Semantic HTML
- robots.txt

## 🐛 Sorun Giderme

### Build Hatası

Eğer build sırasında hata alırsanız:

1. Tüm `.mdx` dosyalarının frontmatter'ının doğru olduğundan emin olun
2. Tarih formatının `YYYY-MM-DD` olduğundan emin olun
3. Dosya adlarında Türkçe karakter olmadığından emin olun

### Resim Görünmüyor

1. Resmin `public/images/` klasöründe olduğundan emin olun
2. Dosya yolunun doğru olduğundan emin olun (örn: `/images/projects/resim.jpg`)
3. Dosya adında Türkçe karakter olmadığından emin olun

## 📚 Daha Fazla Bilgi

- [Astro Dokümantasyonu](https://docs.astro.build)
- [Tailwind CSS Dokümantasyonu](https://tailwindcss.com/docs)
- [Vercel Dokümantasyonu](https://vercel.com/docs)

## 📄 Lisans

Bu proje KOZ-DER için özel olarak geliştirilmiştir.

## 🤝 Katkıda Bulunma

İçerik eklemek için `docs/PROJE_EKLEME_REHBERI.md` dosyasına bakın.

## 📞 İletişim

Sorularınız için: bilgi@kozder.com

