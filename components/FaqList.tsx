"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export function FaqList({ items }: { items: readonly { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq-list-new">
      {items.map((item, index) => {
        const active = open === index;
        return (
          <motion.div className="faq-row-new" layout key={item.q}>
            <button onClick={() => setOpen(active ? null : index)} aria-expanded={active}>
              <span>{item.q}</span>
              <motion.b animate={{ rotate: active ? 45 : 0 }} transition={{ type: "spring", stiffness: 420, damping: 30 }}>+</motion.b>
            </button>
            <AnimatePresence initial={false}>
              {active && (
                <motion.div
                  className="faq-answer-new"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ height: { duration: 0.42, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.25 } }}
                >
                  <p>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
