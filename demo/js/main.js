/* ============================================================
   main.js — orchestrator. Wires every cliché on the page.
   ============================================================ */
import { Rotator } from "./typewriter.js";
import { mountNodeGraph } from "./node-graph.js";
import { mountAsciiHero } from "./ascii-hero.js";
import { mountIdeStream, mountAiStream } from "./streams.js";

// Each cliché is independently wrapped — a CDN flake on one
// shouldn't take down the rest of the parody.
const safe = (label, fn) => {
  try { fn(); }
  catch (e) { console.error(`[performative-ui] ${label} failed`, e); }
};

// ============================================================
// Data (hoisted above call sites so consts are initialized
// before any function that closes over them executes).
// ============================================================
const LOGOS = [
  { kind: "img", src: "openai",       label: "OpenAI" },
  { kind: "img", src: "stripe",       label: "Stripe" },
  { kind: "img", src: "anthropic",    label: "Anthropic" },
  { kind: "img", src: "notion",       label: "Notion" },
  { kind: "img", src: "shopify",      label: "Shopify" },
  { kind: "img", src: "vercel",       label: "Vercel" },
  { kind: "img", src: "linear",       label: "Linear" },
  { kind: "img", src: "github",       label: "GitHub" },
  { kind: "img", src: "google",       label: "Google" },
  { kind: "img", src: "microsoft",    label: "Microsoft" },
  { kind: "img", src: "nvidia",       label: "NVIDIA" },
  { kind: "img", src: "ramp",         label: "Ramp" },
  { kind: "img", src: "discord",      label: "Discord" },
  { kind: "img", src: "ycombinator",  label: "Y Combinator" },
  { kind: "img", src: "huggingface",  label: "Hugging Face" },
  { kind: "img", src: "cloudflare",   label: "Cloudflare" },
  { kind: "img", src: "snowflake",    label: "Snowflake" },
  { kind: "text", text: "NASA",       cls: "" },
  { kind: "text", text: "Harvard",    cls: "serif italic" },
  { kind: "text", text: "MIT",        cls: "serif" },
  { kind: "text", text: "Pentagon",   cls: "" },
];

// ---------- 02. The typewriter heroes ----------
safe("rotator-hero", () =>
  new Rotator(
    document.getElementById("rotator-hero"),
    [
      "doctors",
      "lawyers",
      "founders",
      "designers",
      "engineers",
      "musicians",
      "everyone",
    ],
  ),
);

safe("rotator-stop", () =>
  new Rotator(
    document.getElementById("rotator-stop"),
    [
      "writing emails",
      "scheduling meetings",
      "shipping slop",
      "context-switching",
    ],
    { typeMs: 55, holdMs: 1200 },
  ),
);
safe("rotator-start", () =>
  new Rotator(
    document.getElementById("rotator-start"),
    ["shipping", "building", "thinking again", "compounding"],
    { typeMs: 55, holdMs: 1200 },
  ),
);

// ---------- 02b. Node graph background (depends on external CDN) ----------
safe("node-graph", () => mountNodeGraph("node-graph"));

// ---------- 02c. Floating sparkles ----------
safe("sparkles", () =>
  mountSparkleField(document.getElementById("sparkle-field")),
);

// ---------- 03. Marquee logo wall ----------
safe("marquee", () => mountMarquee(document.getElementById("marquee-track")));

// ---------- 03b. Counter ticker ----------
safe("counter", () =>
  document.querySelectorAll(".counter").forEach((el) => animateCounter(el)),
);

// ---------- 05. ASCII hero ----------
safe("ascii-hero", () => mountAsciiHero(document.getElementById("ascii-hero")));

// ---------- 06. IDE stream ----------
safe("ide-stream", () => mountIdeStream(document.getElementById("ide-body")));

// ---------- 10. AI chat stream ----------
safe("ai-stream", () =>
  mountAiStream(
    document.getElementById("ai-stream"),
    document.getElementById("stream-thinking-label"),
  ),
);

// ---------- 17. Chat FAB ----------
safe("chat-fab", () => {
  const fab = document.getElementById("chat-fab");
  const pop = document.getElementById("chat-popover");
  const closeBtn = document.getElementById("chat-close");
  fab.addEventListener("click", () => {
    pop.hidden = !pop.hidden;
  });
  closeBtn.addEventListener("click", () => {
    pop.hidden = true;
  });
});

// ============================================================
// Helpers
// ============================================================

function animateCounter(el) {
  const target = +el.dataset.target;
  const duration = 1800;
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.floor(target * eased).toLocaleString();
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function mountSparkleField(host) {
  const N = 18;
  const glyphs = ["✦", "✧", "✶", "✺", "✹", "·"];
  for (let i = 0; i < N; i++) {
    const s = document.createElement("span");
    s.className = "float-sparkle";
    s.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
    s.style.left = Math.random() * 100 + "%";
    s.style.bottom = "-12px";
    s.style.fontSize = (8 + Math.random() * 12).toFixed(1) + "px";
    s.style.animationDuration = (8 + Math.random() * 10).toFixed(1) + "s";
    s.style.animationDelay = (Math.random() * 10).toFixed(1) + "s";
    s.style.opacity = (0.4 + Math.random() * 0.5).toFixed(2);
    host.appendChild(s);
  }
}

/* ============================================================
   The Logo Wall — real recognizable SVG logos via jsdelivr.
   Combinations chosen for maximum "you have 4 customers" energy.
   (LOGOS const lives at the top of this file.)
   ============================================================ */
function iconUrl(slug) {
  return `https://cdn.jsdelivr.net/npm/simple-icons@11/icons/${slug}.svg`;
}

function mountMarquee(track) {
  const build = () => {
    const frag = document.createDocumentFragment();
    for (const l of LOGOS) {
      if (l.kind === "img") {
        const img = document.createElement("img");
        img.src = iconUrl(l.src);
        img.alt = l.label;
        img.onerror = () => {
          const span = document.createElement("span");
          span.className = "text-logo";
          span.textContent = l.label;
          img.replaceWith(span);
        };
        frag.appendChild(img);
      } else {
        const span = document.createElement("span");
        span.className = `text-logo ${l.cls ?? ""}`;
        span.textContent = l.text;
        frag.appendChild(span);
      }
    }
    return frag;
  };
  track.appendChild(build());
  track.appendChild(build());
}
