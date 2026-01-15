import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
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
    "ADONIS - професійне швейне виробництво, якісний одяг на замовлення";
  const defaultDescription =
    "Професійне швейне виробництво з багаторічним досвідом. Пошив одягу, корпоративний одяг, ремонт та дизайн. Висока якість та індивідуальний підхід.";
  const defaultKeywords =
    "швейне виробництво, пошив одягу, корпоративний одяг, ремонт одягу, дизайн одягу, якісний одяг, індивідуальний пошив";

  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;
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

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteName,
          description: fullDescription,
          url: fullUrl,
          logo: image,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+380-44-123-45-67",
            contactType: "customer service",
            availableLanguage: ["Ukrainian", "Russian", "English"],
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "вул. Прикладна, 123",
            addressLocality: "Київ",
            addressCountry: "UA",
          },
          sameAs: [
            "https://www.instagram.com/adonis.factory",
            "https://www.facebook.com/profile.php?id=61586643953821",
            "https://www.youtube.com/sewing_production",
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
