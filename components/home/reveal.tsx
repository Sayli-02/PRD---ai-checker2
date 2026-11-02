"use client";

import { useRef, useSyncExternalStore } from "react";
import { useInView } from "motion/react";
import { cn } from "@/lib/utils";

const subscribe = () => () => {};

const hidden = {
  up: "motion-safe:translate-y-16 motion-safe:opacity-0",
  left: "motion-safe:-translate-x-16 motion-safe:opacity-0",
  right: "motion-safe:translate-x-16 motion-safe:opacity-0",
} as const;

/**
 * Big fade and rise when scrolled into view. Content is visible without JavaScript and
 * with reduced motion; it is only hidden after hydration, until it enters the viewport.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  from?: keyof typeof hidden;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const hydrated = useSyncExternalStore(subscribe, () => true, () => false);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "motion-safe:transition-[opacity,translate] motion-safe:duration-700 motion-safe:[transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
        hydrated && !inView && hidden[from],
        className,
      )}
    >
      {children}
    </div>
  );
}
