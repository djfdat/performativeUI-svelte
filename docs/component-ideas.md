# Component Idea Backlog

Use this as a checkbox backlog for future `performative-ui` additions. When an
item moves into implementation, follow the root `AGENTS.md` workflow: add the
component, styles, export, catalog entry, docs examples, props, and verification.

## Atoms

- [x] `LatencyPing`: tiny animated latency/readiness indicator for labels like
  "18ms", "warm", or "queued"; useful inside pills, leaderboards, and status
  rows.
- [x] `ModelChip`: compact model badge with provider, tier, context window, and
  tone variants for frontier/classic/local positioning.
- [x] `TokenBadge`: token, credit, or cost capsule for prompt surfaces and usage
  meters.
- [x] `ConfidenceMeter`: inline confidence bar or segmented score indicator for
  evals, retrieval quality, and agent certainty.
- [x] `SourceGlyph`: small citation/source marker that can render a logo, index
  number, or trust state.

## Primitives

- [ ] `ModelSelect`: polished model picker with provider grouping, cost labels,
  and disabled states for unavailable models.
- [ ] `ContextPillInput`: input for attached files, URLs, repos, and memory
  chips with removable tokens.
- [ ] `CommandMenu`: compact command palette for AI app actions, with grouped
  commands and keyboard-first navigation.
- [ ] `SegmentedPromptMode`: mode switcher for build, edit, explain, search, and
  agent workflows.
- [ ] `InlineEditField`: single-line editable text with generating, saved, and
  error states.

## Banners

- [ ] `BetaAccessRibbon`: sticky launch/access banner with seats remaining,
  invite state, and CTA slot.
- [ ] `IncidentNotice`: restrained status banner for degraded models, delayed
  queues, or maintenance windows.
- [ ] `UsageLimitBanner`: quota or credit warning banner with upgrade and dismiss
  actions.

## Heroes

- [ ] `AgentHero`: hero with staged agent handoffs, live task labels, and a
  prompt CTA.
- [ ] `BenchmarkHero`: first-viewport benchmark/ranking claim with animated
  score bars and source labels.
- [ ] `RepoScanHero`: codebase scanning hero that combines file paths, progress,
  and risk output.
- [ ] `VoiceWaveHero`: AI voice product hero with transcript, waveform, and call
  state.
- [ ] `MemoryMapHero`: personal/company memory surface with clustered facts and
  recall trails.

## Backgrounds

- [ ] `VectorFieldBackground`: slow-moving directional vector field for agent or
  retrieval pages.
- [ ] `InferenceGrid`: ambient grid that pulses along rows/columns like batches
  moving through inference.
- [ ] `CitationConstellation`: connected source nodes that brighten around
  citations or hover targets.
- [ ] `TerminalRain`: sparse terminal/log field for developer-tool pages without
  overpowering foreground content.

## Surfaces

- [ ] `EvalMatrix`: matrix for comparing models, prompts, datasets, or variants
  across scoring dimensions.
- [ ] `TraceInspector`: compact agent trace panel with tool calls, timing, and
  expandable observations.
- [ ] `RetrievalPanel`: source retrieval surface with query, ranked chunks,
  citations, and confidence.
- [ ] `RunReceipt`: post-generation receipt with tokens, model, latency, cost,
  cache hits, and audit metadata.
- [ ] `WorkflowBoard`: small kanban/timeline hybrid for autonomous task states.
- [ ] `RiskRegister`: security/compliance checklist surface with severity,
  owner, and status.

## Conversation

- [ ] `ThreadPreview`: stacked conversation preview for AI support, research, or
  agent histories.
- [ ] `ToolCallBubble`: chat row for tool invocation, arguments, progress, and
  result state.
- [ ] `ReasoningStepper`: visible reasoning/progress steps without exposing
  private chain-of-thought copy.
- [ ] `CitationMessage`: answer bubble with inline source chips and expandable
  evidence.
- [ ] `VoiceTurn`: transcript row with speaker, waveform, latency, and barge-in
  states.

## Social Proof

- [ ] `UsageTicker`: live usage ticker for signups, prompts, builds, or launches
  with tone-controlled rows.
- [ ] `CustomerProofStack`: stacked proof quotes, logos, and role labels in a
  dense landing-page section.
- [ ] `BenchmarkBadgeWall`: grid of benchmark badges, eval names, and score
  deltas.
- [ ] `WaitlistPressureMeter`: tasteful scarcity meter for seats, invites, and
  launch capacity.
- [ ] `InvestorSignalStrip`: compact strip for round status, ARR, growth, and
  logo proof.

## Pricing & Conversion

- [ ] `CreditEstimator`: calculator-like surface for tokens, seats, usage, and
  expected monthly cost.
- [ ] `PlanComparisonTable`: dense pricing comparison with AI-specific quotas,
  limits, and model access.
- [ ] `SeatStepper`: quantity control with per-seat price math and annual toggle.
- [ ] `UpgradeNudge`: small conversion block for locked model, quota, or feature
  states.
- [ ] `ROIProof`: before/after metric block for time saved, tickets deflected,
  or pipeline created.
