"use client";

import { animate, createScope, stagger } from "animejs";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import type { Locale, Service } from "@/lib/site";

type ServiceId = Service["id"];

export function ServiceMotionScene({ id, locale }: { id: ServiceId; locale: Locale }) {
  const root = useRef<HTMLDivElement>(null);
  const inView = useInView(root, { amount: 0.35, margin: "-8% 0px -8% 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!root.current || reduce || !inView) return;

    const scope = createScope({ root }).add(() => {
      animate(".anime-pulse", {
        scale: [0.88, 1.08],
        opacity: [0.35, 1],
        delay: stagger(115),
        duration: 1250,
        alternate: true,
        loop: true,
        ease: "inOutSine"
      });

      animate(".anime-dash", {
        strokeDashoffset: [72, 0],
        duration: 1650,
        delay: stagger(160),
        loop: true,
        ease: "linear"
      });

      animate(".anime-float", {
        y: [-4, 5],
        rotate: [-1.5, 1.5],
        delay: stagger(140),
        duration: 1900,
        alternate: true,
        loop: true,
        ease: "inOutSine"
      });
    });

    return () => scope.revert();
  }, [inView, reduce]);

  return (
    <div className={`service-motion-scene service-motion-${id}`} ref={root} aria-hidden="true">
      {id === "websites" && <WebsiteScene reduce={!!reduce} />}
      {id === "commerce" && <CommerceScene reduce={!!reduce} />}
      {id === "booking" && <BookingScene reduce={!!reduce} />}
      {id === "gift-cards" && <GiftCardScene reduce={!!reduce} locale={locale} />}
      {id === "systems" && <SystemsScene reduce={!!reduce} />}
    </div>
  );
}

function WebsiteScene({ reduce }: { reduce: boolean }) {
  return (
    <div className="browser-demo anime-float">
      <div className="browser-demo-top"><i /><i /><i /><span /></div>
      <div className="browser-demo-canvas">
        <motion.div
          className="browser-demo-hero"
          animate={reduce ? undefined : { width: ["74%", "88%", "66%", "74%"] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="browser-demo-grid">
          {[0, 1, 2].map((item) => (
            <motion.div
              className="browser-demo-card"
              key={item}
              animate={reduce ? undefined : { y: [0, item % 2 ? -7 : 7, 0], scale: [1, 1.02, 1] }}
              transition={{ duration: 3.5 + item * 0.35, repeat: Infinity, ease: "easeInOut", delay: item * 0.2 }}
            >
              <span />
              <b />
            </motion.div>
          ))}
        </div>
        <motion.div
          className="browser-demo-cursor"
          animate={reduce ? undefined : { x: [0, 120, 84, 178, 0], y: [0, 44, 104, 68, 0], rotate: [0, 4, -3, 2, 0] }}
          transition={{ duration: 6.2, repeat: Infinity, ease: [0.45, 0, 0.2, 1] }}
        >
          ↖
        </motion.div>
      </div>
    </div>
  );
}

function CommerceScene({ reduce }: { reduce: boolean }) {
  return (
    <div className="commerce-demo">
      <div className="commerce-products">
        {[0, 1, 2].map((item) => (
          <motion.div
            className="commerce-product anime-float"
            key={item}
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 3.2 + item * 0.3, repeat: Infinity, delay: item * 0.2, ease: "easeInOut" }}
          >
            <div className="commerce-product-image" />
            <span />
          </motion.div>
        ))}
      </div>
      <motion.div
        className="commerce-order-dot"
        animate={reduce ? undefined : { x: [0, 118, 192], y: [0, 52, 108], scale: [1, 0.78, 0.28], opacity: [1, 1, 0] }}
        transition={{ duration: 2.3, repeat: Infinity, repeatDelay: 0.9, ease: [0.33, 1, 0.68, 1] }}
      />
      <motion.div
        className="commerce-cart"
        animate={reduce ? undefined : { scale: [1, 1, 1.08, 1] }}
        transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.65, 0.78, 1] }}
      >
        <div className="cart-bag">⌑</div>
        <motion.div
          className="cart-check"
          animate={reduce ? undefined : { scale: [0, 0, 1, 1], opacity: [0, 0, 1, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.66, 0.78, 1] }}
        >✓</motion.div>
      </motion.div>
    </div>
  );
}

