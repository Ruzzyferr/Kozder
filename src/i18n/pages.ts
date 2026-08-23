// Sayfa gövdelerindeki uzun içerikler. ui.ts kısa arayüz metinlerini tutar;
// burada ise sayfaya özel bloklar (misyon, SSS, KVKK bölümleri, bağlantı
// grupları) dile göre yapılandırılmış hâlde durur.
import type { Lang } from './ui';

export interface FaqItem {
  q: string;
  a: string;
}

export interface PrivacySection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  after?: string[];
}

const tr = {
  meta: {
    home: {
      title: 'KOZ-DER — Avrupa için, Gençlerle',
      description:
        "Erasmus+ ve ESC projeleriyle gençlerin Avrupa'da gönüllülük, eğitim ve dayanışma deneyimi yaşamasını destekleyen sivil toplum kuruluşu.",
    },
    about: {
      title: 'Hakkımızda — KOZ-DER',
      description: "KOZ-DER'in misyonu, vizyonu, değerleri ve ekibi hakkında bilgi edinin.",
    },
    projects: {
      title: 'Projeler — KOZ-DER',
      description:
        'ESC ve Erasmus+ programları kapsamında yürüttüğümüz uluslararası gençlik projeleri.',
    },
    stories: {
      title: 'Gönüllü Hikayeleri — KOZ-DER',
      description:
        'Gönüllülerimizin ESC ve Erasmus+ programlarındaki deneyimleri ve unutulmaz anıları.',
    },
    events: {
      title: 'Etkinlikler — KOZ-DER',
      description:
        "KOZ-DER'in düzenlediği yaklaşan ve geçmiş etkinlikler. Kitap kulübü, speaking club, gönüllü buluşmaları ve daha fazlası.",
    },
    news: {
      title: 'Haberler — KOZ-DER',
      description:
        "KOZ-DER'in buluşmaları, etkinlikleri ve gönüllü faaliyetlerinden haberler ve kareler.",
    },
    posts: {
      title: 'Duyurular — KOZ-DER',
      description: "KOZ-DER'den son duyurular, çağrılar ve haberler.",
    },
    faq: {
      title: 'Sıkça Sorulan Sorular — KOZ-DER',
      description: 'Erasmus+, ESC ve KOZ-DER hakkında en çok sorulan soruların yanıtları.',
    },
    contact: {
      title: 'İletişim — KOZ-DER',
      description: 'KOZ-DER ile iletişime geçin: telefon, e-posta, WhatsApp ve adres bilgileri.',
    },
    links: {
      title: 'Bağlantılar — KOZ-DER',
      description:
        "KOZ-DER'in aktif çağrıları, sosyal medya hesapları ve iletişim kanalları — hepsi tek sayfada.",
    },
    privacy: {
      title: 'KVKK Aydınlatma Metni — KOZ-DER',
      description:
        "KOZ-DER'in 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verileri nasıl işlediğine dair aydınlatma metni.",
    },
    notFound: {
      title: 'Sayfa Bulunamadı — KOZ-DER',
      description: 'Aradığınız sayfa bulunamadı.',
    },
  },

  head: {
    about: {
      pageTitle: 'Hakkımızda.',
      intro: 'Gençlerin Avrupa kapısını aralayan, Kilis merkezli bir gönüllülük hareketi.',
    },
    faq: {
      pageTitle: 'Sıkça sorulanlar.',
      intro: 'Avrupa programları ve KOZ-DER hakkında merak ettiklerin — kısaca.',
    },
    contact: {
      pageTitle: 'İletişim.',
      intro: 'Sorularını yanıtlamaktan, projelerimizi anlatmaktan mutluluk duyarız.',
    },
    links: {
      pageTitle: 'Bağlantılar.',
      intro: 'Aradığın her şey tek sayfada — çağrılar, sosyal medya ve iletişim.',
    },
    privacy: {
      pageTitle: 'Kişisel verilerin korunması.',
      intro: '6698 sayılı KVKK kapsamında verilerinizi nasıl işlediğimize dair aydınlatma metni.',
    },
  },

  about: {
    missionHeading: 'Misyonumuz.',
    missionText:
      'Gençlerin kişisel, sosyal ve profesyonel gelişimine katkı sağlamak; zeka oyunları, kodlama, dijital beceriler ve yenilikçi öğrenme alanlarında yetkinliklerini geliştirmek; Erasmus+ ve ESC projeleriyle kültürlerarası deneyim ve aktif vatandaşlık bilinci kazandırmak.',
    visionHeading: 'Vizyonumuz.',
    visionText:
      "Türkiye'de ve Avrupa'da gençlerin eğitim, kültür, teknoloji ve sosyal gelişim alanlarında güçlenmelerine öncülük eden; ulusal ve uluslararası düzeyde örnek gösterilen, yenilikçi ve sürdürülebilir bir sivil toplum kuruluşu olmak.",
    valuesHeading: 'Değerlerimiz.',
    values: [
      {
        n: '01',
        title: 'Şeffaflık',
        text: 'Tüm faaliyetlerimizi, proje süreçlerimizi ve iş birliklerimizi açık, hesap verebilir ve güvene dayalı bir anlayışla yürütürüz.',
      },
      {
        n: '02',
        title: 'Katılımcılık',
        text: 'Gençlerin fikirlerini önemser, karar alma ve uygulama süreçlerine aktif katılımlarını destekleriz.',
      },
      {
        n: '03',
        title: 'Çeşitlilik',
        text: 'Farklı kültürlerden, geçmişlerden ve yaşam deneyimlerinden gelen gençleri bir araya getiririz.',
      },
      {
        n: '04',
        title: 'Yenilikçilik',
        text: 'Zeka oyunları, kodlama, dijital beceriler ve gençlik çalışmalarında yaratıcı projeler geliştiririz.',
      },
      {
        n: '05',
        title: 'Sürdürülebilirlik',
        text: 'Çevreye, topluma ve geleceğe karşı sorumluluğumuzun bilinciyle kalıcı etki oluştururuz.',
      },
    ],
    teamHeading: 'Ekibimiz.',
    /** team.json Türkçe yazıldığı için TR tarafında çeviri sözlüğü boş kalır. */
    roles: {} as Record<string, string>,
    bios: {} as Record<string, string>,
  },

  faq: {
    items: [
      {
        q: 'ESC (European Solidarity Corps) nedir?',
        a: 'Avrupa Dayanışma Programı, 18-30 yaş aralığındaki gençlerin başka bir Avrupa ülkesinde 2-12 ay arasında gönüllülük yapmasına imkân tanıyan bir Avrupa Birliği programıdır. Konaklama, yemek, ulaşım ve cep harçlığı tamamen Avrupa Komisyonu tarafından karşılanır.',
      },
      {
        q: 'Erasmus+ ile ESC arasındaki fark nedir?',
        a: 'Erasmus+ kısa süreli (genellikle 5-15 gün) gençlik değişimleri ve eğitim faaliyetleridir; her yaş için seçenekler vardır. ESC ise daha uzun süreli (2-12 ay) gönüllülük odaklı bir programdır ve 18-30 yaş aralığındaki gençler içindir.',
      },
      {
        q: "KOZ-DER'in projelerine nasıl başvururum?",
        a: 'Aktif çağrılarımızı Projeler sayfasında bulabilirsiniz. Her projenin "Bilgi Paketi" linki ve "Başvuru" butonu vardır. Önce bilgi paketini oku, sonra başvuru formunu doldur. Sorun olursa WhatsApp\'tan veya bilgi@kozder.com üzerinden bize yaz.',
      },
      {
        q: 'Başvurmak için İngilizcem yeterli olmalı mı?',
        a: 'Çoğu projede orta düzey (B1) İngilizce yeterlidir. Bazı projelerde başlangıç seviyesi de kabul edilir. Speaking Club etkinliklerimize katılarak konuşma pratiği yapabilirsiniz.',
      },
      {
        q: 'Hangi masrafları KOZ-DER karşılıyor?',
        a: 'ESC projelerinde uçak bileti, vize masrafları, konaklama, yemek, sağlık sigortası, ulaşım ve cep harçlığı Avrupa Komisyonu fonlarıyla karşılanır. KOZ-DER size bu süreci yönetir; cebinizden ekstra ücret çıkmaz.',
      },
      {
        q: 'Vize için yardım alabilir miyim?',
        a: 'Evet. Tüm vize sürecinde gerekli davet mektupları, sigorta poliçeleri ve diğer belgelerin hazırlanmasında size yardımcı oluruz. Vize ücretleri de proje fonundan karşılanır.',
      },
      {
        q: 'Başvuru sonrası süreç nasıl işliyor?',
        a: 'Başvurunuz bize ulaştıktan sonra 1 hafta içinde dönüş yaparız. Uygun bulunduğunuzda kısa bir online görüşme yaparız ve birlikte projeyi planlarız. Yola çıkmadan önce online oryantasyon eğitimleri düzenleriz.',
      },
      {
        q: 'KOZ-DER nerede ve ne zaman buluşuyor?',
        a: "Dernek merkezimiz Kilis, Kazım Karabekir Mahallesi'nde. Her hafta düzenli olarak Speaking Club, ayda bir Kitap Kulübü ve dönemsel ESC bilgilendirme buluşmaları yapıyoruz. Tüm etkinlikleri Etkinlikler sayfasından takip edebilirsin.",
      },
    ] as FaqItem[],
    ctaTitle: 'Cevabını bulamadın mı?',
    ctaText:
      'Sorularını WhatsApp veya e-posta üzerinden ilet — genellikle aynı gün dönüş yapıyoruz.',
    ctaMail: 'E-posta →',
  },

  contact: {
    reachHeading: 'Bize ulaş.',
    findHeading: 'Bizi bul.',
    phone: 'Telefon',
    email: 'E-posta',
    whatsappDesc: 'Hızlı yanıt için yaz',
    allLinks: 'Tüm Bağlantılar',
    allLinksDesc: 'Çağrılar, sosyal medya ve iletişim',
    postalLabel: 'Posta Adresi',
    mapTitle: 'KOZ-DER konumu',
    mapsOpen: "Maps'te aç →",
  },

  links: {
    applyHeading: 'Başvur',
    followHeading: 'Takip et',
    reachHeading: 'Bize ulaş',
    activeCalls: 'Aktif Çağrılar',
    activeCallsDesc: (n: number) => `${n} açık Erasmus+ / ESC projesi başvuru bekliyor`,
    storiesDesc: 'Bizimle yola çıkanlar ne yaşadı?',
    eventsDesc: 'Speaking Club, Kitap Kulübü ve buluşmalar',
    faqTitle: 'Sıkça Sorulanlar',
    faqDesc: 'Başvuru, masraflar, vize ve süreç hakkında',
    whatsappDesc: 'Hızlı yanıt için yaz',
    phone: 'Telefon',
    email: 'E-posta',
    contactPage: 'İletişim Sayfası',
    contactPageDesc: 'Adres, harita ve tüm kanallar',
    ctaTitle: 'Aklında bir soru mu var?',
    ctaText:
      'Hangi programın sana uygun olduğunu birlikte bulalım — genellikle aynı gün dönüş yapıyoruz.',
    ctaContact: 'İletişim Formu →',
  },

  privacy: {
    lastUpdatedLabel: 'Son güncelleme',
    lastUpdated: '23 Ağustos 2026',
    ctaTitle: 'KVKK talebiniz mi var?',
    ctaText:
      'Verilerinize ilişkin her türlü talebinizi doğrudan bize iletebilirsiniz — en geç otuz gün içinde yanıtlıyoruz.',
    sections: [
      {
        heading: 'Veri Sorumlusu',
        paragraphs: [
          'Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") m.10 kapsamında, veri sorumlusu sıfatıyla Gençlik Zeka Oyunları ve Kodlama Derneği (KOZ-DER) tarafından hazırlanmıştır.',
          'Derneğimiz; Erasmus+ ve Avrupa Dayanışma Programı (ESC) projeleri, yerel gençlik etkinlikleri ve gönüllülük faaliyetleri yürütmektedir. Bu faaliyetler kapsamında kişisel verilerinizi aşağıda açıklanan çerçevede işliyoruz.',
        ],
        bullets: [
          'Veri sorumlusu: Gençlik Zeka Oyunları ve Kodlama Derneği (KOZ-DER)',
          'Adres: Kazım Karabekir Mahallesi, İstiklal Caddesi No: 33D, 79000 Kilis / Türkiye',
          'E-posta: bilgi@kozder.com · Telefon: +90 551 197 29 97',
        ],
      },
      {
        heading: 'İşlenen Kişisel Veriler',
        paragraphs: [
          'İlişkimizin niteliğine göre aşağıdaki veri kategorileri işlenebilir. Her veri kategorisi herkes için işlenmez; yalnızca ilgili faaliyet için gerekli olanlar toplanır.',
        ],
        bullets: [
          'Kimlik: ad, soyad, doğum tarihi, uyruk; yurt dışı hareketliliklerde pasaport/kimlik bilgileri',
          'İletişim: telefon, e-posta, adres, sosyal medya hesabı',
          'Başvuru ve katılım: motivasyon yazısı, özgeçmiş, yabancı dil düzeyi, eğitim ve gönüllülük geçmişi, proje tercihi',
          'Seyahat ve lojistik: vize işlemleri, uçuş/konaklama bilgileri, seyahat sigortası, acil durumda aranacak kişi',
          'Finansal: harcama belgeleri ve geri ödeme yapılabilmesi için banka/IBAN bilgisi',
          'Görsel ve işitsel: etkinlik ve proje fotoğrafları, videolar; sitede yayımlanan gönüllü deneyim yazıları',
          'İşlem güvenliği ve kullanım: siteyi ziyaretinizde oluşan IP adresi, tarayıcı bilgisi ve anonim ziyaret istatistikleri',
          'Özel nitelikli veriler: yalnızca zorunlu hâllerde (ör. sağlık sigortası, diyet veya erişilebilirlik ihtiyacı) ve açık rızanızla',
        ],
      },
      {
        heading: 'İşleme Amaçları',
        bullets: [
          'Proje ve etkinlik başvurularının alınması, değerlendirilmesi ve seçim süreçlerinin yürütülmesi',
          'Erasmus+ / ESC hareketliliklerinin planlanması; vize, seyahat, konaklama ve sigorta işlemlerinin yapılması',
          'Katılımcı sözleşmelerinin kurulması ve ifası, ödeme ve geri ödeme süreçlerinin yürütülmesi',
          'Program otoriteleri ve ortak kuruluşlara karşı raporlama ve belgelendirme yükümlülüklerinin yerine getirilmesi',
          'Etkinliklerin organizasyonu, duyurulması ve katılımcılarla iletişim kurulması',
          'Dernek faaliyetlerinin tanıtılması; açık rızanız olması hâlinde fotoğraf ve deneyim yazılarınızın yayımlanması',
          'Talep, soru ve şikâyetlerin yanıtlanması',
          'Mevzuattan doğan yükümlülüklerin yerine getirilmesi ve hukuki taleplere karşı savunma hakkının kullanılması',
          'Web sitesinin güvenli çalıştırılması ve anonim kullanım istatistikleriyle iyileştirilmesi',
        ],
      },
      {
        heading: 'Hukuki Sebepler',
        paragraphs: [
          "Kişisel verileriniz, KVKK m.5 ve m.6'da düzenlenen şu hukuki sebeplere dayanılarak işlenir:",
        ],
        bullets: [
          'Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması (m.5/2-c) — başvuru, katılım ve hareketlilik süreçleri',
          'Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi (m.5/2-ç) — dernekler mevzuatı, mali mevzuat, program raporlamaları',
          'Bir hakkın tesisi, kullanılması veya korunması için zorunlu olması (m.5/2-e)',
          'Temel hak ve özgürlüklerinize zarar vermemek kaydıyla meşru menfaatlerimiz (m.5/2-f) — site güvenliği ve anonim istatistikler',
          'Açık rızanız (m.5/1 ve m.6/2) — fotoğraf/deneyim paylaşımları, tanıtım iletileri ve özel nitelikli verilerin işlenmesi',
        ],
        after: [
          'Açık rızaya dayanan işlemelerde rızanızı dilediğiniz zaman geri alabilirsiniz. Geri alma, o ana kadar hukuka uygun şekilde yapılmış işlemeleri etkilemez.',
        ],
      },
      {
        heading: 'Toplama Yöntemleri',
        paragraphs: [
          'Kişisel verileriniz; başvuru formları (Google Forms üzerinden), e-posta, telefon, WhatsApp, sosyal medya mesajları, etkinlik kayıtları, yüz yüze görüşmeler ve web sitemizi ziyaretiniz sırasında otomatik ya da kısmen otomatik yollarla toplanmaktadır.',
        ],
      },
      {
        heading: 'Aktarım ve Yurt Dışına Aktarım',
        paragraphs: [
          'Kişisel verileriniz, yalnızca yukarıdaki amaçlarla sınırlı olmak üzere aşağıdaki taraflara aktarılabilir:',
        ],
        bullets: [
          'Türkiye Ulusal Ajansı ve Avrupa Komisyonu ile ilgili program otoriteleri (raporlama ve denetim yükümlülükleri kapsamında)',
          "Projelerin yürütüldüğü Avrupa'daki ev sahibi ve ortak kuruluşlar",
          'Seyahat, konaklama, sigorta ve vize hizmeti sağlayan kuruluşlar',
          'Web sitesi barındırma ve altyapı sağlayıcılarımız',
          'Yetkili kamu kurum ve kuruluşları ile adli merciler (talep hâlinde ve mevzuat gereği)',
        ],
        after: [
          "Erasmus+ ve ESC projelerinin niteliği gereği bazı verileriniz yurt dışına aktarılmaktadır. Bu aktarımlar, KVKK m.9'da öngörülen şartlara — yeterlilik kararı, uygun güvenceler veya açık rızanız — uygun olarak gerçekleştirilir.",
        ],
      },
      {
        heading: 'Saklama Süresi',
        paragraphs: [
          'Kişisel verileriniz, işlendikleri amaç için gerekli olan süre boyunca ve ilgili mevzuatta öngörülen zamanaşımı ile saklama süreleri sonuna kadar muhafaza edilir. Erasmus+ ve ESC projelerine ilişkin belgeler, program otoritelerinin denetim ve arşivleme kuralları uyarınca proje kapanışından sonra da belirli bir süre saklanır.',
          'Sürenin dolması veya işleme sebebinin ortadan kalkması hâlinde verileriniz silinir, yok edilir ya da anonim hâle getirilir.',
        ],
      },
      {
        heading: 'Web Sitesi, Çerezler ve Üçüncü Taraf Servisler',
        paragraphs: [
          'Sitemiz reklam veya profilleme amaçlı çerez kullanmaz. Ziyaretiniz sırasında aşağıdaki servisler devreye girer:',
        ],
        bullets: [
          'Vercel — sitenin barındırılması ve çerez kullanmayan, kişiyi tanımlamayan toplu ziyaret istatistikleri (Vercel Analytics)',
          "Google Maps — yalnızca İletişim sayfasındaki harita; haritayı görüntülediğinizde IP adresiniz Google'a iletilir",
        ],
        after: [
          "Başvuru formlarımız Google Forms üzerinde barındırılmaktadır; formu doldurduğunuzda Google'ın kendi gizlilik politikası da geçerli olur.",
        ],
      },
      {
        heading: 'Fotoğraf ve Deneyim Paylaşımları',
        paragraphs: [
          'Etkinlik ve proje fotoğrafları ile gönüllü deneyim yazıları, sitemizde ve sosyal medya hesaplarımızda yalnızca ilgili kişinin açık rızasıyla yayımlanır.',
          'Yayımlanan bir fotoğrafın veya yazının kaldırılmasını istediğinizde bilgi@kozder.com adresine yazmanız yeterlidir; talebiniz gecikmeksizin yerine getirilir.',
        ],
      },
      {
        heading: 'Haklarınız',
        paragraphs: ['KVKK m.11 uyarınca veri sorumlusuna başvurarak şu haklara sahipsiniz:'],
        bullets: [
          'Kişisel verilerinizin işlenip işlenmediğini öğrenme',
          'İşlenmişse buna ilişkin bilgi talep etme',
          'İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme',
          'Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme',
          'Eksik veya yanlış işlenmişse düzeltilmesini isteme',
          "KVKK'da öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme",
          'Düzeltme, silme ve yok etme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme',
          'Münhasıran otomatik sistemlerle analiz edilmesi suretiyle aleyhinize bir sonuç doğmasına itiraz etme',
          'Kanuna aykırı işleme sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme',
        ],
      },
      {
        heading: 'Başvuru Yolu',
        paragraphs: [
          'Taleplerinizi, kimliğinizi tevsik edici bilgilerle birlikte; yazılı olarak yukarıdaki adrese göndererek veya daha önce derneğimize bildirdiğiniz ve sistemimizde kayıtlı bulunan e-posta adresinizden bilgi@kozder.com adresine ileterek yapabilirsiniz.',
          "Başvurunuz, talebin niteliğine göre en kısa sürede ve her hâlde en geç otuz gün içinde ücretsiz olarak sonuçlandırılır. İşlemin ayrıca bir maliyet gerektirmesi hâlinde Kurul'ca belirlenen tarifedeki ücret alınabilir.",
          "Başvurunuzun reddedilmesi, yanıtın yetersiz bulunması veya süresinde yanıt verilmemesi hâlinde; yanıtı öğrendiğiniz tarihten itibaren otuz ve her hâlde başvuru tarihinden itibaren altmış gün içinde Kişisel Verileri Koruma Kurulu'na şikâyette bulunabilirsiniz.",
        ],
      },
      {
        heading: 'Güncellemeler',
        paragraphs: [
          'Bu aydınlatma metni, mevzuattaki değişiklikler veya faaliyetlerimizdeki gelişmeler doğrultusunda güncellenebilir. Güncel metin her zaman bu sayfada yayımlanır.',
        ],
      },
    ] as PrivacySection[],
  },
};

