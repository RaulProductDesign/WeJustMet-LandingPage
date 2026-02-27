import { NavBar } from "../../components/NavBar";
import { Button, SectionContainer, Typography } from "../../components";
import styles from "./PrivacyPolicy.module.css";

export function PrivacyPolicy() {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <SectionContainer as="div" background="primary" contained>
          <div className={styles.content}>
            <Typography variant="desktop-titles" color="fill_BYI27M" as="h1" className={styles.title}>
              Privacy Policy
            </Typography>
            <Typography variant="desktop-body-2" color="fill_SY29LS" as="p" className={styles.updated}>
              Last updated: February 27, 2026
            </Typography>

            <Typography variant="desktop-body-2" color="fill_BYI27M" as="p" className={styles.intro}>
              Welcome to WeJustMet. This Privacy Policy explains how we collect, use, and protect information when you use our app.
            </Typography>

            <section className={styles.section}>
              <Typography variant="desktop-capital-letters" color="fill_BYI27M" as="h2" className={styles.sectionTitle}>
                Information we collect
              </Typography>
              <Typography variant="desktop-body-2" color="fill_BYI27M" as="p">
                We do not require you to create an account or provide any personal information to use WeJustMet. However, we use Mixpanel, a third-party analytics service, to collect anonymous behavioral data about how users interact with the app. This includes:
              </Typography>
              <ul className={styles.list}>
                <li>Screens visited and features used</li>
                <li>Tap and interaction patterns</li>
                <li>Session duration and frequency of use</li>
                <li>Device type and operating system</li>
              </ul>
              <Typography variant="desktop-body-2" color="fill_BYI27M" as="p">
                This data is fully anonymous and cannot be used to identify you personally.
              </Typography>
            </section>

            <section className={styles.section}>
              <Typography variant="desktop-capital-letters" color="fill_BYI27M" as="h2" className={styles.sectionTitle}>
                How we use this information
              </Typography>
              <Typography variant="desktop-body-2" color="fill_BYI27M" as="p">
                We use this data solely to understand how people use the app and to improve the experience. We do not sell, rent, or share this data with any third party beyond Mixpanel for analytics purposes.
              </Typography>
            </section>

            <section className={styles.section}>
              <Typography variant="desktop-capital-letters" color="fill_BYI27M" as="h2" className={styles.sectionTitle}>
                Mixpanel
              </Typography>
              <Typography variant="desktop-body-2" color="fill_BYI27M" as="p">
                Our app uses Mixpanel to analyze app usage. Mixpanel may collect and process anonymous usage data on our behalf. You can learn more about how Mixpanel handles data at{" "}
                <a href="https://mixpanel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  mixpanel.com/legal/privacy-policy
                </a>.
              </Typography>
            </section>

            <section className={styles.section}>
              <Typography variant="desktop-capital-letters" color="fill_BYI27M" as="h2" className={styles.sectionTitle}>
                Children&apos;s privacy
              </Typography>
              <Typography variant="desktop-body-2" color="fill_BYI27M" as="p">
                Our app is not directed at children under the age of 13. We do not knowingly collect any data from children.
              </Typography>
            </section>

            <section className={styles.section}>
              <Typography variant="desktop-capital-letters" color="fill_BYI27M" as="h2" className={styles.sectionTitle}>
                Data retention
              </Typography>
              <Typography variant="desktop-body-2" color="fill_BYI27M" as="p">
                Anonymous analytics data is retained for up to 12 months and then deleted automatically.
              </Typography>
            </section>

            <section className={styles.section}>
              <Typography variant="desktop-capital-letters" color="fill_BYI27M" as="h2" className={styles.sectionTitle}>
                Your choices
              </Typography>
              <Typography variant="desktop-body-2" color="fill_BYI27M" as="p">
                If you prefer not to have anonymous usage data collected, you can contact us at{" "}
                <a href="mailto:hello@wejustmet.app" className={styles.link}>hello@wejustmet.app</a> and we will provide instructions to opt out.
              </Typography>
            </section>

            <section className={styles.section}>
              <Typography variant="desktop-capital-letters" color="fill_BYI27M" as="h2" className={styles.sectionTitle}>
                Changes to this policy
              </Typography>
              <Typography variant="desktop-body-2" color="fill_BYI27M" as="p">
                We may update this Privacy Policy from time to time. We will notify users of any significant changes by updating the date at the top of this page.
              </Typography>
            </section>

            <section className={styles.section}>
              <Typography variant="desktop-capital-letters" color="fill_BYI27M" as="h2" className={styles.sectionTitle}>
                Contact
              </Typography>
              <Typography variant="desktop-body-2" color="fill_BYI27M" as="p">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:hello@wejustmet.app" className={styles.link}>hello@wejustmet.app</a>.
              </Typography>
            </section>

            <div className={styles.backWrap}>
              <Button variant="Secondary" size="M" href="/">
                Back to home
              </Button>
            </div>
          </div>
        </SectionContainer>
      </main>
    </>
  );
}
