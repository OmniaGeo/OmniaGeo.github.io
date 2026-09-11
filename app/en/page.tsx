import type { Metadata } from "next";
import { HomePageContent } from "@/components/pages/HomePageContent";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "OMNIA — Digital services for business",
  description: site.description.en,
  path: "/"
});

export default function EnglishHomePage() {
  return <HomePageContent locale="en" />;
}
