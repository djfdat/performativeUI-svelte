import {
  forwardRef,
  useId,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

export interface SecurityTheaterItem {
  label: ReactNode;
  value?: ReactNode;
  status?: "verified" | "pending" | "attention";
  detail?: ReactNode;
}

export interface SecurityTheaterProps
  extends Omit<ComponentPropsWithoutRef<"section">, "title"> {
  title?: ReactNode;
  eyebrow?: ReactNode;
  summary?: ReactNode;
  items?: SecurityTheaterItem[];
  seal?: ReactNode;
  animated?: boolean;
}

export interface SecurityTheaterHeaderProps
  extends Omit<ComponentPropsWithoutRef<"header">, "title"> {
  eyebrow?: ReactNode;
  title?: ReactNode;
  summary?: ReactNode;
  titleId?: string;
}

export interface SecurityTheaterSealProps
  extends ComponentPropsWithoutRef<"div"> {}

export interface SecurityTheaterGridProps
  extends ComponentPropsWithoutRef<"ul"> {}

export interface SecurityTheaterItemProps
  extends Omit<ComponentPropsWithoutRef<"li">, "value"> {
  label?: ReactNode;
  value?: ReactNode;
  status?: SecurityTheaterItem["status"];
  detail?: ReactNode;
}

type SecurityTheaterStatus = NonNullable<SecurityTheaterItem["status"]>;

const statusMeta: Record<
  SecurityTheaterStatus,
  { icon: string; label: string }
> = {
  verified: { icon: "OK", label: "Verified" },
  pending: { icon: "...", label: "Pending" },
  attention: { icon: "!", label: "Needs attention" },
};

const hasNode = (node: ReactNode): boolean =>
  node !== null && node !== undefined && node !== false;

const Header = forwardRef<HTMLElement, SecurityTheaterHeaderProps>(
  (
    { eyebrow, title, summary, titleId, className, children, ...rest },
    ref,
  ) => (
    <header
      ref={ref}
      className={cn("pui-security__header", className)}
      {...rest}
    >
      {children ?? (
        <>
          {hasNode(eyebrow) && (
            <p className="pui-security__eyebrow">{eyebrow}</p>
          )}
          {hasNode(title) && (
            <h2 id={titleId} className="pui-security__title">
              {title}
            </h2>
          )}
          {hasNode(summary) && (
            <p className="pui-security__summary">{summary}</p>
          )}
        </>
      )}
    </header>
  ),
);
Header.displayName = "SecurityTheater.Header";

const Seal = forwardRef<HTMLDivElement, SecurityTheaterSealProps>(
  ({ className, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn("pui-security__seal", className)}
      {...rest}
    />
  ),
);
Seal.displayName = "SecurityTheater.Seal";

const Grid = forwardRef<HTMLUListElement, SecurityTheaterGridProps>(
  ({ className, ...rest }, ref) => (
    <ul
      ref={ref}
      className={cn("pui-security__grid", className)}
      {...rest}
    />
  ),
);
Grid.displayName = "SecurityTheater.Grid";

const Item = forwardRef<HTMLLIElement, SecurityTheaterItemProps>(
  ({ label, value, status, detail, className, children, ...rest }, ref) => {
    const meta = status ? statusMeta[status] : undefined;

    return (
      <li
        ref={ref}
        className={cn(
          "pui-security__item",
          status && `pui-security__item--${status}`,
          className,
        )}
        {...rest}
      >
        {children ?? (
          <>
            <div className="pui-security__item-main">
              {hasNode(label) && (
                <span className="pui-security__item-label">{label}</span>
              )}
              {hasNode(value) && (
                <span className="pui-security__item-value">{value}</span>
              )}
            </div>
            {meta && (
              <span
                className={cn(
                  "pui-security__status",
                  `pui-security__status--${status}`,
                )}
              >
                <span
                  className="pui-security__status-icon"
                  aria-hidden="true"
                >
                  {meta.icon}
                </span>
                <span className="pui-security__status-label">
                  {meta.label}
                </span>
              </span>
            )}
            {hasNode(detail) && (
              <p className="pui-security__item-detail">{detail}</p>
            )}
          </>
        )}
      </li>
    );
  },
);
Item.displayName = "SecurityTheater.Item";

const SecurityTheaterRoot = forwardRef<HTMLElement, SecurityTheaterProps>(
  (
    {
      title,
      eyebrow,
      summary,
      items = [],
      seal,
      animated = true,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const titleId = useId();
    const hasHeader = hasNode(eyebrow) || hasNode(title) || hasNode(summary);
    const labelledBy =
      children == null &&
      hasNode(title) &&
      !rest["aria-label"] &&
      !rest["aria-labelledby"]
        ? titleId
        : undefined;

    return (
      <section
        ref={ref}
        className={cn(
          "pui-security",
          animated && "pui-security--animated",
          className,
        )}
        aria-labelledby={labelledBy}
        {...rest}
      >
        {children ?? (
          <>
            {(hasHeader || hasNode(seal)) && (
              <div className="pui-security__intro">
                {hasHeader && (
                  <Header
                    eyebrow={eyebrow}
                    title={title}
                    summary={summary}
                    titleId={titleId}
                  />
                )}
                {hasNode(seal) && <Seal>{seal}</Seal>}
              </div>
            )}
            {items.length > 0 && (
              <Grid>
                {items.map((item, index) => (
                  <Item key={index} {...item} />
                ))}
              </Grid>
            )}
          </>
        )}
      </section>
    );
  },
);
SecurityTheaterRoot.displayName = "SecurityTheater";

export const SecurityTheater = Object.assign(SecurityTheaterRoot, {
  Header,
  Seal,
  Grid,
  Item,
});
