import type { Metadata } from "next";
import { localizePath } from "./i18n";
import { site, type Locale } from "./site";

function withBrand(title: string) {
  return /\bOMNIA\b/i.test(title) ? title : `${title} | OMNIA`;
}

export function buildMetadata({
  locale,
  title,
  description,
  path = "/",
  imageAlt
}: {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
  imageAlt?: string;
}): Metadata {
  const localizedPath = localizePath(path, locale);
  const canonical = `${site.url}${localizedPath}`;
  const kaUrl = `${site.url}${localizePath(path, "ka")}`;
  const enUrl = `${site.url}${localizePath(path, "en")}`;
  const finalTitle = withBrand(title);

  return {
    title: { absolute: finalTitle },
    description,
    alternates: {
      canonical,
      languages: {
        "ka-GE": kaUrl,
        en: enUrl,
        "x-default": kaUrl
      }
    },
    openGraph: {
      type: "website",
      locale: locale === "ka" ? "ka_GE" : "en_US",
      alternateLocale: [locale === "ka" ? "en_US" : "ka_GE"],
      url: canonical,
      siteName: "OMNIA",
      title: finalTitle,
      description,
      images: [
        {
          url: "/social-share.png",
          width: 1200,
          height: 630,
          alt: imageAlt || (locale === "ka" ? "OMNIA — ციფრული მომსახურება ბიზნესისთვის" : "OMNIA — digital services for business")
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description,
      images: ["/social-share.png"]
    }
  };
}