const en: typeof tr = {
  meta: {
    home: {
      title: 'KOZ-DER — For Europe, With Young People',
      description:
        'A civil society organisation helping young people gain volunteering, training and intercultural experience across Europe through Erasmus+ and the European Solidarity Corps.',
    },
    about: {
      title: 'About — KOZ-DER',
      description: "Learn about KOZ-DER's mission, vision, values and team.",
    },
    projects: {
      title: 'Projects — KOZ-DER',
      description:
        'International youth projects we run under the Erasmus+ and European Solidarity Corps programmes.',
    },
    stories: {
      title: 'Volunteer Stories — KOZ-DER',
      description:
        'What our volunteers experienced on ESC and Erasmus+ programmes, and the memories they brought home.',
    },
    events: {
      title: 'Events — KOZ-DER',
      description:
        'Upcoming and past events run by KOZ-DER: book club, speaking club, volunteer meet-ups and more.',
    },
    news: {
      title: 'News — KOZ-DER',
      description: "News and photos from KOZ-DER's meet-ups, events and volunteer activities.",
    },
    posts: {
      title: 'Announcements — KOZ-DER',
      description: 'The latest announcements, open calls and news from KOZ-DER.',
    },
    faq: {
      title: 'Frequently Asked Questions — KOZ-DER',
      description: 'Answers to the questions we hear most about Erasmus+, the ESC and KOZ-DER.',
    },
    contact: {
      title: 'Contact — KOZ-DER',
      description: 'Get in touch with KOZ-DER: phone, email, WhatsApp and address.',
    },
    links: {
      title: 'Links — KOZ-DER',
      description:
        "KOZ-DER's open calls, social media accounts and contact channels — all on one page.",
    },
    privacy: {
      title: 'Privacy Notice — KOZ-DER',
      description:
        'How KOZ-DER processes personal data under Turkish Personal Data Protection Law No. 6698 (KVKK).',
    },
    notFound: {
      title: 'Page Not Found — KOZ-DER',
      description: 'The page you were looking for could not be found.',
    },
  },

  head: {
    about: {
      pageTitle: 'About us.',
      intro: "A Kilis-based volunteering movement that opens Europe's door to young people.",
    },
    faq: {
      pageTitle: 'Frequently asked.',
      intro: 'What you want to know about European programmes and KOZ-DER — in brief.',
    },
    contact: {
      pageTitle: 'Contact.',
      intro: "We're glad to answer your questions and tell you about our projects.",
    },
    links: {
      pageTitle: 'Links.',
      intro: 'Everything in one place — open calls, social media and contact.',
    },
    privacy: {
      pageTitle: 'Protection of personal data.',
      intro: 'How we process your data under Turkish Data Protection Law No. 6698 (KVKK).',
    },
  },

  about: {
    missionHeading: 'Our mission.',
    missionText:
      'To contribute to the personal, social and professional development of young people; to build their skills in intelligence games, coding, digital literacy and innovative learning; and to give them intercultural experience and a sense of active citizenship through Erasmus+ and ESC projects.',
    visionHeading: 'Our vision.',
    visionText:
      'To be an innovative, sustainable civil society organisation that leads the way in empowering young people in education, culture, technology and social development in Türkiye and across Europe — and that is held up as an example nationally and internationally.',
    valuesHeading: 'Our values.',
    values: [
      {
        n: '01',
        title: 'Transparency',
        text: 'We run every activity, project and partnership in an open, accountable and trust-based way.',
      },
      {
        n: '02',
        title: 'Participation',
        text: "We take young people's ideas seriously and support their active involvement in making and carrying out decisions.",
      },
      {
        n: '03',
        title: 'Diversity',
        text: 'We bring together young people from different cultures, backgrounds and life experiences.',
      },
      {
        n: '04',
        title: 'Innovation',
        text: 'We develop creative projects in intelligence games, coding, digital skills and youth work.',
      },
      {
        n: '05',
        title: 'Sustainability',
        text: 'We create lasting impact, mindful of our responsibility to the environment, to society and to the future.',
      },
    ],
    teamHeading: 'Our team.',
    roles: {
      Başkan: 'President',
      'Başkan Yardımcısı': 'Vice President',
      Sayman: 'Treasurer',
      'Asil Üye': 'Board Member',
      'Genel Sekreter': 'Secretary General',
    },
    bios: {
      'Mevlide Özkaraca':
        'An educator who leads on youth work, volunteering and social development.',
      'Halil Özkaraca':
        'A specialist in ESC and Erasmus+ projects and an experienced youth work coordinator.',
      'Hasan Özyıldız': 'A specialist in financial affairs and finance processes.',
      'Ayten Özyıldız': "A full member who contributes actively to the association's work.",
      'Mustafa Özkaraca': 'Coordinates corporate communications and organisational processes.',
    },
  },

  faq: {
    items: [
      {
        q: 'What is the ESC (European Solidarity Corps)?',
        a: 'The European Solidarity Corps is a European Union programme that lets people aged 18–30 volunteer in another European country for between 2 and 12 months. Accommodation, food, travel and pocket money are covered in full by the European Commission.',
      },
      {
        q: 'What is the difference between Erasmus+ and the ESC?',
        a: 'Erasmus+ covers short youth exchanges and training activities — usually 5 to 15 days — with options for every age group. The ESC is a longer volunteering programme lasting 2 to 12 months, open to people aged 18–30.',
      },
      {
        q: "How do I apply to KOZ-DER's projects?",
        a: 'You will find our open calls on the Projects page. Every project has an "info pack" link and an "apply" button. Read the info pack first, then fill in the application form. If anything goes wrong, message us on WhatsApp or write to bilgi@kozder.com.',
      },
      {
        q: 'Does my English need to be good enough to apply?',
        a: 'Intermediate (B1) English is enough for most projects, and some accept beginners. You can practise speaking by joining our Speaking Club sessions.',
      },
      {
        q: 'Which costs does KOZ-DER cover?',
        a: 'On ESC projects, flights, visa costs, accommodation, food, health insurance, local transport and pocket money are all covered by European Commission funding. KOZ-DER manages the process for you; nothing comes out of your own pocket.',
      },
      {
        q: 'Can I get help with the visa?',
        a: 'Yes. We help you prepare the invitation letters, insurance policies and other documents you need throughout the visa process. Visa fees are covered by the project fund too.',
      },
      {
        q: 'What happens after I apply?',
        a: 'We reply within a week of receiving your application. If you are a good fit we hold a short online interview and plan the project together. Before you travel, we run online orientation sessions.',
      },
      {
        q: 'Where and when does KOZ-DER meet?',
        a: 'Our office is in the Kazım Karabekir neighbourhood of Kilis. We hold Speaking Club every week, Book Club once a month, and ESC information meet-ups through the year. You can follow everything on the Events page.',
      },
    ] as FaqItem[],
    ctaTitle: "Couldn't find your answer?",
    ctaText: 'Send your question by WhatsApp or email — we usually reply the same day.',
    ctaMail: 'Email →',
  },

  contact: {
    reachHeading: 'Get in touch.',
    findHeading: 'Find us.',
    phone: 'Phone',
    email: 'Email',
    whatsappDesc: 'Message us for a quick reply',
    allLinks: 'All Links',
    allLinksDesc: 'Open calls, social media and contact',
    postalLabel: 'Postal address',
    mapTitle: 'KOZ-DER location',
    mapsOpen: 'Open in Maps →',
  },

  links: {
    applyHeading: 'Apply',
    followHeading: 'Follow',
    reachHeading: 'Get in touch',
    activeCalls: 'Open Calls',
    activeCallsDesc: (n: number) =>
      `${n} open Erasmus+ / ESC project${n === 1 ? '' : 's'} waiting for applications`,
    storiesDesc: 'What did the people who set off with us experience?',
    eventsDesc: 'Speaking Club, Book Club and meet-ups',
    faqTitle: 'Frequently Asked',
    faqDesc: 'Applications, costs, visas and the process',
    whatsappDesc: 'Message us for a quick reply',
    phone: 'Phone',
    email: 'Email',
    contactPage: 'Contact Page',
    contactPageDesc: 'Address, map and every channel',
    ctaTitle: 'Got a question?',
    ctaText:
      "Let's work out which programme suits you — we usually reply the same day.",
    ctaContact: 'Contact Form →',
  },

  privacy: {
    lastUpdatedLabel: 'Last updated',
    lastUpdated: '23 August 2026',
    ctaTitle: 'Have a data protection request?',
    ctaText:
      'You can send us any request about your data directly — we respond within thirty days at the latest.',
    sections: [
      {
        heading: 'Data Controller',
        paragraphs: [
          'This notice has been prepared by Gençlik Zeka Oyunları ve Kodlama Derneği (KOZ-DER) as data controller, under Article 10 of Turkish Personal Data Protection Law No. 6698 ("KVKK").',
          'Our association runs Erasmus+ and European Solidarity Corps (ESC) projects, local youth events and volunteering activities. We process your personal data within the scope of those activities, as described below.',
        ],
        bullets: [
          'Data controller: Gençlik Zeka Oyunları ve Kodlama Derneği (KOZ-DER)',
          'Address: Kazım Karabekir Mahallesi, İstiklal Caddesi No: 33D, 79000 Kilis / Türkiye',
          'Email: bilgi@kozder.com · Phone: +90 551 197 29 97',
        ],
      },
      {
        heading: 'Personal Data We Process',
        paragraphs: [
          'Depending on the nature of our relationship, the categories below may be processed. Not every category applies to everyone; we collect only what the relevant activity requires.',
        ],
        bullets: [
          'Identity: first and last name, date of birth, nationality; passport or ID details for mobility abroad',
          'Contact: phone, email, address, social media account',
          'Application and participation: motivation letter, CV, language level, education and volunteering history, project preference',
          'Travel and logistics: visa paperwork, flight and accommodation details, travel insurance, emergency contact',
          'Financial: expense receipts and bank/IBAN details so that reimbursements can be made',
          'Visual and audio: event and project photographs and videos; volunteer experience pieces published on this site',
          'Transaction security and usage: the IP address and browser information generated when you visit the site, and anonymous visit statistics',
          'Special categories of data: only where strictly necessary (e.g. health insurance, dietary or accessibility needs) and with your explicit consent',
        ],
      },
      {
        heading: 'Purposes of Processing',
        bullets: [
          'Receiving and assessing project and event applications and running selection processes',
          'Planning Erasmus+ / ESC mobilities and arranging visas, travel, accommodation and insurance',
          'Concluding and performing participant agreements and running payment and reimbursement processes',
          'Meeting reporting and documentation obligations towards programme authorities and partner organisations',
          'Organising and announcing events and communicating with participants',
          "Promoting the association's work and, where you have given explicit consent, publishing your photographs and experience pieces",
          'Responding to requests, questions and complaints',
          'Meeting obligations arising from legislation and exercising the right of defence against legal claims',
          'Operating the website securely and improving it using anonymous usage statistics',
        ],
      },
      {
        heading: 'Legal Grounds',
        paragraphs: [
          'Your personal data is processed on the following legal grounds set out in Articles 5 and 6 of the KVKK:',
        ],
        bullets: [
          'Directly related to the conclusion or performance of a contract (Art. 5/2-c) — application, participation and mobility processes',
          "Compliance with the data controller's legal obligations (Art. 5/2-ç) — associations legislation, financial legislation, programme reporting",
          'Necessary for the establishment, exercise or protection of a right (Art. 5/2-e)',
          'Our legitimate interests, provided your fundamental rights and freedoms are not harmed (Art. 5/2-f) — site security and anonymous statistics',
          'Your explicit consent (Art. 5/1 and Art. 6/2) — photo and experience sharing, promotional messages, and processing of special categories of data',
        ],
        after: [
          'Where processing is based on explicit consent, you may withdraw that consent at any time. Withdrawal does not affect processing lawfully carried out up to that point.',
        ],
      },
      {
        heading: 'How We Collect Data',
        paragraphs: [
          'Your personal data is collected by automated or partly automated means through application forms (hosted on Google Forms), email, phone, WhatsApp, social media messages, event registrations, in-person meetings and your visits to our website.',
        ],
      },
      {
        heading: 'Transfers, Including Transfers Abroad',
        paragraphs: [
          'Your personal data may be transferred to the following parties, limited to the purposes set out above:',
        ],
        bullets: [
          'The Turkish National Agency, the European Commission and related programme authorities (for reporting and audit obligations)',
          'Host and partner organisations in Europe where the projects take place',
          'Providers of travel, accommodation, insurance and visa services',
          'Our website hosting and infrastructure providers',
          'Authorised public institutions and judicial authorities (upon request and as required by legislation)',
        ],
        after: [
          'Given the nature of Erasmus+ and ESC projects, some of your data is transferred abroad. Such transfers are carried out in line with the conditions set out in Article 9 of the KVKK — an adequacy decision, appropriate safeguards, or your explicit consent.',
        ],
      },
      {
        heading: 'Retention Period',
        paragraphs: [
          'Your personal data is kept for as long as the purpose of processing requires and until the end of the limitation and retention periods set out in the relevant legislation. Documents relating to Erasmus+ and ESC projects are retained for a set period after project closure, in line with the audit and archiving rules of the programme authorities.',
          'Once the period expires or the reason for processing no longer applies, your data is deleted, destroyed or anonymised.',
        ],
      },
      {
        heading: 'Website, Cookies and Third-Party Services',
        paragraphs: [
          'Our site does not use cookies for advertising or profiling. The following services are involved when you visit:',
        ],
        bullets: [
          'Vercel — hosting for the site, plus aggregate visit statistics that use no cookies and do not identify individuals (Vercel Analytics)',
          'Google Maps — only the map on the Contact page; when the map loads, your IP address is sent to Google',
        ],
        after: [
          "Our application forms are hosted on Google Forms; when you fill in a form, Google's own privacy policy also applies.",
        ],
      },
      {
        heading: 'Photographs and Experience Pieces',
        paragraphs: [
          'Event and project photographs and volunteer experience pieces are published on our site and social media accounts only with the explicit consent of the person concerned.',
          'If you want a published photograph or piece removed, simply write to bilgi@kozder.com; your request will be acted on without delay.',
        ],
      },
      {
        heading: 'Your Rights',
        paragraphs: [
          'Under Article 11 of the KVKK, you have the following rights, which you may exercise by applying to the data controller:',
        ],
        bullets: [
          'To learn whether your personal data is being processed',
          'To request information if it has been processed',
          'To learn the purpose of processing and whether the data is used in line with that purpose',
          'To know the third parties to whom the data is transferred, in Türkiye or abroad',
          'To request correction if the data is incomplete or inaccurate',
          'To request erasure or destruction within the conditions set out in the KVKK',
          'To request that correction, erasure and destruction be notified to the third parties the data was transferred to',
          'To object to an outcome against you produced solely by automated analysis',
          'To claim compensation if you suffer loss because of unlawful processing',
        ],
      },
      {
        heading: 'How to Apply',
        paragraphs: [
          'You can submit your requests, together with information verifying your identity, either in writing to the address above or by email to bilgi@kozder.com from the address you previously gave us and that is on record in our system.',
          'Your application is concluded free of charge as soon as possible and within thirty days at the latest, depending on the nature of the request. If the process incurs an additional cost, the fee set out in the tariff determined by the Board may be charged.',
          'If your application is rejected, the response is inadequate, or no response is given in time, you may lodge a complaint with the Personal Data Protection Board within thirty days of learning of the response and in any case within sixty days of the date of application.',
        ],
      },
      {
        heading: 'Updates',
        paragraphs: [
          'This notice may be updated in line with changes in legislation or developments in our activities. The current text is always published on this page.',
        ],
      },
    ] as PrivacySection[],
  },
};

export const pageContent = { tr, en } as const;

export function usePage(lang: Lang) {
  return pageContent[lang] ?? pageContent.tr;
}
