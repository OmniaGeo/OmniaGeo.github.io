import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageContent } from "@/components/pages/ServicePageContent";
import { buildMetadata } from "@/lib/seo";
import { getServicePage, servicePageIds } from "@/lib/servicePages";
import { services } from "@/lib/site";

export function generateStaticParams() {
  return servicePageIds.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  const service = services.find((item) => item.id === slug);
  if (!page || !service) return {};
  const seoTitles: Record<string, string> = {
    websites: "ვებსაიტების შექმნა — ყოველთვიური ან სრული საკუთრება",
    commerce: "ონლაინ მაღაზიის შექმნა",
    booking: "ონლაინ ჯავშნის სისტემის შექმნა",
    "gift-cards": "ციფრული სასაჩუქრე ბარათების სისტემა",
    systems: "ბიზნესისთვის ციფრული სისტემების შექმნა"
  };
  return buildMetadata({
    locale: "ka",
    title: seoTitles[slug] || service.title.ka,
    description: page.intro.ka,
    path: `/services/${slug}`
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getServicePage(slug)) notFound();
  return <ServicePageContent id={slug} locale="ka" />;
}
