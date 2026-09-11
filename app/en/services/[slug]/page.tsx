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
    websites: "Website design — monthly plan or full ownership",
    commerce: "Online store development",
    booking: "Online booking system development",
    "gift-cards": "Digital gift card systems",
    systems: "Custom digital systems for business"
  };

  return buildMetadata({
    locale: "en",
    title: seoTitles[slug] || service.title.en,
    description: page.intro.en,
    path: `/services/${slug}`
  });
}

export default async function EnglishServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getServicePage(slug)) notFound();
  return <ServicePageContent id={slug} locale="en" />;
}
