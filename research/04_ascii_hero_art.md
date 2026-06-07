# 04. The ASCII Hero Art Industrial Complex

> "If the typography is monospace and the donut is rotating, it MUST be a serious engineering company."

A field guide to the cliché that has metastasized across every dev-tool, AI-infra, and "we read Hacker News, we promise" landing page since approximately 2023. The signal is loud and clear: we are not Salesforce. We do not have stock photography of a woman pointing at a whiteboard. We have an ASCII donut, and you will respect it.

Each entry includes a live URL, what the ASCII treatment actually is (because the answer is sometimes "they wish"), and the level of cursor servitude on display.

---

## The Canon: Verified Live ASCII Heroes

### 1. Matt Bierman — `bierman.io`
- **URL:** https://bierman.io
- **Treatment:** A "hover-sensitive ASCII-painted hero" — full hero, brutalist one-pager for a NYC frontend dev. ASCII characters react as your cursor passes over them. The site greets you with `tap to enter`, a `0 %` loading indicator, and giant block-letter "matt bierman" text. Built with WebGL + Three.js + ASCII 3D.
- **Interactivity:** Full mouse-reactive ASCII painting in the hero. Drag to interact.
- **Commentary:** The platonic ideal of the trope. CSS Design Awards nominee. If you Google "ASCII landing page portfolio," he is on page one for a reason.

### 2. Evervault — `evervault.com`
- **URL:** https://www.evervault.com
- **Treatment:** A 3D ASCII animation built with Three.js + React Three Fiber sits as an accent section (sadly not the actual hero — the hero is now boring payment cards). Originally celebrated on Awwwards as "3D Ascii Animation."
- **Interactivity:** Animated, rotating, with subtle mouse-tracking.
- **Commentary:** A payments-security startup hiding an ASCII flex deep in the page. The "we used to be cooler" energy is real.

### 3. OpenCode — `opencode.ai`
- **URL:** https://opencode.ai
- **Treatment:** The brand wordmark itself is rendered as **block-pixel ASCII art**, centered in a dark TUI mockup card. Entire page is Berkeley Mono, cream canvas, near-black ink, no shadows, no gradients. Uses `[+]`, `[-]`, `[x]` as bullets. The dark hero card mimics the terminal product itself.
- **Interactivity:** None. They literally have a "no hover states by policy" rule. Deeply unhorny.
- **Commentary:** The "the page itself reads like a manpage" school of design. SST's coding agent — the design doc on GitHub is documented in obsessive detail and reads like a religious text. Berkeley Mono is the new Helvetica for people who say "I just use neovim."

### 4. Ghostty — `ghostty.org`
- **URL:** https://ghostty.org
- **Treatment:** Hero features an animated ASCII ghost. Has spawned standalone implementations (`ghosttime`, `GhosttyFetch`) just because devs liked the animation so much they wanted to port it.
- **Interactivity:** Looping animation; typewriter-style ASCII reveal.
- **Commentary:** Mitchell Hashimoto's terminal emulator. When your friendly local cofounder of HashiCorp ships a terminal, the landing page WILL have an ASCII ghost. The law.

### 5. Supermemory — `supermemory.ai`
- **URL:** https://supermemory.ai (uses `dhravya/landing-effects` library)
- **Treatment:** Image-to-ASCII rendering with **mouse parallax, glitch bands, edge-inward reveal animation, and depth-based coloring**.
- **Interactivity:** Cursor parallax shifts ASCII layers; glitch bands flicker; characters reveal from the edges inward on load.
- **Commentary:** "Memory API for the AI era" + ASCII glitch hero = perfect storm. Built by Dhravya, who then open-sourced the library so every other YC W25 founder could reach for the same effect.

### 6. Terminal.shop — `terminal.shop`
- **URL:** https://terminal.shop
- **Treatment:** Brutalist text-only hero. Monospace everywhere. Folder-style URL pseudo-nav: `[terminal] [cron] [api] [readme] [faq]`. Primary CTA is literally `ssh terminal.shop` and they display an `ed25519` SSH host key fingerprint for verification.
- **Interactivity:** None — by design. You buy coffee by SSH-ing into their store.
- **Commentary:** Peak performative. Coffee delivered via terminal session. This is what happens when the design language eats the entire business model. Beautiful, insane, perfect.

