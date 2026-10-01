# KOZ-DER tasarım sürümü ve geri dönüş

1 Ekim 2026 tarihli cam tasarım; Türkçe / ve İngilizce /en/ ana sayfaları ile ortak üst menü ve footer. Masaüstü ve mobil aynı responsive sitedir.

Eski sürümün değişmez başlangıç noktası: `193c1b4fcbecaea68cbda689085a1e99638494d6`. GitHub yedeği: `backup/before-glass-redesign-2026-10-01`.

Bu değişiklik yalnızca aşağıdaki dosyaları düzenler:
- src/components/Header.astro
- src/components/Footer.astro
- src/components/pages/HomePage.astro
- src/layouts/BaseLayout.astro
- src/data/affiliations.json

Eskiye dönüşte tasarım PR birleşimini git revert ile geri alın; master geçmişini zorla sıfırlamayın. Sonradan eklenen haber, hikâye, proje ve diğer içerikleri koruyun. İlgili tasarım dosyaları daha sonra değiştirildiyse yedek dal ile dosya bazında karşılaştırıp geri yükleyin. Ayrı geri dönüş PR’ını derleyip birleştirin; Vercel otomatik yayınlar. Bu belgeyi ve yedek dalı koruyun.

Haberler ve kartlar gerçek Astro koleksiyonlarından beslenir. Başvuru tarihleri ile haftalık etkinlik tarihi otomatik güncellenmeye devam eder. Ziyaretçi sayacı mevcut GoatCounter kaynağı ve önceki toplamı kullanır. Ağlar listesine gönderilen özgün gönüllüyüz.biz logosu eklenmiştir.
