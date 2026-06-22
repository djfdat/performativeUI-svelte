import {
  forwardRef,
  useId,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

export type AgentRunwayStatus = "idle" | "running" | "done" | "blocked";

export interface AgentRunwayItem {
  name: ReactNode;
  role?: ReactNode;
  output?: ReactNode;
  status?: AgentRunwayStatus;
}

export interface AgentRunwayProps
  extends Omit<ComponentPropsWithoutRef<"section">, "title"> {
  items?: AgentRunwayItem[];
  title?: ReactNode;
  summary?: ReactNode;
  orientation?: "horizontal" | "vertical";
  animated?: boolean;
}

export interface AgentRunwayHeaderProps
  extends ComponentPropsWithoutRef<"header"> {}

export interface AgentRunwayTrackProps extends ComponentPropsWithoutRef<"ol"> {}

export interface AgentRunwayItemProps
  extends ComponentPropsWithoutRef<"article"> {
  status?: AgentRunwayStatus;
}

export interface AgentRunwayStatusProps
  extends ComponentPropsWithoutRef<"span"> {
  status?: AgentRunwayStatus;
}

export interface AgentRunwayNameProps
  extends ComponentPropsWithoutRef<"h3"> {}

export interface AgentRunwayRoleProps
  extends ComponentPropsWithoutRef<"span"> {}

export interface AgentRunwayOutputProps
  extends ComponentPropsWithoutRef<"p"> {}

const hasNode = (node: ReactNode): boolean =>
  node !== null && node !== undefined && node !== false;

const statusLabel = (status: AgentRunwayStatus) =>
  `Agent status: ${status}`;

const Header = forwardRef<HTMLElement, AgentRunwayHeaderProps>(
  ({ className, ...rest }, ref) => (
    <header
      ref={ref}
      className={cn("pui-agent-runway__header", className)}
      {...rest}
    />
  ),
);
Header.displayName = "AgentRunway.Header";

const Track = forwardRef<HTMLOListElement, AgentRunwayTrackProps>(
  ({ className, ...rest }, ref) => (
    <ol
      ref={ref}
      className={cn("pui-agent-runway__track", className)}
      {...rest}
    />
  ),
);
Track.displayName = "AgentRunway.Track";

const Item = forwardRef<HTMLElement, AgentRunwayItemProps>(
  ({ status = "idle", className, ...rest }, ref) => (
    <article
      ref={ref}
      data-status={status}
      className={cn(
        "pui-agent-runway__item",
        `pui-agent-runway__item--${status}`,
        className,
      )}
      {...rest}
    />
  ),
);
Item.displayName = "AgentRunway.Item";

const Status = forwardRef<HTMLSpanElement, AgentRunwayStatusProps>(
  (
    {
      status = "idle",
      className,
      "aria-label": ariaLabel = statusLabel(status),
      ...rest
    },
    ref,
  ) => (
    <span
      ref={ref}
      role="status"
      aria-label={ariaLabel}
      data-status={status}
      className={cn(
        "pui-agent-runway__status",
        `pui-agent-runway__status--${status}`,
        className,
      )}
      {...rest}
    />
  ),
);
Status.displayName = "AgentRunway.Status";

const Name = forwardRef<HTMLHeadingElement, AgentRunwayNameProps>(
  ({ className, ...rest }, ref) => (
    <h3
      ref={ref}
      className={cn("pui-agent-runway__name", className)}
      {...rest}
    />
  ),
);
Name.displayName = "AgentRunway.Name";

const Role = forwardRef<HTMLSpanElement, AgentRunwayRoleProps>(
  ({ className, ...rest }, ref) => (
    <span
      ref={ref}
      className={cn("pui-agent-runway__role", className)}
      {...rest}
    />
  ),
);
Role.displayName = "AgentRunway.Role";

const Output = forwardRef<HTMLParagraphElement, AgentRunwayOutputProps>(
  ({ className, ...rest }, ref) => (
    <p
      ref={ref}
      className={cn("pui-agent-runway__output", className)}
      {...rest}
    />
  ),
);
Output.displayName = "AgentRunway.Output";

const Root = forwardRef<HTMLElement, AgentRunwayProps>(
  (
    {
      items = [],
      title,
      summary,
      orientation = "horizontal",
      animated = true,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const baseId = useId();
    const hasHeader = hasNode(title) || hasNode(summary);

    return (
      <section
        ref={ref}
        className={cn(
          "pui-agent-runway",
          `pui-agent-runway--${orientation}`,
          animated && "pui-agent-runway--animated",
          className,
        )}
        {...rest}
      >
        {children ?? (
          <>
            {hasHeader ? (
              <Header>
                {hasNode(title) ? (
                  <h2 className="pui-agent-runway__title">{title}</h2>
                ) : null}
                {hasNode(summary) ? (
                  <p className="pui-agent-runway__summary">{summary}</p>
                ) : null}
              </Header>
            ) : null}

            <Track>
              {items.map((item, index) => {
                const status = item.status ?? "idle";
                const nameId = `${baseId}-agent-${index + 1}`;

                return (
                  <li
                    key={index}
                    className="pui-agent-runway__track-item"
                    data-status={status}
                  >
                    <Item
                      status={status}
                      aria-labelledby={nameId}
                      aria-current={status === "running" ? "step" : undefined}
                    >
                      <Status status={status} />
                      <div className="pui-agent-runway__body">
                        <Name id={nameId}>{item.name}</Name>
                        {hasNode(item.role) ? <Role>{item.role}</Role> : null}
                        {hasNode(item.output) ? (
                          <Output>{item.output}</Output>
                        ) : null}
                      </div>
                    </Item>
                  </li>
                );
              })}
            </Track>
          </>
        )}
      </section>
    );
  },
);
Root.displayName = "AgentRunway";

export const AgentRunway = Object.assign(Root, {
  Header,
  Track,
  Item,
  Status,
  Name,
  Role,
  Output,
});
