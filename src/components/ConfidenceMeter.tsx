import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

export type ConfidenceMeterTone = "neutral" | "good" | "warn" | "danger";

export interface ConfidenceMeterProps extends ComponentPropsWithoutRef<"span"> {
  /** Confidence score from 0-100. Values outside the range are clamped. */
  value: number;
  /** Optional inline label before the meter. */
  label?: ReactNode;
  /** Visual tone for the meter fill. */
  tone?: ConfidenceMeterTone;
  /** Render as equal score segments instead of a continuous bar. */
  segments?: number;
  /** Show the clamped numeric value after the meter. */
  showValue?: boolean;
}

const clampConfidence = (value: number): number => {
  if (!Number.isFinite(value)) return 0;
  return Math.min(100, Math.max(0, Math.round(value)));
};

const clampSegments = (segments: number | undefined): number => {
  if (!segments || !Number.isFinite(segments)) return 0;
  return Math.min(12, Math.max(2, Math.round(segments)));
};

/**
 * Inline confidence bar for eval scores, retrieval quality, and agent certainty.
 */
export const ConfidenceMeter = forwardRef<
  HTMLSpanElement,
  ConfidenceMeterProps
>(
  (
    {
      value,
      label,
      tone = "neutral",
      segments,
      showValue,
      className,
      style,
      ...rest
    },
    ref,
  ) => {
    const clampedValue = clampConfidence(value);
    const segmentCount = clampSegments(segments);
    const filledSegments =
      segmentCount > 0 ? Math.ceil((clampedValue / 100) * segmentCount) : 0;
    const meterStyle = {
      "--pui-confidence-value": `${clampedValue}%`,
      ...style,
    } as CSSProperties;

    return (
      <span
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={clampedValue}
        aria-valuetext={`${clampedValue}% confidence`}
        className={cn(
          "pui-confidence-meter",
          `pui-confidence-meter--${tone}`,
          segmentCount > 0 && "pui-confidence-meter--segmented",
          className,
        )}
        style={meterStyle}
        data-value={clampedValue}
        {...rest}
      >
        {label && <span className="pui-confidence-meter__label">{label}</span>}
        <span className="pui-confidence-meter__track" aria-hidden="true">
          {segmentCount > 0 ? (
            Array.from({ length: segmentCount }, (_, index) => (
              <span
                key={index}
                className={cn(
                  "pui-confidence-meter__segment",
                  index < filledSegments &&
                    "pui-confidence-meter__segment--active",
                )}
              />
            ))
          ) : (
            <span className="pui-confidence-meter__fill" />
          )}
        </span>
        {showValue && (
          <span className="pui-confidence-meter__value">{clampedValue}%</span>
        )}
      </span>
    );
  },
);
ConfidenceMeter.displayName = "ConfidenceMeter";
