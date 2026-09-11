"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { homeCopy, type Locale } from "@/lib/site";

function typingDelay(character: string, index: number) {
  if (/\s/.test(character)) return 42;
  if (/[.,!?;:]/.test(character)) return 115;
  return 52 + ((index * 17) % 28);
}

export function ServiceTypewriter({ locale }: { locale: Locale }) {
  const reduceMotion = useReducedMotion();
  const words = useMemo(() => homeCopy[locale].dynamicWords, [locale]);
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState<string>(words[0] || "");

  useEffect(() => {
    if (reduceMotion) {
      setWordIndex(0);
      setVisible(words[0] || "");
      return;
    }

    let timeout: ReturnType<typeof setTimeout> | undefined;
    let index = 0;
    let current = "";
    let cancelled = false;

    const schedule = (callback: () => void, delay: number) => {
      timeout = setTimeout(() => { if (!cancelled) callback(); }, delay);
    };

    const type = () => {
      const target = words[index];
      if (current.length < target.length) {
        current = target.slice(0, current.length + 1);
        setVisible(current);
        schedule(type, typingDelay(current.at(-1) ?? "", current.length));
        return;
      }
      schedule(erase, 1650);
    };

    const erase = () => {
      if (current.length > 0) {
        current = current.slice(0, -1);
        setVisible(current);
        schedule(erase, 31);
        return;
      }
      index = (index + 1) % words.length;
      setWordIndex(index);
      schedule(type, 240);
    };

    setVisible("");
    setWordIndex(0);
    schedule(type, 1050);

    return () => {
      cancelled = true;
      if (timeout) clearTimeout(timeout);
    };
  }, [locale, reduceMotion, words]);

  const fullPhrase = `${homeCopy[locale].dynamicLead} ${words[wordIndex]}`;

  return (
    <motion.p
      className="brand-service-line"
      initial={reduceMotion ? false : { opacity: 0, y: 18, filter: "blur(7px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.82, delay: reduceMotion ? 0 : 0.82, ease: [0.22, 1, 0.36, 1] }}
      aria-label={fullPhrase}
    >
      <span className="brand-service-prefix">{homeCopy[locale].dynamicLead}</span>{" "}
      <span className="brand-service-word" aria-hidden="true">{visible || "\u00a0"}</span>
      <motion.span className="brand-service-cursor" aria-hidden="true" animate={reduceMotion ? undefined : { opacity: [1, 1, 0, 0] }} transition={{ duration: 0.82, repeat: Infinity, times: [0, 0.48, 0.52, 1], ease: "linear" }} />
    </motion.p>
  );
}
