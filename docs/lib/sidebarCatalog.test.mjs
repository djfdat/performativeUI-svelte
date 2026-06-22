import { readdirSync, readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { basename } from "node:path";

const meta = readFileSync(new URL("./meta.tsx", import.meta.url), "utf8");
const app = readFileSync(new URL("../App.tsx", import.meta.url), "utf8");
const componentPage = readFileSync(
  new URL("./ComponentPage.tsx", import.meta.url),
  "utf8",
);
const styles = readFileSync(new URL("../styles.css", import.meta.url), "utf8");
const index = readFileSync(new URL("../../src/index.ts", import.meta.url), "utf8");
const componentFiles = readdirSync(new URL("../../src/components/", import.meta.url))
  .filter((file) => file.endsWith(".tsx"))
  .map((file) => basename(file, ".tsx"))
  .sort();

function readCatalogEntries(source) {
  const starts = [
    ...source.matchAll(
      /^\s*\{\s*\n\s*slug:\s*"([^"]+)",\s*\n\s*category:\s*"([^"]+)",\s*\n\s*name:\s*"([^"]+)"/gm,
    ),
  ];

  return starts.map((match, index) => {
    const next = starts[index + 1]?.index ?? source.indexOf("\n];", match.index);
    return {
      slug: match[1],
      category: match[2],
      name: match[3],
      block: source.slice(match.index, next),
    };
  });
}

const catalogEntries = readCatalogEntries(meta);
const catalogNames = catalogEntries.map((entry) => entry.name).sort();
const exportedComponentNames = [
  ...index.matchAll(/from "\.\/components\/([^"]+)"/g),
]
  .map((match) => match[1].split("/").at(-1))
  .sort();

const expected = new Map([
  ["SecurityTheater", "Surfaces"],
  ["LaunchTimeline", "Surfaces"],
  ["MetricStack", "Social Proof"],
  ["ScrollNarrative", "Heroes"],
]);

for (const [name, category] of expected) {
  const entryPattern = new RegExp(
    `category:\\s*"${category}"[\\s\\S]*?name:\\s*"${name}"[\\s\\S]*?isNew:\\s*true`,
  );
  assert.match(meta, entryPattern, `${name} should be marked new in ${category}`);
}

assert.deepEqual(
  catalogNames,
  componentFiles,
  "Every source component should have one top-level catalog entry for sidebar routing",
);

assert.deepEqual(
  catalogNames,
  exportedComponentNames,
  "Every exported component should be represented in the docs catalog",
);

for (const entry of catalogEntries) {
  assert.match(
    entry.block,
    /examples:\s*\[[\s\S]*?Demo:/,
    `${entry.name} should document at least one live example`,
  );
  assert.match(
    entry.block,
    /props:\s*\[/,
    `${entry.name} should document usage-facing props`,
  );
}

assert.doesNotMatch(
  meta,
  /category:\s*"Narrative & Proof"/,
  "Added components should live in existing sidebar sections",
);

assert.match(app, /CATEGORIES\.map/);
assert.match(app, /COMPONENTS\.filter\(\(c\) => c\.category === cat\)/);
assert.match(app, /COMPONENTS\.map\(\(c\) =>/);
assert.match(componentPage, /cp-section__title">\s*Usage\s*<\/h2>/);
assert.match(componentPage, /import \{ \${meta\.name} \} from "performative-ui";/);
assert.match(app, /sidebar__new-icon[\s\S]*aria-hidden="true"[\s\S]*\+/);
assert.match(styles, /\.sidebar__new-icon[\s\S]*background:[\s\S]*34,\s*197,\s*94/);
