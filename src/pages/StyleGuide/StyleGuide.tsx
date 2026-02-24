import {
  Button,
  Typography,
  Input,
  Tag,
  Card,
  SectionContainer,
} from "../../components";
import styles from "./StyleGuide.module.css";

/* Figma fill IDs and values */
const colorTokens = [
  { name: "fill_3E2XJW", value: "var(--fill_3E2XJW)" },
  { name: "fill_24VORE", value: "var(--fill_24VORE)" },
  { name: "fill_BYI27M", value: "var(--fill_BYI27M)" },
  { name: "fill_UF28T0", value: "var(--fill_UF28T0)" },
  { name: "fill_OYF0JJ", value: "var(--fill_OYF0JJ)" },
  { name: "fill_SY29LS", value: "var(--fill_SY29LS)" },
  { name: "fill_W478SF", value: "var(--fill_W478SF)" },
  { name: "fill_NMXQHG", value: "var(--fill_NMXQHG)" },
] as const;

const spacingTokens = [
  "space-4", "space-6", "space-8", "space-16", "space-24", "space-32",
  "space-48", "space-64", "space-72", "space-80", "space-128", "space-140",
] as const;

const radiusTokens = [
  { name: "radius-18", value: "var(--radius-18)" },
  { name: "radius-64", value: "var(--radius-64)" },
  { name: "radius-100", value: "var(--radius-100)" },
  { name: "radius-full", value: "var(--radius-full)" },
] as const;

function ArrowDownIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
      <path d="M7 10l5 5 5-5H7z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

