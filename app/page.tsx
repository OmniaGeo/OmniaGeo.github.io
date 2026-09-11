import type { Metadata } from "next";
import { HomePageContent } from "@/components/pages/HomePageContent";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  locale: "ka",
  title: "OMNIA — ციფრული მომსახურება ბიზნესისთვის",
  description: site.description.ka,
  path: "/"
});

export default function HomePage() {
  return <HomePageContent locale="ka" />;
}
