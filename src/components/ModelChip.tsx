import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

export type ModelChipTier = "frontier" | "classic" | "local" | "custom";
export type ModelChipSize = "sm" | "md";

export interface ModelChipProps
  extends Omit<ComponentPropsWithoutRef<"span">, "children"> {
  /** Model name or label. */
  children: ReactNode;
  /** Provider label, e.g. OpenAI, Anthropic, local. */
  provider?: ReactNode;
  /** Positioning tone for the model. */
  tier?: ModelChipTier;
  /** Context window label, e.g. 128k. */
  context?: ReactNode;
  /** Compact or default density. */
  size?: ModelChipSize;
  /** Emphasize the currently selected model. */
  active?: boolean;
}

/**
 * Compact model badge for dense AI surfaces.
 */
export const ModelChip = forwardRef<HTMLSpanElement, ModelChipProps>(
  (
    {
      children,
      provider,
      tier = "frontier",
      context,
      size = "md",
      active,
      className,
      ...rest
    },
    ref,
  ) => (
    <span
      ref={ref}
      className={cn(
        "pui-model-chip",
        `pui-model-chip--${tier}`,
        `pui-model-chip--${size}`,
        active && "pui-model-chip--active",
        className,
      )}
      data-active={active ? "" : undefined}
      data-size={size}
      data-tier={tier}
      {...rest}
    >
      <span className="pui-model-chip__signal" aria-hidden="true" />
      {provider ? (
        <span className="pui-model-chip__provider">{provider}</span>
      ) : null}
      <span className="pui-model-chip__name">{children}</span>
      {context ? (
        <span className="pui-model-chip__context">{context}</span>
      ) : null}
    </span>
  ),
);
ModelChip.displayName = "ModelChip";
