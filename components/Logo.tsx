"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPathname, localizePath } from "@/lib/i18n";

export function Logo({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);

  return (
    <Link href={localizePath("/", locale)} className={compact ? "brand compact" : "brand"} aria-label={locale === "ka" ? "OMNIA მთავარი გვერდი" : "OMNIA home"}>
      <span className="brand-mark" aria-hidden="true" />
      {!compact && <span className="brand-word">MNIA</span>}
    </Link>
  );
}
