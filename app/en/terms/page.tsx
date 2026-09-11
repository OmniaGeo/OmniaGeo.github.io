import type { Metadata } from "next";
import { LegalPageContent } from "@/components/pages/LegalPageContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Terms of use",
  description: "The basic terms for using the OMNIA website, including concept-study disclosures and intellectual property information.",
  path: "/terms"
});

export default function EnglishTermsPage() {
  return <LegalPageContent locale="en" kind="terms" />;
}
