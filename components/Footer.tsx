"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";
import { localeFromPathname, localizePath } from "@/lib/i18n";
import { site } from "@/lib/site";
import { Logo } from "./Logo";
import { MessengerLogo } from "@/components/MessengerLogo";

function GmailLogo() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path fill="#4285F4" d="M5.2 25.4H9V12.2L3.4 8v15.6c0 1 .8 1.8 1.8 1.8Z" />
      <path fill="#34A853" d="M23 25.4h3.8c1 0 1.8-.8 1.8-1.8V8L23 12.2v13.2Z" />
      <path fill="#EA4335" d="M23 12.2 16 17.5 9 12.2V6.6l7 5.3 7-5.3v5.6Z" />
      <path fill="#FBBC04" d="M28.6 8v4.2L23 16.4v-4.2L28.6 8Z" />
      <path fill="#C5221F" d="M3.4 8v4.2L9 16.4v-4.2L3.4 8Z" />
    </svg>
  );
}

function YahooLogo() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path fill="#6001D2" d="M7.1 7.1h5.3l3.8 7.1 3.7-7.1h5.1l-6.5 11.4v6.4h-4.9v-6.4L7.1 7.1Zm15.3 11.8h4.8l-1.1 6h-4.8l1.1-6Z" />
    </svg>
  );
}

function OutlookLogo() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path fill="#0A64AD" d="M18.1 6h9v8.4l-9 5V6Z" />
      <path fill="#1976D2" d="M18.1 13.5h9v10.8c0 1-.8 1.7-1.7 1.7h-7.3V13.5Z" />
      <path fill="#28A8EA" d="m18.1 14.3 4.3 3.1 4.7-3.1-4.7 5-4.3-3.2v-1.8Z" />
      <path fill="#0A64AD" d="M4.9 8.5 17 6.7v18.6L4.9 23.5V8.5Z" />
      <path fill="white" d="M10.9 12c-2.6 0-4.3 1.9-4.3 4.5 0 2.7 1.6 4.5 4.2 4.5 2.7 0 4.4-1.9 4.4-4.6 0-2.6-1.6-4.4-4.3-4.4Zm0 2c1.2 0 1.8 1 1.8 2.5 0 1.6-.7 2.5-1.8 2.5-1.2 0-1.8-1-1.8-2.5 0-1.5.6-2.5 1.8-2.5Z" />
    </svg>
  );
}

function FacebookLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M13.6 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.4V13h2.8v8h3.4Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M3.5 6.5h17v11h-17z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4.2 7.2 7.8 6 7.8-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="8" y="8" width="10" height="10" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M6 15H5.5A1.5 1.5 0 0 1 4 13.5v-8A1.5 1.5 0 0 1 5.5 4h8A1.5 1.5 0 0 1 15 5.5V6" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function Footer() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const reduceMotion = useReducedMotion();
  const [emailOpen, setEmailOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const composeLinks = useMemo(() => {
    const to = encodeURIComponent(site.email);
    return {
      gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}`,
      yahoo: `https://compose.mail.yahoo.com/?to=${to}`,
      outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${to}`,
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = site.email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <footer className={`site-footer locale-${locale}`}>
      <div className="footer-top">
        <div>
          <h2>{locale === "ka" ? <>გაქვს იდეა?<br />მოგვიყევი.</> : <>Have an idea?<br />Tell us.</>}</h2>
          <p>{locale === "ka" ? "ვპასუხობთ მაქსიმუმ 1 სამუშაო დღეში." : "We reply within 1 business day."}</p>
        </div>

        <div className="footer-contact-shell">
          <motion.div
            layout
            transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 360, damping: 30 }}
            className={`footer-email-morph ${emailOpen ? "is-open" : ""}`}
          >
            {!emailOpen ? (
              <motion.button
                layout="position"
                type="button"
                className="footer-email-trigger"
                onClick={() => setEmailOpen(true)}
                aria-expanded="false"
              >
                <MailIcon />
                <span>{locale === "ka" ? "ელფოსტა" : "Email"}</span>
                <span className="footer-email-arrow">↗</span>
              </motion.button>
            ) : (
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="footer-email-panel"
              >
                <div className="footer-email-panel-head">
                  <strong>{locale === "ka" ? "მოგვწერე" : "Write to OMNIA"}</strong>
                  <button
                    type="button"
                    className="footer-email-close"
                    onClick={() => setEmailOpen(false)}
                    aria-label={locale === "ka" ? "დახურვა" : "Close email options"}
                  >
                    ×
                  </button>
                </div>

                <div className="footer-email-options">
                  <a
                    href={composeLinks.gmail}
                    target="_blank"
                    rel="noreferrer"
                    className="mail-provider"
                    aria-label={locale === "ka" ? "ჯიმეილში წერილის დაწერა" : "Compose in Gmail"}
                    title={locale === "ka" ? "ჯიმეილი" : "Gmail"}
                  >
                    <GmailLogo />
                  </a>
                  <a
                    href={composeLinks.yahoo}
                    target="_blank"
                    rel="noreferrer"
                    className="mail-provider"
                    aria-label={locale === "ka" ? "იაჰუ მეილში წერილის დაწერა" : "Compose in Yahoo Mail"}
                    title={locale === "ka" ? "იაჰუ მეილი" : "Yahoo Mail"}
                  >
                    <YahooLogo />
                  </a>
                  <a
                    href={composeLinks.outlook}
                    target="_blank"
                    rel="noreferrer"
                    className="mail-provider"
                    aria-label={locale === "ka" ? "აუთლუქში წერილის დაწერა" : "Compose in Outlook"}
                    title={locale === "ka" ? "აუთლუქი" : "Outlook"}
                  >
                    <OutlookLogo />
                  </a>
                  <button type="button" className="mail-copy" onClick={copyEmail} aria-live="polite">
                    <CopyIcon />
                    <span>{copied ? (locale === "ka" ? "დაკოპირდა" : "Copied") : (locale === "ka" ? "ელფოსტის კოპირება" : "Copy email")}</span>
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <div className="footer-grid">
        <div className="footer-brand"><Logo /></div>
        <div className="footer-links">
          <Link href={localizePath("/services", locale)}>{locale === "ka" ? "სერვისები" : "Services"}</Link>
          <Link href={localizePath("/work", locale)}>{locale === "ka" ? "ჩვენი ნამუშევრები" : "Our Work"}</Link>
          <Link href={localizePath("/contact", locale)}>{locale === "ka" ? "კონტაქტი" : "Contact"}</Link>
        </div>
        <div className="footer-links footer-social-column">
          <Link href={localizePath("/privacy", locale)}>{locale === "ka" ? "კონფიდენციალურობა" : "Privacy"}</Link>
          <Link href={localizePath("/terms", locale)}>{locale === "ka" ? "გამოყენების პირობები" : "Terms of use"}</Link>
          <Link href={localizePath("/cookies", locale)}>{locale === "ka" ? "ქუქი-ფაილების პოლიტიკა" : "Cookie policy"}</Link>
          <a href={site.messenger} target="_blank" rel="noreferrer" className="footer-messenger-link"><MessengerLogo className="footer-messenger-logo" aria-hidden="true" />{locale === "ka" ? "მესენჯერი" : "Messenger"}<span>↗</span></a>
          <button type="button" className="footer-cookie-settings" onClick={() => window.dispatchEvent(new Event("omnia-open-cookie-settings"))}>{locale === "ka" ? "ქუქი-ფაილების პარამეტრები" : "Cookie settings"}</button>
          <a
            href={site.facebook}
            target="_blank"
            rel="noreferrer"
            className="footer-social-button"
            aria-label={locale === "ka" ? "ფეისბუქი" : "Facebook"}
            title={locale === "ka" ? "ფეისბუქი" : "Facebook"}
          >
            <FacebookLogo />
          </a>
        </div>
        <div className="footer-meta">
          <span>{locale === "ka" ? "თბილისი, საქართველო" : "Tbilisi, Georgia"}</span>
          <span>© {new Date().getFullYear()} OMNIA</span>
        </div>
      </div>
    </footer>
  );
}
