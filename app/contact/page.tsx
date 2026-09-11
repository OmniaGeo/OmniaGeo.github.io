import type { Metadata } from "next";
import { ContactPageContent } from "@/components/pages/ContactPageContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ka",
  title: "კონტაქტი — დაიწყე პროექტი OMNIA-სთან",
  description: "მოგვიყევი შენი ბიზნესის ციფრულ იდეაზე, ვებსაიტზე ან სისტემაზე. OMNIA პასუხობს მაქსიმუმ 1 სამუშაო დღის განმავლობაში.",
  path: "/contact"
});

export default function ContactPage() {
  return <ContactPageContent locale="ka" />;
}
