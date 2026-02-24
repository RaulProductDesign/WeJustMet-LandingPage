import { useState, useEffect } from "react";
import { Button } from "../Button";
import styles from "./NavBar.module.css";

const NAV_LINKS = [
  { label: "How to play", href: "#how-to-play" },
  { label: "FAQ", href: "#faq" },
];

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.navBar} role="banner">
      <div className={styles.container}>
        <a href="/" className={styles.logoLink} aria-label="WeJustMet home">
          <img
            src="/logo/Logo-Horizontal.svg"
            alt="WeJustMet"
            className={styles.logoImg}
            width={154}
            height={16}
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const fallback = e.currentTarget.nextElementSibling;
              if (fallback) (fallback as HTMLElement).style.display = "block";
            }}
          />
          <span className={styles.logoFallback} aria-hidden>
            WeJustMet
          </span>
        </a>

        {/* Desktop: nav links + Download CTA */}
        <nav className={styles.navDesktop} aria-label="Main navigation">
          <div className={styles.navLinks}>
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href} className={styles.navLink}>
                {label}
              </a>
            ))}
          </div>
          <Button variant="Accent" size="M" href="#download">
            Download
          </Button>
        </nav>

        {/* Mobile: burger button */}
        <button
          type="button"
          className={styles.burgerButton}
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={styles.burgerBar} />
          <span className={styles.burgerBar} />
          <span className={styles.burgerBar} />
        </button>
      </div>

      {/* Mobile: full-height panel slides down from top */}
      <aside
        id="mobile-menu"
        className={styles.mobileMenu}
        data-open={menuOpen || undefined}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <Button
              key={href}
              variant="Tertiary"
              size="M"
              href={href}
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              {label}
            </Button>
          ))}
          <Button
            variant="Accent"
            size="M"
            href="#download"
            className={styles.mobileCta}
            onClick={closeMenu}
          >
            Download
          </Button>
        </nav>
      </aside>
    </header>
  );
}
