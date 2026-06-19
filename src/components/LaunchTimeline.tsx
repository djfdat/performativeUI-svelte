import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

export interface LaunchTimelineItem {
  time?: ReactNode;
  title: ReactNode;
  detail?: ReactNode;
  state?: "done" | "active" | "queued";
  meta?: ReactNode;
}

export interface LaunchTimelineProps extends ComponentPropsWithoutRef<"ol"> {
  items?: LaunchTimelineItem[];
  current?: number;
  animated?: boolean;
}

interface LaunchTimelineItemProps extends ComponentPropsWithoutRef<"li"> {
  state?: LaunchTimelineItem["state"];
}

interface LaunchTimelineTimeProps extends ComponentPropsWithoutRef<"time"> {}
interface LaunchTimelineTitleProps extends ComponentPropsWithoutRef<"h3"> {}
interface LaunchTimelineDetailProps extends ComponentPropsWithoutRef<"p"> {}
interface LaunchTimelineMetaProps extends ComponentPropsWithoutRef<"span"> {}

const hasContent = (value: ReactNode) =>
  value !== null && value !== undefined && value !== false;

const resolveItemState = (
  state: LaunchTimelineItem["state"],
  index: number,
  current: number,
): NonNullable<LaunchTimelineItem["state"]> => {
  if (state) return state;
  if (index < current) return "done";
  if (index === current) return "active";
  return "queued";
};

const LaunchTimelineRoot = forwardRef<HTMLOListElement, LaunchTimelineProps>(
  (
    { items, current = 0, animated = true, className, children, ...rest },
    ref,
  ) => (
    <ol
      ref={ref}
      className={cn(
        "pui-launch",
        animated && "pui-launch--animated",
        className,
      )}
      {...rest}
    >
      {children ??
        items?.map((item, index) => {
          const state = resolveItemState(item.state, index, current);

          return (
            <Item key={index} state={state}>
              <span className="pui-launch__marker" aria-hidden="true" />
              <div className="pui-launch__content">
                {(hasContent(item.time) || hasContent(item.meta)) && (
                  <div className="pui-launch__header">
                    {hasContent(item.time) && <Time>{item.time}</Time>}
                    {hasContent(item.meta) && <Meta>{item.meta}</Meta>}
                  </div>
                )}
                <Title>{item.title}</Title>
                {hasContent(item.detail) && <Detail>{item.detail}</Detail>}
              </div>
            </Item>
          );
        })}
    </ol>
  ),
);
LaunchTimelineRoot.displayName = "LaunchTimeline";

const Item = forwardRef<HTMLLIElement, LaunchTimelineItemProps>(
  ({ state = "queued", className, children, "aria-current": ariaCurrent, ...rest }, ref) => (
    <li
      ref={ref}
      data-state={state}
      aria-current={state === "active" ? "step" : ariaCurrent}
      className={cn(
        "pui-launch__item",
        state === "done" && "pui-launch__item--done",
        state === "active" && "pui-launch__item--active",
        state === "queued" && "pui-launch__item--queued",
        className,
      )}
      {...rest}
    >
      {children}
    </li>
  ),
);
Item.displayName = "LaunchTimeline.Item";

const Time = forwardRef<HTMLTimeElement, LaunchTimelineTimeProps>(
  ({ className, ...rest }, ref) => (
    <time ref={ref} className={cn("pui-launch__time", className)} {...rest} />
  ),
);
Time.displayName = "LaunchTimeline.Time";

const Title = forwardRef<HTMLHeadingElement, LaunchTimelineTitleProps>(
  ({ className, ...rest }, ref) => (
    <h3 ref={ref} className={cn("pui-launch__title", className)} {...rest} />
  ),
);
Title.displayName = "LaunchTimeline.Title";

const Detail = forwardRef<HTMLParagraphElement, LaunchTimelineDetailProps>(
  ({ className, ...rest }, ref) => (
    <p ref={ref} className={cn("pui-launch__detail", className)} {...rest} />
  ),
);
Detail.displayName = "LaunchTimeline.Detail";

const Meta = forwardRef<HTMLSpanElement, LaunchTimelineMetaProps>(
  ({ className, ...rest }, ref) => (
    <span ref={ref} className={cn("pui-launch__meta", className)} {...rest} />
  ),
);
Meta.displayName = "LaunchTimeline.Meta";

export const LaunchTimeline = Object.assign(LaunchTimelineRoot, {
  Item,
  Time,
  Title,
  Detail,
  Meta,
});
