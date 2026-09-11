import type { Metadata } from "next";
import { ContactPageContent } from "@/components/pages/ContactPageContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Contact — start a project with OMNIA",
  description: "Tell OMNIA about your website, digital product or business system. We reply within 1 business day.",
  path: "/contact"
});

export default function EnglishContactPage() {
  return <ContactPageContent locale="en" />;
}
