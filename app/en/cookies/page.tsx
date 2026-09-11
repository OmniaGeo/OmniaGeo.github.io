import type { Metadata } from "next";
import { LegalPageContent } from "@/components/pages/LegalPageContent";
import { buildMetadata } from "@/lib/seo";
export const metadata: Metadata = buildMetadata({ locale:"en", title:"Cookie policy", description:"The necessary and analytics cookie policy for OMNIA's public website.", path:"/cookies" });
export default function EnglishCookiesPage(){ return <LegalPageContent locale="en" kind="cookies" />; }
