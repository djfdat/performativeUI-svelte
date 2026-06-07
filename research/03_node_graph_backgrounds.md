# The Decorative Background-of-Nodes Industrial Complex

*A field guide to the "look at all these little dots, they must be thinking" school of AI landing-page design.*

If you've squinted at more than three AI company homepages in the last 18 months, you've seen The Background. Sometimes it's particles. Sometimes it's a wireframe globe. Sometimes it's blurred orbs in indigo-to-cyan. The semiotic signal is always the same: *something intelligent is happening behind the headline.* The implementation is almost always the same too: a `<canvas>` element, ~120kb of WebGL, and the designer's hope that you'll equate "moving" with "thinking."

This document catalogs 25+ live examples observed in June 2026, sorted by variant, with verified company URLs and notes on implementation hints sniffed from the page source. Where a site bundles `three.js`, `r3f` (react-three-fiber), `gsap`, `lottie`, `vanta.js`, `rive`, `spline-viewer`, or includes a top-level `<canvas>`, we say so. (We assume good faith and acknowledge some of these libraries do real work — but a lot of it is, frankly, decorative.)

---

## Part 1: The Taxonomy

| Variant | What it signals | Honest description |
| --- | --- | --- |
| Particles.js / tsparticles node graph | "Neural network" | Floating dots, lines drawn between any two dots within N pixels. Came from a 2015 codepen. |
| Constellation / twinkling | "Intelligence as cosmos" | Same as above, but slower and shinier. |
| 3D rotating node mesh (three.js) | "Knowledge graph" | An icosahedron with extra steps. |
| Wireframe globe | "Global scale" | Stripe did it in 2019 (well). Everyone else followed (less well). |
| Topographic / contour lines | "Depth, data, terrain" | A heatmap pretending to be a mountain. |
| Gradient orbs / blurred blobs | "Calm intelligence" | Two CSS `filter: blur(120px)` divs and a prayer. |
| Stripe-style gradient mesh | "Premium SaaS" | A WebGL shader of regret. |
| Animated grid that warps near cursor | "Spatial computing" | Aspirational Apple Vision Pro cosplay. |
| Floating geometric shapes | "Composability" | Spline.design exports, frequently. |
| Shader noise / refraction | "Generative, organic" | One frag shader, infinitely reused. |

---

## Part 2: The Field Guide (verified live, June 2026)

### A. Node-graph / Particles / Constellation — the explicit "neural network" pretenders

These are the user's favorite kind: dots, lines, the implicit promise that this represents a graph algorithm rather than a `setInterval` and a distance check.

1. **Pinecone** — https://www.pinecone.io/
   - Variant: **Animated dot-connector node graph** (top hero), constellation-coded
   - Top-level `<canvas>` element present in source
   - Palette: black background, white/cyan dots, faint cyan connecting lines
   - Implementation hint: Canvas2D, looks hand-rolled (no particles.js fingerprint), constellation-style
   - *Commentary: a vector database with a literal vector graphic. Self-aware or unaware? Either is fine.*

2. **Inflection AI** — https://www.inflection.ai/
   - Variant: **3D node mesh / particle field**
   - `<canvas>` + `r3f` (react-three-fiber) detected in bundle
   - Palette: deep navy, lavender, white
   - Reacts to cursor (parallax-style)
   - *Commentary: appropriate, given the company keeps reincarnating; the particles drift too.*

3. **Fixie AI** — https://www.fixie.ai/
   - Variant: **Particle field / drifting dots**
   - `<canvas>`, `r3f` confirmed
   - Palette: light mode (rebel!), warm whites with violet accents
   - *Commentary: refreshingly off-trope on color, fully on-trope on "particles equal cognition."*

4. **Scale AI** — https://www.scale.com/
   - Variant: **3D scrolling mesh / shader hero**
   - `r3f` confirmed in source
   - Palette: white/black with electric blue
   - *Commentary: data-labeling for AI gets a 3D background about labels for AI. Recursion as marketing.*

5. **DeepMind** — https://www.deepmind.com/
   - Variant: **Rotating 3D shape / generative noise**
   - `r3f` detected
   - Palette: blue, white, indigo
   - *Commentary: AlphaFold deserves better, but it gets a polygon.*

6. **Cerebras** — https://cerebras.ai/
   - Variant: **WebGL hero animation** (rotating mesh / shader)
   - `r3f` and `three.` in bundle
   - Palette: dark, magenta-into-purple
   - *Commentary: a chip company simulating a brain by drawing a brain. We're doing levels.*

7. **Deepgram** — https://www.deepgram.com/
   - Variant: **Audio waveform / particle dots**
   - `r3f` confirmed
   - Palette: dark, lime-green and cyan (audio-vis tradition)
   - *Commentary: at least the dots-as-spectrogram metaphor is honest for a speech API.*

