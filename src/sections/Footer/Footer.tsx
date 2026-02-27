import { Link } from "react-router-dom";
import { Typography } from "../../components";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.upper}>
        <Link to="/" className={styles.logoLink} aria-label="WeJustMet home">
          <img
            src="/logo/Logo-Horizontal.svg"
            alt=""
            width={173}
            height={18}
            className={styles.logoImg}
          />
        </Link>
        <nav className={styles.links} aria-label="Legal">
          <Link to="/privacy-policy" className={styles.link}>
            <Typography variant="desktop-capital-letters" color="fill_W478SF" as="span">
              Privacy Policy
            </Typography>
          </Link>
          <Link to="/terms" className={styles.link}>
            <Typography variant="desktop-capital-letters" color="fill_W478SF" as="span">
              Terms & Conditions
            </Typography>
          </Link>
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
