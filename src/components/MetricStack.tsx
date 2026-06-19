import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

export interface MetricStackMetric {
  label: ReactNode;
  value: ReactNode;
  delta?: ReactNode;
  caption?: ReactNode;
  tone?: "neutral" | "good" | "warn" | "danger";
}

type MetricStackTone = NonNullable<MetricStackMetric["tone"]>;

export interface MetricStackProps
  extends Omit<ComponentPropsWithoutRef<"div">, "title"> {
  metrics?: MetricStackMetric[];
  title?: ReactNode;
  caption?: ReactNode;
  density?: "comfortable" | "compact";
}

interface MetricStackHeaderProps extends ComponentPropsWithoutRef<"div"> {}

interface MetricStackRowProps extends ComponentPropsWithoutRef<"div"> {
  tone?: MetricStackTone;
}

interface MetricStackLabelProps extends ComponentPropsWithoutRef<"dt"> {}
interface MetricStackValueProps extends ComponentPropsWithoutRef<"dd"> {}

interface MetricStackDeltaProps extends ComponentPropsWithoutRef<"span"> {
  tone?: MetricStackTone;
}

interface MetricStackCaptionProps extends ComponentPropsWithoutRef<"dd"> {}

const MetricStackRoot = forwardRef<HTMLDivElement, MetricStackProps>(
  (
    {
      metrics,
      title,
      caption,
      density = "comfortable",
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const hasHeader = title !== undefined || caption !== undefined;
    const hasMetrics = metrics !== undefined && metrics.length > 0;

    return (
      <div
        ref={ref}
        className={cn(
          "pui-metric-stack",
          `pui-metric-stack--${density}`,
          className,
        )}
        {...rest}
      >
        {children ?? (
          <>
            {hasHeader && (
              <Header>
                {title !== undefined && (
                  <h3 className="pui-metric-stack__title">{title}</h3>
                )}
                {caption !== undefined && (
                  <p className="pui-metric-stack__intro">{caption}</p>
                )}
              </Header>
            )}

            {hasMetrics && (
              <dl className="pui-metric-stack__list">
                {metrics.map((metric, index) => (
                  <Row key={index} tone={metric.tone}>
                    <Label>{metric.label}</Label>
                    <Value>
                      <span className="pui-metric-stack__value-text">
                        {metric.value}
                      </span>
                      {metric.delta !== undefined && (
                        <Delta tone={metric.tone}>{metric.delta}</Delta>
                      )}
                    </Value>
                    {metric.caption !== undefined && (
                      <Caption>{metric.caption}</Caption>
                    )}
                  </Row>
                ))}
              </dl>
            )}
          </>
        )}
      </div>
    );
  },
);
MetricStackRoot.displayName = "MetricStack";

const Header = forwardRef<HTMLDivElement, MetricStackHeaderProps>(
  ({ className, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn("pui-metric-stack__header", className)}
      {...rest}
    />
  ),
);
Header.displayName = "MetricStack.Header";

const Row = forwardRef<HTMLDivElement, MetricStackRowProps>(
  ({ tone = "neutral", className, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn(
        "pui-metric-stack__row",
        `pui-metric-stack__row--${tone}`,
        className,
      )}
      {...rest}
    />
  ),
);
Row.displayName = "MetricStack.Row";

const Label = forwardRef<HTMLElement, MetricStackLabelProps>(
  ({ className, ...rest }, ref) => (
    <dt
      ref={ref}
      className={cn("pui-metric-stack__label", className)}
      {...rest}
    />
  ),
);
Label.displayName = "MetricStack.Label";

const Value = forwardRef<HTMLElement, MetricStackValueProps>(
  ({ className, ...rest }, ref) => (
    <dd
      ref={ref}
      className={cn("pui-metric-stack__value", className)}
      {...rest}
    />
  ),
);
Value.displayName = "MetricStack.Value";

const Delta = forwardRef<HTMLSpanElement, MetricStackDeltaProps>(
  ({ tone = "neutral", className, ...rest }, ref) => (
    <span
      ref={ref}
      className={cn(
        "pui-metric-stack__delta",
        `pui-metric-stack__delta--${tone}`,
        className,
      )}
      {...rest}
    />
  ),
);
Delta.displayName = "MetricStack.Delta";

const Caption = forwardRef<HTMLElement, MetricStackCaptionProps>(
  ({ className, ...rest }, ref) => (
    <dd
      ref={ref}
      className={cn("pui-metric-stack__caption", className)}
      {...rest}
    />
  ),
);
Caption.displayName = "MetricStack.Caption";

export const MetricStack = Object.assign(MetricStackRoot, {
  Header,
  Row,
  Label,
  Value,
  Delta,
  Caption,
});
