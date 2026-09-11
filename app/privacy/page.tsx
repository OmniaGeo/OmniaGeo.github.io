import type { Metadata } from "next";
import { LegalPageContent } from "@/components/pages/LegalPageContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ka",
  title: "კონფიდენციალურობის პოლიტიკა",
  description: "როგორ აგროვებს და იყენებს OMNIA ინფორმაციას საკონტაქტო ფორმისა და ვებსაიტის ანალიტიკის საშუალებით.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return <LegalPageContent locale="ka" kind="privacy" />;
}
