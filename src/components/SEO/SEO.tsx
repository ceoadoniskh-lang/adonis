import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SEOProps {
  documentTitle?: string;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  documentTitle,
  title,
  description,
  keywords,
  image = "/images/og-image.jpg",
  url,
  type = "website",
}) => {
  const { i18n } = useTranslation();

  const siteName = "ADONIS";
  const defaultTitle =
    "ADONIS — виробництво верхнього одягу | Опт та пошив під замовлення";
  const defaultDescription =
    "Українське виробництво верхнього одягу ADONIS. Оптові замовлення, пошив жіночих і чоловічих моделей, private label, розмірний ряд 42–78.";
  const defaultKeywords =
    "верхній одяг, виробництво одягу, опт, пошив на замовлення, private label, швейне виробництво, жіночий одяг, чоловічий одяг";

  const fullTitle = documentTitle
    ? documentTitle
    : title
    ? `${title} | ${siteName}`
    : defaultTitle;
  const fullDescription = description || defaultDescription;
  const fullKeywords = keywords || defaultKeywords;
  const fullUrl = url || window.location.href;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content={siteName} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={i18n.language} />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta
        property="og:locale"
        content={
          i18n.language === "ua"
            ? "uk_UA"
            : i18n.language === "ru"
            ? "ru_RU"
            : "en_US"
        }
      />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#000000" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Alternate Language Versions */}
      <link
        rel="alternate"
        hrefLang="uk"
        href={fullUrl.replace(/\/[a-z]{2}\//, "/ua/")}
      />
      <link
        rel="alternate"
        hrefLang="ru"
        href={fullUrl.replace(/\/[a-z]{2}\//, "/ru/")}
      />
      <link
        rel="alternate"
        hrefLang="en"
        href={fullUrl.replace(/\/[a-z]{2}\//, "/en/")}
      />
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />
      {/* Primary language hint for Google (Ukrainian) */}
      <meta name="google" content="notranslate" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Organization", "LocalBusiness", "ClothingStore"],
          name: siteName,
          description: fullDescription,
          url: fullUrl,
          logo: image,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+380-99-222-55-29",
            contactType: "customer service",
            availableLanguage: ["Ukrainian", "Russian", "English"],
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "вул. Слобожанська, 11",
            addressLocality: "Харків",
            addressRegion: "Харківська",
            postalCode: "61000",
            addressCountry: "UA",
          },
          sameAs: [
            "https://www.instagram.com/adonis.factory",
            "https://www.facebook.com/profile.php?id=61586643953821",
            "https://www.youtube.com/@ADONIS.FACTORY",
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
