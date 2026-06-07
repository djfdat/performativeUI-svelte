import { Link } from "react-router-dom";
import {
  AsciiHero,
  Aurora,
  GradientText,
  Rotator,
  StickyBanner,
  EyebrowPill,
} from "performative-ui";
import { COMPONENTS, CATEGORIES } from "../lib/meta";

export function Home() {
  return (
    <>
      <StickyBanner>
        v0 — barely tested, generously typed
      </StickyBanner>

      <section className="home-hero">
        <Aurora />
        <AsciiHero
          variant="bare"
          colorful
          baseOpacity={0.18}
          spotlightOpacity={0.9}
          spotlightRadius={10}
          fontSize={11}
          style={{ position: "absolute", inset: 0, zIndex: 1 }}
        />
        <div style={{ position: "relative", zIndex: 3 }}>
          <EyebrowPill>{COMPONENTS.length} components, all of them suspicious</EyebrowPill>
          <h2 style={{ marginTop: 16 }}>
            <span style={{ display: "block" }}>React components for</span>
            <span
              style={{
                display: "block",
                /* Reserve one line of height so typing/deleting the
                   rotator never bounces the layout below. Long words
                   that would overflow wrap inside this line instead of
                   clipping at the hero's overflow:hidden. */
                minHeight: "1.1em",
                maxWidth: "100%",
                overflowWrap: "break-word",
              }}
            >
              <GradientText>
                <Rotator
                  words={[
                    "AI startups",
                    "founders pretending",
                    "people who say 'frontier'",
                    "you, specifically",
                  ]}
                />
              </GradientText>
            </span>
          </h2>
          <p className="lede">
            A component library of the most overused tropes from the AI
            startup landing-page renaissance. Plug them in. Look ambitious.
            Maybe even raise.
          </p>
          <div className="home-install">npm install performative-ui</div>
        </div>
      </section>

      {CATEGORIES.map((cat) => (
        <section key={cat}>
          <h2
            style={{
              fontFamily: "var(--pui-font-mono)",
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--pui-fg-mute)",
              padding: "20px 56px 0",
              margin: 0,
            }}
          >
            {cat}
          </h2>
          <div className="home-grid" style={{ paddingTop: 20, paddingBottom: 32 }}>
            {COMPONENTS.filter((c) => c.category === cat).map((c) => (
              <Link key={c.slug} to={`/components/${c.slug}`} className="home-card">
                <span className="home-card__cat">{c.category}</span>
                <span className="home-card__name">{c.name}</span>
                <span className="home-card__snark">{c.snark}</span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