### 7. ASCII Street View (Teehan + Lax) — `tllabs.io/asciistreetview`
- **URL:** http://tllabs.io/asciistreetview/
- **Treatment:** Real-time WebGL conversion of Google Street View panoramas into ASCII art. Awwwards SOTD. 8.5/10 creativity score.
- **Interactivity:** Pan and navigate Street View while everything renders as ASCII characters live.
- **Commentary:** The grandparent of the whole trend. 2013-vintage but predicted the future better than your VC's seed deck.

### 8. Crypton (Evrone) — `crypton-trading-bot` (now archived but historically significant)
- **URL:** Showcase: https://www.awwwards.com/sites/crypton-trading-bot (live site is offline; Evrone case study at https://evrone.com/crypton-layout)
- **Treatment:** ASCII face animation as the loading/idle state, integrated into a "first-person" identity system. ASCII-mimicry to give the ML trading bot a "personality."
- **Interactivity:** Animated ASCII face that morphs as part of the scrolling story.
- **Commentary:** When you can't tell whether the trading bot makes money but you can confirm it has a cool ASCII face, you have nailed the demographic.

### 9. Unseen Studio 2025 Wrapped — `2025.unseen.co`
- **URL:** https://2025.unseen.co/
- **Treatment:** ASCII liquid simulation effect built with WebGL as the interactive landing screen. Typography reacts to fluid dynamics.
- **Interactivity:** Real-time liquid-sim distortion of ASCII characters; cursor influences the flow.
- **Commentary:** A studio's "year in review" page that needed to outflex every other studio. Mission: accomplished. The Unicode characters know things about fluid dynamics they shouldn't.

### 10. More Than Equal — `morethanequal.com`
- **URL:** https://www.morethanequal.com/
- **Treatment:** ASCII animation with interactive mouse hover, made by How&How studio (showcased on Awwwards).
- **Interactivity:** Mouse hover triggers ASCII transitions in navigation and decorative panels.
- **Commentary:** F1 driver development for women, designed by a brutalist agency that read "Steal Like an Artist." ASCII as social-impact serif.

### 11. 0+X — `0x.se`
- **URL:** https://0x.se/
- **Treatment:** "ASCII Photo" hero — converts profile/branding photography to ASCII via WebGL. Awwwards-featured.
- **Interactivity:** Mouse-driven distortion, loading animation, scroll-triggered transitions.
- **Commentary:** A studio that named itself after a hex prefix. You knew exactly what the website was going to look like before you clicked.

### 12. Pencil — `pencil.dev`
- **URL:** https://www.pencil.dev
- **Treatment:** Webflow-built waitlist page with ASCII accents, JetBrains Mono + Geist, green-on-dark scheme. Tagged "ASCII" in the One Page Love directory.
- **Interactivity:** Long-scroll reveals, monospace typewriter effects.
- **Commentary:** It's a Cursor-extension to add "design mode" to Cursor. They had to look serious about typography. ASCII is the visa.

### 13. Tempo — `tempo.xyz`
- **URL:** https://tempo.xyz
- **Treatment:** ASCII accents throughout, Framer build. Famous for a **spacebar Easter egg** (press spacebar = wild things happen).
- **Interactivity:** Keyboard-triggered ASCII shenanigans; smooth Framer scroll-linked motion.
- **Commentary:** A fintech announcement page that hid a spacebar Easter egg. This is what happens when the designer has more energy than the product team.

### 14. Rysa — `rysa.app`
- **URL:** https://rysa.app/
- **Treatment:** "Unscrambling test" + ASCII video encoding throughout. Framer.
- **Interactivity:** Text scrambles on scroll; ASCII video plays in the hero.
- **Commentary:** Wardrobe digitization app. The ASCII video encoding for an outfit-management app is, frankly, an inspired non-sequitur.

### 15. Hyve.systems — `hyve.systems`
- **URL:** https://www.hyve.systems/
- **Treatment:** ASCII matrix elements + 3D depth, Webflow + Lottie. Self-described as "laboratory" aesthetic.
- **Interactivity:** Parallax scroll, typewriter effect, mouse parallax.
- **Commentary:** "We use AI to build systems" — six-word manifesto, eight scroll triggers, infinite ASCII. The AI-consulting playbook in one page.

### 16. Joel Mihavel — `joemihavel.com`
- **URL:** https://joemihavel.com/
- **Treatment:** ASCII as part of a whimsical Framer portfolio.
- **Interactivity:** Custom cursor, **elevator music starts playing as you browse**, scroll hint, keyboard support.
- **Commentary:** ASCII + on-page muzak is a war crime, and yet, I cannot look away.

