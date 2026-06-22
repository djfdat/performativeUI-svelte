import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

export type LatencyPingTone = "good" | "warn" | "danger" | "neutral";

export interface LatencyPingProps extends ComponentPropsWithoutRef<"span"> {
  /** Visible latency or readiness label, e.g. "18ms", "warm", or "queued". */
  label?: ReactNode;
  /** Color tone for the signal dot. */
  tone?: LatencyPingTone;
  /** Animate the signal ring. */
  pulse?: boolean;
  /** Accessible label used when no visible label is provided. */
  dotLabel?: string;
}

/**
 * A tiny latency/readiness indicator for compact status rows.
 */
export const LatencyPing = forwardRef<HTMLSpanElement, LatencyPingProps>(
  (
    {
      label,
      tone = "neutral",
      pulse = true,
      dotLabel,
      className,
      children,
      "aria-label": ariaLabel,
      ...rest
    },
    ref,
  ) => {
    const visibleLabel = label ?? children;
    const hasVisibleLabel =
      visibleLabel !== undefined &&
      visibleLabel !== null &&
      visibleLabel !== false &&
      visibleLabel !== "";

    return (
      <span
        ref={ref}
        aria-label={hasVisibleLabel ? undefined : (ariaLabel ?? dotLabel)}
        className={cn(
          "pui-latency-ping",
          `pui-latency-ping--${tone}`,
          pulse && "pui-latency-ping--pulse",
          className,
        )}
        {...rest}
      >
        <span
          className="pui-latency-ping__dot"
          aria-hidden={hasVisibleLabel ? "true" : undefined}
        />
        {hasVisibleLabel && (
          <span className="pui-latency-ping__label">{visibleLabel}</span>
        )}
      </span>
    );
  },
);
LatencyPing.displayName = "LatencyPing";
