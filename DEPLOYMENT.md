# Deployment Rehberi - Vercel

Bu rehber, KOZ-DER web sitesini Vercel'de deploy etmek için adım adım talimatlar içerir.

## 🚀 Hızlı Deployment (GitHub ile)

### 1. GitHub Repository Oluşturma

1. [GitHub](https://github.com) hesabınıza giriş yapın
2. "New repository" butonuna tıklayın
3. Repository adını girin (örn: `koz-der-website`)
4. "Public" veya "Private" seçin
5. "Create repository" butonuna tıklayın

### 2. Projeyi GitHub'a Yükleme

Terminal/Command Prompt'ta proje klasöründe şu komutları çalıştırın:

```bash
# Git başlat (eğer henüz başlatılmadıysa)
git init

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "Initial commit"

# GitHub repository'nizi remote olarak ekleyin
git remote add origin https://github.com/KULLANICI_ADI/koz-der-website.git

# Dosyaları GitHub'a gönderin
git push -u origin main
```

**Not:** `KULLANICI_ADI` yerine GitHub kullanıcı adınızı yazın.

### 3. Vercel'e Bağlama

1. [Vercel](https://vercel.com) hesabınıza giriş yapın (GitHub ile giriş yapabilirsiniz)
2. Dashboard'da "Add New..." > "Project" butonuna tıklayın
3. GitHub repository'nizi seçin
4. Vercel otomatik olarak Astro projesini algılayacaktır
5. "Deploy" butonuna tıklayın

### 4. İlk Deployment

Vercel otomatik olarak:
- Projeyi build edecek
- Test edecek
- Canlıya alacak

Birkaç dakika içinde siteniz canlıda olacak! URL şu formatta olacak: `https://koz-der-website.vercel.app`

## 🌐 Özel Domain Ekleme

### 1. Domain Satın Alma

Eğer henüz domain'iniz yoksa:
- [Namecheap](https://www.namecheap.com)
- [GoDaddy](https://www.godaddy.com)
- [Google Domains](https://domains.google)

gibi servislerden domain satın alabilirsiniz.

### 2. Vercel'de Domain Ekleme

1. Vercel dashboard'da projenizi açın
2. "Settings" sekmesine gidin
3. "Domains" bölümüne tıklayın
4. Domain adresinizi girin (örn: `koz-der.org`)
5. "Add" butonuna tıklayın

### 3. DNS Ayarları

Vercel size DNS kayıtlarını gösterecektir. Domain sağlayıcınızda (Namecheap, GoDaddy, vb.) şu kayıtları ekleyin:

**A Record:**
- Type: `A`
- Name: `@` (veya boş)
- Value: Vercel'in verdiği IP adresi (genellikle `76.76.21.21`)

**CNAME Record (www için):**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

**Alternatif olarak:** Vercel'in verdiği Nameserver'ları kullanabilirsiniz.

### 4. Site URL'sini Güncelleme

`astro.config.mjs` dosyasında site URL'sini güncelleyin:

```js
site: 'https://koz-der.org', // veya www.koz-der.org
```

Değişikliği commit edip push edin:

```bash
git add astro.config.mjs
git commit -m "Update site URL"
git push
```

## 🔄 Otomatik Deployment

Her GitHub'a push yaptığınızda Vercel otomatik olarak:
1. Yeni bir build alır
2. Test eder
3. Başarılıysa canlıya alır

Bu işlem genellikle 1-3 dakika sürer.

## 📝 Environment Variables (Gerekirse)

Eğer ileride environment variable'lara ihtiyaç duyarsanız:

1. Vercel dashboard'da projenizi açın
2. "Settings" > "Environment Variables" bölümüne gidin
3. Yeni variable ekleyin
4. Production, Preview ve Development için değerleri ayarlayın

**Not:** Bu proje şu anda environment variable kullanmıyor.

## 🔍 Build Ayarları

Vercel otomatik olarak şu ayarları algılar:
- **Framework Preset:** Astro
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

Bu ayarları değiştirmek isterseniz `vercel.json` dosyasını düzenleyebilirsiniz.

## 🐛 Sorun Giderme

### Build Başarısız Oluyor

1. Vercel dashboard'da "Deployments" sekmesine gidin
2. Başarısız deployment'ı açın
3. "Build Logs" bölümünde hatayı kontrol edin
4. Genellikle:
   - Eksik veya hatalı frontmatter
   - Tarih formatı hatası
   - Eksik bağımlılık

### Domain Çalışmıyor

1. DNS kayıtlarının doğru olduğundan emin olun (24-48 saat sürebilir)
2. Vercel'de domain'in "Valid" durumunda olduğundan emin olun
3. SSL sertifikasının otomatik oluşturulduğundan emin olun

### Eski İçerik Görünüyor

1. Tarayıcı cache'ini temizleyin (Ctrl+Shift+R veya Cmd+Shift+R)
2. Vercel'de son deployment'ın başarılı olduğundan emin olun
3. GitHub'da değişikliklerin push edildiğinden emin olun

## 📊 Analytics (Opsiyonel)

Vercel Analytics eklemek için:

1. Vercel dashboard'da projenizi açın
2. "Analytics" sekmesine gidin
3. "Enable Analytics" butonuna tıklayın

## 🔐 Güvenlik

Vercel otomatik olarak:
- HTTPS sağlar
- DDoS koruması sağlar
- SSL sertifikası verir

Ekstra bir şey yapmanıza gerek yok!

## 💰 Maliyet

Vercel'in ücretsiz planı bu proje için yeterlidir:
- ✅ Sınırsız bandwidth
- ✅ Sınırsız deployment
- ✅ Otomatik SSL
- ✅ Global CDN

## 📞 Yardım

Sorun yaşıyorsanız:
- [Vercel Dokümantasyonu](https://vercel.com/docs)
- [Vercel Discord](https://vercel.com/discord)
- [Vercel Support](https://vercel.com/support)