### 17. NicholasOng — Webflow community ASCII showcase
- **URL:** Cloneable on https://webflow.com/made-in-webflow/ascii (see also `eloyb.design` — https://www.awwwards.com/sites/eloyb-design)
- **Treatment:** Cloneable Animated ASCII Webflow template — entire design system built on ASCII renderers.
- **Interactivity:** Loop animations + scroll reactivity.
- **Commentary:** Designers freebooting the trope at scale. The "I forked Matt Bierman's vibes" tier.

### 18. Davor G. Zelic Portfolio — `davorgzelic.com`
- **URL:** https://www.davorgzelic.com/
- **Treatment:** ASCII art animation in the hero (Awwwards-featured).
- **Interactivity:** Looping animation; some hover treatment.
- **Commentary:** Portfolios where the home-page is a single ASCII animation are the new "I take black-and-white photos." Status signal.

### 19. Reline Studio — `reline.ch`
- **URL:** https://www.reline.ch/
- **Treatment:** 3D ASCII CTA element.
- **Interactivity:** ASCII characters animate as you approach the CTA button.
- **Commentary:** Swiss design agency. Of course they put the ASCII on the CTA. Of course.

### 20. Kostya Farber Portfolio — `kostyafarber.com`
- **URL:** https://kostyafarber.com/
- **Treatment:** ASCII loading animation as page-load chrome.
- **Interactivity:** Animated loading sequence in characters.
- **Commentary:** When the loading state is the brand. Personal portfolio energy at maximum.

### 21. Crypton.trading (legacy mention) — `+_+ crypton.trading`
- **URL:** https://www.awwwards.com/sites/crypton-trading-bot
- **Treatment:** "Simple ASCII face animation" — the `+_+` is literally the brand's face.
- **Commentary:** Listed twice because they made it the *logo.* The face IS the brand IS the ASCII.

### 22. Asciicker — `asciicker.com`
- **URL:** https://asciicker.com/x13/
- **Treatment:** Not a landing page so much as a full browser-based 3D MMO rendered entirely in colored ASCII. The "landing" IS the game.
- **Interactivity:** WASD to walk around an ASCII world. Spacebar jumps. Q/E rotate camera.
- **Commentary:** Built in C++ → WebAssembly with custom WebGL ASCII renderer. The most committed-to-the-bit project in existence. Made by one developer (Gumix) since 2017. Anything less ambitious is amateur hour after this.

### 23. Vercel Workflow — `vercel.com/workflow`
- **URL:** https://vercel.com/workflow
- **Treatment:** Hero has a "space" background that **dynamically swaps to ASCII art when you open browser devtools**. An Easter egg for the only people who matter (developers inspecting your page).
- **Interactivity:** Triggered by F12.
- **Commentary:** The most Vercel thing Vercel has ever done. The page knows when you're looking. Bonus points for the "for humans / for agents" tab toggle.

### 24. The Monospace Web — `owickstrom.github.io/the-monospace-web`
- **URL:** https://owickstrom.github.io/the-monospace-web/
- **Treatment:** Not a startup, but the **manifesto / proof-of-concept** that triggered half the trend on Hacker News. Uses box-drawing characters (`╭`, `╮`, `╰`, `╯`, `─`, `│`, `├`, `┤`, `┬`, `┴`, `┼`) for diagrams and `▀` for chart axes, all in JetBrains Mono.
- **Interactivity:** None (intentionally). Responsive, shrinks in character-sized steps.
- **Commentary:** Oskar Wickström's design exploration that gave every dev with a personal site cover to go full monospace. Front-page HN multiple times. The aesthetic root document.

---

## Honorable Mentions / Adjacent

### Box.ascii.dev — `box.ascii.dev`
- **URL:** https://box.ascii.dev/
- AI agent sandbox with terminal-aesthetic hero, plain `+---+` box drawing characters, `curl ... | sh` install command as the primary CTA. The domain has "ascii" in it. C'mon.

### isladjan ASCII Lab — `isladjan.com/lab/ascii1`
- **URL:** https://isladjan.com/lab/ascii1/ (and `/lab/ascii2/`)
- The open-source Three.js + postprocessing ASCII effect that powers half the heroes on this list. GitHub: https://github.com/isladjan/ascii

