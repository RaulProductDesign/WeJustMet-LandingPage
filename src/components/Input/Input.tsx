import type { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  hint?: string;
  size?: "sm" | "md" | "lg";
}

export function Input({
  label,
  error,
  hint,
  size = "md",
  id,
  className = "",
  ...props
}: InputProps) {
  const inputId = id ?? `input-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={[styles.input, styles[size], error ? styles.hasError : "", className]
          .filter(Boolean)
          .join(" ")}
        aria-invalid={!!error}
        aria-describedby={
          [error && `${inputId}-error`, hint && `${inputId}-hint`].filter(Boolean).join(" ") ||
          undefined
        }
        {...props}
      />
      {error && (
        <span id={`${inputId}-error`} className={styles.error} role="alert">
          {error}
        </span>
      )}
      {hint && !error && (
        <span id={`${inputId}-hint`} className={styles.hint}>
          {hint}
        </span>
      )}
    </div>
  );
}