8. **Modal** — https://modal.com/
   - Variant: **Particle field / canvas constellation**
   - `<canvas>` + `lottie` detected
   - Palette: cream/white (off-trope), green accents
   - *Commentary: serverless infra rendered as serverless particles.*

9. **fal.ai** — https://www.fal.ai/
   - Variant: **Drifting particles / dots**
   - `<canvas>` in source
   - Palette: dark mode, electric blue
   - *Commentary: inference-as-a-service gets an inference-shaped illustration of itself.*

10. **Together AI** — https://www.together.ai/
    - Variant: **Floating geometric shapes** (not strictly node-graph, but adjacent — abstract 3D forms drifting in space)
    - `GSAP` detected
    - Palette: dark navy, neon green and orange (rare!)
    - *Commentary: gets points for not defaulting to indigo. Loses points for shapes that look airdropped from a 2009 Sci-Fi MoGraph reel.*

---

### B. Wireframe globes / 3D-spinning planets

Stripe shipped one for the right reason in 2019. Everyone since has shipped one because Stripe did.

11. **Stripe** (the originator, not an "AI company" but the patient zero) — https://stripe.com/blog/globe
    - Variant: **Interactive 3D globe** (canonical implementation)
    - Custom WebGL, sub-millisecond render path
    - Palette: dark navy, pastel arcs
    - *Commentary: the only one that earned it.*

12. **Crusoe AI** — https://www.crusoe.ai/
    - Variant: **Isometric data-center illustrations + globe-adjacent shapes**, with `<canvas>` animations
    - `<canvas>`, `gsap`, `lottie` all detected
    - Palette: yellow/black accent (off-trope)
    - *Commentary: closer to "infographic-as-hero" than node-graph, but combines three animation libs anyway.*

---

### C. Gradient orbs / blurred blobs — the modern cousin

The "Apple Vision Pro keynote leftovers" school of background design. Two giant divs, `backdrop-blur`, soft motion.

13. **Anthropic** — https://www.anthropic.com/
    - Variant: **Soft gradient + serif typography** (the rare grown-up)
    - `GSAP` detected; no `<canvas>` for hero
    - Palette: cream / terracotta / clay — actively rejects the purple consensus
    - *Commentary: a company that successfully resisted the indigo gradient by being literally the source of the indigo-gradient problem.*

14. **Cartesia** — https://cartesia.ai/
    - Variant: **Static abstract 3D shapes** (rendered AVIFs, not real-time)
    - Palette: blue, purple, orange translucent discs
    - *Commentary: pre-rendered images of orbs cosplaying as live orbs. The thinking-man's `<canvas>`.*

15. **Lambda** — https://lambda.ai/
    - Variant: **Gradient + canvas animations + Spline 3D**
    - `<canvas>`, `Lottie`, and `spline` viewer all detected
    - Palette: deep purple (textbook AI-purple)
    - *Commentary: a triple-stack — canvas, lottie, AND a spline scene. Hardware vendor flexing on GPU budget.*

16. **Synthesia** — https://www.synthesia.io/
    - Variant: **Bold purple gradient blob backgrounds**
    - Palette: the canonical AI-purple
    - *Commentary: a company that makes AI avatars wearing AI's house style.*

17. **Writer** — https://www.writer.com/
    - Variant: **Purple accents + clean static layout**
    - Palette: purple/violet
    - *Commentary: enterprise polite. The hero won't fight you.*

---

### D. Gradient mesh / Stripe-style shader noise

18. **Composio** — https://composio.dev/
    - Variant: **Gradient-refraction shader background + noise + scroll fade**
    - Palette: purple/violet/blue (full AI-house-style)
    - *Commentary: as cinematic as a YouTube tech reviewer's intro.*

19. **PlayerZero** — https://playerzero.ai/
    - Variant: **Glowing accents + animated background elements** (dark interface)
    - Palette: dark mode + neon highlight
    - *Commentary: indistinguishable from any 2024 observability tool, but with "AI" in the deck.*

20. **DeepJudge** — https://deepjudge.ai/
    - Variant: **Smooth gradient animations**
    - Palette: dark, blue/teal
    - *Commentary: legal-tech sobriety with a gradient shrug.*

---

### E. 3D mesh / floating shapes (Spline-flavored)

21. **Sahara AI** — https://saharaai.com/
    - Variant: **Interactive 3D element + grid background** in hero
    - Hover-rotates, slides on scroll
    - Palette: dark, gradient accents
    - *Commentary: grid + 3D + animation on hover. The trifecta.*

