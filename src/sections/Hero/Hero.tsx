import { AnimateIn, Typography } from "../../components";
import { HeroCards } from "./HeroCards";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.heroInner}>
        <AnimateIn className={styles.headingTexts}>
          <h1 id="hero-heading" className={styles.heroHeading}>
            <Typography variant="desktop-heading" color="fill_BYI27M">
              Less small talk.
              <br />
              More real connections.
            </Typography>
          </h1>
          <p className={styles.heroSubtitle}>
            <Typography variant="desktop-subtitles-1" color="fill_SY29LS">
              A questions game to help travelers connect beyond &quot;where are you from?&quot;
            </Typography>
          </p>
        </AnimateIn>
        <AnimateIn delay={120}>
          <HeroCards />
        </AnimateIn>
      </div>
    </section>
  );
}
