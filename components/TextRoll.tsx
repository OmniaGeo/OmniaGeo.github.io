import type { CSSProperties, ReactNode } from "react";

/**
 * OMNIA's lightweight adaptation of the staggered text-roll interaction
 * popularised by Skiper UI's free “Text roll navigation” component.
 * Source interaction reference: https://skiper-ui.com/v1/skiper58
 */
export function TextRoll({ children, center = false, className = "" }: { children: ReactNode; center?: boolean; className?: string }) {
  const text = typeof children === "string" ? children : String(children ?? "");
  const characters = Array.from(text);
  const midpoint = (characters.length - 1) / 2;

  return (
    <span className={`text-roll ${center ? "text-roll-center" : ""} ${className}`} aria-label={text}>
      <span className="text-roll-line text-roll-primary" aria-hidden="true">
        {characters.map((character, index) => {
          const order = center ? Math.abs(index - midpoint) : index;
          return (
            <span className="text-roll-char" style={{ "--roll-delay": `${order * 24}ms` } as CSSProperties} key={`a-${index}`}>
              {character === " " ? "\u00A0" : character}
            </span>
          );
        })}
      </span>
      <span className="text-roll-line text-roll-secondary" aria-hidden="true">
        {characters.map((character, index) => {
          const order = center ? Math.abs(index - midpoint) : index;
          return (
            <span className="text-roll-char" style={{ "--roll-delay": `${order * 24}ms` } as CSSProperties} key={`b-${index}`}>
              {character === " " ? "\u00A0" : character}
            </span>
          );
        })}
      </span>
    </span>
  );
}