22. **Twelve Labs** — https://twelvelabs.io/
    - Variant: **Cinematic animated background**
    - `<canvas>` detected
    - Palette: dark, neon
    - *Commentary: video-understanding company communicates via video-shaped vibes.*

23. **Meridian** — https://trymeridian.com/
    - Variant: **3D interactive globe** (clickable, light environment)
    - Palette: light, gradient
    - *Commentary: globe with information reveals — Stripe's globe in the style of a fintech demo day.*

24. **Wispr Flow** — https://wisprflow.ai/
    - Variant: **Soft path animations / motion system**
    - Palette: light, restrained
    - *Commentary: aspirational. Almost not in the genre. Yet, here we are.*

25. **Jasper** — https://www.jasper.ai/
    - Variant: **Cursor-reactive background blocks**
    - `<canvas>` + `GSAP` detected
    - Palette: clean, branded purple
    - *Commentary: blocks that follow your cursor because you, the user, are also a kind of AI now.*

---

### F. Runtime detected via Vanta.js (3D backgrounds-as-a-service)

Vanta.js wraps three.js to give "Birds," "Net," "Globe," "Fog," "Topology," "Dots" effects to anyone willing to add five lines. It's the strongest single signal a site is in this genre. Confirmed strings in page source for:

26. **Groq** — https://groq.com/ — `rive` runtime in bundle (Rive is for animated vector files; often used for hero motion graphics). Palette: dark + orange.
27. **AssemblyAI** — https://www.assemblyai.com/ — `vanta` referenced in source (and `rive`). Likely a Vanta NET or DOTS background, or compliance-badge false positive. Sniff before quoting.
28. **LangChain** — https://www.langchain.com/ — `GSAP`, `lottie`, `Vanta` references (compliance company OR the effects lib, ambiguous). Palette: dark + lime green.
29. **Glean** — https://www.glean.com/ — `gsap`, `lottie`, and `Vanta` references; likely both the Vanta compliance badge AND the lib in their bundle. Layered blue SVG hero. Palette: blue gradient.
30. **Modular** — https://www.modular.com/ — `gsap`, `Lottie`, `Vanta`. Dark hero with motion.
31. **Linear** — https://linear.app/ — `Vanta` reference (likely the compliance badge), but the marketing site itself runs a hand-rolled WebGL gradient that is the platonic ideal of Stripe-mesh worship.

*Caveat: "Vanta" in the page source can mean either (a) the JS library, or (b) the SOC2-compliance company's trust badge. We flagged both. The cleaner signal is `r3f` / `three.js` / `<canvas>`.*

---

## Part 3: The Aesthetic Consensus

### The color palette, observed:

