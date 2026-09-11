import type { Metadata } from "next";
import { LegalPageContent } from "@/components/pages/LegalPageContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Privacy policy",
  description: "How OMNIA handles information submitted through its contact form and website analytics.",
  path: "/privacy"
});

export default function EnglishPrivacyPage() {
  return <LegalPageContent locale="en" kind="privacy" />;
}
