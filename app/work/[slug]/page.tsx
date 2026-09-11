import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPageContent } from "@/components/pages/CaseStudyPageContent";
import { buildMetadata } from "@/lib/seo";
import { caseStudies } from "@/lib/site";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) return {};
  return buildMetadata({
    locale: "ka",
    title: `${study.title} — ${study.liveUrl ? "რეალური პროექტი" : "კონცეპტუალური პროექტი"}`,
    description: study.summary.ka,
    path: `/work/${study.slug}`,
    imageAlt: study.alt.ka
  });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) return notFound();
  return <CaseStudyPageContent study={study!} locale="ka" />;
}
