import { useState } from "react";
import { AnimateIn, Typography } from "../../components";
import { SectionContainer } from "../../components/SectionContainer";
import styles from "./FAQ.module.css";

const FAQ_ITEMS = [
  {
    id: "what-is",
    question: "What is WeJustMet app?",
    answer:
      "When we meet new people (especially while traveling), conversations often stay on a surface level.\n\nWe Just Met is a game designed to help you connect more deeply and truly get to know the people around you through meaningful and fun questions.",
  },
  {
    id: "how-many",
    question: "How many people can play?",
    answer:
      "You can play with just 2 people or even with 20. There's no strict limit, but with very large groups, the magic and flow of the game can get a little lost. The game works best with groups of 3 to 8 people.",
  },
  {
    id: "account",
    question: "Do I need an account to play?",
    answer:
      "No. You don't need to create an account or sign in. Just open the app and start playing.",
  },
  {
    id: "free",
    question: "Is it free?",
    answer:
      "No. We Just Met is a paid app, like a board game. You make a one-time purchase and the game is yours forever on that device. No subscriptions, no hidden fees.",
  },
  {
    id: "friends-strangers",
    question: "Is it for friends or strangers?",
    answer:
      "Both. The game is designed to help people connect on a deeper level, whether you've just met someone or you want to take conversations with friends to a more meaningful place.",
  },
  {
    id: "drinking",
    question: "Is it a drinking game?",
    answer:
      "No. It can be played with or without alcohol. It works just as well with coffee, tea, or a group of curious people.",
  },
];

function ChevronIcon() {
  return (
    <span className={styles.chevronWrapper} aria-hidden>
      <svg
        className={styles.chevron}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M5 7.5L10 12.5L15 7.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <SectionContainer
      as="section"
      background="primary"
      aria-labelledby="faq-heading"
      id="faq"
      className={styles.faqSection}
    >
      <div className={styles.wrapper}>
        <header className={styles.titles}>
          <AnimateIn>
            <h2 id="faq-heading" className={styles.title}>
              <Typography variant="desktop-titles" color="fill_BYI27M">
                FAQ
              </Typography>
            </h2>
            <p className={styles.subtitle}>
              <Typography variant="desktop-subtitles-1" color="fill_SY29LS">
                Frequently Asked Questions
              </Typography>
            </p>
          </AnimateIn>
        </header>
        <div className={styles.list} role="list">
          <AnimateIn delay={120}>
          {FAQ_ITEMS.map(({ id, question, answer }) => {
            const isOpen = openId === id;
            return (
              <div
                key={id}
                className={styles.item}
                role="listitem"
                data-open={isOpen}
              >
                <button
                  type="button"
                  className={styles.trigger}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${id}`}
                  id={`faq-trigger-${id}`}
                  onClick={() => setOpenId(isOpen ? null : id)}
                >
                  <span className={styles.questionText}>
                    <Typography variant="desktop-subtitles-2" color="fill_BYI27M">
                      {question}
                    </Typography>
                  </span>
                  <ChevronIcon />
                </button>
                <div
                  id={`faq-answer-${id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${id}`}
                  className={styles.answerWrapper}
                  data-open={isOpen}
                >
                  <div className={styles.answer}>
                    <Typography
                      variant="desktop-body-2"
                      color="fill_SY29LS"
                      as="div"
                      className={styles.answerText}
                    >
                      {answer}
                    </Typography>
                  </div>
                </div>
              </div>
            );
          })}
          </AnimateIn>
        </div>
      </div>
    </SectionContainer>
  );
}
