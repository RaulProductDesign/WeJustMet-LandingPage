import { AnimateIn, Typography } from "../../components";
import { SectionContainer } from "../../components/SectionContainer";
import styles from "./HowToPlay.module.css";

const STEPS = [
  {
    step: "one",
    stepNum: 1,
    title: "Gather your group (3–8 players)",
    body: "Just the right amount—enough for laughs and a few surprising confessions, but not too many like at a wedding or too few like on an awkward date.",
  },
  {
    step: "two",
    stepNum: 2,
    title: "Read the question out loud",
    body: "One person becomes the official voice of the game. Everyone answers in turn. Order doesn't matter, stories do.",
  },
  {
    step: "three",
    stepNum: 3,
    title: "Next question, next player",
    body: "The reader moves on to the next question and a new player starts answering.",
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
          {STEPS.map(({ step, stepNum, title, body }) => (
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
                    Step {step}
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
