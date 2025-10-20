// Structured Data for SEO
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ADONIS",
    alternateName: "ADONIS Sewing Production",
    description:
      "Професійне швейне виробництво з багаторічним досвідом. Пошив одягу, корпоративний одяг, ремонт та дизайн.",
    url: "https://adonis-sewing.com",
    logo: "https://adonis-sewing.com/images/logo.png",
    image: "https://adonis-sewing.com/images/og-image.jpg",
    telephone: "+380-44-123-45-67",
    email: "info@adonis-sewing.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "вул. Прикладна, 123",
      addressLocality: "Київ",
      addressRegion: "Київська область",
      postalCode: "01001",
      addressCountry: "UA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "50.4501",
      longitude: "30.5234",
    },
    openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+380-44-123-45-67",
      contactType: "customer service",
      availableLanguage: ["Ukrainian", "Russian", "English"],
      areaServed: "UA",
    },
    sameAs: [
      "https://www.instagram.com/adonis_sewing",
      "https://www.facebook.com/adonis_sewing",
      "https://www.youtube.com/adonis_sewing",
    ],
    foundingDate: "2010",
    numberOfEmployees: "50",
    areaServed: {
      "@type": "Country",
      name: "Ukraine",
    },
  };
};

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://sewing-production.com/#business",
    name: "ADONIS",
    image: "https://sewing-production.com/images/business.jpg",
    telephone: "+380-44-123-45-67",
    email: "info@adonis-sewing.com",
    url: "https://adonis-sewing.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "вул. Прикладна, 123",
      addressLocality: "Київ",
      addressRegion: "Київська область",
      postalCode: "01001",
      addressCountry: "UA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "50.4501",
      longitude: "30.5234",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
    paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
    currenciesAccepted: "UAH",
  };
};

export const generateServiceSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Швейні послуги",
    description:
      "Професійні швейні послуги: пошив одягу, корпоративний одяг, ремонт та дизайн",
    provider: {
      "@type": "Organization",
      name: "ADONIS",
      url: "https://adonis-sewing.com",
    },
    serviceType: "Sewing Services",
    areaServed: {
      "@type": "Country",
      name: "Ukraine",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Швейні послуги",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Пошив одягу",
            description:
              "Індивідуальний пошив чоловічого, жіночого та дитячого одягу",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Корпоративний одяг",
            description: "Виробництво форменого та корпоративного одягу",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ремонт одягу",
            description: "Професійний ремонт та переробка одягу",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Дизайн одягу",
            description: "Розробка дизайну та крію одягу",
          },
        },
      ],
    },
  };
};

export const generateBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

export const generateFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
};

export const generateProductSchema = (product: {
  name: string;
  description: string;
  image: string;
  price?: string;
  availability?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      "@type": "Brand",
      name: "ADONIS",
    },
    offers: {
      "@type": "Offer",
      price: product.price || "0",
      priceCurrency: "UAH",
      availability: product.availability || "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "ADONIS",
      },
    },
  };
};

export const generateWebSiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ADONIS",
    alternateName: "ADONIS Sewing Production",
    url: "https://adonis-sewing.com",
    description: "Професійне швейне виробництво з багаторічним досвідом",
    inLanguage: ["uk", "ru", "en"],
    copyrightYear: "2025",
    creator: {
      "@type": "Organization",
      name: "ADONIS",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://sewing-production.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
};

export const generateReviewSchema = (
  reviews: Array<{
    author: string;
    rating: number;
    reviewBody: string;
    datePublished: string;
  }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ADONIS",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue:
        reviews.reduce((sum, review) => sum + review.rating, 0) /
        reviews.length,
      reviewCount: reviews.length,
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
      },
      reviewBody: review.reviewBody,
      datePublished: review.datePublished,
    })),
  };
};
