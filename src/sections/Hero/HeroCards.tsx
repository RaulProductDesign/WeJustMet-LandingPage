import { useState, useEffect } from "react";
import { Typography } from "../../components";
import styles from "./HeroCards.module.css";

const CARDS = [
  {
    id: "1",
    text: "What's your most embarrassing travel story?",
    className: styles.cardRotate1,
  },
  {
    id: "2",
    text: "What's a small, weird thing that brings you genuine joy?",
    className: styles.cardRotate2,
  },
  {
    id: "3",
    text: "What would your younger self think of the life you're living now?",
    className: styles.cardRotate3,
  },
];

/* Subtle rotation (max 4°) spread over many sections so it keeps changing for longer */
const SCROLL_ROTATION_MAX_DEG = 4;
const SCROLL_ROTATION_RANGE_PX = 3200;

export function HeroCards() {
  const [scrollRotation, setScrollRotation] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const value = Math.min(
        SCROLL_ROTATION_MAX_DEG,
        (y / SCROLL_ROTATION_RANGE_PX) * SCROLL_ROTATION_MAX_DEG
      );
      setScrollRotation(value);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={styles.cardsRow}
      role="list"
      style={{ ["--scroll-rotation" as string]: `${scrollRotation}deg` }}
    >
      {CARDS.map(({ id, text, className }) => (
        <div key={id} className={`${styles.card} ${className}`} role="listitem">
          <div className={styles.cardInner}>
            <Typography
              variant="desktop-card-texts"
              color="fill_3E2XJW"
              style={{ margin: 0 }}
            >
              {text}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
}
