import type { HTMLAttributes, ElementType } from "react";
import styles from "./Typography.module.css";

/** Figma text style names (Desktop/... and Mobile/...) mapped to CSS class names */
export type TypographyVariant =
  | "desktop-capital-letters"
  | "desktop-heading"
  | "desktop-subtitles-1"
  | "desktop-subtitles-2"
  | "desktop-titles"
  | "desktop-card-texts"
  | "desktop-body-1"
  | "desktop-body-2"
  | "desktop-body-3"
  | "mobile-capital-letters"
  | "mobile-titles"
  | "mobile-subtitle-2"
  | "mobile-body-1"
  | "mobile-body-2";

export type TypographyColor =
  | "fill_3E2XJW"
  | "fill_24VORE"
  | "fill_BYI27M"
  | "fill_UF28T0"
  | "fill_OYF0JJ"
  | "fill_SY29LS"
  | "fill_W478SF"
  | "fill_NMXQHG";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  color?: TypographyColor;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "a" | "div";
  href?: string;
  children: React.ReactNode;
}

const defaultTag: Record<TypographyVariant, "h1" | "h2" | "h3" | "p" | "span" | "a" | "div"> = {
  "desktop-capital-letters": "span",
  "desktop-heading": "h1",
  "desktop-subtitles-1": "p",
  "desktop-subtitles-2": "p",
  "desktop-titles": "h2",
  "desktop-card-texts": "p",
  "desktop-body-1": "p",
  "desktop-body-2": "p",
  "desktop-body-3": "span",
  "mobile-capital-letters": "span",
  "mobile-titles": "h2",
  "mobile-subtitle-2": "p",
  "mobile-body-1": "p",
  "mobile-body-2": "p",
};

export function Typography({
  variant = "desktop-body-1",
  color,
  as,
  children,
  className = "",
  href,
  ...props
}: TypographyProps) {
  const Tag = (as ?? defaultTag[variant]) as ElementType;
  const classNames = [
    styles.typography,
    styles[variant],
    color ? styles[`color-${color}`] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const spreadProps = Tag === "a" && href != null ? { ...props, href } : props;

  return <Tag className={classNames} {...spreadProps}>{children}</Tag>;
}