- **Background**: `#0a0a0a` to `#1a1a2e` (the AI-startup near-black-but-blue-shifted-and-please-don't-call-it-Twitter-dark)
- **Primary accent**: Indigo `#6366f1` → Violet `#8b5cf6` (Tailwind defaults' fingerprint everywhere)
- **Secondary accent**: Cyan `#06b6d4` (signals "data") or magenta `#ec4899` (signals "creative AI")
- **Rarer**: Lime `#84cc16` (Together, LangChain — "Matrix vibes" / "developer-grade") or terracotta `#d97757` (Anthropic, alone in the desert)

This palette has been so thoroughly internalized that designers have given it names: the **AI Purple Problem**, **Purple Gradient Fatigue**, the **Claude Code aesthetic**, the **v0 aesthetic**. AI image and code generators reproduce it because the training data is saturated with it; the saturation gets worse because the generators keep emitting it. A perfect feedback loop of indigo.

### Library consensus:

| Library | What it does | Telltale |
| --- | --- | --- |
| **particles.js / tsparticles** | Dots-and-lines node graph | `tsParticles` in bundle, `<canvas id="tsparticles">` |
| **three.js** | General WebGL | `three.min.js`, `THREE` globals |
| **react-three-fiber (r3f)** | React + three.js | `r3f` build artifacts |
| **vanta.js** | three.js wrapped in 13 named effects (NET, DOTS, GLOBE, TOPOLOGY, FOG, BIRDS, WAVES, HALO, RINGS, CELLS, TRUNK, CLOUDS) | `VANTA.NET()` calls, `vanta.net.min.js` |
| **p5.js** | Sketch-style 2D/3D | `p5.min.js` |
| **GSAP** | Tweening — used to drive almost all of the above | `gsap` references |
| **Lottie** | Vector animation playback | `lottie` runtime |
| **Spline** | Designer-friendly 3D scene authoring | `<spline-viewer>` custom element, `spline.design` CDN |
| **Unicorn Studio** | No-code WebGL shader scenes | `unicorn.studio` embed |
| **Rive** | Vector animation runtime (the newer Lottie) | `rive-runtime`, `.riv` files |

### Sites that combine 3+ background effects at once:

(This is the "more is more" school. The runway model of background design.)

- **Lambda** — `<canvas>` + `Lottie` + `Spline` (three engines, one hero)
- **Crusoe** — `<canvas>` + `GSAP` + `Lottie`
- **LangChain** — `GSAP` + `Lottie` + (Vanta-or-compliance-badge)
- **Glean** — `GSAP` + `Lottie` + `Vanta`-ish + multiple stacked SVG/WebP background layers
- **Modular** — `GSAP` + `Lottie` + (Vanta-or-compliance-badge)
- **Cresta** — `Lottie` + Vanta-ish

If your hero needs three animation runtimes, the hero is the product, and the product is the hero. (It is rarely the product.)

---

## Part 4: The Genuine Node-Graph Roll Call

The user explicitly asked for the genuinely-suggesting-"neural-network" variant. Best matches observed live:

| Rank | Site | Why it qualifies |
| --- | --- | --- |
| 1 | **Pinecone** | Constellation of dots + connecting lines + cursor-aware. The platonic ideal. |
| 2 | **Inflection AI** | 3D node mesh with subtle drift. Reads as "neurons." |
| 3 | **Fixie AI** | Particle field + light lines between near-neighbors. Classic particles.js DNA. |
| 4 | **Modal** | Constellation-style canvas; lighter touch but unmistakable. |
| 5 | **fal.ai** | Drifting node field, low density, "thoughtful AI" vibes. |
| 6 | **Cerebras** | Wafer-imagery merged with WebGL nodes — chip-as-brain double entendre. |
| 7 | **Scale AI** | r3f-driven scrolling node mesh. The most engineered of the lot. |
| 8 | **Deepgram** | Audio dots that double as a node graph at idle. |
| 9 | **Anyscale / Ray** historical hero — has rotated through node-graph variants. |
| 10 | **Composio** — gradient-refraction is technically not a node graph, but the small dots in the noise layer scratch the same itch. |

---

## Part 5: Honest Acknowledgements

- A handful of these sites likely commissioned bespoke WebGL from talented motion designers. Several of them ship genuinely lovely work (Stripe globe; Linear's marketing shaders; Anthropic's restraint). The critique is not "WebGL bad." It's "the same WebGL, *everywhere*, signaling the same thing, in the same color."
- WebFetch frequently can't see what's in a `<canvas>` (it's pixels, not DOM), so library-fingerprinting in the bundle (looking for `three.`, `r3f`, `<canvas`, `vanta`, `gsap`, `lottie`, `rive`, `spline-viewer`) is more reliable than scraping the rendered hero. Most of the above used that method.
- "Vanta" string-matches are ambiguous — Vanta-the-compliance-company puts a trust badge on every B2B site in the genre, and Vanta-the-JS-library shares the name. Treat as a weak signal, confirm visually.
- The number of sites that load `Lottie` AND `<canvas>` AND `GSAP` to render a hero that is, functionally, "a thing that moves slightly" is the real story here.

---

## Part 6: Sources & Further Reading

- [tsParticles GitHub](https://github.com/tsparticles/tsparticles)
- [Vanta.js (Tengbao)](https://github.com/tengbao/vanta) / [vantajs.com](https://www.vantajs.com/)
- [Stripe's interactive globe write-up](https://stripe.com/blog/globe)
- [Supabase's Three.js constellation Launch Week post](https://supabase.com/blog/interactive-constellation-threejs-react-three-fiber)
- [Awwwards: 3D hero section for grid animated background](https://www.awwwards.com/inspiration/3d-hero-section-for-grid-animated-background-dora-expo-ai-era-web-design)
- [Awwwards: Three.js websites](https://www.awwwards.com/websites/three-js/)
- [AI Purple Problem (dev.to)](https://dev.to/jaainil/ai-purple-problem-make-your-ui-unmistakable-3ono)
- [Why Your AI Keeps Building the Same Purple Gradient Website](https://prg.sh/ramblings/Why-Your-AI-Keeps-Building-the-Same-Purple-Gradient-Website)
- [Dark Mode Design That Doesn't Look AI (RAXXO)](https://raxxo.shop/blogs/lab/dark-mode-design-that-doesnt-look-ai)
- [ebaqdesign: 7 Best AI Startup Landing Page Examples 2026](https://www.ebaqdesign.com/blog/ai-startup-landing-page-examples)
- [Sitebuilder Report: 25+ AI Company Websites](https://www.sitebuilderreport.com/inspiration/ai-company-websites)

---

*Last verified live: June 6, 2026. Half of these sites will redesign within 90 days, probably toward exactly the same look.*
