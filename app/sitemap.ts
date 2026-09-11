import type { MetadataRoute } from "next";
import { caseStudies, site } from "@/lib/site";
import { servicePageIds } from "@/lib/servicePages";

const now = new Date();

function languageAlternates(path: string) {
  const ka = `${site.url}${path}`;
  const en = `${site.url}/en${path === "/" ? "" : path}`;
  return {
    languages: {
      "ka-GE": ka,
      en,
      "x-default": ka
    }
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/services", "/work", "/contact", "/privacy", "/terms", "/cookies"];

  const staticEntries = staticRoutes.flatMap((path) => {
    const kaUrl = `${site.url}${path === "/" ? "" : path}`;
    const enUrl = `${site.url}/en${path === "/" ? "" : path}`;
    const shared = {
      lastModified: now,
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : 0.7,
      alternates: languageAlternates(path)
    };

    return [
      { url: kaUrl, ...shared },
      { url: enUrl, ...shared }
    ];
  });

  const caseEntries = caseStudies.flatMap((study) => {
    const path = `/work/${study.slug}`;
    const shared = {
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
      alternates: languageAlternates(path)
    };

    return [
      { url: `${site.url}${path}`, ...shared },
      { url: `${site.url}/en${path}`, ...shared }
    ];
  });

  const serviceEntries = servicePageIds.flatMap((slug) => {
    const path = `/services/${slug}`;
    const shared = {
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.82,
      alternates: languageAlternates(path)
    };

    return [
      { url: `${site.url}${path}`, ...shared },
      { url: `${site.url}/en${path}`, ...shared }
    ];
  });

  return [...staticEntries, ...serviceEntries, ...caseEntries];
}
