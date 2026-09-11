"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { localeFromPathname, localizePath } from "@/lib/i18n";

const CONSENT_COOKIE = "omnia_cookie_consent";

function getConsent() {
  if (typeof document === "undefined") return null;
  const match = document.cookie.split("; ").find((item) => item.startsWith(`${CONSENT_COOKIE}=`));
  return match?.split("=")[1] ?? null;
}

function saveConsent(value: "analytics" | "necessary") {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${value}; Path=/; Max-Age=15552000; SameSite=Lax${secure}`;
  window.dispatchEvent(new CustomEvent("omnia-consent-changed", { detail: value }));
}

export function CookieConsent() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(!getConsent());
    const reopen = () => setOpen(true);
    window.addEventListener("omnia-open-cookie-settings", reopen);
    return () => window.removeEventListener("omnia-open-cookie-settings", reopen);
  }, []);

  function choose(value: "analytics" | "necessary") {
    const previous = getConsent();
    saveConsent(value);
    setOpen(false);
    if (previous === "analytics" && value === "necessary") window.location.reload();
  }


  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          className={`cookie-consent locale-${locale}`}
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-consent-title"
          initial={reduce ? false : { opacity: 0, y: 28, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduce ? undefined : { opacity: 0, y: 18, scale: 0.99 }}
          transition={{ type: "spring", stiffness: 330, damping: 30 }}
        >
          <div className="cookie-consent-copy">
            <strong id="cookie-consent-title">{locale === "ka" ? "ქუქი-ფაილების არჩევანი" : "Cookie choice"}</strong>
            <p>{locale === "ka" ? "OMNIA იყენებს აუცილებელ ქუქი-ფაილებს ფუნქციებისთვის, ხოლო ანალიტიკას მხოლოდ შენი თანხმობის შემთხვევაში." : "OMNIA uses necessary cookies for site features and analytics only if you consent."}</p>
            <Link href={localizePath("/cookies", locale)}>{locale === "ka" ? "ქუქი-ფაილების პოლიტიკა" : "Cookie policy"}<span>↗</span></Link>
          </div>
          <div className="cookie-consent-actions">
            <button type="button" className="cookie-secondary" onClick={() => choose("necessary")}>{locale === "ka" ? "მხოლოდ აუცილებელი" : "Necessary only"}</button>
            <button type="button" className="cookie-primary" onClick={() => choose("analytics")}>{locale === "ka" ? "ანალიტიკის მიღება" : "Accept analytics"}</button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
