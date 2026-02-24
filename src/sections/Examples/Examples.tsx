import { AnimateIn, Typography } from "../../components";
import { SectionContainer } from "../../components/SectionContainer";
import styles from "./Examples.module.css";

const EXAMPLES = [
  {
    bad: "What's your favorite food?",
    good: "What food reminds you of someone you love?",
  },
  {
    bad: "Where are you from?",
    good: "What does home mean to you right now?",
  },
  {
    bad: "What are you doing next?",
    good: "What do you hope your next chapter looks like?",
  },
];

export function Examples() {
  return (
    <SectionContainer
      as="section"
      background="primary"
      aria-labelledby="examples-heading"
      className={styles.examplesSection}
    >
      <div className={styles.wrapper}>
        <header className={styles.titles}>
          <AnimateIn>
            <h2 id="examples-heading" className={styles.title}>
              <Typography variant="desktop-titles" color="fill_BYI27M">
                The same moment.
                <br />
                A different conversation.
              </Typography>
            </h2>
            <p className={styles.subtitle}>
              <Typography variant="desktop-subtitles-1" color="fill_SY29LS">
                See the difference a better question can make
              </Typography>
            </p>
          </AnimateIn>
        </header>
        <div className={styles.grid} role="list">
          <AnimateIn delay={120}>
          {EXAMPLES.map(({ bad, good }, index) => (
            <div key={index} className={styles.row} role="listitem">
              <div className={styles.cardBad}>
                <span className={styles.cardLabel}>
                  <Typography variant="desktop-capital-letters" color="fill_SY29LS">
                    Small talk
                  </Typography>
                </span>
                <p className={styles.cardQuestion}>
                  <Typography variant="desktop-body-1" color="fill_SY29LS">
                    {bad}
                  </Typography>
                </p>
              </div>
              <div className={styles.cardGood}>
                <span className={styles.cardLabel}>
                  <Typography variant="desktop-capital-letters" color="fill_3E2XJW">
                    We Just Met questions
                  </Typography>
                </span>
                <p className={styles.cardQuestion}>
                  <Typography variant="desktop-body-1" color="fill_24VORE">
                    {good}
                  </Typography>
                </p>
              </div>
            </div>
          ))}
          </AnimateIn>
        </div>
      </div>
    </SectionContainer>
  );
}