### Skiper UI ASCII Simulation — `skiper-ui.com/v1/skiper14`
- A component library demo: liquid ASCII simulation for plug-and-play hero use.

### Aceternity UI ASCII Art Component — `ui.aceternity.com/components/ascii-art`
- The mass-market component that lets any AI startup acquire ASCII art via `npm install`. Half of the landing pages you saw last week ship this verbatim.

### Framer Animated ASCII Text — `framer.com/marketplace/components/animated-ascii-text`
- Premium typography component. Framer's marketplace knows what its customers want.

### Aceternity Webcam Pixel Grid — `ui.aceternity.com/components/webcam-pixel-grid`
- Real-time webcam → pixel grid → "look how retro we are" hero accent.

### v0.app Cyberpunk Terminal Landing — `v0.app/templates/cyberpunk-terminal-landing-page-8JxLcDfLPsc`
- Vercel's own AI builder ships an ASCII/Matrix template. The call is coming from inside the house.

---

## The Library / Tooling Stack (The Wizard Behind the Curtain)

Almost every ASCII hero you encounter is built on one of these:

| Library | What it does | Telltale Sign |
|---|---|---|
| **`drei`'s `<AsciiRenderer>`** (pmnd.rs) | React Three Fiber abstraction over Three.js `AsciiEffect`. Drops a DOM layer of ASCII over the canvas. | If the hero is laggy and the characters jitter slightly on resize. |
| **Three.js `AsciiEffect`** | The OG since ~2012. The Three.js examples team admits it's "too slow for production." | Used anyway. |
| **`isladjan/ascii`** (GitHub) | GPU-shader ASCII for Three.js + postprocessing — fast, customizable charset, the modern choice. | Powers `bierman.io` and many copycats. |
| **`dhravya/landing-effects`** | Canvas-based ASCII renderer with mouse parallax + glitch bands + edge-inward reveal + depth coloring. | Powers `supermemory.ai`. The "I want it to look like Supermemory" library. |
| **`p5.asciify` → `textmode.js`** | p5.js real-time ASCII conversion for WebGL sketches. | Creative-coding portfolios, less startup-y. |
| **`emilwidlund/ASCII`** | THREE.js ASCII Effect on the GPU (early GPU implementation). | The CodePen ancestor. |
| **`asciify.art` / `asciify.org` / `asciify.sister.software`** | Browser-side libraries; the latter attaches to any canvas. | Webcam → ASCII demos. |
| **`figlet.js`** | Text → big ASCII letters. Not interactive but powers every "wordmark as ASCII" treatment. | If the headline looks like a manpage `--help`. |
| **GLSL custom shader + Drei `EffectComposer`** | The bespoke option. The "we hired the cool agency" tier. | Reline, Unseen Studio, Evervault. |
| **Conway's Game of Life background** | The reverent grandparent of ASCII-as-background. | Less common as hero, common as 404 page or footer. (See `conway-generator.specy.app` for the BYO version.) |

---

## The Donut.c Homage Pattern

`donut.c` is **Andy Sloane's 2006 obfuscated C program** that renders a rotating 3D ASCII donut in a terminal — source code itself shaped like a donut. It became the spiritual ur-text of the "ASCII is for serious engineers" aesthetic.

- **Original:** https://www.a1k0n.net/2011/07/20/donut-math.html
- **Andy Sloane took it to silicon in 2025:** https://www.a1k0n.net/2025/01/10/tiny-tapeout-donut.html — donut.c on actual fabbed silicon ASIC. The man went there.
- **Web ports / homages:** https://www.shadertoy.com/view/NtcGRr ("Rotating ASCII donut"), https://www.kanishksachdev.com/blog/spinning-donut, three.js + ASCII effect spinning a torus is so common it's a starter-template move (`https://threejs.org/examples/webgl_effects_ascii.html`).

If the hero is a rotating ASCII torus/sphere/cube and the founder is < 30, this is the citation in their soul. They will tell you about `donut.c` unprompted within 90 seconds of meeting them.

---

## Conway's Game of Life Embedded in Landing Pages

The other classic CS homage. Less common than donut.c as a hero, more common as:
- A footer Easter egg (you can click cells to seed life)
- A "404 page" treatment
- A loading state
- A background pattern when devtools are open (see Vercel Workflow above)

Tools and references:
- **Conway Generator (web):** https://conway-generator.specy.app/
- **Maxim Maeder JS implementation:** https://maximmaeder.com/conways-game-of-life-with-javascript/
- The pattern: it signals "I know about computability and emergent systems" without anyone having to read the about page.

