import {
  LaunchTimeline,
  MetricStack,
  ScrollNarrative,
  SecurityTheater,
} from "performative-ui";

export const componentContracts = [
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
];
