import type { ComponentType, MouseEvent, ReactNode } from "react";
import { type Source } from "./Attribution";
import { CodeBlock } from "./CodeBlock";
import { PropsTable, type PropSpec } from "./PropsTable";

/**
 * Intercept clicks on placeholder anchors inside demos. Many examples
 * use `href="#"` as a stand-in target; HashRouter would otherwise treat
 * that as a navigation back to "/" (the home page), which is bad UX.
 * Real links with a non-placeholder href fall through unchanged.
 */
function swallowPlaceholderAnchorClicks(e: MouseEvent<HTMLDivElement>) {
  const anchor = (e.target as HTMLElement).closest("a");
  if (!anchor) return;
  const href = anchor.getAttribute("href");
  if (href === "#" || href === "" || href === null) {
    e.preventDefault();
  }
}

export interface ExampleSpec {
  title?: ReactNode;
  Demo: ComponentType;
  code: string;
  /** Skip the dotted-grid demo background (when the demo needs full bleed). */
  stretch?: boolean;
  /** Use the lighter background panel. */
  inverted?: boolean;
}

export interface ComponentMeta {
  slug: string;
  category: string;
  name: string;
  /** Marks a recently added component in catalog navigation. */
  isNew?: boolean;
  snark: string;
  sources: Source[];
  extra?: number;
  description: ReactNode;
  /** Optional component-specific usage guidance. */
  usage?: ReactNode;
  examples: ExampleSpec[];
  props: PropSpec[];
  /** Sub-components for compound components (e.g. PricingCard.Tier). */
  subprops?: Array<{ name: string; props: PropSpec[] }>;
}

export function ComponentPage({ meta }: { meta: ComponentMeta }) {
  const importCode = `import { ${meta.name} } from "performative-ui";
import "performative-ui/styles.css";`;

  return (
    <article>
      <header className="cp-header">
        <div className="cp-eyebrow">
          <span>{meta.category}</span>
        </div>
        <h1 className="cp-title">{meta.name}</h1>
        <p className="cp-snark">{meta.snark}</p>
      </header>

      <section className="cp-section">
        <p className="cp-description">{meta.description}</p>
      </section>

      <section className="cp-section">
        <h2 className="cp-section__title">Usage</h2>
        <div className="usage">
          <div className="usage__copy">
            {meta.usage ?? (
              <p>
                Use <code>{meta.name}</code> from the {meta.category} section
                when you need this pattern in a React landing page. Import the
                component where it appears, load the package CSS once, then
                start from the examples below.
              </p>
            )}
          </div>
          <div className="usage__codes">
            <CodeBlock code="npm install performative-ui" />
            <CodeBlock code={importCode} />
          </div>
        </div>
      </section>

      <section className="cp-section">
        <h2 className="cp-section__title">Examples</h2>
        {meta.examples.map((ex, i) => (
          <div key={i} className="example">
            {ex.title && <div className="example__title">{ex.title}</div>}
            <div
              className={[
                "example__demo",
                ex.stretch && "example__demo--stretch",
                ex.inverted && "example__demo--inverted",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={swallowPlaceholderAnchorClicks}
            >
              <ex.Demo />
            </div>
            <CodeBlock code={ex.code} />
          </div>
        ))}
      </section>

      <section className="cp-section">
        <h2 className="cp-section__title">Props</h2>
        <PropsTable props={meta.props} />
        {meta.subprops?.map((sp) => (
          <div key={sp.name} style={{ marginTop: 24 }}>
            <div
              style={{
                fontFamily: "var(--pui-font-mono)",
                fontSize: 13,
                marginBottom: 8,
                color: "var(--pui-fg)",
              }}
            >
              {sp.name}
            </div>
            <PropsTable props={sp.props} />
          </div>
        ))}
      </section>
    </article>
  );
}
