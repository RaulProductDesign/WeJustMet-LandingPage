import type { HTMLAttributes } from "react";
import styles from "./Card.module.css";

export type CardVariant = "default" | "elevated" | "bordered" | "accent";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: "none" | "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Card({
  variant = "default",
  padding = "md",
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={[styles.card, styles[variant], styles[`padding_${padding}`], className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