export function StyleGuide() {
  return (
    <main className={styles.page}>
      <SectionContainer as="div" contained>
        <Typography
          variant="desktop-titles"
          color="fill_BYI27M"
          className={styles.block}
          style={{ paddingTop: "var(--space-32)" }}
        >
          WeJustMet — Style Guide
        </Typography>
        <Typography
          variant="desktop-subtitles-1"
          color="fill_SY29LS"
          style={{ marginBottom: "var(--space-32)" }}
        >
          Tokens and components from Figma (Ready to develop). Same names and values.
        </Typography>

        {/* ——— Colors (Figma fill IDs) ——— */}
        <section className={styles.block} aria-labelledby="colors-heading">
          <h2 id="colors-heading" className={styles.blockTitle}>
            Color palette (Figma fills)
          </h2>
          <div className={styles.swatchGrid}>
            {colorTokens.map(({ name, value }) => (
              <div key={name} className={styles.swatch}>
                <div className={styles.swatchColor} style={{ backgroundColor: value }} />
                <div className={styles.swatchLabel}>{name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ——— Typography (Figma text styles) ——— */}
        <section className={styles.block} aria-labelledby="typography-heading">
          <h2 id="typography-heading" className={styles.blockTitle}>
            Typography (Figma: Desktop / Mobile)
          </h2>
          <div className={styles.typoRow}>
            <div className={styles.typoLabel}>Desktop/Heading</div>
            <Typography variant="desktop-heading" color="fill_BYI27M">
              Less small talk. More real connections.
            </Typography>
          </div>
          <div className={styles.typoRow}>
            <div className={styles.typoLabel}>Desktop/Titles</div>
            <Typography variant="desktop-titles" color="fill_BYI27M">
              Designed for travelers who want to truly connect
            </Typography>
          </div>
          <div className={styles.typoRow}>
            <div className={styles.typoLabel}>Desktop/Subtitles-1</div>
            <Typography variant="desktop-subtitles-1" color="fill_SY29LS">
              A questions game to help solo travelers connect beyond &quot;where are you from?&quot;
            </Typography>
          </div>
          <div className={styles.typoRow}>
            <div className={styles.typoLabel}>Desktop/Subtitles-2</div>
            <Typography variant="desktop-subtitles-2" color="fill_UF28T0">
              Gather your group (3–8 players)
            </Typography>
          </div>
          <div className={styles.typoRow}>
            <div className={styles.typoLabel}>Desktop/Capital letters</div>
            <Typography variant="desktop-capital-letters" color="fill_UF28T0">
              How to play
            </Typography>
          </div>
          <div className={styles.typoRow}>
            <div className={styles.typoLabel}>Desktop/Card-texts</div>
            <Typography variant="desktop-card-texts" color="fill_3E2XJW">
              Card text on dark background
            </Typography>
          </div>
          <div className={styles.typoRow}>
            <div className={styles.typoLabel}>Desktop/Body-1</div>
            <Typography variant="desktop-body-1" color="fill_SY29LS">
              Body text for paragraphs and list content.
            </Typography>
          </div>
          <div className={styles.typoRow}>
            <div className={styles.typoLabel}>Desktop/Body-2</div>
            <Typography variant="desktop-body-2" color="fill_SY29LS">
              Slightly smaller body text.
            </Typography>
          </div>
          <div className={styles.typoRow}>
            <div className={styles.typoLabel}>Desktop/Body-3</div>
            <Typography variant="desktop-body-3" color="fill_NMXQHG">
              © 2026 WeJustMet app. All rights reserved.
            </Typography>
          </div>
          <div className={styles.typoRow}>
            <div className={styles.typoLabel}>Mobile/Titles</div>
            <Typography variant="mobile-titles" color="fill_BYI27M">
              Mobile titles (58px)
            </Typography>
          </div>
          <div className={styles.typoRow}>
            <div className={styles.typoLabel}>Mobile/Capital letters</div>
            <Typography variant="mobile-capital-letters" color="fill_UF28T0">
              Mobile caps
            </Typography>
          </div>
          <div className={styles.typoRow}>
            <div className={styles.typoLabel}>Mobile/Body-1, Body-2</div>
            <Typography variant="mobile-body-1" color="fill_SY29LS" style={{ marginBottom: "var(--space-8)" }}>
              Mobile body 1 (18px)
            </Typography>
            <Typography variant="mobile-body-2" color="fill_SY29LS">
              Mobile body 2 (16px)
            </Typography>
          </div>
        </section>

        {/* ——— Spacing ——— */}
        <section className={styles.block} aria-labelledby="spacing-heading">
          <h2 id="spacing-heading" className={styles.blockTitle}>
            Spacing (from Figma layout)
          </h2>
          <div className={styles.spacingGrid}>
            {spacingTokens.map((token) => (
              <div key={token} className={styles.spacingSample}>
                <div
                  className={styles.spacingBox}
                  style={{ width: `var(--${token})`, maxWidth: "100%" }}
                  title={`var(--${token})`}
                />
                <span className={styles.caption}>{token}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ——— Border radius ——— */}
        <section className={styles.block} aria-labelledby="radius-heading">
          <h2 id="radius-heading" className={styles.blockTitle}>
            Border radius (Figma)
          </h2>
          <div className={styles.radiusDemo}>
            {radiusTokens.map(({ name, value }) => (
              <div key={name}>
                <div className={styles.radiusBox} style={{ borderRadius: value }} />
                <span className={styles.caption}>{name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ——— Shadows ——— */}
        <section className={styles.block} aria-labelledby="shadows-heading">
          <h2 id="shadows-heading" className={styles.blockTitle}>
            Shadow (Figma effect_6AC1X9)
          </h2>
          <div className={styles.shadowDemo}>
            <div className={styles.shadowBox} />
            <span className={styles.caption}>shadow-card</span>
          </div>
        </section>

        {/* ——— Buttons (Figma 98:119) ——— */}
        <section className={styles.block} aria-labelledby="buttons-heading">
          <h2 id="buttons-heading" className={styles.blockTitle}>
            Buttons — Type: Primary | Accent | Secondary | Tertiary | Size: S | M | L | Status: Default | Hovered | Pressed | Disabled
          </h2>
          <div className={styles.buttonGroupLabel}>Type (Primary, Accent, Secondary, Tertiary)</div>
          <div className={styles.buttonRow}>
            <Button variant="Primary">Primary</Button>
            <Button variant="Accent">Accent</Button>
            <Button variant="Secondary">Secondary</Button>
            <Button variant="Tertiary">Tertiary</Button>
          </div>
          <div className={styles.buttonGroupLabel}>With icon (Left / Right)</div>
          <div className={styles.buttonRow}>
            <Button variant="Accent" iconBefore={<PlayIcon />}>
              Play Now
            </Button>
            <Button variant="Accent" iconBefore={<span aria-hidden>🍎</span>}>
              Download on the App Store
            </Button>
          </div>
          <div className={styles.buttonGroupLabel}>Size S | M | L</div>
          <div className={styles.buttonRow}>
            <Button variant="Primary" size="S">Size S</Button>
            <Button variant="Primary" size="M">Size M</Button>
            <Button variant="Primary" size="L">Size L</Button>
          </div>
          <div className={styles.buttonGroupLabel}>Icon-only</div>
          <div className={styles.buttonRow}>
            <Button variant="Secondary" iconOnly iconBefore={<ArrowDownIcon />} aria-label="Expand" />
          </div>
          <div className={styles.buttonGroupLabel}>Status=Disabled</div>
          <div className={styles.buttonRow}>
            <Button variant="Primary" disabled>Primary Disabled</Button>
            <Button variant="Accent" disabled>Accent Disabled</Button>
            <Button variant="Secondary" disabled>Secondary Disabled</Button>
            <Button variant="Tertiary" disabled>Tertiary Disabled</Button>
          </div>
        </section>

        {/* ——— Inputs ——— */}
        <section className={styles.block} aria-labelledby="inputs-heading">
          <h2 id="inputs-heading" className={styles.blockTitle}>
            Input fields
          </h2>
          <div className={styles.inputRow}>
            <div className={styles.inputDemo}>
              <Input label="Email" placeholder="you@example.com" />
            </div>
            <div className={styles.inputDemo}>
              <Input label="With hint" hint="We'll never share your email." placeholder="you@example.com" />
            </div>
            <div className={styles.inputDemo}>
              <Input label="With error" error="Invalid email address." placeholder="bad" />
            </div>
          </div>
          <div className={styles.inputRow}>
            <div className={styles.inputDemo}>
              <Input label="Small" size="sm" placeholder="Small" />
            </div>
            <div className={styles.inputDemo}>
              <Input label="Large" size="lg" placeholder="Large" />
            </div>
          </div>
          <div className={styles.inputRow}>
            <div className={styles.inputDemo}>
              <Input label="Disabled" placeholder="Disabled" disabled />
            </div>
          </div>
        </section>

        {/* ——— Tags ——— */}
        <section className={styles.block} aria-labelledby="tags-heading">
          <h2 id="tags-heading" className={styles.blockTitle}>
            Tags
          </h2>
          <div className={styles.tagRow}>
            <Tag variant="default">Default</Tag>
            <Tag variant="accent">Accent</Tag>
            <Tag variant="outline">Outline</Tag>
          </div>
        </section>

        {/* ——— Cards ——— */}
        <section className={styles.block} aria-labelledby="cards-heading">
          <h2 id="cards-heading" className={styles.blockTitle}>
            Cards (Figma: fill_UF28T0, radius 18px, shadow)
          </h2>
          <div className={styles.cardRow}>
            <Card variant="default">
              <Typography variant="desktop-subtitles-2" color="fill_BYI27M" style={{ marginBottom: "var(--space-8)" }}>
                Default
              </Typography>
              <Typography variant="desktop-body-2" color="fill_SY29LS">
                Default card with Figma shadow.
              </Typography>
            </Card>
            <Card variant="elevated">
              <Typography variant="desktop-subtitles-2" color="fill_BYI27M" style={{ marginBottom: "var(--space-8)" }}>
                Elevated
              </Typography>
              <Typography variant="desktop-body-2" color="fill_SY29LS">
                Same shadow token.
              </Typography>
            </Card>
            <Card variant="bordered">
              <Typography variant="desktop-subtitles-2" color="fill_BYI27M" style={{ marginBottom: "var(--space-8)" }}>
                Bordered
              </Typography>
              <Typography variant="desktop-body-2" color="fill_SY29LS">
                Border, no shadow.
              </Typography>
            </Card>
            <Card variant="accent">
              <Typography variant="desktop-subtitles-2" style={{ marginBottom: "var(--space-8)", color: "var(--fill_24VORE)" }}>
                Accent
              </Typography>
              <Typography variant="desktop-body-2" style={{ color: "rgba(255,255,255,0.9)" }}>
                fill_UF28T0 background.
              </Typography>
            </Card>
          </div>
          <div className={styles.cardRow} style={{ marginTop: "var(--space-32)" }}>
            <Card variant="default" padding="none">
              <div style={{ padding: "var(--space-16)", borderBottom: "1px solid var(--color-border)" }}>
                <Typography variant="desktop-subtitles-2" color="fill_BYI27M">Card padding none</Typography>
              </div>
              <div style={{ padding: "var(--space-16)" }}>
                <Typography variant="desktop-body-2" color="fill_SY29LS">Custom inner padding.</Typography>
              </div>
            </Card>
          </div>
        </section>

        {/* ——— Section container ——— */}
        <section className={styles.block} aria-labelledby="section-heading">
          <h2 id="section-heading" className={styles.blockTitle}>
            Section container
          </h2>
          <Typography variant="desktop-body-2" color="fill_SY29LS" style={{ marginBottom: "var(--space-16)" }}>
            Responsive padding from tokens. Background: fill_3E2XJW (primary) vs fill_UF28T0 (accent).
          </Typography>
          <SectionContainer background="primary" className={styles.sectionDemo}>
            <div className="section-demo-inner">
              Primary (fill_3E2XJW) — contained, max-width 1400px.
            </div>
          </SectionContainer>
          <SectionContainer background="accent" className={styles.sectionDemo}>
            <div className="section-demo-inner" style={{ background: "rgba(255,255,255,0.1)", color: "var(--fill_24VORE)" }}>
              Accent (fill_UF28T0) — hero, download, footer.
            </div>
          </SectionContainer>
        </section>

        {/* ——— Icons ——— */}
        <section className={styles.block} aria-labelledby="icons-heading">
          <h2 id="icons-heading" className={styles.blockTitle}>
            Icons
          </h2>
          <Typography variant="desktop-body-2" color="fill_SY29LS">
            Place SVGs in <code>src/components/icons/</code>. Use <code>Icon</code> for consistent size.
          </Typography>
          <div className={styles.buttonRow} style={{ marginTop: "var(--space-16)" }}>
            <Button variant="Accent" iconOnly iconBefore={<PlayIcon />} aria-label="Play" />
            <Button variant="Secondary" iconOnly iconBefore={<ArrowDownIcon />} aria-label="Expand" />
          </div>
        </section>
      </SectionContainer>
    </main>
  );
}
