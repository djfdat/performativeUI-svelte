# AGENTS.md

## Project Shape

This package is a React component library, despite the repository name. Public
components live in `src/components`, package exports live in `src/index.ts`, and
the docs site is a Vite React app under `docs`.

## Adding A Public Component

When adding a component to `src/components`, treat the docs catalog as part of
the component contract.

1. Create the component in `src/components/ComponentName.tsx`.
2. Add any required styles to `src/styles.css` using the `pui-` prefix.
3. Export the component and its public types from `src/index.ts` in the section
   that matches its role.
4. Add one top-level entry to `COMPONENTS` in `docs/lib/meta.tsx`.

Do not hardcode sidebar links or routes. `docs/App.tsx` generates both from the
`COMPONENTS` catalog. A missing catalog entry means the component has no sidebar
entry and no page.

## Choosing The Docs Section

Use the existing section that best describes the component's job:

- `Atoms`: tiny visual primitives such as glyphs, text treatments, and status
  indicators.
- `Primitives`: reusable controls or form-like building blocks.
- `Banners`: page-level notices and announcement strips.
- `Heroes`: first-viewport or narrative lead components.
- `Backgrounds`: decorative or ambient full-area visual fields.
- `Surfaces`: framed product UI, panels, timelines, inspectors, or workflow
  displays.
- `Conversation`: chat, prompt, composer, and assistant interaction patterns.
- `Social Proof`: logos, metrics, rankings, activity, badges, and credibility
  signals.
- `Pricing & Conversion`: pricing, comparison, waitlist, and conversion
  components.

Only add a new category when none of the existing sections is accurate. If a new
category is necessary, keep it broad enough for future components and verify the
sidebar order still reads well.

## Required Docs Entry Shape

Each public component entry in `docs/lib/meta.tsx` must include:

- `slug`: kebab-case URL segment.
- `category`: one of the docs sections above.
- `name`: exact exported component name.
- `isNew: true`: for newly added public components during the release where
  they are introduced.
- `snark`: short sidebar/home-card support line.
- `sources`: references that inspired the pattern.
- `description`: what the component does and when to use it.
- `usage`: optional component-specific guidance. If omitted,
  `ComponentPage` renders the default install/import guidance.
- `examples`: at least one live `Demo` and matching `code` string.
- `props`: all public props used by consumers.
- `subprops`: required for compound subcomponents such as
  `PricingCard.Amount` or `ModelLeaderboard.Row`.

The generated page must cover Usage, Examples, and Props. `ComponentPage`
renders Usage automatically, but examples and props come from the catalog entry.

## Compound And Dual API Components

If a component supports both quick-form props and compound subcomponents:

- Document the quick-form API in `props`.
- Document compound parts in `subprops`.
- Include examples for both usage styles when the distinction matters.
- Add compile-time JSX coverage to `docs/lib/componentContractTests.tsx`.

## Verification

Before considering the component addition complete, run:

```bash
node --test docs/lib/sidebarCatalog.test.mjs
npm run typecheck
npm run build
```

For visual or layout-sensitive additions, also start the docs server and smoke
test the generated page in the browser:

```bash
npm run dev
```

Check that the component appears in the appropriate sidebar section, its page
has Usage, Examples, and Props sections, and the examples render without console
errors.
