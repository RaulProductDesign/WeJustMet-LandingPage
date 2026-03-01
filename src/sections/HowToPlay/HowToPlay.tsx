import { AnimateIn, Typography } from "../../components";
import { SectionContainer } from "../../components/SectionContainer";
import styles from "./HowToPlay.module.css";

const STEPS = [
  {
    step: "one",
    stepNum: 1,
    label: "STEP ONE",
    title: "Gather your group (3-8 players)",
    body: "Just the right amount. Enough for laughs and a few surprising confessions, but not too many like at a wedding.",
  },
  {
    step: "two",
    stepNum: 2,
    label: "STEP TWO",
    title: "Read the question out loud",
    body: "One person holds the app, reads a question, and picks who answers.",
  },
  {
    step: "three",
    stepNum: 3,
    label: "STEP THREE",
    title: "Next question, next player",
    body: "Go in order, or pick someone randomly. If a question sparks something in you, speak up. There are no strict rules here, the only goal is to get to know each other.",
  },
];

export function HowToPlay() {
  return (
    <SectionContainer
      as="section"
      background="primary"
      aria-labelledby="how-to-play-heading"
      id="how-to-play"
      className={styles.howToPlaySection}
    >
      <div className={styles.wrapper}>
        <header className={styles.titles}>
          <AnimateIn>
            <h2 id="how-to-play-heading" className={styles.title}>
              <Typography variant="desktop-titles" color="fill_BYI27M">
                How to play
              </Typography>
            </h2>
            <p className={styles.subtitle}>
              <Typography variant="desktop-subtitles-1" color="fill_SY29LS">
                A simple dynamic that can get you to the next level connection
              </Typography>
            </p>
          </AnimateIn>
        </header>
        <div className={styles.steps}>
          <AnimateIn delay={120}>
          {STEPS.map(({ step, stepNum, label, title, body }) => (
            <article key={step} className={styles.card}>
              <div className={styles.icon} aria-hidden>
                <img
                  src={`/menu-icon/Step-${stepNum}.svg`}
                  alt=""
                  width={56}
                  height={56}
                  className={styles.iconImg}
                />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.stepLabel}>
                  <Typography variant="desktop-capital-letters" color="fill_SY29LS">
                    {label}
                  </Typography>
                </span>
                <h3 className={styles.stepTitle}>
                  <Typography variant="desktop-subtitles-2" color="fill_UF28T0">
                    {title}
                  </Typography>
                </h3>
                <p className={styles.stepBody}>
                  <Typography variant="desktop-body-2" color="fill_SY29LS">
                    {body}
                  </Typography>
                </p>
              </div>
            </article>
          ))}
          </AnimateIn>
        </div>
      </div>
    </SectionContainer>
  );
}
