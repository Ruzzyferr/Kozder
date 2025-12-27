# Framework Seçimi: Astro

## Neden Astro?

KOZ-DER web sitesi için **Astro** framework'ünü seçtik. İşte nedenleri:

### ✅ Statik Site İçin Mükemmel

- Astro, statik site oluşturma için özel olarak tasarlanmıştır
- Build zamanında tüm sayfalar statik HTML'e dönüştürülür
- JavaScript sadece gerektiğinde yüklenir (zero JS by default)
- Sonuç: Çok hızlı, SEO dostu sayfalar

### ✅ MDX Desteği

- Astro'nun yerleşik MDX desteği var
- Content Collections API ile tip-güvenli içerik yönetimi
- Frontmatter validation (Zod schema ile)
- Kolay içerik yönetimi

### ✅ Performans

- Zero JavaScript by default (sadece gerektiğinde)
- Otomatik code splitting
- Image optimization
- Lazy loading
- Yüksek Lighthouse skorları

### ✅ Geliştirici Deneyimi

- TypeScript desteği
- Hot Module Replacement (HMR)
- Kolay routing (file-based)
- Component islands pattern
- Modern tooling

### ✅ Vercel Entegrasyonu

- Vercel Astro'yu otomatik algılar
- Zero-config deployment
- Edge Functions desteği (gerekirse)
- Otomatik optimizasyonlar

## Next.js ile Karşılaştırma

### Next.js Neden Seçilmedi?

Next.js harika bir framework, ancak bu proje için:

- ❌ Daha fazla JavaScript bundle size
- ❌ Server-side rendering gereksiz (tamamen statik site)
- ❌ Daha karmaşık yapılandırma
- ❌ Static export için ekstra ayarlar gerekir

### Astro'nun Avantajları

- ✅ Daha küçük bundle size
- ✅ Daha hızlı sayfa yükleme
- ✅ Daha basit yapılandırma
- ✅ Statik site için optimize edilmiş

## Sonuç

Astro, KOZ-DER gibi tamamen statik, içerik odaklı bir web sitesi için ideal seçimdir. Performans, SEO ve geliştirici deneyimi açısından mükemmel bir denge sunar.

