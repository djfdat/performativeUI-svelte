import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

export type TokenBadgeTone = "neutral" | "good" | "warn" | "danger";

export interface TokenBadgeProps extends ComponentPropsWithoutRef<"span"> {
  /** Primary token, credit, or cost value. */
  value: ReactNode;
  /** Optional supporting label, e.g. "est." or "credits". */
  label?: ReactNode;
  /** Visual tone for the capsule. */
  tone?: TokenBadgeTone;
  /** Leading icon. False removes it. */
  icon?: ReactNode | false;
  /** Tighten spacing for dense prompt chrome. */
  compact?: boolean;
}

/**
 * Tiny cost/readout capsule for prompt surfaces, token meters, and credit UI.
 */
export const TokenBadge = forwardRef<HTMLSpanElement, TokenBadgeProps>(
  (
    {
      value,
      label,
      tone = "neutral",
      icon,
      compact,
      className,
      ...rest
    },
    ref,
  ) => (
    <span
      ref={ref}
      className={cn(
        "pui-token-badge",
        `pui-token-badge--${tone}`,
        compact && "pui-token-badge--compact",
        icon === false && "pui-token-badge--no-icon",
        className,
      )}
      {...rest}
    >
      {icon !== false && (
        <span className="pui-token-badge__icon">
          {icon ?? <span className="pui-token-badge__glyph" aria-hidden="true" />}
        </span>
      )}
      <span className="pui-token-badge__value">{value}</span>
      {label && <span className="pui-token-badge__label">{label}</span>}
    </span>
  ),
);
TokenBadge.displayName = "TokenBadge";
