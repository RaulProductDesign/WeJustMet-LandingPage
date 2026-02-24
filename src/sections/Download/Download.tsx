import { useEffect, useRef, useState } from "react";
import { AnimateIn, Button, Typography } from "../../components";
import { SectionContainer } from "../../components/SectionContainer";
import styles from "./Download.module.css";

function AppleStoreIcon() {
  return (
    <span className={styles.storeIcon} aria-hidden>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <g clipPath="url(#apple-clip)">
          <path d="M16.8877 13.6895C16.8877 12.1347 17.5417 10.7343 18.5859 9.74414C17.9563 9.19191 17.2249 8.85846 16.4785 8.77832C15.4676 8.6699 14.3075 9.01089 13.1914 10.127L12.8984 10.4199H11.0869L10.7949 10.127C9.18711 8.5191 7.44503 8.47499 6.09863 9.24219C4.69209 10.0438 3.57815 11.8182 3.57812 14.0986C3.57812 17.5396 5.64448 20.4988 8.60645 21.8027C9.63321 21.3132 10.7825 21.04 11.9932 21.04C13.2037 21.04 14.3523 21.3143 15.3789 21.8037C17.0502 21.0681 18.4362 19.8034 19.3271 18.2227C17.8591 17.2497 16.8877 15.585 16.8877 13.6895ZM15.5 2.5V2H15C14.1716 2 13.5 2.67158 13.5 3.5V4H14C14.8284 4 15.5 3.32842 15.5 2.5ZM18.8877 13.6895C18.8877 15.1278 19.7714 16.3623 21.0293 16.875L21.9717 17.2588L21.5713 18.1943C20.4621 20.7853 18.3331 22.8348 15.6875 23.8389L15.2529 24.0039L14.8467 23.7773C14.0027 23.3076 13.0306 23.04 11.9932 23.04C10.9557 23.04 9.9836 23.3076 9.13965 23.7773L8.7334 24.0039L8.29883 23.8389C4.37222 22.3487 1.57812 18.5512 1.57812 14.0986C1.57815 11.1797 3.01158 8.70023 5.10938 7.50488C7.16843 6.33171 9.73869 6.47514 11.8994 8.41992H12.0869C13.5075 7.14148 15.1253 6.62179 16.6924 6.79004C18.3528 6.96832 19.8316 7.90458 20.8594 9.27148L21.5293 10.1621L20.5713 10.7324C19.5611 11.3334 18.8877 12.4332 18.8877 13.6895ZM17.5 2.5C17.5 4.433 15.933 6 14 6H11.5V3.5C11.5 1.567 13.067 2.57704e-06 15 0H17.5V2.5Z" fill="currentColor"/>
        </g>
        <defs>
          <clipPath id="apple-clip">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </span>
  );
}

function PlayStoreIcon() {
  return (
    <span className={styles.storeIcon} aria-hidden>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M23.2363 12L1 23.1182V0.881836L23.2363 12ZM3 19.8818L18.7637 12L3 4.11816V19.8818Z" fill="currentColor"/>
        <path d="M14.3945 9.00427L2.73633 21.6771L1.26367 20.3226L12.9229 7.65075L14.3945 9.00427Z" fill="currentColor"/>
        <path d="M14.3945 14.9951L13.6592 15.6729L12.9229 16.3496L1.26367 3.67676L2.73633 2.32324L14.3945 14.9951Z" fill="currentColor"/>
      </svg>
    </span>
  );
}

const COMING_SOON_MODAL = {
  title: "We're not live yet. But almost.",
  body: "We're still putting the finishing touches on the app. You know, making sure the questions are deep enough to make things awkward in the best possible way.",
  cta: "Close",
};

export function Download() {
  const [modalOpen, setModalOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!modalOpen) return;
    closeButtonRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [modalOpen]);

  return (
    <SectionContainer
      as="section"
      background="primary"
      aria-labelledby="download-heading"
      id="download"
      className={styles.downloadSection}
    >
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <AnimateIn>
            <div className={styles.texts}>
              <h2 id="download-heading" className={styles.title}>
                <Typography variant="desktop-titles" color="fill_24VORE">
                  Download the app
                </Typography>
              </h2>
              <p className={styles.subtitle}>
                <Typography variant="desktop-subtitles-1" color="fill_3E2XJW">
                  And start playing today
                </Typography>
              </p>
            </div>
            <div className={styles.actions}>
              <Button
                variant="Accent"
                size="L"
                className={styles.cta}
                iconBefore={<AppleStoreIcon />}
                onClick={() => setModalOpen(true)}
              >
                Download on the App Store
              </Button>
              <Button
                variant="Accent"
                size="L"
                className={styles.cta}
                iconBefore={<PlayStoreIcon />}
                onClick={() => setModalOpen(true)}
              >
                Get it on Google Play
              </Button>
            </div>
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

      {modalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setModalOpen(false)}
          role="presentation"
        >
          <div
            className={styles.modalDialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="coming-soon-modal-title"
            aria-describedby="coming-soon-modal-body"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalTexts}>
              <h2 id="coming-soon-modal-title" className={styles.modalTitle}>
                <Typography variant="mobile-titles" color="fill_BYI27M">
                  {COMING_SOON_MODAL.title}
                </Typography>
              </h2>
              <p id="coming-soon-modal-body" className={styles.modalBody}>
                <Typography variant="desktop-body-1" color="fill_SY29LS">
                  {COMING_SOON_MODAL.body}
                </Typography>
              </p>
            </div>
            <Button
              variant="Accent"
              size="L"
              className={styles.modalCta}
              onClick={() => setModalOpen(false)}
              ref={closeButtonRef}
            >
              {COMING_SOON_MODAL.cta}
            </Button>
          </div>
        </div>
      )}
    </SectionContainer>
  );
}
