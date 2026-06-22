import {
  forwardRef,
  useId,
  type CSSProperties,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

export interface ModelLeaderboardModel {
  name: ReactNode;
  vendor?: ReactNode;
  score: number;
  label?: ReactNode;
  delta?: ReactNode;
  tone?: "neutral" | "good" | "warn" | "danger";
}

type ModelLeaderboardTone = NonNullable<ModelLeaderboardModel["tone"]>;

export interface ModelLeaderboardProps
  extends Omit<ComponentPropsWithoutRef<"section">, "title"> {
  models?: ModelLeaderboardModel[];
  title?: ReactNode;
  caption?: ReactNode;
  metricLabel?: ReactNode;
  maxScore?: number;
  compact?: boolean;
  animated?: boolean;
}

export interface ModelLeaderboardHeaderProps
  extends ComponentPropsWithoutRef<"header"> {}

export interface ModelLeaderboardListProps
  extends ComponentPropsWithoutRef<"ol"> {}

export interface ModelLeaderboardRowProps
  extends ComponentPropsWithoutRef<"li"> {
  score?: number;
  maxScore?: number;
  tone?: ModelLeaderboardTone;
  animated?: boolean;
}

export interface ModelLeaderboardNameProps
  extends ComponentPropsWithoutRef<"div"> {
  vendor?: ReactNode;
}

export interface ModelLeaderboardScoreProps
  extends ComponentPropsWithoutRef<"span"> {
  delta?: ReactNode;
  tone?: ModelLeaderboardTone;
}

export interface ModelLeaderboardBarProps
  extends ComponentPropsWithoutRef<"div"> {}

type ScoreStyle = CSSProperties & {
  "--pui-model-leaderboard-score"?: number;
};

const hasNode = (node: ReactNode): boolean =>
  node !== null && node !== undefined && node !== false;

const clampScoreRatio = (score = 0, maxScore = 100): number => {
  if (!Number.isFinite(score) || !Number.isFinite(maxScore) || maxScore <= 0) {
    return 0;
  }

  return Math.min(Math.max(score / maxScore, 0), 1);
};

const Header = forwardRef<HTMLElement, ModelLeaderboardHeaderProps>(
  ({ className, ...rest }, ref) => (
    <header
      ref={ref}
      className={cn("pui-model-leaderboard__header", className)}
      {...rest}
    />
  ),
);
Header.displayName = "ModelLeaderboard.Header";

const List = forwardRef<HTMLOListElement, ModelLeaderboardListProps>(
  ({ className, ...rest }, ref) => (
    <ol
      ref={ref}
      className={cn("pui-model-leaderboard__list", className)}
      {...rest}
    />
  ),
);
List.displayName = "ModelLeaderboard.List";

const Row = forwardRef<HTMLLIElement, ModelLeaderboardRowProps>(
  (
    {
      score,
      maxScore = 100,
      tone = "neutral",
      animated = true,
      className,
      style,
      ...rest
    },
    ref,
  ) => {
    const scoreStyle: ScoreStyle | undefined =
      score === undefined
        ? style
        : {
            ...style,
            "--pui-model-leaderboard-score": clampScoreRatio(score, maxScore),
          };

    return (
      <li
        ref={ref}
        className={cn(
          "pui-model-leaderboard__row",
          `pui-model-leaderboard__row--${tone}`,
          animated && "pui-model-leaderboard__row--animated",
          className,
        )}
        style={scoreStyle}
        {...rest}
      />
    );
  },
);
Row.displayName = "ModelLeaderboard.Row";

const Name = forwardRef<HTMLDivElement, ModelLeaderboardNameProps>(
  ({ vendor, className, children, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn("pui-model-leaderboard__name", className)}
      {...rest}
    >
      <span className="pui-model-leaderboard__model">{children}</span>
      {hasNode(vendor) ? (
        <span className="pui-model-leaderboard__vendor">{vendor}</span>
      ) : null}
    </div>
  ),
);
Name.displayName = "ModelLeaderboard.Name";

const Score = forwardRef<HTMLSpanElement, ModelLeaderboardScoreProps>(
  ({ delta, tone = "neutral", className, children, ...rest }, ref) => (
    <span
      ref={ref}
      className={cn(
        "pui-model-leaderboard__score",
        `pui-model-leaderboard__score--${tone}`,
        className,
      )}
      {...rest}
    >
      <span className="pui-model-leaderboard__score-value">{children}</span>
      {hasNode(delta) ? (
        <span className="pui-model-leaderboard__delta">{delta}</span>
      ) : null}
    </span>
  ),
);
Score.displayName = "ModelLeaderboard.Score";

const Bar = forwardRef<HTMLDivElement, ModelLeaderboardBarProps>(
  ({ className, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn("pui-model-leaderboard__bar", className)}
      aria-hidden="true"
      {...rest}
    >
      <div className="pui-model-leaderboard__bar-fill" />
    </div>
  ),
);
Bar.displayName = "ModelLeaderboard.Bar";

const Root = forwardRef<HTMLElement, ModelLeaderboardProps>(
  (
    {
      models,
      title,
      caption,
      metricLabel,
      maxScore = 100,
      compact = false,
      animated = true,
      className,
      children,
      "aria-labelledby": ariaLabelledBy,
      ...rest
    },
    ref,
  ) => {
    const titleId = useId();
    const hasHeader =
      hasNode(title) || hasNode(caption) || hasNode(metricLabel);
    const hasModels = models !== undefined && models.length > 0;
    const labelledBy = ariaLabelledBy ?? (hasNode(title) ? titleId : undefined);

    return (
      <section
        ref={ref}
        className={cn(
          "pui-model-leaderboard",
          compact && "pui-model-leaderboard--compact",
          animated && "pui-model-leaderboard--animated",
          className,
        )}
        aria-labelledby={labelledBy}
        {...rest}
      >
        {children ?? (
          <>
            {hasHeader ? (
              <Header>
                <div className="pui-model-leaderboard__heading-group">
                  {hasNode(title) ? (
                    <h2 className="pui-model-leaderboard__title" id={titleId}>
                      {title}
                    </h2>
                  ) : null}
                  {hasNode(caption) ? (
                    <p className="pui-model-leaderboard__caption">{caption}</p>
                  ) : null}
                </div>
                {hasNode(metricLabel) ? (
                  <span className="pui-model-leaderboard__metric-label">
                    {metricLabel}
                  </span>
                ) : null}
              </Header>
            ) : null}

            {hasModels ? (
              <List>
                {models.map((model, index) => (
                  <Row
                    key={index}
                    score={model.score}
                    maxScore={maxScore}
                    tone={model.tone}
                    animated={animated}
                  >
                    <span
                      className="pui-model-leaderboard__rank"
                      aria-label={`Rank ${index + 1}`}
                    >
                      {index + 1}
                    </span>
                    <Name vendor={model.vendor}>{model.name}</Name>
                    <Bar />
                    <Score delta={model.delta} tone={model.tone}>
                      {model.label ?? model.score}
                    </Score>
                  </Row>
                ))}
              </List>
            ) : null}
          </>
        )}
      </section>
    );
  },
);
Root.displayName = "ModelLeaderboard";

export const ModelLeaderboard = Object.assign(Root, {
  Header,
  List,
  Row,
  Name,
  Score,
  Bar,
});
