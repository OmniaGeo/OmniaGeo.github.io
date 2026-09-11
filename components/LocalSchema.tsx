import { localizePath } from "@/lib/i18n";
import { site, type Locale } from "@/lib/site";

export function LocalSchema({ locale }: { locale: Locale }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#business`,
    name: "OMNIA",
    alternateName: site.displayName,
    url: `${site.url}${localizePath("/", locale)}`,
    email: site.email,
    logo: `${site.url}/omnia-mark.png`,
    image: `${site.url}/social-share.png`,
    description: site.description[locale],
    areaServed: {
      "@type": "Country",
      name: "Georgia"
    },
    knowsLanguage: ["ka", "en"],
    sameAs: [site.facebook, site.instagram],
    serviceType: [
      "Website design",
      "Web development",
      "E-commerce",
      "Booking systems",
      "Digital gift cards",
      "Business automation"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: site.email,
      contactType: "sales",
      availableLanguage: ["Georgian", "English"]
    }
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
