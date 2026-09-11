"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPathname, localizePath } from "@/lib/i18n";

export function NotFoundContent() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  return (
    <div className={`not-found-page locale-${locale}`}>
      <h1>{locale === "ka" ? "ეს გვერდი აქ აღარ არის." : "This page is not here."}</h1>
      <p>{locale === "ka" ? "შეამოწმე მისამართი ან დაბრუნდი მთავარ გვერდზე." : "Check the address or return to the home page."}</p>
      <Link href={localizePath("/", locale)} className="primary-button large">
        {locale === "ka" ? "მთავარზე დაბრუნება" : "Back home"}<span>↗</span>
      </Link>
    </div>
  );
}
