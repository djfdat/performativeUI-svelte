import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";
import { useTypewriter, type UseTypewriterOptions } from "../hooks/useTypewriter";

export interface RotatorProps
  extends Omit<ComponentPropsWithoutRef<"span">, "prefix">,
    UseTypewriterOptions {
  /** Hide the blinking cursor. */
  hideCursor?: boolean;
  /**
   * Cursor character. If omitted, renders a CSS-drawn block that aligns
   * to the text baseline (terminal-style). Pass a string (e.g. "|") to
   * use a custom glyph instead.
   */
  cursor?: string;
  /** Custom renderer for the in-progress word. Compose your own treatment. */
  renderWord?: (word: string, index: number) => ReactNode;
}

/**
 * The typewriter rotator. Types each word, holds, deletes, advances, repeats.
 *
 *     <Rotator words={['doctors', 'lawyers', 'founders']} />
 *
 * For full control over the word display, pass `renderWord`. For full
 * control over everything, skip this and call `useTypewriter()` yourself.
 */
export const Rotator = forwardRef<HTMLSpanElement, RotatorProps>(
  (
    {
      words,
      typeMs,
      deleteMs,
      holdMs,
      loop,
      onWordReached,
      hideCursor,
      cursor,
      renderWord,
      className,
      ...rest
    },
    ref,
  ) => {
    const { word, index } = useTypewriter({
      words,
      typeMs,
      deleteMs,
      holdMs,
      loop,
      onWordReached,
    });
    return (
      <span ref={ref} className={cn("pui-rotator", className)} {...rest}>
        {renderWord ? renderWord(word, index) : word}
        {!hideCursor && (
          <span
            aria-hidden="true"
            className={cn(
              "pui-rotator__cursor",
              cursor === undefined && "pui-rotator__cursor--block",
              "pui-rotator__cursor--blink",
            )}
          >
            {cursor}
          </span>
        )}
      </span>
    );
  },
);
Rotator.displayName = "Rotator";
