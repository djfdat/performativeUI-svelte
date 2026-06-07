import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "../utils/cn";
import { Sparkle } from "./Sparkle";

export interface StickyBannerProps extends ComponentPropsWithoutRef<"div"> {
  /** Hide the leading sparkle. */
  hideSparkle?: boolean;
  /** Optional trailing accessory (e.g. an arrow). */
  trailing?: ReactNode;
}

/**
 * The sticky announcement bar. Houses funding news, beta tags, and
 * whatever else hasn't shipped yet.
 */
export const StickyBanner = forwardRef<HTMLDivElement, StickyBannerProps>(
  ({ hideSparkle, trailing, className, children, ...rest }, ref) => (
    <div ref={ref} className={cn("pui-sticky-banner", className)} {...rest}>
      {!hideSparkle && <Sparkle />}
      <span>{children}</span>
      {trailing}
    </div>
  ),
);
StickyBanner.displayName = "StickyBanner";
