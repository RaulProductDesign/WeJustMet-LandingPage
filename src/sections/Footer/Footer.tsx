import { Typography } from "../../components";
import styles from "./Footer.module.css";

const PRIVACY_HREF = "#privacy";
const TERMS_HREF = "#terms";

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.upper}>
        <a href="/" className={styles.logoLink} aria-label="WeJustMet home">
          <img
            src="/logo/Logo-Horizontal.svg"
            alt=""
            width={173}
            height={18}
            className={styles.logoImg}
          />
        </a>
        <nav className={styles.links} aria-label="Legal">
          <a href={PRIVACY_HREF} className={styles.link}>
            <Typography variant="desktop-capital-letters" color="fill_W478SF" as="span">
              Privacy Policy
            </Typography>
          </a>
          <a href={TERMS_HREF} className={styles.link}>
            <Typography variant="desktop-capital-letters" color="fill_W478SF" as="span">
              Terms & Conditions
            </Typography>
          </a>
        </nav>
      </div>
      <div className={styles.divider} aria-hidden />
      <div className={styles.bottom}>
        <Typography variant="desktop-body-3" color="fill_NMXQHG" as="span">
          © 2026 WeJustMet app. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
}