function BookingScene({ reduce }: { reduce: boolean }) {
  const days = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div className="booking-demo anime-float">
      <div className="booking-calendar">
        <div className="booking-calendar-head"><span /><span /></div>
        <div className="booking-days">
          {days.map((day) => (
            <motion.i
              key={day}
              className={day === 4 ? "selected" : ""}
              animate={reduce || day !== 4 ? undefined : { scale: [1, 1.18, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 0.8 }}
            />
          ))}
        </div>
        <div className="booking-slots">
          {[0, 1, 2].map((slot) => (
            <motion.span
              key={slot}
              animate={reduce ? undefined : { opacity: slot === 1 ? [0.45, 1, 1] : [0.45, 0.7, 0.45] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: slot * 0.25 }}
              className={slot === 1 ? "active" : ""}
            />
          ))}
        </div>
      </div>
      <motion.div
        className="booking-confirmation"
        animate={reduce ? undefined : { y: [18, 18, 0, 0], opacity: [0, 0, 1, 1] }}
        transition={{ duration: 3.4, repeat: Infinity, times: [0, 0.55, 0.68, 1] }}
      >
        <b>✓</b><span />
      </motion.div>
    </div>
  );
}

function GiftCardScene({ reduce, locale }: { reduce: boolean; locale: Locale }) {
  return (
    <div className="gift-demo">
      <motion.div
        className="gift-phone anime-float"
        animate={reduce ? undefined : { rotate: [-2, 1.5, -2] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="gift-phone-notch" />
        <div className="gift-card-screen">
          <span>OMNIA</span>
          <strong>₾250</strong>
          <div className="gift-code">
            {Array.from({ length: 9 }).map((_, index) => <i key={index} className="anime-pulse" />)}
          </div>
        </div>
      </motion.div>
      <motion.div
        className="gift-card-floating"
        animate={reduce ? undefined : { x: [0, 8, -4, 0], y: [0, -12, -4, 0], rotate: [-6, -2, -8, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>{locale === "ka" ? "საჩუქარი" : "GIFT"}</span><b>↗</b>
      </motion.div>
    </div>
  );
}

function SystemsScene({ reduce }: { reduce: boolean }) {
  const nodes = [
    [62, 130], [194, 62], [350, 112], [214, 202], [350, 158]
  ] as const;
  const topPath = "M62 130 C118 130 128 62 194 62 S282 112 350 112";
  const bottomPath = "M62 130 C126 130 140 202 214 202 S294 158 350 158";
  const crossPath = "M194 62 C204 102 205 162 214 202";

  return (
    <div className="systems-demo systems-demo-fixed">
      <svg viewBox="0 0 420 260" className="systems-lines systems-lines-fixed" role="presentation">
        {[topPath, bottomPath, crossPath].map((path, index) => (
          <g key={path}>
            <path d={path} className="systems-beam-base" />
            <motion.path
              d={path}
              className="systems-beam-live"
              initial={{ pathLength: reduce ? 1 : 0, pathOffset: 0 }}
              animate={reduce ? undefined : { pathLength: [0.08, 0.34, 0.08], pathOffset: [0, 0.58, 1] }}
              transition={{ duration: 3.2 + index * 0.45, repeat: Infinity, ease: "linear", delay: index * 0.38 }}
            />
          </g>
        ))}
        {nodes.map(([cx, cy], index) => (
          <motion.g
            key={`${cx}-${cy}`}
            animate={reduce ? undefined : { scale: [1, 1.055, 1] }}
            transition={{ duration: 2.7, repeat: Infinity, delay: index * 0.17 }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          >
            <rect x={cx - 23} y={cy - 23} width="46" height="46" rx="8" className="systems-node-box" />
            <circle cx={cx} cy={cy} r="5" className="systems-node-core" />
          </motion.g>
        ))}
        {!reduce && (
          <>
            <motion.circle r="5.5" className="systems-traveller" animate={{ cx: [62, 194, 350], cy: [130, 62, 112], opacity: [0, 1, 1, 0] }} transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 0.5, ease: "easeInOut" }} />
            <motion.circle r="4.5" className="systems-traveller secondary" animate={{ cx: [62, 214, 350], cy: [130, 202, 158], opacity: [0, 1, 1, 0] }} transition={{ duration: 3.15, repeat: Infinity, repeatDelay: 0.3, delay: 0.85, ease: "easeInOut" }} />
          </>
        )}
      </svg>
    </div>
  );
}
