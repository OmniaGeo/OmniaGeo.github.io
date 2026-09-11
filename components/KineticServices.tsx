"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { PointerEvent } from "react";
import { localizePath } from "@/lib/i18n";
import { services, type Locale } from "@/lib/site";
import { ServiceMotionScene } from "@/components/ServiceMotionScene";

export function KineticServices({ locale }: { locale: Locale }) {
  const reduce = useReducedMotion();

  function moveSpotlight(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  }

  return (
    <div className="service-showcase-list">
      {services.map((service, index) => {
        const href = localizePath(`/services/${service.id}`, locale);
        return (
          <motion.article
            key={service.id}
            className="service-showcase-row"
            initial={reduce ? false : { opacity: 0, y: 42 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.72, delay: Math.min(index * 0.04, 0.16), ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="service-showcase-copy">
              <h3>{service.title[locale]}</h3>
              <motion.div
                className="service-showcase-cta-motion"
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.975 }}
                transition={{ type: "spring", stiffness: 420, damping: 30 }}
              >
                <Link href={href} className="service-showcase-link">
                  <span className="service-showcase-button-mark" aria-hidden="true" />
                  <span>{locale === "ka" ? "ნახე სერვისი" : "Explore service"}</span>
                  <b aria-hidden="true">↗</b>
                </Link>
              </motion.div>
            </div>
            <Link
              href={href}
              className="service-showcase-visual-link"
              aria-label={locale === "ka" ? `${service.title.ka} — სერვისის ნახვა` : `${service.title.en} — explore service`}
            >
              <motion.div
                className="service-showcase-visual spotlight-surface"
                onPointerMove={moveSpotlight}
                whileHover={reduce ? undefined : { scale: 0.992, y: -3 }}
                whileTap={reduce ? undefined : { scale: 0.987 }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
              >
                <ServiceMotionScene id={service.id} locale={locale} />
                <motion.span
                  className="service-showcase-visual-cue"
                  aria-hidden="true"
                  initial={false}
                  whileHover={reduce ? undefined : { x: 2, y: -2 }}
                >↗</motion.span>
              </motion.div>
            </Link>
          </motion.article>
        );
      })}
    </div>
  );
}
