import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

export type SourceGlyphTone = "neutral" | "trusted" | "warn" | "danger";
export type SourceGlyphSize = "sm" | "md";

export interface SourceGlyphProps extends ComponentPropsWithoutRef<"span"> {
  /** Fallback content when no `src` is provided. */
  children?: ReactNode;
  /** Citation index to show when no `src` is provided. */
  index?: number;
  /** Logo or source image URL. */
  src?: string;
  /** Accessible label for the source image. Empty by default for decoration. */
  alt?: string;
  /** Trust or risk state. */
  tone?: SourceGlyphTone;
  /** Visual size. */
  size?: SourceGlyphSize;
}

/**
 * A compact citation/source marker for logos, indexes, or trust state.
 */
export const SourceGlyph = forwardRef<HTMLSpanElement, SourceGlyphProps>(
  (
    {
      children,
      index,
      src,
      alt = "",
      tone = "neutral",
      size = "md",
      className,
      ...rest
    },
    ref,
  ) => (
    <span
      ref={ref}
      className={cn(
        "pui-source-glyph",
        `pui-source-glyph--${tone}`,
        `pui-source-glyph--${size}`,
        className,
      )}
      {...rest}
    >
      {src ? (
        <img className="pui-source-glyph__img" src={src} alt={alt} />
      ) : (
        (index ?? children)
      )}
    </span>
  ),
);
SourceGlyph.displayName = "SourceGlyph";
