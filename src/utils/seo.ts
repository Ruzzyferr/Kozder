export interface OrganizationSchema {
  '@context': 'https://schema.org';
  '@type': 'NGO';
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs: string[];
  address: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    '@type': 'ContactPoint';
    telephone: string;
    contactType: string;
    email: string;
    availableLanguage: string[];
  };
}

export const ORG_SCHEMA: OrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'KOZ-DER',
  url: 'https://kozder.com',
  logo: 'https://kozder.com/images/logo.png',
  description: 'Gençlik Zeka Oyunları ve Kodlama Derneği — Erasmus+ ve ESC programlarıyla gençlerin kişisel, sosyal ve mesleki gelişimini destekleyen sivil toplum kuruluşu.',
  sameAs: [
    'https://www.facebook.com/kozder2018',
    'https://www.instagram.com/kozder2018',
    'https://www.linkedin.com/in/kozder2018',
    'https://www.youtube.com/@kozder2018',
    'https://www.tiktok.com/@kozder2018',
    'https://x.com/kozder2018',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kazım Karabekir Mahallesi, İstiklal Caddesi No: 33D',
    addressLocality: 'Kilis Merkez',
    addressRegion: 'Kilis',
    postalCode: '79000',
    addressCountry: 'TR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+90-551-197-29-97',
    contactType: 'customer support',
    email: 'bilgi@kozder.com',
    availableLanguage: ['Turkish', 'English'],
  },
};

export function eventSchema(opts: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  image?: string;
  url: string;
  registrationUrl?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: opts.name,
    description: opts.description,
    startDate: opts.startDate,
    endDate: opts.endDate ?? opts.startDate,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: opts.location,
      address: opts.location,
    },
    image: opts.image,
    url: opts.url,
    organizer: {
      '@type': 'NGO',
      name: 'KOZ-DER',
      url: 'https://kozder.com',
    },
    offers: opts.registrationUrl
      ? {
          '@type': 'Offer',
          url: opts.registrationUrl,
          price: '0',
          priceCurrency: 'TRY',
          availability: 'https://schema.org/InStock',
        }
      : undefined,
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  datePublished: string;
  url: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    url: opts.url,
    image: opts.image,
    author: { '@type': 'NGO', name: 'KOZ-DER' },
    publisher: {
      '@type': 'NGO',
      name: 'KOZ-DER',
      logo: { '@type': 'ImageObject', url: 'https://kozder.com/images/logo.png' },
    },
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
