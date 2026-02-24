import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import styles from "./Button.module.css";

/** Figma Button (98:119): Type = Primary | Accent | Secondary | Tertiary */
export type ButtonType = "Primary" | "Accent" | "Secondary" | "Tertiary";

/** Figma: Status = Default | Hovered | Pressed | Disabled (Hovered/Pressed via CSS) */
export type ButtonStatus = "Default" | "Hovered" | "Pressed" | "Disabled";

/** Figma: Size = S | M | L */
export type ButtonSize = "S" | "M" | "L";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">,
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel"> {
  /** Figma Type: Primary | Accent | Secondary | Tertiary */
  variant?: ButtonType;
  /** Figma Size: S | M | L */
  size?: ButtonSize;
  /** Icon-only (square) button */
  iconOnly?: boolean;
  /** Left icon (Figma: Left Icon#98:3) */
  iconBefore?: React.ReactNode;
  /** Right icon (Figma: Right Icon#98:4) */
  iconAfter?: React.ReactNode;
  children?: React.ReactNode;
  /** When set, renders as <a> instead of <button> */
  href?: string;
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(function Button(
  {
    variant = "Primary",
    size = "M",
    iconOnly = false,
    iconBefore,
    iconAfter,
    children,
    className = "",
    disabled,
    href,
    ...props
  },
  ref
) {
  const classNames = [
    styles.button,
    styles[`type_${variant}`],
    styles[`size_${size}`],
    iconOnly ? styles.iconOnly : "",
    disabled ? styles.status_Disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {iconBefore && <span className={styles.icon} aria-hidden>{iconBefore}</span>}
      {children != null && <span className={styles.label}>{children}</span>}
      {iconAfter && <span className={styles.icon} aria-hidden>{iconAfter}</span>}
    </>
  );

  if (href != null) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classNames}
        aria-disabled={disabled}
        data-status={disabled ? "Disabled" : "Default"}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type="button"
      className={classNames}
      disabled={disabled}
      aria-disabled={disabled}
      data-status={disabled ? "Disabled" : "Default"}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
});
