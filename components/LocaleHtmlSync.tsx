"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { localeFromPathname } from "@/lib/i18n";

export function LocaleHtmlSync() {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.lang = localeFromPathname(pathname);
  }, [pathname]);
  return null;
}
