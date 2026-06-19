import {
  forwardRef,
  useId,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

export interface ScrollNarrativeStep {
  kicker?: ReactNode;
  title: ReactNode;
  body?: ReactNode;
  visual?: ReactNode;
}

export interface ScrollNarrativeProps
  extends Omit<ComponentPropsWithoutRef<"section">, "title"> {
  steps?: ScrollNarrativeStep[];
  title?: ReactNode;
  intro?: ReactNode;
  align?: "left" | "right";
}

export interface ScrollNarrativeStageProps
  extends ComponentPropsWithoutRef<"div"> {}

export interface ScrollNarrativeStepProps
  extends ComponentPropsWithoutRef<"article"> {}

export interface ScrollNarrativeKickerProps
  extends ComponentPropsWithoutRef<"span"> {}

export interface ScrollNarrativeTitleProps
  extends ComponentPropsWithoutRef<"h3"> {
  as?: "h2" | "h3" | "h4";
}

export interface ScrollNarrativeBodyProps
  extends ComponentPropsWithoutRef<"p"> {}

export interface ScrollNarrativeVisualProps
  extends ComponentPropsWithoutRef<"div"> {}

const hasNode = (node: ReactNode): boolean =>
  node !== null && node !== undefined && node !== false;

const Stage = forwardRef<HTMLDivElement, ScrollNarrativeStageProps>(
  ({ className, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn("pui-scroll-narrative__stage", className)}
      {...rest}
    />
  ),
);
Stage.displayName = "ScrollNarrative.Stage";

const Step = forwardRef<HTMLElement, ScrollNarrativeStepProps>(
  ({ className, ...rest }, ref) => (
    <article
      ref={ref}
      className={cn("pui-scroll-narrative__step", className)}
      {...rest}
    />
  ),
);
Step.displayName = "ScrollNarrative.Step";

const Kicker = forwardRef<HTMLSpanElement, ScrollNarrativeKickerProps>(
  ({ className, ...rest }, ref) => (
    <span
      ref={ref}
      className={cn("pui-scroll-narrative__kicker", className)}
      {...rest}
    />
  ),
);
Kicker.displayName = "ScrollNarrative.Kicker";

const Title = forwardRef<HTMLHeadingElement, ScrollNarrativeTitleProps>(
  ({ as: Tag = "h3", className, ...rest }, ref) => (
    <Tag
      ref={ref}
      className={cn("pui-scroll-narrative__step-title", className)}
      {...rest}
    />
  ),
);
Title.displayName = "ScrollNarrative.Title";

const Body = forwardRef<HTMLParagraphElement, ScrollNarrativeBodyProps>(
  ({ className, ...rest }, ref) => (
    <p
      ref={ref}
      className={cn("pui-scroll-narrative__body", className)}
      {...rest}
    />
  ),
);
Body.displayName = "ScrollNarrative.Body";

const Visual = forwardRef<HTMLDivElement, ScrollNarrativeVisualProps>(
  ({ className, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn("pui-scroll-narrative__visual", className)}
      {...rest}
    />
  ),
);
Visual.displayName = "ScrollNarrative.Visual";

const Root = forwardRef<HTMLElement, ScrollNarrativeProps>(
  (
    {
      steps = [],
      title,
      intro,
      align = "left",
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const baseId = useId();
    const hasHeader = hasNode(title) || hasNode(intro);
    const stepTitleTag = hasNode(title) ? "h3" : "h2";

    return (
      <section
        ref={ref}
        className={cn(
          "pui-scroll-narrative",
          `pui-scroll-narrative--align-${align}`,
          className,
        )}
        {...rest}
      >
        {children ?? (
          <>
            {hasHeader ? (
              <header className="pui-scroll-narrative__header">
                {hasNode(title) ? (
                  <h2 className="pui-scroll-narrative__heading">{title}</h2>
                ) : null}
                {hasNode(intro) ? (
                  <p className="pui-scroll-narrative__intro">{intro}</p>
                ) : null}
              </header>
            ) : null}

            <Stage>
              <ol className="pui-scroll-narrative__steps">
                {steps.map((step, index) => {
                  const titleId = `${baseId}-step-${index + 1}`;

                  return (
                    <li
                      className="pui-scroll-narrative__step-item"
                      key={index}
                    >
                      <Step aria-labelledby={titleId}>
                        {hasNode(step.kicker) ? (
                          <Kicker>{step.kicker}</Kicker>
                        ) : null}
                        <Title as={stepTitleTag} id={titleId}>
                          {step.title}
                        </Title>
                        {hasNode(step.body) ? <Body>{step.body}</Body> : null}
                      </Step>
                    </li>
                  );
                })}
              </ol>

              <div
                className="pui-scroll-narrative__visual-rail"
                aria-hidden="true"
              >
                {steps.map((step, index) => {
                  const hasVisual = hasNode(step.visual);

                  return (
                    <Visual
                      key={index}
                      className={
                        hasVisual
                          ? undefined
                          : "pui-scroll-narrative__visual--empty"
                      }
                    >
                      {step.visual}
                    </Visual>
                  );
                })}
              </div>
            </Stage>
          </>
        )}
      </section>
    );
  },
);
Root.displayName = "ScrollNarrative";

export const ScrollNarrative = Object.assign(Root, {
  Stage,
  Step,
  Kicker,
  Title,
  Body,
  Visual,
});
