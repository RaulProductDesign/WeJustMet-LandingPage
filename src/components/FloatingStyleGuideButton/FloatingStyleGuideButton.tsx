import styles from "./FloatingStyleGuideButton.module.css";

export interface FloatingStyleGuideButtonProps {
  /** Currently showing the Style Guide (so button label is "Back to landing") */
  showingStyleGuide: boolean;
  onClick: () => void;
}

export function FloatingStyleGuideButton({ showingStyleGuide, onClick }: FloatingStyleGuideButtonProps) {
  return (
    <button
      type="button"
      className={styles.fab}
      onClick={onClick}
      aria-label={showingStyleGuide ? "Back to landing" : "Open Style Guide"}
      title={showingStyleGuide ? "Back to landing" : "Style Guide"}
    >
      {showingStyleGuide ? "← Landing" : "Style Guide"}
    </button>
  );
}
