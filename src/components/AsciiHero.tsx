import {
  forwardRef,
  useRef,
  type ComponentPropsWithoutRef,
} from "react";
import { cn } from "../utils/cn";
import {
  useAsciiField,
  type UseAsciiFieldOptions,
} from "../hooks/useAsciiField";

export interface AsciiHeroProps
  extends ComponentPropsWithoutRef<"div">,
    UseAsciiFieldOptions {
  /**
   * Visual treatment:
   *   - "panel" (default): bordered card with backdrop. Use as a hero.
   *   - "bare": no chrome. Use as a background layer (`position: absolute; inset: 0`).
   */
  variant?: "panel" | "bare";
}

/**
 * A canvas-rendered ASCII field that reacts to the cursor. Drop it into
 * a hero as a chrome'd panel, or absolutely-position the `bare` variant
 * behind your content to use it as a background.
 *
 *     <AsciiHero />                                       // panel
 *     <AsciiHero variant="bare" colorful baseOpacity={0.18}
 *       spotlightOpacity={0.9} spotlightRadius={10} />    // background
 *
 * For full control over markup, drop the component and call
 * `useAsciiField(canvasRef, hostRef, options)` against your own DOM.
 */
export const AsciiHero = forwardRef<HTMLDivElement, AsciiHeroProps>(
  (
    {
      variant = "panel",
      cols,
      rows,
      fontSize,
      fontFamily,
      charRamp,
      colorful,
      palette,
      baseOpacity,
      reactive,
      rippleStrength,
      rippleRadius,
      spotlightOpacity,
      spotlightRadius,
      frameMs,
      className,
      ...rest
    },
    ref,
  ) => {
    const hostRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useAsciiField(canvasRef, hostRef, {
      cols,
      rows,
      fontSize,
      fontFamily,
      charRamp,
      colorful,
      palette,
      baseOpacity,
      reactive,
      rippleStrength,
      rippleRadius,
      spotlightOpacity,
      spotlightRadius,
      frameMs,
    });

    const setRef = (el: HTMLDivElement | null) => {
      hostRef.current = el;
      if (typeof ref === "function") ref(el);
      else if (ref)
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
    };

    return (
      <div
        ref={setRef}
        className={cn(
          "pui-ascii",
          variant === "panel" && "pui-ascii--panel",
          className,
        )}
        aria-hidden="true"
        {...rest}
      >
        <canvas ref={canvasRef} />
      </div>
    );
  },
);
AsciiHero.displayName = "AsciiHero";
