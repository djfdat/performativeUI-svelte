import {
  AgentRunway,
  ConfidenceMeter,
  FomoFeed,
  LatencyPing,
  LaunchTimeline,
  MetricStack,
  ModelChip,
  ModelLeaderboard,
  PromptComposer,
  ScrollNarrative,
  SecurityTheater,
  SourceGlyph,
  TokenBadge,
} from "performative-ui";

export const componentContracts = [
  <LatencyPing label="18ms" tone="good" />,
  <LatencyPing tone="warn" dotLabel="Queued request" pulse={false} />,
  <ModelChip provider="OpenAI" tier="frontier" context="128k" size="sm" active>
    GPT-4.1
  </ModelChip>,
  <TokenBadge value="12.4k tokens" label="used" />,
  <TokenBadge value="$4.20" tone="danger" icon={false} compact />,
  <ConfidenceMeter value={82} label="Retrieval" />,
  <ConfidenceMeter
    value={141}
    tone="warn"
    segments={5}
    showValue
    aria-label="Agent confidence"
  />,
  <SourceGlyph index={2} tone="trusted" size="sm" />,
  <SourceGlyph src="https://cdn.jsdelivr.net/npm/simple-icons@11/icons/github.svg" alt="GitHub" />,
  <ModelLeaderboard
    title="Benchmark theater"
    models={[
      { name: "Synthetica Max", vendor: "internal", score: 98.7, delta: "+4.2", tone: "good" },
      { name: "Consensus 4.1", vendor: "frontier", score: 91.4 },
    ]}
  />,
  <AgentRunway
    title="Agent handoff"
    items={[
      { name: "Planner", role: "strategy", output: "Scoped the launch.", status: "done" },
      { name: "Builder", role: "execution", output: "Shipping the surface.", status: "running" },
    ]}
  />,
  <PromptComposer
    defaultValue="Rewrite this deck as traction."
    suggestions={[{ label: "Make it enterprise" }, { label: "Add urgency" }]}
    onSubmit={() => undefined}
  />,
  <FomoFeed
    title="Live demand"
    items={[
      { label: "Partner at Tier 1 joined", meta: "seed list", time: "now", tone: "good" },
      { label: "24 teams viewing", meta: "pricing", tone: "warn" },
    ]}
  />,
  <SecurityTheater
    title="SOC 2-ish posture"
    items={[
      { label: "Encryption", value: "AES-256", status: "verified" },
      { label: "Residency", value: "US/EU", status: "pending" },
    ]}
  />,
  <LaunchTimeline
    items={[
      { time: "09:00", title: "Waitlist opens", detail: "Synthetic demand warms up." },
      { time: "10:30", title: "Launch tweet", detail: "All hands like it." },
    ]}
  />,
  <MetricStack
    metrics={[
      { label: "Pipeline", value: "$12.4M", delta: "+38%" },
      { label: "CAC payback", value: "11d", delta: "-9d", tone: "good" },
    ]}
  />,
  <ScrollNarrative
    steps={[
      { kicker: "01", title: "Prompt", body: "Ask for the impossible." },
      { kicker: "02", title: "Polish", body: "Ship the believable." },
    ]}
  />,
  <SecurityTheater animated={false}>
    <SecurityTheater.Header
      eyebrow="Manual"
      title="Compound trust"
      summary="Compose the panel directly."
    />
    <SecurityTheater.Grid>
      <SecurityTheater.Item label="DPA" value="Ready" status="verified" />
    </SecurityTheater.Grid>
  </SecurityTheater>,
  <LaunchTimeline>
    <LaunchTimeline.Item state="active">
      <LaunchTimeline.Time dateTime="2026-06-19">09:00</LaunchTimeline.Time>
      <LaunchTimeline.Title>Launch</LaunchTimeline.Title>
      <LaunchTimeline.Detail>Publish the page.</LaunchTimeline.Detail>
      <LaunchTimeline.Meta>live</LaunchTimeline.Meta>
    </LaunchTimeline.Item>
  </LaunchTimeline>,
  <MetricStack density="compact">
    <MetricStack.Header>
      <h3>Compound metrics</h3>
    </MetricStack.Header>
    <dl className="pui-metric-stack__list">
      <MetricStack.Row tone="good">
        <MetricStack.Label>Pipeline</MetricStack.Label>
        <MetricStack.Value>
          $12.4M <MetricStack.Delta tone="good">+38%</MetricStack.Delta>
        </MetricStack.Value>
        <MetricStack.Caption>Weighted.</MetricStack.Caption>
      </MetricStack.Row>
    </dl>
  </MetricStack>,
  <ScrollNarrative>
    <ScrollNarrative.Stage>
      <ScrollNarrative.Step>
        <ScrollNarrative.Kicker>01</ScrollNarrative.Kicker>
        <ScrollNarrative.Title>Prompt</ScrollNarrative.Title>
        <ScrollNarrative.Body>Ask clearly.</ScrollNarrative.Body>
        <ScrollNarrative.Visual>Decorative preview</ScrollNarrative.Visual>
      </ScrollNarrative.Step>
    </ScrollNarrative.Stage>
  </ScrollNarrative>,
  <ModelLeaderboard>
    <ModelLeaderboard.Header>
      <h2>Compound leaderboard</h2>
    </ModelLeaderboard.Header>
    <ModelLeaderboard.List>
      <ModelLeaderboard.Row score={92}>
        <ModelLeaderboard.Name vendor="lab">Manual model</ModelLeaderboard.Name>
        <ModelLeaderboard.Bar />
        <ModelLeaderboard.Score delta="+2">92</ModelLeaderboard.Score>
      </ModelLeaderboard.Row>
    </ModelLeaderboard.List>
  </ModelLeaderboard>,
  <AgentRunway orientation="vertical">
    <AgentRunway.Track>
      <li>
        <AgentRunway.Item status="done">
          <AgentRunway.Status status="done" />
          <AgentRunway.Name>Manual agent</AgentRunway.Name>
          <AgentRunway.Role>review</AgentRunway.Role>
          <AgentRunway.Output>Approved.</AgentRunway.Output>
        </AgentRunway.Item>
      </li>
    </AgentRunway.Track>
  </AgentRunway>,
  <PromptComposer>
    <PromptComposer.Field defaultValue="Compose manually" />
    <PromptComposer.Suggestions>
      <PromptComposer.Suggestion>Polish</PromptComposer.Suggestion>
    </PromptComposer.Suggestions>
    <PromptComposer.Footer>
      <PromptComposer.Model>Manual model</PromptComposer.Model>
    </PromptComposer.Footer>
  </PromptComposer>,
  <FomoFeed variant="ticker">
    <FomoFeed.List variant="ticker">
      <FomoFeed.Item tone="good">
        <FomoFeed.Marker tone="good" />
        <FomoFeed.Label>Manual feed row</FomoFeed.Label>
        <FomoFeed.Meta>compound</FomoFeed.Meta>
        <FomoFeed.Time>now</FomoFeed.Time>
      </FomoFeed.Item>
    </FomoFeed.List>
  </FomoFeed>,
];
