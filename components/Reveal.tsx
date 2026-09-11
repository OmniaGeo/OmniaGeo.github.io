"use client";

import { motion, useReducedMotion } from "motion/react";
import type { PropsWithChildren } from "react";

export function Reveal({ children, delay = 0 }: PropsWithChildren<{ delay?: number }>) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
