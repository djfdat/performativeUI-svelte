import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

export type FomoFeedTone = "neutral" | "good" | "warn" | "danger";

export interface FomoFeedItem {
  label: ReactNode;
  meta?: ReactNode;
  time?: ReactNode;
  tone?: FomoFeedTone;
  icon?: ReactNode;
}

export interface FomoFeedProps
  extends Omit<ComponentPropsWithoutRef<"section">, "title"> {
  items?: FomoFeedItem[];
  title?: ReactNode;
  caption?: ReactNode;
  variant?: "feed" | "ticker";
  animated?: boolean;
}

export interface FomoFeedHeaderProps
  extends ComponentPropsWithoutRef<"header"> {}

export interface FomoFeedListProps extends ComponentPropsWithoutRef<"ul"> {
  variant?: NonNullable<FomoFeedProps["variant"]>;
}

export interface FomoFeedItemProps extends ComponentPropsWithoutRef<"li"> {
  tone?: FomoFeedTone;
}

export interface FomoFeedMarkerProps extends ComponentPropsWithoutRef<"span"> {
  tone?: FomoFeedTone;
}

export interface FomoFeedLabelProps extends ComponentPropsWithoutRef<"span"> {}
export interface FomoFeedMetaProps extends ComponentPropsWithoutRef<"span"> {}
export interface FomoFeedTimeProps extends ComponentPropsWithoutRef<"time"> {}

const hasNode = (node: ReactNode): boolean =>
  node !== null && node !== undefined && node !== false;

const Header = forwardRef<HTMLElement, FomoFeedHeaderProps>(
  ({ className, ...rest }, ref) => (
    <header ref={ref} className={cn("pui-fomo-feed__header", className)} {...rest} />
  ),
);
Header.displayName = "FomoFeed.Header";

const List = forwardRef<HTMLUListElement, FomoFeedListProps>(
  ({ variant = "feed", className, ...rest }, ref) => (
    <ul
      ref={ref}
      className={cn(
        "pui-fomo-feed__list",
        `pui-fomo-feed__list--${variant}`,
        className,
      )}
      {...rest}
    />
  ),
);
List.displayName = "FomoFeed.List";

const Item = forwardRef<HTMLLIElement, FomoFeedItemProps>(
  ({ tone = "neutral", className, ...rest }, ref) => (
    <li
      ref={ref}
      className={cn(
        "pui-fomo-feed__item",
        `pui-fomo-feed__item--${tone}`,
        className,
      )}
      {...rest}
    />
  ),
);
Item.displayName = "FomoFeed.Item";

const Marker = forwardRef<HTMLSpanElement, FomoFeedMarkerProps>(
  ({ tone = "neutral", className, ...rest }, ref) => (
    <span
      ref={ref}
      className={cn(
        "pui-fomo-feed__marker",
        `pui-fomo-feed__marker--${tone}`,
        className,
      )}
      {...rest}
    />
  ),
);
Marker.displayName = "FomoFeed.Marker";

const Label = forwardRef<HTMLSpanElement, FomoFeedLabelProps>(
  ({ className, ...rest }, ref) => (
    <span ref={ref} className={cn("pui-fomo-feed__label", className)} {...rest} />
  ),
);
Label.displayName = "FomoFeed.Label";

const Meta = forwardRef<HTMLSpanElement, FomoFeedMetaProps>(
  ({ className, ...rest }, ref) => (
    <span ref={ref} className={cn("pui-fomo-feed__meta", className)} {...rest} />
  ),
);
Meta.displayName = "FomoFeed.Meta";

const Time = forwardRef<HTMLTimeElement, FomoFeedTimeProps>(
  ({ className, ...rest }, ref) => (
    <time ref={ref} className={cn("pui-fomo-feed__time", className)} {...rest} />
  ),
);
Time.displayName = "FomoFeed.Time";

const Root = forwardRef<HTMLElement, FomoFeedProps>(
  (
    {
      items = [],
      title,
      caption,
      variant = "feed",
      animated = true,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const hasHeader = hasNode(title) || hasNode(caption);
    const hasItems = items.length > 0;

    return (
      <section
        ref={ref}
        className={cn(
          "pui-fomo-feed",
          `pui-fomo-feed--${variant}`,
          animated && "pui-fomo-feed--animated",
          className,
        )}
        {...rest}
      >
        {children ?? (
          <>
            {hasHeader ? (
              <Header>
                {hasNode(title) ? (
                  <h2 className="pui-fomo-feed__title">{title}</h2>
                ) : null}
                {hasNode(caption) ? (
                  <p className="pui-fomo-feed__caption">{caption}</p>
                ) : null}
              </Header>
            ) : null}

            {hasItems ? (
              <List variant={variant}>
                {items.map((item, index) => {
                  const tone = item.tone ?? "neutral";

                  return (
                    <Item key={index} tone={tone}>
                      <Marker tone={tone} aria-hidden="true">
                        {item.icon}
                      </Marker>
                      <span className="pui-fomo-feed__content">
                        <Label>{item.label}</Label>
                        {hasNode(item.meta) ? <Meta>{item.meta}</Meta> : null}
                      </span>
                      {hasNode(item.time) ? <Time>{item.time}</Time> : null}
                    </Item>
                  );
                })}
              </List>
            ) : null}
          </>
        )}
      </section>
    );
  },
);
Root.displayName = "FomoFeed";

export const FomoFeed = Object.assign(Root, {
  Header,
  List,
  Item,
  Marker,
  Label,
  Meta,
  Time,
});
