"use client";

import { usePathname } from "next/navigation";
import { localeFromPathname } from "@/lib/i18n";

export function SkipLink() {
  const locale = localeFromPathname(usePathname());
  return <a className="skip-link" href="#main-content">{locale === "ka" ? "მთავარ კონტენტზე გადასვლა" : "Skip to content"}</a>;
}
