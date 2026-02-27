import { NavBar } from "../../components/NavBar";
import { Button, SectionContainer, Typography } from "../../components";
import styles from "./TermsConditions.module.css";

export function TermsConditions() {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <SectionContainer as="div" background="primary" contained>
          <div className={styles.content}>
            <Typography variant="desktop-titles" color="fill_BYI27M" as="h1" className={styles.title}>
              Terms & Conditions
            </Typography>
            <Typography variant="desktop-body-2" color="fill_SY29LS" as="p" className={styles.updated}>
              Last updated: February 27, 2026
            </Typography>

            <Typography variant="desktop-body-2" color="fill_BYI27M" as="p" className={styles.intro}>
              By downloading or using WeJustMet, you agree to these Terms & Conditions. Please read them carefully.
            </Typography>

            <section className={styles.section}>
              <Typography variant="desktop-capital-letters" color="fill_BYI27M" as="h2" className={styles.sectionTitle}>
                Use of the app
              </Typography>
              <Typography variant="desktop-body-2" color="fill_BYI27M" as="p">
                WeJustMet is a questions-based app designed to help people have meaningful conversations. You may use the app for personal, non-commercial purposes only.
              </Typography>
              <Typography variant="desktop-body-2" color="fill_BYI27M" as="p">
                You agree not to:
              </Typography>
              <ul className={styles.list}>
                <li>Use the app for any unlawful purpose</li>
                <li>Attempt to reverse engineer or modify the app</li>
                <li>Use the app in any way that could damage or disrupt the service</li>
              </ul>
            </section>

            <section className={styles.section}>
              <Typography variant="desktop-capital-letters" color="fill_BYI27M" as="h2" className={styles.sectionTitle}>
                Intellectual property
              </Typography>
              <Typography variant="desktop-body-2" color="fill_BYI27M" as="p">
                All content within WeJustMet, including questions, design, and branding, is the property of WeJustMet and is protected by applicable intellectual property laws. You may not reproduce or distribute any content from the app without our explicit written permission.
              </Typography>
            </section>

            <section className={styles.section}>
              <Typography variant="desktop-capital-letters" color="fill_BYI27M" as="h2" className={styles.sectionTitle}>
                Disclaimer
              </Typography>
              <Typography variant="desktop-body-2" color="fill_BYI27M" as="p">
                The app is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that the app will be available at all times or free from errors.
              </Typography>
            </section>

            <section className={styles.section}>
              <Typography variant="desktop-capital-letters" color="fill_BYI27M" as="h2" className={styles.sectionTitle}>
                Limitation of liability
              </Typography>
              <Typography variant="desktop-body-2" color="fill_BYI27M" as="p">
                To the fullest extent permitted by law, WeJustMet shall not be liable for any indirect, incidental, or consequential damages arising from your use of the app.
              </Typography>
            </section>

            <section className={styles.section}>
              <Typography variant="desktop-capital-letters" color="fill_BYI27M" as="h2" className={styles.sectionTitle}>
                Changes to these terms
              </Typography>
              <Typography variant="desktop-body-2" color="fill_BYI27M" as="p">
                We reserve the right to modify these Terms at any time. Continued use of the app after changes constitutes acceptance of the new Terms.
              </Typography>
            </section>

            <section className={styles.section}>
              <Typography variant="desktop-capital-letters" color="fill_BYI27M" as="h2" className={styles.sectionTitle}>
                Governing law
              </Typography>
              <Typography variant="desktop-body-2" color="fill_BYI27M" as="p">
                These Terms are governed by the laws of Spain.
              </Typography>
            </section>

            <section className={styles.section}>
              <Typography variant="desktop-capital-letters" color="fill_BYI27M" as="h2" className={styles.sectionTitle}>
                Contact
              </Typography>
              <Typography variant="desktop-body-2" color="fill_BYI27M" as="p">
                If you have any questions about these Terms, please contact us at{" "}
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
