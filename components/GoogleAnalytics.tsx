"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

function analyticsAllowed() {
  if (typeof document === "undefined") return false;
  return document.cookie.split("; ").some((item) => item === "omnia_cookie_consent=analytics");
}

export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    setAllowed(analyticsAllowed());
    const onChange = () => setAllowed(analyticsAllowed());
    window.addEventListener("omnia-consent-changed", onChange);
    return () => window.removeEventListener("omnia-consent-changed", onChange);
  }, []);
  if (!gaId || !allowed) return null;
  return <>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
    <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`}</Script>
  </>;
}
