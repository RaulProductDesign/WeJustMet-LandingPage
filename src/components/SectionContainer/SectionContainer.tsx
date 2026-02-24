import type { HTMLAttributes } from "react";
import styles from "./SectionContainer.module.css";

export type SectionBackground = "primary" | "accent";

export interface SectionContainerProps extends HTMLAttributes<HTMLElement> {
  /** Semantic element: section, header, footer, etc. */
  as?: "section" | "header" | "footer" | "main" | "div";
  background?: SectionBackground;
  /** Constrain inner content to max-width and center */
  contained?: boolean;
  children: React.ReactNode;
}

export function SectionContainer({
  as: Component = "section",
  background = "primary",
  contained = true,
  children,
  className = "",
  ...props
}: SectionContainerProps) {
  return (
    <Component
      className={[styles.section, styles[`bg_${background}`], className].filter(Boolean).join(" ")}
      {...(props as HTMLAttributes<HTMLElement>)}
    >
      {contained ? <div className={styles.container}>{children}</div> : children}
    </Component>
  );
}
