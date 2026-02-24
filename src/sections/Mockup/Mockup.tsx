import { AnimateIn, Button, Typography } from "../../components";
import { SectionContainer } from "../../components/SectionContainer";
import styles from "./Mockup.module.css";

export function Mockup() {
  return (
    <SectionContainer
      as="section"
      background="primary"
      aria-labelledby="mockup-heading"
      className={styles.mockupSection}
    >
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <AnimateIn>
            <div className={styles.texts}>
              <h2 id="mockup-heading" className={styles.title}>
                <Typography variant="desktop-titles" color="fill_24VORE">
                  Designed for travelers who want to truly connect
                </Typography>
              </h2>
              <p className={styles.subtitle}>
                <Typography variant="desktop-subtitles-1" color="fill_3E2XJW">
                  Because the best part of traveling is the people you meet
                </Typography>
              </p>
            </div>
            <Button variant="Accent" size="L" href="#download" className={styles.cta}>
              Download
            </Button>
          </AnimateIn>
        </div>
        <div className={styles.imagePlaceholder} aria-hidden>
          <img
            src="/mockups/Question-Cards.png"
            alt=""
            width={239}
            height={518}
            className={styles.mockupImage}
          />
        </div>
      </div>
    </SectionContainer>
  );
}
