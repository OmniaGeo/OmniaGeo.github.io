import type { Metadata } from "next";
import { LegalPageContent } from "@/components/pages/LegalPageContent";
import { buildMetadata } from "@/lib/seo";
export const metadata: Metadata = buildMetadata({ locale:"ka", title:"ქუქი-ფაილების პოლიტიკა", description:"OMNIA-ს საჯარო საიტის აუცილებელი და ანალიტიკური ქუქი-ფაილების პოლიტიკა.", path:"/cookies" });
export default function CookiesPage(){ return <LegalPageContent locale="ka" kind="cookies" />; }
