# Kurum Icin Temiz Kullanim Rehberi (GitHub + ESC Proje)

Bu dokuman, GitHub bilgisi az olan ekipler icin hazirlandi. Sadece tarayici kullanarak yeni `ESC` projesi ekleyebilirsiniz.

## 1) Nerede Ne Var?

- Repo: [https://github.com/Ruzzyferr/Kozder](https://github.com/Ruzzyferr/Kozder)
- Proje sablonu: `content/templates/project-template.mdx`
- Yeni proje dosyasi eklenecek klasor: `src/content/projects/`
- Proje gorselleri: `public/images/projects/`

Onemli: Yeni proje dosyasini `content/projects/` degil, **`src/content/projects/`** altina ekleyin.

## 2) Yetki ve Calisma Sekli

- Repo sahibi sizi `Write` rolunde eklemelidir.
- Dogrudan `master` yerine branch + Pull Request (PR) ile ilerleyin.

## 3) Adim Adim Proje Ekleme (Sadece Web Arayuzu)

1. Repoyu acin.
2. `src/content/projects/` klasorune girin.
3. `Add file` -> `Create new file` secin.
4. Dosya adini yazin: `esc-proje-adi-2026.mdx`
   - Kural: kucuk harf, bosluk yok, Turkce karakter yok.
5. Ayrica `content/templates/project-template.mdx` dosyasini acip icerigi kopyalayin.
6. Yeni dosyaya yapistirin ve bilgileri doldurun.
7. Sayfa altinda `Create a new branch...` secin, `Propose changes` tiklayin.
8. `Create pull request` ile PR acin.
9. Repo yoneticisi onayladiginda proje yayinlanir.

## 4) Tek Tam Ornek (Kopyala-Kullan)

Dosya adi: `esc-dijital-mentorluk-2026.mdx`

```mdx
---
title_tr: "ESC Dijital Mentorluk Programi"
title_en: "ESC Digital Mentorship Program"
programType: "ESC"
year: 2026
status: "Aktif"
themes:
  - "Genclik"
  - "Dijital Beceriler"
  - "Gonulluluk"
location: "Ankara, Turkiye"
startDate: "2026-02-01"
endDate: "2026-11-30"
coverImage: "/images/projects/esc-dijital-mentorluk-2026.jpg"
applicationUrl: "https://turnaportal.ua.gov.tr/bireysel/basvurulist?ilanGuidId=58d1fe7b-b51b-429c-a22a-03f99cc7dd24&ilanGuidAnahtar=d1670505-4f42-49b5-8f48-71a4ecd75c7b"
featured: true
summary_tr: "18-30 yas arasi genclere dijital beceri, kariyer planlama ve gonulluluk odakli mentorluk destegi sunan ESC projesi."
summary_en: "An ESC project providing mentorship on digital skills, career planning, and volunteering for young people aged 18-30."
---

## Proje Hakkinda

ESC Dijital Mentorluk Programi, genclerin dijital donusume uyumunu artirmak ve istihdam edilebilirliklerini guclendirmek amaciyla tasarlanmistir.

## Temel Faaliyetler

- Aylik dijital beceri atolyeleri
- Bire bir mentorluk gorusmeleri
- CV ve mulakat hazirlik oturumlari
- Toplumsal fayda odakli mini proje calismalari
```

## 5) Gorsel Ekleme

1. Gorseli `public/images/projects/` klasorune yukleyin.
2. Proje dosyasinda `coverImage` alanini guncelleyin:
   - `coverImage: "/images/projects/dosya-adi.jpg"`

Gorsel yoksa gecici olarak mevcut bir dosya kullanabilirsiniz:
- `coverImage: "/images/logo.png"`

## 6) Basvuru Linki Ekleme (Basvuru Yap Butonu)

Proje detay sayfasindaki `Basvuru Yap` butonu, `applicationUrl` alanini kullanir.

- Ornek:
  - `applicationUrl: "https://turnaportal.ua.gov.tr/..."`
- Bu alan yoksa buton varsayilan olarak `/iletisim` sayfasina gider.
## 7) PR Metni Ornegi

- Baslik: `ESC Dijital Mentorluk Programi 2026 eklendi`
- Aciklama: `src/content/projects/esc-dijital-mentorluk-2026.mdx dosyasi eklendi ve proje bilgileri girildi.`

## 8) Son Kontrol Listesi

- [ ] Dosya `src/content/projects/` altinda
- [ ] Dosya uzantisi `.mdx`
- [ ] `programType: "ESC"`
- [ ] `title_tr`, `title_en`, `summary_tr`, `summary_en` dolu
- [ ] Tarihler `YYYY-MM-DD` formatinda
- [ ] `coverImage` yolu dogru (varsa)
- [ ] `applicationUrl` dogru (varsa)

