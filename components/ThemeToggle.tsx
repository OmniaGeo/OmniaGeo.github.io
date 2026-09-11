"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { MouseEvent, useEffect, useState } from "react";

type Theme = "light" | "dark";

type TransitionState = {
  id: number;
  x: number;
  y: number;
  theme: Theme;
};

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("omnia-theme") as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function SunIcon() {
  return (
    <motion.svg viewBox="0 0 32 32" className="theme-icon-svg" initial={{ rotate: -28, scale: 0.72 }} animate={{ rotate: 0, scale: 1 }} exit={{ rotate: 28, scale: 0.72, opacity: 0 }}>
      <circle cx="16" cy="16" r="5.25" fill="currentColor" />
      {[0,45,90,135].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 16 16)`}>
          <path d="M16 2.5V6.2M16 25.8V29.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </g>
      ))}
    </motion.svg>
  );
}

function MoonIcon() {
  return (
    <motion.svg viewBox="0 0 32 32" className="theme-icon-svg" initial={{ rotate: 28, scale: 0.72 }} animate={{ rotate: 0, scale: 1 }} exit={{ rotate: -28, scale: 0.72, opacity: 0 }}>
      <path d="M22.9 21.7A10.2 10.2 0 0 1 10.3 9.1 10.6 10.6 0 1 0 22.9 21.7Z" fill="currentColor" />
    </motion.svg>
  );
}

function ThemeTransition({ state }: { state: TransitionState }) {
  const isLight = state.theme === "light";
  const rays = Array.from({ length: 12 });
  const stars = [
    [28, 22], [66, 18], [78, 43], [37, 62], [71, 72], [18, 77], [52, 35], [89, 65]
  ];

  return (
    <motion.div
      className={`theme-transition-scene ${isLight ? "to-light" : "to-dark"}`}
      initial={{ clipPath: `circle(0px at ${state.x}px ${state.y}px)` }}
      animate={{ clipPath: `circle(165vmax at ${state.x}px ${state.y}px)` }}
      exit={{ opacity: 0 }}
      transition={{ clipPath: { duration: 0.72, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.22 } }}
      aria-hidden="true"
    >
      {isLight ? (
        <motion.div
          className="theme-transition-sun"
          style={{ left: state.x, top: state.y }}
          initial={{ scale: 0.15, opacity: 0 }}
          animate={{ scale: [0.15, 1.1, 0.88], opacity: [0, 1, 0] }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="theme-transition-sun-core" />
          <motion.span className="theme-transition-rays" animate={{ rotate: 55 }} transition={{ duration: 1.1, ease: "easeOut" }}>
            {rays.map((_, index) => <i key={index} style={{ transform: `rotate(${index * 30}deg)` }} />)}
          </motion.span>
        </motion.div>
      ) : (
        <>
          <motion.div
            className="theme-transition-moon"
            style={{ left: state.x, top: state.y }}
            initial={{ scale: 0.2, rotate: 28, opacity: 0 }}
            animate={{ scale: [0.2, 1.05, 0.88], rotate: [28, 0, -7], opacity: [0, 1, 0] }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          >
            <span />
          </motion.div>
          <div className="theme-transition-stars">
            {stars.map(([left, top], index) => (
              <motion.i
                key={`${left}-${top}`}
                style={{ left: `${left}%`, top: `${top}%` }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 0.9, 0], scale: [0, 1, 0.3] }}
                transition={{ duration: 0.8, delay: 0.08 + index * 0.045 }}
              />
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
}

export function ThemeToggle({ locale }: { locale: "ka" | "en" }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [transitionState, setTransitionState] = useState<TransitionState | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const initial = getStoredTheme();
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  function toggle(event: MouseEvent<HTMLButtonElement>) {
    const next: Theme = theme === "light" ? "dark" : "light";
    const rect = event.currentTarget.getBoundingClientRect();

    const apply = () => {
      document.documentElement.dataset.theme = next;
      document.documentElement.style.colorScheme = next;
      window.localStorage.setItem("omnia-theme", next);
      setTheme(next);
    };

    if (reduce) {
      apply();
      return;
    }

    setTransitionState({ id: Date.now(), x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, theme: next });
    window.setTimeout(apply, 235);
    window.setTimeout(() => setTransitionState(null), 900);
  }

  const label = locale === "ka"
    ? theme === "light" ? "მუქ რეჟიმზე გადასვლა" : "ღია რეჟიმზე გადასვლა"
    : theme === "light" ? "Switch to dark mode" : "Switch to light mode";

  return (
    <>
      <button className="theme-toggle celestial-toggle" onClick={toggle} aria-label={label} title={label}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={theme} className="theme-icon-wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }}>
            {theme === "light" ? <SunIcon /> : <MoonIcon />}
          </motion.span>
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {transitionState && <ThemeTransition key={transitionState.id} state={transitionState} />}
      </AnimatePresence>
    </>
  );
}
