import type { Metadata } from "next";
import { LegalPageContent } from "@/components/pages/LegalPageContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ka",
  title: "გამოყენების პირობები",
  description: "OMNIA-ს ვებსაიტის გამოყენების ძირითადი პირობები, კონცეპტუალური ნამუშევრების სტატუსი და ინტელექტუალური საკუთრების ინფორმაცია.",
  path: "/terms"
});

export default function TermsPage() {
  return <LegalPageContent locale="ka" kind="terms" />;
}
