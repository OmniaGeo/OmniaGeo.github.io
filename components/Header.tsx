"use client";

import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { localeFromPathname, localizePath } from "@/lib/i18n";
import { navCopy, site } from "@/lib/site";
import { LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { TextRoll } from "./TextRoll";
import { MessengerLogo } from "@/components/MessengerLogo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const copy = navCopy[locale];
  const { scrollY } = useScroll();
  const links = [
    { href: localizePath("/services", locale), label: copy.services },
    { href: localizePath("/work", locale), label: copy.work },
    { href: localizePath("/contact", locale), label: copy.contact }
  ];

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return () => { document.body.style.overflow = ""; };
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);
  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (open || current < 120) return setHidden(false);
    setHidden(current > previous);
  });

  return (
    <motion.header className={`site-header locale-${locale}`} animate={{ y: hidden ? "-110%" : "0%" }} transition={{ type: "spring", stiffness: 420, damping: 42, mass: 0.8 }}>
      <div className="header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label={locale === "ka" ? "მთავარი ნავიგაცია" : "Main navigation"}>
          {links.map((link) => {
            const active = pathname === link.href || (link.href !== localizePath("/contact", locale) && pathname.startsWith(`${link.href}/`));
            return <Link key={link.href} href={link.href} className={active ? "nav-link active" : "nav-link"}><TextRoll>{link.label}</TextRoll>{active && <motion.span className="nav-active-line" layoutId="nav-active-line" />}</Link>;
          })}
        </nav>
        <div className="header-tools">
          <LanguageSwitch />
          <ThemeToggle locale={locale} />
          <Link href={localizePath("/contact", locale)} className="header-cta"><TextRoll>{copy.start}</TextRoll><span className="header-cta-arrow">↗</span></Link>
          <button className="menu-button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? copy.close : copy.menu}><span>{open ? copy.close : copy.menu}</span></button>
        </div>
      </div>
      <AnimatePresence>
        {open && <motion.nav id="mobile-menu" className="mobile-menu" initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} aria-label={locale === "ka" ? "მობილური ნავიგაცია" : "Mobile navigation"}>
          <div className="mobile-menu-links">{links.map((link, index) => <motion.div key={link.href} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + index * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}><Link href={link.href}>{link.label}</Link></motion.div>)}</div>
          <div className="mobile-menu-footer"><LanguageSwitch mobile /><a href={site.messenger} target="_blank" rel="noreferrer" className="mobile-email mobile-messenger-link"><MessengerLogo className="mobile-messenger-logo" aria-hidden="true" />{locale === "ka" ? "მესენჯერი" : "Messenger"} ↗</a></div>
        </motion.nav>}
      </AnimatePresence>
    </motion.header>
  );
}