---

## The Trope, Decoded

What signal is being sent? Decoded by archetype:

| What the page shows | What they're saying |
|---|---|
| ASCII rotating donut | "I read Hacker News and have opinions on `nvim` keybindings." |
| Hover-distorting ASCII portrait | "I'm a frontend dev, please notice my brutalist sensibilities." |
| Webcam → ASCII feed | "We are creative-coding agency tier, not SaaS tier." |
| Block-character wordmark (Berkeley Mono) | "We're an AI/coding agent. Berkeley Mono license: paid in full." |
| Box-drawing `┌─┐ │ │ └─┘` decorations | "The page is a manpage. The manpage is the page." |
| Liquid/ripple ASCII shader on cursor | "We had budget for a creative dev." |
| ASCII Game of Life in the footer | "I have a CS degree but I'm cool about it." |
| `ssh terminal.shop` as the CTA | "We have transcended SaaS." |
| Spacebar Easter egg that explodes ASCII | "I will hide a Konami code in the next sprint, please clap." |
| ASCII swaps in when devtools open | "We see you, browser-inspecting nerd. Welcome home." |
| Scroll-triggered ASCII narrative | "Vue.js and GSAP got involved. Marketing approved." |

---

## TL;DR Cheat Sheet (For Your Founder Friend Building an AI Startup)

To telegraph "for hackers, by hackers" via the landing page, in approximate descending order of cost/effort:

1. **Berkeley Mono + black-on-cream** — the OpenCode school. Cheapest, most legible signal.
2. **`<AsciiRenderer>` from `@react-three/drei`** wrapping a `.glb` torus — 20 lines of code, looks like you have a designer.
3. **`dhravya/landing-effects` ASCII renderer** on a hero image of your team/product — drop-in, viral on X.
4. **Custom GLSL ASCII shader on a rotating low-poly mesh** with mouse parallax and CRT scanlines — the `nextjs-ascii-hero` boilerplate by Egor Shesternin (https://nextjs-ascii-hero.vercel.app/).
5. **Real-time ASCII webcam feed** as the about-us section.
6. **An Easter egg** that swaps background to ASCII art when devtools open.
7. **Make the homepage itself an SSH endpoint.** You have now done the bit better than anyone else.

The room is full. The donut is still rotating. There is no escape.

---

## Sources & Primary References

- Awwwards ASCII inspiration tag: https://www.awwwards.com/inspiration/?keyword=ascii
- Awwwards SOTDs: https://www.awwwards.com/sites/ascii-street-view, https://www.awwwards.com/sites/crypton-trading-bot, https://www.awwwards.com/sites/matt-bierman-portfolio
- One Page Love ASCII tag: https://onepagelove.com/tag/ascii
- Webflow ASCII showcases: https://webflow.com/made-in-webflow/ascii
- Codrops "Efecto" (ASCII + dithering shader tutorial): https://tympanus.net/codrops/2026/01/04/efecto-building-real-time-ascii-and-dithering-effects-with-webgl-shaders/
- Egor Shesternin's tutorial + boilerplate: https://medium.com/@egorshesternin/how-to-add-a-cool-ascii-animated-hero-section-to-your-website-step-by-step-guide-d4070e45e2c8 + https://nextjs-ascii-hero.vercel.app/
- Alex Harri, "ASCII characters are not pixels": https://alexharri.com/blog/ascii-rendering
- a1k0n donut.c: https://www.a1k0n.net/2011/07/20/donut-math.html and https://www.a1k0n.net/2025/01/10/tiny-tapeout-donut.html
- Oskar Wickström, The Monospace Web: https://owickstrom.github.io/the-monospace-web/ + writeup https://wickstrom.tech/2024-09-26-how-i-built-the-monospace-web.html
- EZASCII "The Comeback of Console Aesthetics": https://ezascii.com/blog/the-comeback-of-console-aesthetics-and-ascii-art
- OpenCode design doc: https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/opencode.ai/DESIGN.md
- `isladjan/ascii`: https://github.com/isladjan/ascii
- `dhravya/landing-effects`: https://github.com/dhravya/landing-effects
- Drei AsciiRenderer: http://drei.docs.pmnd.rs/abstractions/ascii-renderer
- Three.js ASCII effect example: https://threejs.org/examples/webgl_effects_ascii.html
