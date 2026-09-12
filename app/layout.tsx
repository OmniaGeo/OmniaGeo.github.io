import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";
import "./service-pages.css";
import "./launch.css";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Header } from "@/components/Header";
import { LocaleHtmlSync } from "@/components/LocaleHtmlSync";
import { PageTransition } from "@/components/PageTransition";
import { ScrollProgress } from "@/components/ScrollProgress";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { SkipLink } from "@/components/SkipLink";
import { site } from "@/lib/site";

const notoSansGeorgian = Noto_Sans_Georgian({
  variable: "--font-noto-georgian",
  display: "swap",
  subsets: ["georgian", "latin"],
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "OMNIA — ციფრული მომსახურება ბიზნესისთვის", template: "%s | OMNIA" },
  description: site.description.ka,
  applicationName: "OMNIA",
  manifest: "/manifest.webmanifest",
  authors: [{ name: "OMNIA" }],
  creator: "OMNIA",
  publisher: "OMNIA",
  category: "technology",
  keywords: [
    "ვებსაიტების შექმნა", "ვებ დიზაინი საქართველო", "ციფრული მომსახურება",
    "website design Georgia", "web development Tbilisi", "e-commerce Georgia", "booking system Georgia"
  ],
  icons: { icon: "/icon.png", shortcut: "/icon.png", apple: "/icon.png" },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F2F3" },
    { media: "(prefers-color-scheme: dark)", color: "#05091D" }
  ]
};

const themeScript = `(function(){try{var s=localStorage.getItem('omnia-theme');var t=s==='dark'||s==='light'?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ka" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className={notoSansGeorgian.variable}>
        <SkipLink />
        <LocaleHtmlSync />
        <ScrollProgress />
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <StickyMobileCta />
        <CookieConsent />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
