import type { Metadata } from "next";
import { WorkPageContent } from "@/components/pages/WorkPageContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Our Work — OMNIA digital projects",
  description: "Explore OMNIA's live projects and selected concepts across websites, booking flows and business-focused digital experiences.",
  path: "/work"
});

export default function EnglishWorkPage() {
  return <WorkPageContent locale="en" />;
}
