import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/pages/ServicesPageContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ka",
  title: "სერვისები — ვებსაიტები, ონლაინ მაღაზიები და ციფრული სისტემები",
  description: "OMNIA-ს სერვისები: თანამედროვე ვებსაიტები, ონლაინ გაყიდვები, ჯავშნის სისტემები, ციფრული სასაჩუქრე ბარათები და ბიზნესისთვის მორგებული ციფრული სისტემები.",
  path: "/services"
});

export default function ServicesPage() {
  return <ServicesPageContent locale="ka" />;
}
