"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "motion/react";
import type { PointerEvent, ReactNode } from "react";

export function MagneticLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 260, damping: 19, mass: 0.35 });
  const y = useSpring(rawY, { stiffness: 260, damping: 19, mass: 0.35 });

  function move(event: PointerEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    rawX.set((event.clientX - (rect.left + rect.width / 2)) * 0.16);
    rawY.set((event.clientY - (rect.top + rect.height / 2)) * 0.16);
  }

  function reset() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.div style={{ x, y }} className="magnetic-wrap">
      <Link href={href} className={className} onPointerMove={move} onPointerLeave={reset}>
        {children}
      </Link>
    </motion.div>
  );
}
