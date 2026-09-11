"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Locale } from "@/lib/site";

const steps = {
  ka: [
    { title: "მოგვიყევი", text: "იდეა, პრობლემა ან მიზანი საკმარისია. ტექნიკური აღწერა აუცილებელი არ არის." },
    { title: "ვაზუსტებთ", text: "ვადგენთ, რა ღირს აშენება, რა არ ღირს და რა მოცულობაში უნდა ჩაჯდეს პროექტი." },
    { title: "ვაწყობთ", text: "დიზაინი და ფუნქციონალი ერთ პროდუქტად ვითარდება — მობილურიდან დიდ ეკრანამდე." },
    { title: "ვუშვებთ", text: "ვტესტავთ, ვამზადებთ გასაშვებად და ვაბარებთ იმ მოდელით, რომელიც აირჩიე." }
  ],
  en: [
    { title: "Tell us", text: "An idea, problem or goal is enough. You do not need a technical brief." },
    { title: "We scope it", text: "We define what is worth building, what is not, and the scope that makes sense." },
    { title: "We build", text: "Design and functionality evolve as one product, from mobile through large screens." },
    { title: "We launch", text: "We test, prepare the release and hand it over through the model you chose." }
  ]
} as const;

export function HowItWorks({ locale }: { locale: Locale }) {
  const reduce = useReducedMotion();

  return (
    <section className="omnia-process" aria-labelledby="omnia-process-title">
      <div className="omnia-process-head">
        <span>{locale === "ka" ? "როგორ ვმუშაობთ" : "How OMNIA works"}</span>
        <h2 id="omnia-process-title">{locale === "ka" ? "იდეიდან გაშვებულ პროდუქტამდე — ზედმეტი პროცესის გარეშე." : "From idea to live product — without unnecessary process."}</h2>
      </div>

      <div className="omnia-process-rail">
        <motion.div
          className="omnia-process-line"
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={reduce ? undefined : { scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        />
        {steps[locale].map((step, index) => (
          <motion.article
            key={step.title}
            className="omnia-process-step"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.62, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="omnia-process-node" aria-hidden="true">
              {index === 0 ? <span className="omnia-process-logo"><span className="brand-mark" /></span> : <span>{String(index + 1).padStart(2, "0")}</span>}
            </div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
