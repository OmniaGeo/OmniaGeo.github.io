import type { Metadata } from "next";
import { WorkPageContent } from "@/components/pages/WorkPageContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ka",
  title: "ჩვენი ნამუშევრები — OMNIA",
  description: "ნახე OMNIA-ს რეალური პროექტები და შერჩეული კონცეპტები — ვებსაიტები, ჯავშნის პროცესები და ბიზნესისთვის შექმნილი ციფრული გამოცდილებები.",
  path: "/work"
});

export default function WorkPage() {
  return <WorkPageContent locale="ka" />;
}
