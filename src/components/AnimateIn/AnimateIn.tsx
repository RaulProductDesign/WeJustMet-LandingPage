import type { ReactNode } from "react";
import { useInView } from "../../hooks/useInView";
import styles from "./AnimateIn.module.css";

export interface AnimateInProps {
  children: ReactNode;
  /** Delay in ms for stagger effect. Default 0 */
  delay?: number;
  /** Optional className for the wrapper */
  className?: string;
}

/**
 * Apple-style scroll animation: fades in and slides up when the element enters the viewport.
 * Use delay for staggered children (e.g. title 0, subtitle 100, CTA 200).
 */
export function AnimateIn({
  children,
  delay = 0,
  className = "",
}: AnimateInProps) {
  const { ref, isInView } = useInView({ once: true });

  return (
    <div
      ref={ref}
      className={`animate-in ${isInView ? "animate-in-visible" : ""} ${styles.animateIn} ${isInView ? styles.visible : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
