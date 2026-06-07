# 01. The Typewriter Hero Catalog

> "AI for ▍sales▍ → ▍support▍ → ▍marketing▍ → ▍whatever-vertical-our-Series-A-deck-needs-to-mention▍."

A taxonomy of the most overworked headline animation on the AI internet: a sentence with a chunk that types itself, deletes itself, retypes itself as something else, and signals — every single time, with the confidence of a Lottie file — that this product is **broad, modular, and totally not a thin wrapper**.

Cataloged by *shape*, not by company. The same animation library (`react-type-animation`, `typed.js`, Framer's Word Rotator, Magic UI's `<TypingAnimation/>`, Aceternity's `<TypewriterEffect/>`, or a hand-rolled `setInterval` from a Lovable export) powers most of these. The variation is in how the founders chose to flex.

Verified by spot-checks against live hero copy. Cycling word lists were read from page source where the JS exposed them; otherwise inferred from screenshots and from how the site actually behaves when you load it twice.

---

## A. Single-Slot Rotators

The classic. One sentence. One spinning word. All credibility hinges on the noun.

### 1. The Object Rotator — "AI for ___"
- **Shape:** `[static prefix] [ROTATING NOUN]`
- **In the wild:**
  - `cresta.com` — "AI agents for *sales / support / retention / collections*"
  - `sierra.ai` — "AI agents for *commerce / financial services / telco / travel*" (via tab-rotating use cases under a near-static hero)
  - `ema.co` (now `ema.ai`) — rotating agent roles: *Data / Support / Sales / CRM / Meeting Prep*
- **Signal:** "We sell horizontally. Please, please ask us about your use case." The slot is a CRM custom-field dressed up as a thesis.

### 2. The Verb Rotator — "Automate ___" / "Build ___"
- **Shape:** `[ACTION VERB held static]  [ROTATING OBJECT]`
- **In the wild:**
  - `gumloop.com` — "Automate *anything / busywork / approvals / pipelines*" energy under a "build and deploy AI agents" hero
  - `mastra.ai` — "Build *agents / workflows / RAG / evals*" (Mastra hero cycles its own primitives list)
  - `lindy.ai` — variations on "Automate *sales / recruiting / support / scheduling*"
- **Signal:** "We are a verb." Bonus points if the verb is in 96pt and the noun is in a smaller gradient inline-block.

### 3. The Subject Rotator — "___ powered by AI"
- **Shape:** `[ROTATING SUBJECT]  [static "powered by AI" / "for the AI era"]`
- **In the wild:**
  - `harvey.ai` — "Practice made perfect" with rotating *practice areas* in the supporting copy block (M&A, Litigation, Tax, Restructuring)
  - `decagon.ai` — rotating *brand names* in the subhead ("Powering Hertz / Duolingo / Oura / Affirm")
  - `glean.com` — rotating *department workflows* ("Engineering / Sales / Support / IT" tab carousel right under "Work AI that works for all")
- **Signal:** "It's not the AI that's new — it's the *thing we put in front of AI*." Almost always paired with a sticky-on-scroll left rail.

---

## B. Multi-Slot & Compound Rotators

When one rotator isn't enough to suggest infinite scope.

### 4. The Two-Slot Independent Rotator
- **Shape:** `[ROTATING_A] for [ROTATING_B]` — both slots cycle on independent timers, producing surprise combinations like "Voice agents for *dentists*" → "Email agents for *insurance brokers*"
- **In the wild:**
  - `lindy.ai` (interior section) — pairs *(role × team)* slots
  - `mastra.ai` docs hero — *(primitive × workload)*
  - Almost every `magicpatterns.com`-generated hero in the wild
- **Signal:** "Combinatorially infinite TAM." The math implies 64 personas. The customer list shows 3.

### 5. The Whole-Tagline Rotator
- **Shape:** Entire sentence morphs every 3-4 seconds.
- **In the wild:**
  - `replit.com` (historically) — full tagline swaps between "Build apps fast" / "Code with AI" / "Deploy anywhere"
  - `together.ai` — sub-hero cycles "Train. Fine-tune. Deploy. Scale." as full mini-statements
  - `lovable.dev` — hero subtext rotates whole sentences during the demo carousel
- **Signal:** "We have a brand workshop and at no point could we agree." Indecision shipped as feature.

### 6. The "Stop X. Start Y." Rotator
- **Shape:** `Stop [bad thing] → Start [shiny thing]`, with both halves cycling.
- **In the wild:**
  - `decagon.ai` (sub-hero) — "Stop scripting. Start resolving."
  - `gumloop.com` marketing pages — "Stop copy-pasting. Start automating."
  - `fuse.ai` ("AI Agents to Kill Salesforce") — entire brand is one big "stop X / start Y" gesture
- **Signal:** "We have read one (1) Apple keynote and we are angry on your behalf."

### 7. The "Not just X. Also Y. Also Z." Escalator
- **Shape:** Sentence accretes — "Not just *notes*. Also *summaries*. Also *action items*. Also *follow-ups*."
- **In the wild:**
  - `granola.ai` adjacent pages — cascade of "Not just transcripts → Also..."
  - `circleback.ai` — list-style hero that reveals features one by one
  - `hyprnote.com` — escalating capability stack
- **Signal:** "Our scope crept and we decided to make it the hero." The product is a Christmas tree.

---

## C. Audience Rotators

The version where the rotating word is *who you are*, not what the product does.

### 8. The Profession Rotator — "for [doctors/lawyers/recruiters/...]"
- **Shape:** `[product noun] for [ROTATING PROFESSION]`
- **In the wild:**
  - `leya.law` — "AI for *associates / partners / paralegals*"
  - `abridge.com` — rotates clinician personas (*physicians / nurses / specialists*)
  - `spott.io` / `outrove.ai` / `contrario.ai` — every YC W25/S25 recruiting startup cycles *recruiters / sourcers / hiring managers*
- **Signal:** "Pick the title that matches your LinkedIn and feel seen for 0.8 seconds before it changes."

### 9. The Industry Rotator — "for [healthcare/finance/legal/...]"
- **Shape:** `[product noun] for [ROTATING VERTICAL]`
- **In the wild:**
  - `cresta.com` — *travel / financial services / insurance / telco* (cycles both in hero verbiage and in the segmented logo walls)
  - `asteroid.ai` — "Browser agents for *regulated industries*" with vertical sub-rotator
  - `solidroad.com` / `caseflood.ai` / `harperinsure.com` — vertical-SaaS triples that rotate sub-verticals (e.g., insurance: P&C → workers' comp → cyber)
- **Signal:** "We started selling to one vertical, the deal slipped, now we sell to all of them."

### 10. The Department Rotator — "for [sales/marketing/CS/RevOps]"
- **Shape:** Same as #8/#9 but specifically org-chart boxes.
- **In the wild:**
  - `glean.com` — Engineering / Sales / Support / People / IT (the canonical example)
  - `ema.ai` — universal AI "employee" with cycling departments
  - `sana.ai` — Knowledge for *learning / sales enablement / onboarding / compliance*
- **Signal:** "We will sell to whichever VP returns the cold email first."

---

## D. Animation-Style Variants

Same trick, different easing curve. The pattern-spotter's pattern.

### 11. Typewriter with Blinking Cursor
- **Shape:** Letter-by-letter type, brief blinking `▍`, delete, retype. The OG.
- **In the wild:** `cursor.com`, `bolt.new`, `mastra.ai`, `terminal.shop`-adjacent dev tools — basically every dev-tools landing page that runs Berkeley Mono or JetBrains Mono.
- **Signal:** "We are a developer-first company." The cursor character is mandatory and it MUST blink at 530ms intervals.

### 12. Sliding / Fading Word Swap
- **Shape:** Word fades out and the next word fades in, or slides up and is replaced from below. No typing illusion.
- **In the wild:** `sierra.ai`, `decagon.ai`, `harvey.ai`, `notion.com/product/ai` (rotating capability cards) — the *enterprise* aesthetic.
- **Signal:** "We are too serious for a typewriter cursor. We have a design system. The fade is `ease-out 400ms`."

### 13. Roll-Up "Slot-Machine" Swap
- **Shape:** Word rolls upward like a slot reel, sometimes with a 3D-perspective tilt. Heavy use of `clip-path` and `translateY`.
- **In the wild:** `linear.app` (the canonical influence), `cohere.com` sub-headers, `together.ai` numbers ticker, `runwayml.com` capability section.
- **Signal:** "We hired a Webflow contractor who watched a Linear conference talk." The 3D tilt is *non-negotiable*.

### 14. Gradient-Only-On-The-Rotating-Word
- **Shape:** Entire sentence is plain ink. The one swapped word gets a conic gradient, animated hue rotation, or a "shimmer" sweep.
- **In the wild:** `glean.com`, `lovable.dev`, `mistral.ai`, `perplexity.ai` rotating capability copy — the "AI-magic-on-the-noun" treatment.
- **Signal:** "This word is magic. Trust me — it's gradient."

### 15. Emoji / Icon Rotates Alongside the Word
- **Shape:** Both an icon (often a Lucide stroke icon or a 3D emoji) and the noun swap together — `🧑‍⚕️ for healthcare` → `⚖️ for legal` → `📈 for finance`.
- **In the wild:** `lindy.ai` (use-case carousel), `runwayml.com` capability tiles, almost every Magic UI / shadcn `<TypingAnimation words={["Design 🎨","Build 🔨","Ship 🚀"]}/>` knockoff.
- **Signal:** "We have a designer. They went to Figma Config. They came back with `noto-emoji`."

---

## E. Format-Bending Variants

The trope crammed into a different container.

### 16. The Prompt-Box Rotator (ChatGPT-Hero)
- **Shape:** The hero *is* a fake input box. The placeholder text types out example prompts and deletes them on a loop: `"Build me a..." → "Summarize my..." → "Draft an email to..."`
- **In the wild:**
  - `v0.app` — "Contact form" / "Image editor" / "Mini game" / "Finance calculator" cycle as placeholder/suggestions
  - `bolt.new` — full app-prompt examples cycle
  - `lovable.dev` — placeholder rotates through "Design a..." / "Build a..." / "Ship a..." prompts
  - `perplexity.ai` — the search bar's "Ask anything" hides example-question cycling on focus
- **Signal:** "Our product *is* a text box, so our landing page is the same text box, but bigger." Recursive demo. Spiritual descendant of the Google homepage.

### 17. The Fake-Terminal / Fake-IDE Typewriter
- **Shape:** A code editor or terminal mock in the hero where commands or code complete themselves character-by-character, usually with green prompt prefix, sometimes with an "AI suggestion" ghost-text that materializes.
- **In the wild:**
  - `cursor.com` — code editor mock with autocompleting suggestions
  - `windsurf.com` — IDE hero with ghost-text completing
  - `magic.dev` / `cognition.ai` — terminal-style demo of the agent doing things
  - `terminal.shop` — the entire page IS a terminal (extreme)
- **Signal:** "We are a real tool used by real engineers. Look — see the syntax highlighting?" Always TypeScript or Python. Never PHP.

### 18. The Code-Comment Rotator
- **Shape:** Hero is a code block where the comment rotates: `// Build me a [marketing site / dashboard / agent / RAG pipeline]`. The *code* below the comment is static.
- **In the wild:** `replicate.com`, `modal.com`, `baseten.co`, `langchain.com` snippet heroes, `pinecone.io` sample-call blocks.
- **Signal:** "Our docs *are* our marketing. Our marketing *is* our docs. We have collapsed the funnel." Bonus points if the code is wrong but no one ran it.

### 19. The Question Rotator — "What if ___?"
- **Shape:** Cycle of questions instead of statements: "What if your support team could *scale infinitely*?" / "What if your inbox *answered itself*?"
- **In the wild:** `anthropic.com` (intermittent campaign-style heroes), `sana.ai`, `humanloop.com` historically, `cohere.com` for-enterprise sub-pages.
- **Signal:** "We are a foundation model and we read McKinsey reports for fun."

---

## F. Curiosities — The Long Tail

One-off variants worth screenshotting before they get A/B-tested out of existence.

### 20. The Single-Letter Morph
- **Shape:** The whole sentence is static EXCEPT one letter that flickers through Unicode glyphs or character-set variants. E.g., "tr𝒶nsform" where the `a` cycles through fraktur/script/glitch variants.
- **In the wild:** Most often on AI-art / generative tools — `krea.ai`, `ideogram.ai`-adjacent indie launches, the Awwwards entries for `lumalabs.ai` sub-campaigns. Common in `dhravya/landing-effects`-powered W25 sites.
- **Signal:** "We are *generative*. The letterforms themselves are generative. The brand is liquid." Closest cousin of the ASCII-glitch hero (see catalog #04).

### 21. The Counter / Number Rotator
- **Shape:** The rotating element isn't a word, it's a *number* that ticks up: "*47,328* resolutions today" → "*47,329*..."
- **In the wild:** `decagon.ai`, `sierra.ai`, `harvey.ai`, `together.ai` — the "look how many tokens we've inferenced" flex.
- **Signal:** "We have a Datadog dashboard and we wired it directly to the homepage." Usually fake. The number sometimes ticks even at 3am EST.

### 22. The Chat-Bubble Conversation Rotator
- **Shape:** Hero is a fake chat thread. User-bubble and AI-bubble exchange a cycling Q&A every few seconds.
- **In the wild:** `retellai.com`, `vocera.ai`, `bravi.app`, `bolna.ai` — every voice-agent landing page, basically.
- **Signal:** "We are conversational AI. The conversation never stops. Even when you scroll away. Especially when you scroll away."

### 23. The Audio-Waveform Rotator
- **Shape:** Voice startups: an animated waveform that "speaks" different sample lines as you scroll or wait. The transcript types itself underneath in sync.
- **In the wild:** `elevenlabs.io`, `cartesia.ai`, `retellai.com`, `careswift.ai` — voice agents flex by *sound*.
- **Signal:** "Click play. Trust me. Click play. Please. Just click play."

### 24. The Scroll-Triggered Rotator
- **Shape:** Words don't auto-cycle — they cycle as you scroll, GSAP-pinned. The page becomes a "use case scroller" where each scroll-step types in a new noun.
- **In the wild:** `runwayml.com`, `pika.art`, `cognition.ai`, `lovable.dev` long-form scroll demo.
- **Signal:** "We hired the same Webflow studio everyone else hired. The pinned section is mandatory."

---

## Meta-Observations

- **Library tells.** The blink rate, the delete-speed-to-type-speed ratio, and the easing of the cursor reveal which package they used. `react-type-animation`'s default speed = 50ms per char, delete = 30ms. You can spot it from across a coffee shop.
- **The word lists leak.** In 9 of 10 cases, the cycling words live in a single `const words = [...]` array in the HTML or hydration payload. View-source is a cheat code for figuring out what verticals a company is *actually* targeting (versus what they pitch on stage).
- **Rotation count = funding stage.** Seed-stage rotates 3 words. Series A rotates 5. Series B rotates 8 and one of them is "Compliance." If the list hits 12, the company has a Head of Demand Gen.
- **Gradient = vibe budget.** Plain rotator → bootstrapped. Gradient on the noun → seed. Conic gradient with hue rotation → priced round. 3D slot-machine roll-up → growth round.
- **The cursor never stops blinking.** It's been blinking for three years. It will outlive us all.

---

## Cross-References

- See **catalog #04 (ASCII Hero Art)** for the "the rotating word is itself ASCII glitch" overlap — `supermemory.ai`-style hybrids.
- See **catalog #05 (AI-ified UI Elements)** for the prompt-box-as-hero pattern when it spirals into a full fake-product mock.
- See **catalog #02 (Logo Walls)** for the natural sequel: once you've cycled "for sales / support / legal," the next 600px of viewport will cycle through customer logos saying the same thing in PNG form.
