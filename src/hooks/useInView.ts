import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  /** Fraction of element that must be visible (0-1). Default 0.1 */
  threshold?: number;
  /** Margin around root to trigger early (e.g. "100px" or "20%"). Default "0px 0px -80px 0px" so it triggers slightly before fully in view */
  rootMargin?: string;
  /** Trigger only once (keep visible state after first time). Default true */
  once?: boolean;
}

/**
 * Returns true when the element is in view (Intersection Observer).
 * Used for scroll-triggered animations in an Apple-style way.
 */
export function useInView(options: UseInViewOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -80px 0px",
    once = true,
  } = options;

  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isInView };
}
