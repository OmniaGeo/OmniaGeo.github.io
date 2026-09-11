"use client";
import { usePathname } from "next/navigation";
import { useLayoutEffect, type ReactNode } from "react";
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  useLayoutEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "auto" }); }, [pathname]);
  return <main id="main-content" className="route-content" key={pathname}>{children}</main>;
}
