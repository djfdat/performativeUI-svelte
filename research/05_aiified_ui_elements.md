# The Performative AI UI Bestiary

### A Parody Design System for "AI-ified" Landing Page Elements

> *"Look at me. Look at how AI I am. There are sparkles. The button is glowing. The button glows because it generates. It does not need to glow to generate, but it glows because it generates."*

This is the field guide to the visual treatments AI companies apply to otherwise normal UI to telegraph "this is AI" without actually adding any new affordance. Every pattern below has been observed in the wild on live landing pages as of mid-2026. URLs are direct; companies are real; the cynicism is artisanal.

A pattern qualifies for this bestiary if and only if:

1. It is visual or copy-level only (no new product capability).
2. Removing it would not change what the product does.
3. A user, shown the page with the pattern stripped out, would no longer be sure the product "is AI."

---

## Table of Contents

1. [Iconography](#1-iconography)
2. [Typography & Headlines](#2-typography--headlines)
3. [Color & Backgrounds](#3-color--backgrounds)
4. [Buttons & CTAs](#4-buttons--ctas)
5. [The Hero Section](#5-the-hero-section)
6. [Motion & Animation](#6-motion--animation)
7. [Cards & Surfaces](#7-cards--surfaces)
8. [Badges, Tags & Flexes](#8-badges-tags--flexes)
9. [Social Proof](#9-social-proof)
10. [Pricing & Tiers](#10-pricing--tiers)
11. [Trust Layer / "Powered By"](#11-trust-layer--powered-by)
12. [Floating Cruft](#12-floating-cruft)
13. [Demo Theater](#13-demo-theater)
14. [Footer & Community](#14-footer--community)

---

# 1. Iconography

## 1.1 The Sparkle (`✨` / Four-Pointed Star)

**Why it screams AI:** It is the international maritime distress signal for "this button calls an LLM." A four-pointed star sits to the left of any verb that means "generate." If the star is missing, the button is presumed deterministic, which would be a failure of marketing.

**In the wild:**

- **Notion AI** — [notion.com/product/ai](https://www.notion.com/product/ai). Every "Ask AI" surface across the product marketing site uses a four-pointed sparkle as the in-button glyph; the icon is applied to GIFs of Custom Agents, Enterprise Search, and AI Meeting Notes.
- **Framer AI** — [framer.com/ai](https://www.framer.com/ai). Sparkle decorations attached to "Wireframer" and AI Translate feature badges in the hero.
- **Linear (AI Agent)** — [linear.app/agents](https://linear.app/agents). The four-pointed star appears next to "Linear Agent" branding, in-product mockups, and screenshot annotations of agent actions.
- **Cohere** — [cohere.com](https://www.cohere.com). Sparkle/glow effects placed around accent elements in the dark hero.

**Implementation note:** It is always at 16px, always to the left of the label, always white-on-gradient or gradient-on-white. Never red. Red sparkles would feel like an error.

---

## 1.2 The Stars-in-a-Cluster (the "Magic Wand" variant)

**Why it screams AI:** A single sparkle says "feature." A cluster of three sparkles in descending size says "category." Marketing leads use the cluster on section headers labeled "Intelligence" or "Magic."

**In the wild:**

- **Notion AI** — [notion.com/product/ai](https://www.notion.com/product/ai). Hero animations include constellation-style sparkle clusters near "Meet your 24/7 AI team."
- **Framer AI** — [framer.com/ai](https://www.framer.com/ai). Cluster used on section dividers between Wireframer, AI Translate, and Workshop.

---

# 2. Typography & Headlines

## 2.1 The Purple-Pink-Cyan Gradient Headline

**Why it screams AI:** Because every Tailwind tutorial scraped between 2019 and 2024 used `bg-clip-text` with `from-indigo-500 via-purple-500 to-pink-500`, and every LLM that ingested those tutorials now believes a black headline is unfinished. See: ["Why Your AI Keeps Building the Same Purple Gradient Website"](https://prg.sh/ramblings/Why-Your-AI-Keeps-Building-the-Same-Purple-Gradient-Website).

**In the wild:**

- **Mistral** — [mistral.ai](https://mistral.ai). "Frontier AI. In your hands." set against an orange-toned aurora gradient with sparkle decorations.
- **Together AI** — [together.ai](https://www.together.ai). "Build what's next on the AI Native Cloud" with abstract purple/blue/orange geometric gradient assets behind the headline.
- **Cohere** — [cohere.com](https://www.cohere.com). "Own your AI" headline atop a warm amber-orange gradient overlay.
- **Lovable** — [lovable.dev](https://lovable.dev). "Build something Lovable" set against an animated gradient .webp background that pulses behind the hero.

**Implementation note:** The gradient must traverse at least two hue families. A monochrome gradient is just a "nice headline" and does not register as AI.

---

## 2.2 The Animated Shimmer Headline

**Why it screams AI:** A static gradient is for SaaS that did Series A in 2022. A *moving* gradient that sweeps across text is for SaaS that did Series A this morning. Same energy as a "thinking" indicator, applied to a noun.

**In the wild:**

- **Lovable** — [lovable.dev](https://lovable.dev). Background gradient animates underneath the hero, giving the headline an indirect shimmer.
- **Linear (Agents page)** — [linear.app/agents](https://linear.app/agents). Shimmer-on-gradient text effects on the "Linear Agent" lockup, mimicking the in-product loading state.
- **shadcn/ui "AI" block library** — [shadcn.io/ai/shimmer](https://www.shadcn.io/ai/shimmer). The reference implementation that the rest of the ecosystem copy-pastes; calls itself "AI Shimmer" out loud.

---

## 2.3 The Vague Cosmic Headline

**Why it screams AI:** "Frontier." "The future." "What's next." "Build something Lovable." None of these are nouns. None describe the product. All signal that the product is too important to be specific.

**In the wild:**

- **Mistral** — [mistral.ai](https://mistral.ai). "Frontier AI. In your hands."
- **Together AI** — [together.ai](https://www.together.ai). "Build what's next on the AI Native Cloud."
- **Hugging Face** — [huggingface.co](https://huggingface.co). "The AI community building the future."
- **Cognition** — [cognition.ai](https://www.cognition.ai). "The first autonomous software engineer."
- **Lovable** — [lovable.dev](https://lovable.dev). "Build something Lovable."

---

# 3. Color & Backgrounds

## 3.1 The Aurora Gradient

**Why it screams AI:** Slowly drifting bands of purple, pink, cyan, and (since 2024) orange behind the hero, evoking either the Northern Lights, a nebula, or "intelligence." The viewer should feel small.

**In the wild:**

- **Mistral** — [mistral.ai](https://mistral.ai). Aurora gradient with the brand-orange palette layered behind the hero copy.
- **Lovable** — [lovable.dev](https://lovable.dev). Pulsing webp gradient that loops in the hero background.
- **Together AI** — [together.ai](https://www.together.ai). Abstract 3D geometric shapes (blue circles, purple intersections, orange hex accents) functioning as a stationary aurora.
- **Cohere** — [cohere.com](https://www.cohere.com). Warm amber gradient overlays in the hero photography.

---

## 3.2 The Anthropic-Orange Imitation

**Why it screams AI:** Three years ago, "AI orange" meant nothing. Now `#D4A574`-ish warm rust is shorthand for "we are serious, safety-aligned, and have read the Constitutional AI paper." See [Loftlyy's Anthropic brand color sheet](https://www.loftlyy.com/en/anthropic).

**In the wild:**

- **Mistral** — [mistral.ai](https://mistral.ai). Brand orange palette deployed identically.
- **Cohere** — [cohere.com](https://www.cohere.com). Warm orange/amber atmospheric photography.
- **Hugging Face** — [huggingface.co](https://huggingface.co). Brand orange/yellow used across nav and accents.

---

## 3.3 The OpenAI-Green Imitation

**Why it screams AI:** `#10A37F` is now a brand asset OpenAI does not technically own. Chat-shaped products use it on the send button to imply lineage.

**In the wild:**

- **OpenAI / ChatGPT** — original. Reference at [Mobbin's OpenAI brand palette](https://mobbin.com/colors/brand/openai).
- **Cohere** — [cohere.com](https://www.cohere.com). Historically green, now drifting orange but retains chat-green accents.
- Generic chatbot wrappers across [producthunt.com/categories/ai-agents](https://www.producthunt.com/categories/ai-agents) — the green-send-button is overwhelmingly the visual default.

---

## 3.4 The Black-with-Subtle-Grid Background

**Why it screams AI:** Pure black with a 1px gridded SVG at 4% opacity says "we have GPUs." Used most when the hero contains a code editor.

**In the wild:**

- **Cursor** — [cursor.com](https://cursor.com). Dark hero with subtle solid-brand background, IDE mockup floats in foreground.
- **Cognition (Devin)** — [cognition.ai](https://www.cognition.ai). Dark numbered sections (01–04) over near-black.
- **Magic.dev** — [magic.dev](https://magic.dev). Minimalist near-black hero, near-zero ornamentation, "we have $515M and thousands of GB200s" energy.

---

# 4. Buttons & CTAs

## 4.1 The Glowing / Shimmering Button Border

**Why it screams AI:** A non-AI button has one border. An AI button has a border that *travels around itself*, like the loading bar on a Mac install that finished an hour ago. The animation conveys liveness.

**In the wild:**

- **Lovable** — [lovable.dev](https://lovable.dev). "BuildSend message" CTA sits inside an animated container with pulsing gradient borders.
- **Vercel v0** — [v0.app](https://v0.app). The prompt input itself has a soft glowing perimeter when focused.
- **shadcn/ui AI blocks** — [shadcn.io/ai/shimmer](https://www.shadcn.io/ai/shimmer). The canonical implementation everyone forks.

---

## 4.2 The "Generate with AI" Button (always with a sparkle)

**Why it screams AI:** The word "Generate" is the new "Submit," and like "Submit" it now requires an icon to be legible. If the icon is anything other than a sparkle the button is presumed broken.

**In the wild:**

- **Notion AI** — [notion.com/product/ai](https://www.notion.com/product/ai). "Ask AI," "Generate," "Draft" buttons across product GIFs all use sparkle glyphs.
- **Framer AI** — [framer.com/ai](https://www.framer.com/ai). Hero CTA paired with sparkle on "Wireframer."
- **Bolt.new** — [bolt.new](https://www.bolt.new). "Let's build" CTA with adjacent sparkle accent.

---

## 4.3 The "Try the demo" / "Talk to it" Dual CTA

**Why it screams AI:** Two primary buttons, equal weight: one says "Try the demo," one says "Talk to sales." The implication is that the product is so good a *demo session with the AI itself* is a sales channel.

**In the wild:**

- **Mistral** — [mistral.ai](https://mistral.ai). "Start building" + "Contact sales."
- **Cohere** — [cohere.com](https://www.cohere.com). "Request a demo" + "Explore products."
- **Together AI** — [together.ai](https://www.together.ai). "Start building" + "Contact Sales."
- **Anthropic (Claude marketing)** — [anthropic.com](https://www.anthropic.com). The same dual CTA pattern (try / talk to sales) across product surfaces.

---

# 5. The Hero Section

## 5.1 The Prompt-Input Box as Hero CTA (the "ChatGPT Box" Hero)

**Why it screams AI:** Instead of headline + button, the hero centerpiece is *the actual product input*: a rounded rectangle with placeholder text like "What do you want to build?" Even if the product is not a chatbot, the user must be confronted with The Box.

**In the wild:**

- **Vercel v0** — [v0.app](https://v0.app). Hero is a prompt input asking "What do you want to create?" with template chips beneath (Contact Form, Image Editor, Mini Game, Finance Calculator).
- **Bolt.new** — [bolt.new](https://www.bolt.new). "What will you build today?" headline above a prompt box and "Let's build" button.
- **Lovable** — [lovable.dev](https://lovable.dev). "Build something Lovable" headline directly above a text input as the entire CTA.
- **Replit** — [replit.com](https://replit.com). "What will you build?" with selectable template chips (Website, Mobile, 3D Game, Spreadsheet) functioning as a prompt box.

---

## 5.2 The Mock IDE / Terminal in the Hero

**Why it screams AI:** Real code in a code-shaped div, blinking caret, syntax-highlighted, scrolling on autoplay. The implication is that this is happening *right now* and the AI is doing it. The caret is what sells it.

**In the wild:**

- **Cursor** — [cursor.com](https://cursor.com). Interactive Cursor IDE mockup floats in hero with task panels ("In Progress" / "Ready for Review") and AI-driven activity.
- **Cognition (Devin)** — [cognition.ai](https://www.cognition.ai). Devin's autonomous coding shown as an embedded terminal/IDE composite.
- **Linear (Agents)** — [linear.app/agents](https://linear.app/agents). Issue-tracker hero with "Codex" agent activity scrolling inside the screenshot.

---

## 5.3 The Mock Chat Bubble Hero

**Why it screams AI:** Two chat bubbles. One question, one perfectly-formatted answer with a streaming caret. Even when the product is a CRM, a meeting notetaker, or a graphics editor.

**In the wild:**

- **Notion AI** — [notion.com/product/ai](https://www.notion.com/product/ai). Hero GIFs show chat-shaped surfaces returning answers across non-chat product contexts.
- **Granola** — [granola.ai](https://www.granola.ai). Hero showcase displays raw meeting notes transforming into structured AI-enhanced bullet points, presented in chat-output format.
- **Reflect** — [reflect.app](https://reflect.app). "Ask anything to AI" inline component with Re-run / Insert / Copy / Replace action chips, framed as the centerpiece.

---

## 5.4 The "Before AI / After AI" Side-by-Side

**Why it screams AI:** Two screenshots. The left looks like a Word doc from 2009. The right looks like a Notion page from 2025. They are theoretically the same content. The point is the contrast.

**In the wild:**

- **Granola** — [granola.ai](https://www.granola.ai). "Raw notes" on left vs "AI-enhanced structured notes" on right (the AllFound example).
- **Notion AI** — [notion.com/product/ai](https://www.notion.com/product/ai). Animated GIFs of meeting-note transformation.
- **Reflect** — [reflect.app](https://reflect.app). Shows the same note before and after invoking GPT-4 outline generation.

---

# 6. Motion & Animation

## 6.1 The "Breathing" Background Gradient

**Why it screams AI:** Subtle scale + opacity loop on a gradient, roughly 4–8 seconds per breath cycle, evoking either calm meditation or "the model is alive." See [GradientLab's "breathing" presets](https://gradientlab.co/features/animated-gradient-maker).

**In the wild:**

- **Lovable** — [lovable.dev](https://lovable.dev). The hero gradient .webp loops with breathing motion.
- **Mistral** — [mistral.ai](https://mistral.ai). Aurora gradient with slow drift.
- **Framer "Breathing Background" component** — [framer.com/marketplace/components/breathing-background](https://www.framer.com/marketplace/components/breathing-background/). The off-the-shelf component every Framer-built AI site is using.

---

## 6.2 The Token-by-Token Text Reveal

**Why it screams AI:** Text doesn't render. It *streams.* Word by word, sometimes letter by letter, with a blinking caret on the trailing edge. Critically, this happens in static demos where the text is hard-coded; the streaming is purely performative.

**In the wild:**

- **Vercel v0** — [v0.app](https://v0.app). Demo videos showing code stream into the editor token-by-token.
- **Cognition (Devin)** — [cognition.ai](https://www.cognition.ai). Devin's plan-and-execute traces shown streaming.
- **Cursor** — [cursor.com](https://cursor.com). Inline code-completion demos with streaming reveal.
- Reference implementation: [zackproser.com/demos/tokenize](https://zackproser.com/demos/tokenize), [shir-man.com/tokens-per-second](https://shir-man.com/tokens-per-second/) — devs literally tune the WPM to feel "smart but not slow."

---

## 6.3 The "AI Thinking…" Loader (cycling thoughts)

**Why it screams AI:** A loader that doesn't just spin but *says* what it's thinking — "Searching the web…", "Reading 14 sources…", "Synthesizing…" — cycling every 1.2 seconds. The cycling text is decorative; the work is not actually narrated.

**In the wild:**

- **Perplexity** — perplexity.ai. Source-reading + synthesizing status used in demo videos.
- **Cognition (Devin)** — [cognition.ai](https://www.cognition.ai). Devin's plan/act/observe loop shown as cycling status copy.
- Reference Lottie/library: [lottiefiles.com simple loading & AI thinking animation](https://lottiefiles.com/free-animation/simple-loading-ai-thinking-O283a21B9W) and [Figma "Processing Thoughts" micro-animation](https://www.figma.com/community/file/1504815177629742837/processing-thoughts-micro-animation-in-figma) — these are the assets shipping into AI landing pages everywhere.

---

## 6.4 The Animated Code-Being-Written Hero

**Why it screams AI:** Same as token-by-token reveal but specifically inside the IDE mockup, with a blinking cursor at the leading edge, syntax highlighting popping into existence one keyword at a time. The viewer should feel a faint twinge of envy.

**In the wild:**

- **Cursor** — [cursor.com](https://cursor.com). IDE mockup with animated code-completion playing on a loop.
- **Vercel v0** — [v0.app](https://v0.app). Generated React/Tailwind appears in a code panel one line at a time.
- **Bolt.new** — [bolt.new](https://www.bolt.new). "Watch AI build in real-time" — explicitly the entire value prop, animated.
- **Lovable** — [lovable.dev](https://lovable.dev). The three-step process shows AI building "in real-time."

---

# 7. Cards & Surfaces

## 7.1 Glassmorphism Cards with Backdrop Blur

**Why it screams AI:** `backdrop-filter: blur(16px); background: rgba(255,255,255,0.08);` — feels spatial, feels intelligent, feels like visionOS. The card is also unreadable without a backdrop, but that is acceptable.

**In the wild:**

- **Together AI** — [together.ai](https://www.together.ai). Translucent overlay panels above the abstract 3D background.
- **Mistral** — [mistral.ai](https://mistral.ai). Frosted product cards floating over the aurora.
- **Notion AI** — [notion.com/product/ai](https://www.notion.com/product/ai). Floating frosted feature tiles in animated hero compositions.
- Reference: [uxpilot.ai's glassmorphism guide](https://uxpilot.ai/blogs/glassmorphism-ui) — notes "AI-focused products and design tools in particular tend to use glass surfaces because the aesthetic aligns with the spatial, intelligent feel."

---

## 7.2 Cards with a Glowing Bottom Edge

**Why it screams AI:** A 1px colored gradient line on the bottom of every card, glowing slightly outward. Reads as "the model output ended here, but is still warm." Distantly related to the underglow on a 2007 Honda Civic.

**In the wild:**

- **Cursor** — [cursor.com](https://cursor.com). Subtle accent edges on task cards.
- **Linear (Agents)** — [linear.app/agents](https://linear.app/agents). Issue cards in mockups have subtle gradient bottoms when an agent has touched them.
- **Vercel v0** — [v0.app](https://v0.app). Template thumbnails with bottom-edge accents.

---

# 8. Badges, Tags & Flexes

## 8.1 The "Beta" / "Early Access" / "Waitlist" Tag

**Why it screams AI:** Permanently in beta is a feature, not a bug. The tag signals "we throttle inference because we can." See [getlaunchlist.com waitlist for AI startups](https://getlaunchlist.com/waitlist-for-ai-startups) for an entire SaaS dedicated to manufacturing this scarcity.

**In the wild:**

- **Cognition (Devin)** — [cognition.ai](https://www.cognition.ai). Devin historically gated by access waves.
- **Magic.dev** — [magic.dev](https://magic.dev). No public product — entire site is a credentialed waitlist with "$515M raised" as the only purchase signal.
- **Primer** ([ycombinator.com/launches/Ony-primer-…](https://www.ycombinator.com/launches/Ony-primer-ai-agents-that-demo-onboard-and-support-your-product)). "Join the Primer waitlist now" with reinforcement that they're "giving access in waves."
- **Castari** ([ycombinator.com/launches/OrV-castari-vercel-for-ai-agents](https://www.ycombinator.com/launches/OrV-castari-vercel-for-ai-agents)). Waitlist landing at castari.com.
- **Innate** ([ycombinator.com/launches/MHj-innate-…](https://www.ycombinator.com/launches/MHj-innate-teach-your-own-general-purpose-robots)). Waitlist for general-purpose robots.
- **Superfilter** ([ycombinator.com/launches/LeN-superfilter-…](https://www.ycombinator.com/launches/LeN-superfilter-an-executive-assistant-in-your-pocket)). Waitlist for the "executive assistant in your pocket."

---

## 8.2 The "X-Parameter / X-Token" Flex

**Why it screams AI:** Numbers that mean nothing to a buyer, presented as if they mean something. "Trained on 10B tokens." "70B parameter base model." "Context window of 2M." The buyer cannot evaluate the claim, which is the point.

**In the wild:**

- **Magic.dev** — [magic.dev](https://magic.dev). Boasts "thousands of GB200s," "ultra-long context," "frontier-scale pre-training" — meaningful only as vibe.
- **Together AI** — [together.ai](https://www.together.ai). "2x faster inference, 60% lower costs, 90% faster pre-training, 1.3× FlashAttention-4, 4x faster LLM inference (ATLAS)." The decimals are doing the load-bearing work.
- **Hugging Face** — [huggingface.co](https://huggingface.co). "Browse 2M+ models" as a hero CTA.

---

## 8.3 The "Frontier" Self-Label

**Why it screams AI:** You cannot self-identify as cool, but you can self-identify as frontier, and this is now binding.

**In the wild:**

- **Mistral** — [mistral.ai](https://mistral.ai). "Frontier AI. In your hands."
- **Magic.dev** — [magic.dev](https://magic.dev). "Frontier code models."
- **Cognition (Devin)** — [cognition.ai](https://www.cognition.ai). "The first autonomous software engineer" — a frontier-by-implication phrasing.

---

# 9. Social Proof

## 9.1 The Trusted-By Logo Wall (with one OpenAI logo, prominently)

**Why it screams AI:** A horizontal strip of grayscale enterprise logos under the hero, except one of them is *OpenAI*, which is somehow both a customer and a competitor. Nobody questions this.

**In the wild:**

- **Notion AI** — [notion.com/product/ai](https://www.notion.com/product/ai). "Trusted by teams at OpenAI, Figma, Ramp, and Nvidia."
- **Granola** — [granola.ai](https://www.granola.ai). PostHog, Intercom, Linear, Index, Brex, Replit, Vercel.
- **ElevenLabs** — [elevenlabs.io](https://elevenlabs.io). Twilio, Disney Studios, Cisco, Epic Games, Meta.

---

## 9.2 The "Join 50,000+ Builders" Counter

**Why it screams AI:** "Users" is for SaaS. "Builders" is for AI SaaS. The number is always a round multiple of 1,000 or an oddly precise number ending in 7. Common variants: "creators," "developers," "teams."

**In the wild:**

- **Lovable** — [lovable.dev](https://lovable.dev). "Millions of builders" social proof copy in hero.
- **Lindy** — [lindy.ai](https://www.lindy.ai). "Trusted by 400K+ professionals."
- **Hugging Face** — [huggingface.co](https://huggingface.co). "Browse 2M+ models" doubles as a builder-count proxy.

---

## 9.3 The GitHub Stars Counter

**Why it screams AI:** A star count next to a repo link, displayed as if stars on a repo translated linearly into product quality. AI-adjacent open-source products keep the counter live.

**In the wild:**

- **Hugging Face** — [huggingface.co](https://huggingface.co). Transformers (161,362★), Diffusers (33,791★), smolagents (27,734★) displayed live on the homepage.
- **Bolt.new / Bolt OSS** — [bolt.new](https://www.bolt.new). Open-source repo star counts surfaced in footer/community.
- **shadcn/ui** — [shadcn.io](https://www.shadcn.io). Stars used as the entire credibility model.

---

## 9.4 The Founder/Investor Name-Drop

**Why it screams AI:** A horizontal scroll of headshots of famous people who like the product. Bonus points if Jensen Huang, Andrej Karpathy, or Greg Brockman are in the list.

**In the wild:**

- **Cursor** — [cursor.com](https://cursor.com). Testimonials from Diana Hu (YC), Jensen Huang (NVIDIA), Andrej Karpathy (Eureka Labs), Patrick Collison (Stripe), shadcn, Greg Brockman (OpenAI).
- **Magic.dev** — [magic.dev](https://magic.dev). "$515M from Nat Friedman, Daniel Gross, CapitalG, Elad Gil, Sequoia, Jane Street, Eric Schmidt and others" — the entire hero is essentially the cap table.
- **Granola** — [granola.ai](https://www.granola.ai). Quoted endorsements from John Borthwick (Betaworks) and Adriana Vitagliano (Firstminute).

---

# 10. Pricing & Tiers

## 10.1 The "Pro" Tier with "Most Popular" + Sparkle Badge

**Why it screams AI:** The pricing table is rendered as three cards. The middle card has a glowing border, a "Most Popular" ribbon, and — increasingly — a small sparkle next to the tier name. The sparkle is doing zero pricing work and pure persuasion work.

**In the wild:**

- **Cursor** — [cursor.com/pricing](https://www.cursor.com/pricing). Hobby / Individual / Teams / Enterprise structure with "Pro," "Pro+," "Ultra" sub-tiers; the middle tier visually emphasized.
- **Notion AI** — [notion.com/product/ai](https://www.notion.com/product/ai). "Try for free" + "Request a demo" CTAs gate into tiered pricing with Pro emphasis.
- **Lovable** — [lovable.dev](https://lovable.dev). Tiered Builder/Pro/Teams pricing with the middle tier visually highlighted.

---

## 10.2 The "Credits" Pricing Model

**Why it screams AI:** Not dollars per month. Not seats. *Credits*. The user must mentally convert credits → tokens → dollars, and the conversion is intentionally opaque. The page often includes a credit calculator with a slider that updates a $-amount in real time.

**In the wild:**

- **Replit** — [replit.com](https://replit.com). "Your first prompt is free. No credit consumption."
- **Vercel v0** — [v0.app](https://v0.app). Credits-based generation.
- **Bolt.new** — [bolt.new](https://www.bolt.new). Token-based usage tiers.
- **Lovable** — [lovable.dev](https://lovable.dev). Message-credit pricing model on Pro tier.

---

# 11. Trust Layer / "Powered By"

## 11.1 The "Powered by GPT-4 / Claude / Gemini" Badge

**Why it screams AI:** A small grayscale logo of OpenAI, Anthropic, or Google near the footer, captioned "Powered by." The wrapper company is implying parental endorsement; the foundation model company has no idea who they are.

**In the wild:**

- The pattern is visible across most of [producthunt.com/categories/ai-agents](https://www.producthunt.com/categories/ai-agents) launches — "Powered by GPT-4" / "Powered by Claude" appears below the fold on the majority of W24/F25-era YC AI launches.
- **Reflect** — [reflect.app](https://reflect.app). Explicit "GPT-4 and Whisper integration" callout in the AI section.
- **Granola** — [granola.ai](https://www.granola.ai). Model-provider attributions appear in the security/methodology copy.

---

## 11.2 The SOC 2 / Enterprise-Ready Badge

**Why it screams AI:** Specifically because the AI product is six months old and got SOC 2 last Tuesday. The badge is a black-and-white shield, often paired with "GDPR" and "HIPAA-ready," and is placed next to the hero CTA to make the product seem older than it is.

**In the wild:**

- **Lindy** — [lindy.ai](https://www.lindy.ai). Compliance badges surfaced in trust/security copy adjacent to the CTA.
- **Cohere** — [cohere.com](https://www.cohere.com). Enterprise-data sovereignty messaging directly in the hero.
- **Together AI** — [together.ai](https://www.together.ai). Enterprise-readiness badges throughout marketing.

---

# 12. Floating Cruft

## 12.1 The "Talk to AI" Floating Action Button (bottom-right)

**Why it screams AI:** A round button, lower-right corner, with a sparkle or chat-bubble icon, pulsing gently. Clicking it opens a chat with a bot that has read the landing page and will summarize it back to you. The bot's existence is the marketing.

**In the wild:**

- Documented as the dominant AI-startup pattern in [landbot.io's conversational landing page roundup](https://landbot.io/blog/conversational-landing-page-examples) and [shadcn.io's AI Chat Floating Widget block](https://www.shadcn.io/blocks/ai-chat-floating-widget) — the latter is the reference component the ecosystem uses.
- **Lindy** — [lindy.ai](https://www.lindy.ai). Floating assistant available across marketing pages.
- **Cohere** — [cohere.com](https://www.cohere.com). Persistent chat assistant in the corner of marketing surfaces.

---

## 12.2 The Sticky "What's New" / "Just Shipped" Banner

**Why it screams AI:** A thin gradient bar across the top: "✨ Introducing GPT-5 support →" or "🚀 New: agent workflows are live." Bonus points if the bar is dismissible but reappears after a day.

**In the wild:**

- **Reflect** — [reflect.app](https://reflect.app). "New: Our AI integration just landed" banner at the top of the page.
- **Linear** — [linear.app](https://linear.app). Top banner announcing the Agents launch tied to [linear.app/changelog/2026-03-24-introducing-linear-agent](https://linear.app/changelog/2026-03-24-introducing-linear-agent).
- **Notion AI** — [notion.com/product/ai](https://www.notion.com/product/ai). Persistent ribbon announcing recent AI feature drops.

---

# 13. Demo Theater

## 13.1 The Looped Hero Video with Smooth Cursor

**Why it screams AI:** A 30-second loop of someone moving a cursor across a UI with unrealistic smoothness, typing a single prompt, then receiving an instant perfect output. There is no error state. There is no thinking pause longer than 800ms. The cursor moves with quintic ease-out.

**In the wild:**

- **Notion AI** — [notion.com/product/ai](https://www.notion.com/product/ai). Hero loop of perfect prompt → perfect output across Custom Agents, Enterprise Search, AI Meeting Notes GIFs.
- **Granola** — [granola.ai](https://www.granola.ai). Looping AllFound call transformation.
- **Lovable** — [lovable.dev](https://lovable.dev). "Watch AI build in real-time" — perfectly choreographed loop.
- **Vercel v0** — [v0.app](https://v0.app). Demo videos of code arriving fully-formed.

---

## 13.2 The Synthetic "Real" Demo (the impossibly clean example)

**Why it screams AI:** The example task is always the same archetype: "Build a SaaS dashboard with auth, billing, and a Postgres-backed CRM." It is always finished in one shot. The viewer is meant to wonder why their own job isn't this easy.

**In the wild:**

- **Bolt.new** — [bolt.new](https://www.bolt.new). Showcases handle "projects 1,000 times larger than before" — the demo always works.
- **Vercel v0** — [v0.app](https://v0.app). Template thumbnails (Contact Form, Image Editor, Mini Game, Finance Calculator) are always perfect first-pass.
- **Replit** — [replit.com](https://replit.com). "B2B project management app" example prompt that compiles cleanly.
- **Cursor** — [cursor.com](https://cursor.com). Task panel mockups never show a failed agent run.

---

## 13.3 The "Real-Time" Activity Feed

**Why it screams AI:** A scrolling feed of recent things the AI did: "Drafted a PRD…", "Replied to 3 emails…", "Updated CRM…", "Sent follow-up to Alex." It is always pre-rendered. It is never anyone's actual activity. The feed is the demo.

**In the wild:**

- **Linear (Agents)** — [linear.app/agents](https://linear.app/agents). Issue feed showing "Codex" agent activity scrolling through agent runs.
- **Cursor** — [cursor.com](https://cursor.com). "In Progress" / "Ready for Review" task panels animated.
- **Granola** — [granola.ai](https://www.granola.ai). Scrolling enhanced-notes feed in hero.

---

# 14. Footer & Community

## 14.1 The Discord Badge ("Join 10K+ in Discord")

**Why it screams AI:** AI products do not have a Slack community; they have a Discord, because their target audience either makes ComfyUI workflows or graduated college in the past 24 months. The badge is purple. The number is always inflated.

**In the wild:**

- **Lovable** — [lovable.dev](https://lovable.dev). Footer Discord link prominently surfaced (alongside Reddit, X, YouTube, LinkedIn).
- **Hugging Face** — [huggingface.co](https://huggingface.co). Discord linked from community surfaces, with running member counts.
- **Bolt.new** — [bolt.new](https://www.bolt.new). Discord/community badge in footer.

---

## 14.2 The "Star us on GitHub" Footer CTA

**Why it screams AI:** Even closed-source products do this if they have any open repo at all (sometimes a docs repo). The CTA includes the star count, live.

**In the wild:**

- **Hugging Face** — [huggingface.co](https://huggingface.co). Top OSS repos with live star counts in the homepage grid.
- **shadcn/ui** — [shadcn.io](https://www.shadcn.io). The reference pattern, copied everywhere.
- **Bolt.new** — [bolt.new](https://www.bolt.new). Star-prompts in footer linked to open repos.

---

## 14.3 The Changelog That Brags About Velocity

**Why it screams AI:** "Shipped 47 features in the last 30 days." A footer link to a changelog with a counter. The changelog uses the same sparkle icon, naturally.

**In the wild:**

- **Linear** — [linear.app/changelog](https://linear.app/changelog/2026-03-24-introducing-linear-agent). Frequent agent-related changelog drops as marketing surface.
- **Cursor** — [cursor.com](https://cursor.com). "Cursor — Build Software with AI Agents" product page acts as a rolling changelog of agent capabilities.
- **Lovable** — [lovable.dev](https://lovable.dev). Footer links to extensive changelog and resource library tied to "millions of builders, projects built daily" metrics.

---

# Appendix A: The Minimum Viable AI Landing Page (parody spec)

If you wanted to ship a brand-new AI startup landing page tomorrow and have the median viewer immediately register "this is AI," the necessary and sufficient elements are:

1. Aurora gradient background, breathing 6s loop, purple-pink-cyan or orange-amber.
2. Headline in gradient text: `<noun>` for `<persona>`, e.g. "Frontier intelligence for builders."
3. Sub-headline that gestures at the future ("Build what's next.").
4. Hero CTA is a prompt-input box. Placeholder: "What do you want to build?"
5. Sparkle (✨) icon to the left of the "Generate" button label.
6. Glowing animated border on the input.
7. Below the fold: token-streamed code/IDE mockup with blinking caret.
8. Trusted-by row featuring OpenAI's logo somewhere in the lineup.
9. "Join 50,000+ builders" waitlist counter.
10. Floating chat bubble bottom-right (purple, pulsing).
11. Three-tier pricing with sparkle on the middle "Pro" tier.
12. Discord badge + GitHub stars counter in the footer.
13. "Powered by [foundation model]" microcopy at the very bottom.

You will be indistinguishable from every other launch on Product Hunt this week, which is the point.

---

# Appendix B: Patterns Considered But Excluded

These were considered for inclusion but felt out of scope because they're either *too generic* (not AI-specific) or *legitimately functional* (cross the affordance line):

- Dark mode toggle (too generic).
- "Open in browser / Download for Mac" dual install CTAs (generic SaaS).
- Comparison table vs Competitor X (legitimate, not AI-specific).
- Roadmap voting boards (legitimate community function).
- "Made with [our product]" gallery (legitimate showcase, though heavily used by Lovable and v0).

---

# Sources & Primary Field Observations

- [Cursor](https://cursor.com) — IDE mockup hero, "Build Software with AI Agents."
- [Vercel v0](https://v0.app) — prompt-input hero, code-streaming demos.
- [Lovable](https://lovable.dev) — animated gradient background, prompt-input hero, Discord footer.
- [Bolt.new](https://www.bolt.new) — "What will you build today?" prompt hero.
- [Replit](https://replit.com) — "What will you build?" prompt hero with templates.
- [Notion AI](https://www.notion.com/product/ai) — animated GIF feature demos, sparkle iconography.
- [Reflect](https://reflect.app) — "Ask anything to AI" inline component, "New AI integration" banner.
- [Granola](https://www.granola.ai) — before/after notes demo, enterprise logo wall.
- [Lindy](https://www.lindy.ai) — "Trusted by 400K+ professionals," floating assistant.
- [Linear Agents](https://linear.app/agents) — agent-themed shimmer, scrolling activity feed.
- [Cognition / Devin](https://www.cognition.ai) — dark hero, "autonomous software engineer" tagline.
- [Magic.dev](https://magic.dev) — minimalist hero, $515M cap-table flex.
- [Mistral](https://mistral.ai) — orange aurora, "Frontier AI. In your hands."
- [Together AI](https://www.together.ai) — 3D geometric gradient, performance-metric flex.
- [Cohere](https://www.cohere.com) — warm amber atmospheric hero, "Own your AI."
- [Hugging Face](https://huggingface.co) — live GitHub stars, "Browse 2M+ models."
- [ElevenLabs](https://elevenlabs.io) — enterprise logo wall (Disney/Cisco/Meta).
- [Anthropic](https://www.anthropic.com) — the reference orange palette being imitated.
- [Framer AI](https://www.framer.com/ai) — sparkle iconography, Wireframer prompt-as-hero.
- YC W24 / S24 / F25 launch pages — broad waitlist pattern across [Castari](https://www.ycombinator.com/launches/OrV-castari-vercel-for-ai-agents), [Primer](https://www.ycombinator.com/launches/Ony-primer-ai-agents-that-demo-onboard-and-support-your-product), [Innate](https://www.ycombinator.com/launches/MHj-innate-teach-your-own-general-purpose-robots), [Superfilter](https://www.ycombinator.com/launches/LeN-superfilter-an-executive-assistant-in-your-pocket), [FuseAI](https://www.ycombinator.com/launches/MqX-fuseai-agentic-sales-platform).

### Meta-references on the phenomenon

- ["Why Your AI Keeps Building the Same Purple Gradient Website"](https://prg.sh/ramblings/Why-Your-AI-Keeps-Building-the-Same-Purple-Gradient-Website) — diagnoses the indigo-500 root cause.
- ["AI Purple Problem: Make Your UI Unmistakable"](https://dev.to/jaainil/ai-purple-problem-make-your-ui-unmistakable-3ono) — the problem from the design side.
- ["Why Do A Lot Of AI-Generated Websites Have Purple Vibes?"](https://newsletters.ai/p/ai-vs-purple) — confirmation of the trend.
- [shadcn.io AI Shimmer block](https://www.shadcn.io/ai/shimmer) — reference implementation everyone forks.
- [shadcn.io AI Chat Floating Widget](https://www.shadcn.io/blocks/ai-chat-floating-widget) — reference floating chat bubble.
- [Framer Breathing Background](https://www.framer.com/marketplace/components/breathing-background/) — the breathing gradient component.
- [GradientLab Animated Gradient Maker](https://gradientlab.co/features/animated-gradient-maker) — "breathing" presets named after the pattern.
- [uxpilot.ai glassmorphism guide](https://uxpilot.ai/blogs/glassmorphism-ui) — confirms "AI-focused products in particular tend to use glass surfaces."

---

*This document is intended as a parody design system and a critical resource. The patterns catalogued are real. The naming and tone are not.*
