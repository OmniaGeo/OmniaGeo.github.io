"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { Locale } from "@/lib/site";
import { ServiceTypewriter } from "./ServiceTypewriter";

export function BrandIntroHero({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -72]);
  const scale = useTransform(scrollYProgress, [0, 0.82], [1, reduce ? 1 : 0.965]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.92, 0]);

  const letters = "MNIA".split("");
  const more = locale === "ka" ? "ნახე მეტი" : "See more";

  return (
    <section className="brand-intro-hero cinematic-brand-hero" ref={ref} aria-labelledby="brand-intro-title">
      <div className="cinematic-hero-field" aria-hidden="true">
        <motion.span className="cinematic-orbit cinematic-orbit-one" animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 34, repeat: Infinity, ease: "linear" }} />
        <motion.span className="cinematic-orbit cinematic-orbit-two" animate={reduce ? undefined : { rotate: -360 }} transition={{ duration: 48, repeat: Infinity, ease: "linear" }} />
        <span className="cinematic-axis cinematic-axis-x" />
        <motion.span className="cinematic-light-sweep" animate={reduce ? undefined : { x: ["-135%", "140%"] }} transition={{ duration: 8.4, repeat: Infinity, repeatDelay: 2.8, ease: [0.65, 0, 0.35, 1] }} />
      </div>

      <motion.div className="brand-intro-lockup cinematic-lockup" style={{ y, scale, opacity }}>
        <h1 className="cinematic-wordmark" id="brand-intro-title" aria-label="OMNIA">
          <motion.span
            className="brand-intro-mark cinematic-mark cinematic-o-mark"
            initial={reduce ? false : { opacity: 0, scale: 0.72, rotate: -18, filter: "blur(9px)" }}
            animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />
          <span className="brand-intro-word cinematic-word" aria-hidden="true">
            {letters.map((letter, index) => (
              <motion.span
                className="brand-intro-letter"
                key={`${letter}-${index}`}
                initial={reduce ? false : { y: "30%", opacity: 0, filter: "blur(12px)" }}
                animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.82, delay: reduce ? 0 : 0.25 + index * 0.075, ease: [0.22, 1, 0.36, 1] }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </h1>

        <ServiceTypewriter locale={locale} />
      </motion.div>

      <motion.a href="#services" className="brand-intro-more" initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: reduce ? 0 : 1.15, ease: [0.22, 1, 0.36, 1] }} aria-label={more}>
        <span>{more}</span>
        <span className="brand-intro-arrow" aria-hidden="true">
          <motion.i animate={reduce ? undefined : { scaleY: [0.55, 1, 0.55], y: [0, 7, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} />
          <b>↓</b>
        </span>
      </motion.a>
    </section>
  );
}
