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
        q: "KOZ-DER ne zaman ve nerede kuruldu?",
        a: "KOZ-DER’in kuruluş hazırlıkları ve resmî başvurusu 2018 yılında Kilis’te yapılmıştır. Dernek, resmî işlemlerin tamamlanmasının ardından 2 Ocak 2019 tarihinde tüzel kişilik kazanarak faaliyetlerine başlamıştır.",
      },
      {
        q: "KOZ-DER’in logosunda neden 2018 yazıyor?",
        a: "Derneğin kuruluş fikri, hazırlıkları ve resmî başvurusu 2018 yılında başladığı için logomuzda 2018 tarihi bulunmaktadır. 2 Ocak 2019 ise derneğimizin resmen tüzel kişilik kazandığı tarihtir. Dolayısıyla 2018 kuruluş sürecimizin başlangıcını, 2019 ise resmî kuruluşumuzu ifade eder.",
      },
      {
        q: "“KOZ-DER” ismi nereden geliyor?",
        a: "“Koz” kelimesi Kilis yöresinde ceviz anlamına gelir. Ceviz, görünümü ve besleyici özellikleriyle beyin ve zihinsel gelişimle ilişkilendirilir. Zekâ oyunları, robotik kodlama ve dijital beceriler de düşünme, problem çözme ve üretme becerilerini destekler. Derneğimizin ismi, yerel kültürümüzü gençlerin zihinsel ve teknolojik gelişimiyle bir araya getiren bu anlayıştan doğmuştur.",
      },
      {
        q: "KOZ-DER’in amaçları ve hedefleri nelerdir?",
        a: "KOZ-DER; gençlerin kişisel, sosyal, akademik ve mesleki gelişimlerini desteklemeyi amaçlar. Zekâ oyunları, robotik kodlama, dijital beceriler, yabancı dil, çevre, afet bilinci, aktif vatandaşlık, gönüllülük ve kültürlerarası öğrenme alanlarında çalışmalar yürütür. Özellikle daha az fırsata sahip gençlerin ulusal ve uluslararası imkânlara erişimini artırmayı hedefler.",
      },
      {
        q: "KOZ-DER hangi alanlarda faaliyet yürütmektedir?",
        a: "Temel faaliyet alanlarımız; zekâ oyunları, robotik kodlama, dijital beceriler, İngilizce konuşma, çevre ve geri dönüşüm, afet bilinci, aktif vatandaşlık, sosyal kapsayıcılık, mülteci entegrasyonu, gönüllülük ve uluslararası gençlik çalışmalarıdır.",
      },
      {
        q: "KOZ-DER faaliyetlerine katılmak için Kilis’te yaşamak gerekir mi?",
        a: "Hayır. Yüz yüze faaliyetlerimizin önemli bir bölümü Kilis’te gerçekleştirilmektedir. Ancak Türkiye’nin farklı şehirlerinde yaşayan gençler çevrim içi eğitimlere, toplantılara, bilgilendirme faaliyetlerine ve uygun ulusal veya uluslararası projelere katılabilir. Her faaliyetin özel katılım koşulları duyurusunda belirtilir.",
      },
      {
        q: "KOZ-DER’de nasıl gönüllü olabilirim?",
        a: "Web sitemizi ve linktr.ee/kozder sayfamızı takip ederek güncel gönüllülük gruplarımıza katılabilirsiniz. İlgi alanınıza göre Speaking Club, zekâ oyunları, robotik kodlama, çevre, afet bilinci, sosyal medya, proje hazırlama ve yaygınlaştırma çalışmalarında gönüllü görev alabilirsiniz.",
      },
      {
        q: "KOZ-DER’e nasıl üye olabilirim?",
        a: "linktr.ee/kozder sayfasındaki üyelik bölümünden üyelik şartlarını okuyabilir ve başvuru adımlarını takip edebilirsiniz. Üyelik başvuruları dernek tüzüğü ve ilgili mevzuat doğrultusunda değerlendirilir. Derneğe üye olmadan da faaliyetlerimize gönüllü olarak katılabilirsiniz.",
      },
      {
        q: "KOZ-DER’in projelerine kimler başvurabilir?",
        a: "Başvuru şartları projeye göre değişir. Yaş, ülke, yabancı dil seviyesi, eğitim veya mesleki profil gibi koşullar her çağrıda farklı olabilir. Projeye ait yaş aralığı, katılımcı profili ve diğer koşullar duyuru metninde açıkça paylaşılır.",
      },
      {
        q: "KOZ-DER’in projelerine nasıl başvurabilirim?",
        a: "Güncel fırsatları web sitemizdeki Projeler bölümünden ve linktr.ee/kozder sayfasından takip edebilirsiniz. Başvurmadan önce proje açıklamasını ve varsa bilgi paketini dikkatlice okuyarak ilgili başvuru formunu doldurmanız gerekir.",
      },
      {
        q: "Proje katılımcıları hangi ölçütlerle seçilir?",
        a: "Seçimlerde projenin hedef grubuna uygunluk, motivasyon, sorumluluk bilinci, ilgili alana ilgi ve gerektiğinde yabancı dil yeterliliği dikkate alınır. Daha önce uluslararası projeye katılmamış, daha az fırsata sahip veya çağrının hedef grubunda bulunan gençlere öncelik verilebilir. Her projeye özgü ölçütler duyuruda açıklanır.",
      },
      {
        q: "Başvuru veya projeye katılım için ücret ödemem gerekir mi?",
        a: "Hayır. KOZ-DER; başvuru, mülakat, aday gösterme veya katılımcı seçimi karşılığında ücret talep etmez. Seyahat, konaklama, yemek, sigorta, vize ve cep harçlığı gibi destekler projenin bütçe kurallarına göre karşılanır ve her çağrıda ayrıca açıklanır.",
      },
      {
        q: "Daha önce yurtdışına çıkmamış kişiler başvurabilir mi?",
        a: "Evet. Daha önce yurtdışına çıkmamış veya Erasmus+ ve ESC deneyimi bulunmayan gençlerin başvurularını özellikle teşvik ediyoruz. Seçilen katılımcılara proje hazırlığı, seyahat planlaması, kültürel uyum ve yurtdışı süreci hakkında oryantasyon desteği verilir.",
      },
      {
        q: "Pasaportum veya vizem yoksa başvurabilir miyim?",
        a: "Projenin başlangıç tarihine ve başvuru koşullarına bağlı olarak başvurabilirsiniz. Seçilmeniz durumunda pasaport, vize, davet mektubu, sigorta ve gerekli belgeler konusunda size yol gösterilir. Belgelerin zamanında hazırlanması ve resmî başvuruların yapılması ise katılımcının sorumluluğundadır.",
      },
      {
        q: "İngilizcem çok iyi değilse projelere katılabilir miyim?",
        a: "Birçok projede temel veya orta düzey İngilizce yeterlidir. Önemli olan iletişim kurmaya açık olmak, öğrenmeye istekli davranmak ve faaliyetlere aktif katılmaktır. Bazı projelerde daha ileri seviyede İngilizce istenebilir. İngilizcesini geliştirmek isteyen gençler KOZ-DER Speaking Club faaliyetlerine katılabilir.",
      },
      {
        q: "Daha az fırsata sahip gençlere öncelik veriliyor mu?",
        a: "Evet. Ekonomik, coğrafi, sosyal, eğitsel veya kültürel engeller yaşayan gençlerin fırsatlara erişimini artırmak temel önceliklerimizdendir. Kilis ve Güneydoğu Anadolu’da yaşayan, daha önce uluslararası deneyim edinmemiş veya imkânlara erişimi sınırlı gençler bazı projelerde öncelikli olarak değerlendirilebilir.",
      },
      {
        q: "Avrupa Dayanışma Programı (ESC) nedir?",
        a: "Avrupa Dayanışma Programı, 18–30 yaş arasındaki gençlerin yurtiçinde veya yurtdışında gönüllülük faaliyetlerine katılmasını sağlayan bir Avrupa Birliği programıdır. Proje türüne göre konaklama, yemek, seyahat, sigorta, yerel ulaşım, vize giderleri ve cep harçlığı program bütçesinden desteklenebilir.",
      },
      {
        q: "Erasmus+ ile ESC arasındaki fark nedir?",
        a: "Erasmus+; gençlik değişimleri, eğitim kursları ve farklı öğrenme hareketliliklerini kapsar. ESC ise ağırlıklı olarak gönüllülük ve dayanışma faaliyetlerine odaklanır. Yaş, süre, görevler ve mali destekler projenin türüne göre değişir.",
      },
      {
        q: "KOZ-DER’in Avrupa Dayanışma Programı kapsamındaki rolü nedir?",
        a: "KOZ-DER, Avrupa Dayanışma Programı Kalite Sertifikası kapsamında destekleyen ve lider kuruluş olarak çalışmaktadır. Gönüllülerin uygun projelerle eşleştirilmesi, proje öncesi hazırlık, seyahat, vize, sigorta, mentorluk, izleme ve proje sonrası değerlendirme süreçlerinde destek sağlar.",
      },
      {
        q: "Başvuru yaptıktan sonra süreç nasıl ilerler?",
        a: "Başvurular proje koşullarına göre incelenir. Uygun adaylarla çevrim içi veya yüz yüze görüşme yapılabilir. Seçilen katılımcılara proje, görevler, seyahat, bütçe, sigorta, vize ve kültürel hazırlık konularında bilgi verilir. Bazı projelerde nihai seçim ev sahibi kuruluş tarafından yapılabilir.",
      },
      {
        q: "KOZ-DER’in yüz yüze ve çevrim içi faaliyetlerini nasıl takip edebilirim?",
        a: "Güncel faaliyetleri web sitemizden, sosyal medya hesaplarımızdan ve linktr.ee/kozder sayfasından takip edebilirsiniz. İlgili WhatsApp veya duyuru gruplarına katılarak yeni etkinliklerden ve proje çağrılarından haberdar olabilirsiniz.",
      },
      {
        q: "Bir projeye katıldıktan sonra KOZ-DER’de çalışmaya devam edebilir miyim?",
        a: "Evet. Eski katılımcılar deneyimlerini yeni adaylarla paylaşabilir, yerel faaliyetlerde gönüllü olabilir, tanıtım ve yaygınlaştırma çalışmalarına katılabilir veya yeni projelerin hazırlanmasına destek verebilir. Bir hareketliliğin tamamlanması, KOZ-DER ile kurulan ilişkinin sona erdiği anlamına gelmez.",
      },
      {
        q: "KOZ-DER ile kurumsal ortaklık kurulabilir mi?",
        a: "Evet. Türkiye’den ve Avrupa’dan sivil toplum kuruluşları, belediyeler, gençlik merkezleri, eğitim kurumları ve diğer kuruluşlarla Erasmus+, ESC ve yerel gençlik çalışmaları kapsamında iş birliği yapıyoruz. Ortaklık teklifleri bilgi@kozder.com adresine gönderilebilir.",
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
          'hits.sh — sayfanın alt bölümündeki toplam ziyaretçi sayacının çalışması için IP adresi ve standart istek bilgileri bu servise iletilir',
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
        q: "When and where was KOZ-DER founded?",
        a: "KOZ-DER’s establishment preparations and official application were completed in Kilis in 2018. After the official procedures were finalised, the association acquired legal personality and formally began operating on 2 January 2019.",
      },
      {
        q: "Why does the KOZ-DER logo show 2018?",
        a: "The idea, preparations and official application for the association began in 2018, which is why 2018 appears on our logo. The association officially acquired legal personality on 2 January 2019. Therefore, 2018 represents the beginning of our establishment process, while 2019 is our year of official incorporation.",
      },
      {
        q: "Where does the name “KOZ-DER” come from?",
        a: "In the Kilis region, the word “koz” means walnut. The walnut is associated with the brain and mental development because of its appearance and nutritional qualities. Mind games, robotics, coding and digital skills likewise support thinking, problem-solving and creativity. Our name brings this local cultural reference together with the mental and technological development of young people.",
      },
      {
        q: "What are KOZ-DER’s aims and goals?",
        a: "KOZ-DER aims to support young people’s personal, social, academic and professional development. We work in mind games, robotics and coding, digital skills, foreign languages, the environment, disaster awareness, active citizenship, volunteering and intercultural learning. We particularly aim to improve access to national and international opportunities for young people with fewer opportunities.",
      },
      {
        q: "In which fields does KOZ-DER work?",
        a: "Our main fields are mind games, robotics and coding, digital skills, English speaking, the environment and recycling, disaster awareness, active citizenship, social inclusion, refugee integration, volunteering and international youth work.",
      },
      {
        q: "Do I have to live in Kilis to join KOZ-DER activities?",
        a: "No. A significant part of our face-to-face work takes place in Kilis, but young people from other cities in Türkiye may join online training, meetings, information sessions and suitable national or international projects. Specific participation conditions are stated in each announcement.",
      },
      {
        q: "How can I volunteer with KOZ-DER?",
        a: "You can follow our website and linktr.ee/kozder to join our current volunteering groups. Depending on your interests, you may contribute to Speaking Club, mind games, robotics and coding, environmental and disaster-awareness activities, social media, project preparation and dissemination work.",
      },
      {
        q: "How can I become a member of KOZ-DER?",
        a: "You can read the membership conditions and follow the application steps in the membership section of linktr.ee/kozder. Applications are assessed under the association’s statute and the applicable legislation. You may also volunteer in our activities without becoming a formal member.",
      },
      {
        q: "Who can apply for KOZ-DER projects?",
        a: "Application requirements vary by project. Conditions relating to age, country, foreign-language level, education or professional profile may differ from one call to another. The age range, participant profile and all other requirements are stated clearly in each announcement.",
      },
      {
        q: "How can I apply for KOZ-DER projects?",
        a: "You can follow current opportunities through the Projects section of our website and linktr.ee/kozder. Before applying, carefully read the project description and information pack, when available, and complete the relevant application form.",
      },
      {
        q: "How are project participants selected?",
        a: "Selection considers suitability for the target group, motivation, responsibility, interest in the subject and, where necessary, foreign-language ability. Priority may be given to first-time international participants, young people with fewer opportunities or members of the call’s target group. Project-specific criteria are explained in each announcement.",
      },
      {
        q: "Do I have to pay to apply for or join a project?",
        a: "No. KOZ-DER does not charge fees for applications, interviews, nominations or participant selection. Support for travel, accommodation, food, insurance, visa costs and pocket money is provided according to the project’s budget rules and explained separately in each call.",
      },
      {
        q: "Can I apply if I have never travelled abroad before?",
        a: "Yes. We particularly encourage applications from young people who have never travelled abroad or taken part in Erasmus+ or ESC. Selected participants receive orientation on project preparation, travel planning, cultural adjustment and the experience of going abroad.",
      },
      {
        q: "Can I apply if I do not have a passport or visa?",
        a: "You may apply depending on the project start date and application conditions. If selected, you will receive guidance on passports, visas, invitation letters, insurance and other required documents. Preparing the documents and completing official applications on time remain the participant’s responsibility.",
      },
      {
        q: "Can I join a project if my English is not very good?",
        a: "Basic or intermediate English is enough for many projects. The important things are being willing to communicate, learn and participate actively. Some projects may require more advanced English. Young people who want to improve can join KOZ-DER Speaking Club activities.",
      },
      {
        q: "Are young people with fewer opportunities given priority?",
        a: "Yes. Improving access for young people facing economic, geographical, social, educational or cultural barriers is one of our main priorities. Young people from Kilis and south-eastern Türkiye, first-time international participants and those with limited access to opportunities may receive priority in relevant projects.",
      },
      {
        q: "What is the European Solidarity Corps (ESC)?",
        a: "The European Solidarity Corps is a European Union programme enabling young people aged 18–30 to take part in volunteering activities in their own country or abroad. Depending on the project, accommodation, food, travel, insurance, local transport, visa costs and pocket money may be supported by the programme budget.",
      },
      {
        q: "What is the difference between Erasmus+ and the ESC?",
        a: "Erasmus+ includes youth exchanges, training courses and other learning mobility activities. The ESC focuses mainly on volunteering and solidarity activities. Age limits, duration, tasks and financial support vary according to the type of project.",
      },
      {
        q: "What is KOZ-DER’s role in the European Solidarity Corps?",
        a: "KOZ-DER works as a supporting and lead organisation under its European Solidarity Corps Quality Label. We support volunteers with suitable project matching, preparation, travel, visas, insurance, mentoring, monitoring and post-project evaluation.",
      },
      {
        q: "What happens after I submit an application?",
        a: "Applications are reviewed according to the project conditions. Suitable candidates may be invited to an online or face-to-face interview. Selected participants receive information about the project, tasks, travel, budget, insurance, visas and cultural preparation. In some projects, the hosting organisation makes the final selection.",
      },
      {
        q: "How can I follow KOZ-DER’s face-to-face and online activities?",
        a: "You can follow current activities through our website, social-media accounts and linktr.ee/kozder. By joining the relevant WhatsApp or announcement groups, you can receive updates about new activities and project calls.",
      },
      {
        q: "Can I continue working with KOZ-DER after completing a project?",
        a: "Yes. Former participants may share their experience with new applicants, volunteer in local activities, contribute to promotion and dissemination or support the preparation of new projects. Completing a mobility activity does not mean that your relationship with KOZ-DER has ended.",
      },
      {
        q: "Can an organisation establish a partnership with KOZ-DER?",
        a: "Yes. We cooperate with civil-society organisations, municipalities, youth centres, educational institutions and other organisations in Türkiye and across Europe through Erasmus+, ESC and local youth work. Partnership proposals may be sent to bilgi@kozder.com.",
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
          'hits.sh — your IP address and standard request information are sent to this service so the total visitor counter in the footer can operate',
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
