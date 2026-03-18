# Proje Ekleme Rehberi

Bu rehber, KOZ-DER web sitesine yeni bir proje eklemek için adım adım talimatlar içermektedir. Teknik bilgi gerektirmez, sadece bu adımları takip etmeniz yeterlidir.

## 📋 Gereksinimler

- Bilgisayarınızda bir metin düzenleyici (Notepad, WordPad, veya benzeri)
- Proje hakkında bilgiler (başlık, açıklama, tarihler, vb.)
- Proje için bir kapak resmi (opsiyonel)

## 📁 Dosya Konumu

Yeni proje dosyasını şu klasöre eklemeniz gerekiyor:
```
content/projects/
```

## 📝 Adım Adım Talimatlar

### 1. Adım: Şablon Dosyasını Açın

`content/templates/project-template.mdx` dosyasını açın. Bu dosya yeni projeniz için bir şablon içerir.

### 2. Adım: Şablonu Kopyalayın

Şablon dosyasının tüm içeriğini kopyalayın (Ctrl+A, sonra Ctrl+C).

### 3. Adım: Yeni Dosya Oluşturun

`content/projects/` klasöründe yeni bir dosya oluşturun. Dosya adı önemlidir:
- Türkçe karakter kullanmayın (ı, ş, ğ, ü, ö, ç yerine i, s, g, u, o, c kullanın)
- Boşluk yerine tire (-) kullanın
- Küçük harf kullanın
- `.mdx` uzantısı ile bitmeli

**Örnek dosya adları:**
- `esc-genclik-projesi-2024.mdx`
- `erasmus-kultur-diyalogu-2024.mdx`
- `kodlama-atolyesi-2024.mdx`

### 4. Adım: Dosyayı Düzenleyin

Yeni oluşturduğunuz dosyaya şablonu yapıştırın ve aşağıdaki bilgileri doldurun:

#### Üst Bölüm (Frontmatter)

Dosyanın en üstündeki `---` işaretleri arasındaki bölümü düzenleyin:

```yaml
---
title_tr: "Projenizin Türkçe Başlığı"
title_en: "Your Project Title in English"
programType: "ESC"  # veya "ERASMUS" yazın
year: 2024  # Proje yılı
status: "Aktif"  # veya "Tamamlandı"
themes:
  - "Gençlik"
  - "Eğitim"
  - "Kültür"  # İstediğiniz kadar tema ekleyebilirsiniz
location: "İstanbul, Türkiye"  # Proje konumu
startDate: "2024-01-01"  # Başlangıç tarihi (YYYY-MM-DD formatında)
endDate: "2024-12-31"  # Bitiş tarihi (opsiyonel, eğer yoksa bu satırı silin)
coverImage: "/images/projects/proje-resmi.jpg"  # Kapak resmi yolu
featured: true  # Ana sayfada gösterilsin mi? true veya false
summary_tr: "Projenizin kısa özeti (Türkçe). 2-3 cümle yeterli."
summary_en: "Short summary of your project (English). 2-3 sentences."
---
```

**Önemli Notlar:**
- Tarihleri `YYYY-MM-DD` formatında yazın (örn: 2024-03-15)
- `coverImage` için resmi önce `/public/images/projects/` klasörüne koyun
- `programType` sadece "ESC" veya "ERASMUS" olabilir
- `status` sadece "Aktif" veya "Tamamlandı" olabilir

#### İçerik Bölümü

`---` işaretlerinden sonraki bölümde projenizin detaylı açıklamasını yazabilirsiniz.

**Markdown Formatı Kullanımı:**

- **Kalın yazı**: `**kalın**` → **kalın**
- *İtalik yazı*: `*italik*` → *italik*
- Başlık: `## Başlık` → Başlık
- Liste:
  ```
  - Öğe 1
  - Öğe 2
  ```
- Resim ekleme:
  ```
  ![Açıklama](/images/projects/resim-adi.jpg)
  ```

### 5. Adım: Resim Ekleme (Opsiyonel)

Eğer projeniz için bir kapak resmi veya içerikte resim kullanmak istiyorsanız:

1. Resmi bilgisayarınıza kaydedin
2. Resmi `/public/images/projects/` klasörüne kopyalayın
3. Dosya adında Türkçe karakter kullanmayın
4. Dosya yolunu `coverImage` alanına yazın (örn: `/images/projects/proje-resmi.jpg`)

### 6. Adım: Dosyayı Kaydedin

Dosyayı kaydedin ve `.mdx` uzantısının olduğundan emin olun.

### 7. Adım: Kontrol Edin

Dosyanızı kaydettikten sonra:
- Dosya adının doğru olduğundan emin olun
- Üst bölümdeki (`---` arası) tüm alanların doldurulduğundan emin olun
- Tarih formatının doğru olduğundan emin olun (YYYY-MM-DD)

## ✅ Tamamlandı!

Projeniz eklendi! Web sitesi bir sonraki güncellemede otomatik olarak yeni projenizi gösterecektir.

## ❓ Sık Sorulan Sorular

### Dosya adında hata yaptım, düzeltebilir miyim?
Evet, dosyayı yeniden adlandırabilirsiniz. Ancak dosya adındaki değişiklik web sitesinde projenin URL'sini değiştirir.

### Resim eklemek zorunlu mu?
Hayır, resim opsiyoneldir. Eğer resim eklemezseniz, `coverImage` satırını silebilir veya boş bırakabilirsiniz.

### Tarih formatı hakkında
Tarihleri mutlaka `YYYY-MM-DD` formatında yazın. Örnek: 2024-03-15 (15 Mart 2024)

### Birden fazla tema ekleyebilir miyim?
Evet, istediğiniz kadar tema ekleyebilirsiniz. Her temayı yeni bir satıra `- "Tema Adı"` şeklinde yazın.

### İngilizce başlık zorunlu mu?
Evet, her iki dilde de başlık gereklidir. Eğer İngilizce başlık yoksa, Türkçe başlığı aynen kopyalayabilirsiniz.

## 🆘 Yardım Gerekiyor mu?

Eğer proje eklerken sorun yaşıyorsanız, lütfen bizimle iletişime geçin:
- E-posta: info@kozder.com
- Telefon: +90 551 123 45 67

