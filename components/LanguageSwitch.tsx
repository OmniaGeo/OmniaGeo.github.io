"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { localeFromPathname, switchLocalePath } from "@/lib/i18n";

function GeorgiaFlag() {
  return (
    <svg viewBox="0 0 36 24" aria-hidden="true">
      <rect width="36" height="24" rx="2" fill="#fff" />
      <rect x="15" width="6" height="24" fill="#D4202F" />
      <rect y="9" width="36" height="6" fill="#D4202F" />
      {[ [8,5], [28,5], [8,19], [28,19] ].map(([x,y]) => (
        <g key={`${x}-${y}`} transform={`translate(${x} ${y})`} stroke="#D4202F" strokeWidth="1.7" strokeLinecap="square">
          <path d="M-3 0H3M0-3V3" />
        </g>
      ))}
    </svg>
  );
}

function UnitedKingdomFlag() {
  return (
    <svg viewBox="0 0 36 24" aria-hidden="true">
      <rect width="36" height="24" rx="2" fill="#21468B" />
      <path d="M0 0L36 24M36 0L0 24" stroke="#fff" strokeWidth="6" />
      <path d="M0 0L36 24M36 0L0 24" stroke="#CF142B" strokeWidth="2.5" />
      <path d="M18 0V24M0 12H36" stroke="#fff" strokeWidth="7" />
      <path d="M18 0V24M0 12H36" stroke="#CF142B" strokeWidth="4" />
    </svg>
  );
}

export function LanguageSwitch({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const options = [
    { locale: "ka" as const, label: locale === "ka" ? "ქართული" : "Georgian", Flag: GeorgiaFlag },
    { locale: "en" as const, label: locale === "ka" ? "ინგლისური" : "English", Flag: UnitedKingdomFlag }
  ];

  return (
    <div className={mobile ? "flag-language-switch flag-language-switch-mobile" : "flag-language-switch"} aria-label={locale === "ka" ? "ენის არჩევა" : "Language selector"}>
      {options.map(({ locale: option, label, Flag }) => {
        const active = option === locale;
        return (
          <Link
            key={option}
            href={switchLocalePath(pathname, option)}
            className={active ? "flag-language-option active" : "flag-language-option"}
            aria-label={locale === "ka" ? (active ? `${label} — მიმდინარე ენა` : `${label} ენაზე გადასვლა`) : (active ? `${label} — current language` : `Switch to ${label}`)}
            aria-current={active ? "page" : undefined}
          >
            {active && <motion.span className="flag-language-active" layoutId={mobile ? "flag-active-mobile" : "flag-active"} />}
            <span className="flag-language-svg"><Flag /></span>
          </Link>
        );
      })}
    </div>
  );
}
