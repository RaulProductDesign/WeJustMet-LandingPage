import type { HTMLAttributes } from "react";
import styles from "./Tag.module.css";

export type TagVariant = "default" | "accent" | "outline";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant;
  children: React.ReactNode;
}

export function Tag({ variant = "default", children, className = "", ...props }: TagProps) {
  return (
    <span
      className={[styles.tag, styles[variant], className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}
