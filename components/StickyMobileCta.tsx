"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { localeFromPathname, localizePath } from "@/lib/i18n";
export function StickyMobileCta() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  if (pathname === localizePath("/contact", locale)) return null;
  return <motion.div className={`sticky-mobile-cta locale-${locale}`} initial={{ y: 100 }} animate={{ y: 0 }} transition={{ delay: 0.35, type: "spring", stiffness: 240, damping: 25 }}><Link href={localizePath("/contact", locale)}>{locale === "ka" ? "დაიწყე პროექტი" : "Start a project"}<span>↗</span></Link></motion.div>;
}
