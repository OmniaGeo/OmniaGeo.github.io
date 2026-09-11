import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/pages/ServicesPageContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Services — websites, e-commerce and digital systems",
  description: "OMNIA builds websites, online stores, booking systems, digital gift cards and custom digital tools for businesses in Georgia.",
  path: "/services"
});

export default function EnglishServicesPage() {
  return <ServicesPageContent locale="en" />;
}
