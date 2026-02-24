import type { HTMLAttributes } from "react";
import styles from "./Icon.module.css";

export type IconSize = "sm" | "md" | "lg";

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  size?: IconSize;
  /** SVG element or component */
  children: React.ReactNode;
}

export function Icon({ size = "md", children, className = "", ...props }: IconProps) {
  return (
    <span
      className={[styles.icon, styles[size], className].filter(Boolean).join(" ")}
      role="img"
      aria-hidden
      {...props}
    >
      {children}
    </span>
  );
}
