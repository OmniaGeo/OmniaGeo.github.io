"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { PointerEvent } from "react";
import { localizePath } from "@/lib/i18n";
import type { CaseStudy, Locale } from "@/lib/site";

export function CaseStudyCard({ study, locale, compact = false }: { study: CaseStudy; locale: Locale; compact?: boolean }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 180, damping: 22 });
  const sy = useSpring(my, { stiffness: 180, damping: 22 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-4, 4]);
  const caseHref = localizePath(`/work/${study.slug}`, locale);

  function onMove(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    mx.set(x / rect.width - 0.5);
    my.set(y / rect.height - 0.5);
    event.currentTarget.style.setProperty("--spot-x", `${x}px`);
    event.currentTarget.style.setProperty("--spot-y", `${y}px`);
  }

  function reset() {
    mx.set(0);
    my.set(0);
  }

  const image = (
    <div className="case-image-wrap-new">
      <motion.div
        className="case-image-inner"
        whileHover={{ scale: 1.025 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={study.image}
          width={1600}
          height={1000}
          alt={study.alt[locale]}
          sizes="(max-width: 800px) 100vw, 50vw"
          className="case-image-new"
        />
      </motion.div>
      {study.liveUrl && (
        <span className="case-live-badge">
          <span className="case-live-dot" aria-hidden="true" />
          {locale === "ka" ? "რეალური საიტი" : "LIVE SITE"}
          <span aria-hidden="true">↗</span>
        </span>
      )}
    </div>
  );

  return (
    <article className={`case-card-new${study.liveUrl ? " case-card-is-live" : ""}`}>
      <motion.div
        className="case-card-motion spotlight-surface"
        style={{ rotateX, rotateY, transformPerspective: 1100 }}
        onPointerMove={onMove}
        onPointerLeave={reset}
      >
        {study.liveUrl ? (
          <a
            href={study.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="case-image-link-new"
            aria-label={`${study.title} — ${locale === "ka" ? "რეალური საიტის ნახვა" : "view live website"}`}
          >
            {image}
          </a>
        ) : (
          <Link href={caseHref} className="case-image-link-new">
            {image}
          </Link>
        )}

        <div className="case-copy-new">
          <div>
            <p className="case-sector">{study.sector[locale]}</p>
            <Link href={caseHref} className="case-title-link-new">
              <h3>{study.title}</h3>
            </Link>
            {!compact && <p>{study.summary[locale]}</p>}
          </div>

          <div className="case-card-actions-new">
            <Link href={caseHref} className="case-study-arrow" aria-label={`${study.title} — ${locale === "ka" ? "ქეისი" : "case study"}`}>
              ↗
            </Link>
            {study.liveUrl && (
              <a href={study.liveUrl} target="_blank" rel="noreferrer" className="case-live-link-new">
                {locale === "ka" ? "საიტის ნახვა" : "View live"}
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </article>
  );
}
