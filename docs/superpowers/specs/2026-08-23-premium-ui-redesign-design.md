# KOZ-DER — Editoryal Lüks UI Yenilemesi

**Tarih:** 23 Ağustos 2026
**Kapsam:** Tüm sitenin görsel sistemi
**Dal:** `master` (doğrudan; her push canlıya gider)

## Amaç

Site şu an özgün ama "premium" durmuyor. Sorun kötü tasarım değil, **tek ses
tonu**: her yüzey aynı 2px mürekkep kenarlık ve aynı sert ofset gölgeyle
çiziliyor, dolayısıyla hiçbir şey öne çıkmıyor. Bu yenileme mevcut posta/
editoryal kimliği korur ve zanaat seviyesini yükseltir.

Yönü belirleyen üç karar (kullanıcı onaylı):

1. **Editoryal lüks** — kimlik kalır, sistem yeniden kurulur.
2. **Görseller** — hero'daki yapay zekâ posteri gerçek arşiv fotoğrafıyla
   değişir; afiş tipi kapaklar kırpılmak yerine tonlu panel içinde tam gösterilir.
3. **Tipografi** — Fraunces kalır; Oswald ve Montserrat kaldırılır, yerlerini tek
   bir çağdaş grotesk (Instrument Sans) alır.

## Teşhis

Gerçek tarayıcıda 17 sayfa × 6 genişlikte gezildi. Premium algıyı düşürenler:

| # | Sorun | Kanıt |
| --- | --- | --- |
| 1 | Dinamik aralık yok | Kart, rozet, buton, kutucuk — hepsi `border-2 border-brand-ink` + `Npx Npx 0 0` gölge |
| 2 | Derinlik/ışık yok | Sert ofset gölge tanımı gereği düz; katman, yumuşak gölge, degrade yok |
| 3 | Anasayfa ritmi monoton | Üst üste 5 özdeş bant: dev başlık + "Tümü →" + 3 kart |
| 4 | Görseller | Hero yapay zekâ kolajı; proje kapakları neon degradeli Canva afişleri |
| 5 | Kontrast düşük | Zemin `#F4ECD8` ve kart `#FBF6E9` birbirine çok yakın |
| 6 | Zanaat detayı yok | Reveal fade ve logo şeridi dışında etkileşim yok |
| 7 | Mobilde marka kaybı | `sm` altında header'da sadece amblem, "KOZ·DER" gizli |
| 8 | Üçüncü taraf rozeti | hits.sh sayacı tüm sayfaların altında, widget gibi duruyor |

## Tasarım

### Temeller

**Tipografi.** İki aile: Fraunces (değişken; opsz/wght/SOFT/WONK) başlık ve
sayılarda, Instrument Sans menü/buton/etiket/gövdede. Oswald, Montserrat ve —
kullanımı kalmazsa — JetBrains Mono kaldırılır. Ölçek yakın kademeler yerine
gerçek bir modüler ölçeğe geçer; sıkı harf aralığı yalnızca büyük puntolarda
uygulanır.

**Renk.** Yüzeyler birbirinden *renkle değil ışıkla* ayrılır: zemin sıcak, nötre
yakın bir kırık beyaza sakinleşir ve kartlar zeminle aynı rengi alır. Mürekkep,
ceviz ve damga kırmızısı aksan kalır. Eksik olan nötr rampa (saç teli çizgiler,
soluk metin, ayraçlar) eklenir.

**Derinlik.** `box-shadow: 6px 6px 0 0 #6B4630` kaldırılır; üç kademeli yumuşak
gölge gelir (duruş / hover / öne çıkan). Kenarlıklar çoğu yüzeyde %8-12 opaklıkta
saç teli çizgiye iner. Kalın mürekkep kenarlık bilinçli olarak yalnızca birkaç
aksanda kalır.

**Hareket.** 200-300ms ease-out hover/kalkış; scroll reveal 16px yerine 8px.
`prefers-reduced-motion` desteği korunur.

### Düzen

Editoryal sayfalarda daha geniş kapsayıcı, düz metinde ~68ch ölçü. Bölüm
boşlukları önem sırasına göre farklılaşır. Simetrik ortalama yerine 7/5 ve 8/4
asimetrik kırılımlar.

### Anasayfa

Her bandın şekli farklı olur; beş özdeş ızgara sorununu bu çözer.

| # | Bölüm | Biçim |
| --- | --- | --- |
| 1 | Hero | Asimetrik; bir yanda tam kanayan gerçek fotoğraf, diğer yanda tip |
| 2 | İstatistik | Kalın siyah blok yerine ince şerit |
| 3 | Ağlar/paydaşlar | Korunur; kutucuklar saç teli çizgiye iner |
| 4 | Açık çağrılar | Numaralı editoryal liste (kart ızgarası değil) |
| 5 | Hikayeler | Tam kanayan yatay portre şeridi |
| 6 | Etkinlikler | Tarih bloklu, sıkışık 2 sütunlu ajanda |
| 7 | Haberler | 1 büyük + 2 küçük asimetrik öne çıkarma |
| 8 | Duyurular | İnce şerit |
| 9 | CTA | Koyu kalır, rafine edilir |

### Bileşenler

- **Kartlar:** fotoğraf kapaklar tam kanar; afiş kapaklar tonlu panel içinde
  kırpılmadan (`contain`) gösterilir. Kapak türü içerikten türetilir.
- **Butonlar:** birincil / ikincil / hayalet, gerçek durum katmanlarıyla.
- **Etiketler:** bağıran büyük harf kutular yerine saç teli hap.
- **Header:** incelir; mobilde "KOZ·DER" yazısı görünür olur; scroll durumu incelir.
- **Footer:** hits.sh rozeti kaldırılır; sütunlar sıkılaşır.

## Fazlar

Her fazın sonunda `npm run build` + 6 genişlikte (390/768/1024/1280/1440/1920)
ekran görüntüsü doğrulaması, yatay taşma ve kırık görsel taraması yapılır.

1. **Temeller** — `tailwind.config.mjs` tokenları, `BaseLayout.astro` global CSS
   ve font yükleme, `Header.astro`, `Footer.astro`. Her sayfaya dokunur.
2. **Anasayfa** — yukarıdaki dokuz bandın yeniden kurgusu, hero fotoğrafı.
3. **Liste sayfaları** — projeler, haberler, hikayeler, etkinlikler, duyurular
   ve ortak kart bileşenleri.
4. **Detay ve statik sayfalar** — proje/haber/hikaye/etkinlik/duyuru detayları,
   hakkımızda, sss, iletişim, kvkk, bağlantılar, 404.

## Kapsam dışı

İçerik metinlerini yeniden yazmak, URL/rota değiştirmek, yeni fotoğraf üretmek,
içerik şemasını değiştirmek (yalnızca kapak türü ayrımı için gerekiyorsa eklenir).

## Riskler

- Her sayfaya dokunulduğu için regresyon yüzeyi geniş → her faz sonunda görsel
  doğrulama zorunlu.
- Doğrudan `master`'da çalışılıyor; ara fazlar canlıya gidiyor. Her faz kendi
  içinde tutarlı ve yayınlanabilir olmalı, yarım bırakılmamalı.
- Font değişimi tüm metrikleri kaydırır; tipografi fazından sonra tüm sayfalar
  yeniden gözden geçirilir.
