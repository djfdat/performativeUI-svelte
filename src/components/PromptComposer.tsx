import {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
  type FormEvent,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";
import { Button } from "./Button";

export interface PromptComposerSuggestion {
  label: ReactNode;
  value?: string;
}

export interface PromptComposerProps
  extends Omit<ComponentPropsWithoutRef<"form">, "onSubmit"> {
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  suggestions?: PromptComposerSuggestion[];
  model?: ReactNode;
  ctaLabel?: ReactNode;
  rows?: number;
  onValueChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
}

export interface PromptComposerFieldProps
  extends ComponentPropsWithoutRef<"textarea"> {}

export interface PromptComposerSuggestionsProps
  extends ComponentPropsWithoutRef<"div"> {}

export interface PromptComposerSuggestionProps
  extends ComponentPropsWithoutRef<"button"> {}

export interface PromptComposerFooterProps
  extends ComponentPropsWithoutRef<"div"> {}

export interface PromptComposerModelProps
  extends ComponentPropsWithoutRef<"span"> {}

const hasNode = (node: ReactNode): boolean =>
  node !== null && node !== undefined && node !== false;

const Field = forwardRef<HTMLTextAreaElement, PromptComposerFieldProps>(
  ({ className, ...rest }, ref) => (
    <textarea
      ref={ref}
      className={cn("pui-prompt-composer__field", className)}
      {...rest}
    />
  ),
);
Field.displayName = "PromptComposer.Field";

const Suggestions = forwardRef<
  HTMLDivElement,
  PromptComposerSuggestionsProps
>(({ className, ...rest }, ref) => (
  <div
    ref={ref}
    className={cn("pui-prompt-composer__suggestions", className)}
    {...rest}
  />
));
Suggestions.displayName = "PromptComposer.Suggestions";

const Suggestion = forwardRef<
  HTMLButtonElement,
  PromptComposerSuggestionProps
>(({ className, type = "button", ...rest }, ref) => (
  <button
    ref={ref}
    type={type}
    className={cn("pui-prompt-composer__suggestion", className)}
    {...rest}
  />
));
Suggestion.displayName = "PromptComposer.Suggestion";

const Footer = forwardRef<HTMLDivElement, PromptComposerFooterProps>(
  ({ className, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn("pui-prompt-composer__footer", className)}
      {...rest}
    />
  ),
);
Footer.displayName = "PromptComposer.Footer";

const Model = forwardRef<HTMLSpanElement, PromptComposerModelProps>(
  ({ className, ...rest }, ref) => (
    <span
      ref={ref}
      className={cn("pui-prompt-composer__model", className)}
      {...rest}
    />
  ),
);
Model.displayName = "PromptComposer.Model";

const Root = forwardRef<HTMLFormElement, PromptComposerProps>(
  (
    {
      placeholder = "Ask the system to perform confidence...",
      defaultValue = "",
      value: controlledValue,
      suggestions = [],
      model = "GPT-5",
      ctaLabel = "Generate",
      rows = 4,
      onValueChange,
      onSubmit,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue);
    const value = isControlled ? controlledValue : internalValue;

    const setValue = (next: string) => {
      if (!isControlled) setInternalValue(next);
      onValueChange?.(next);
    };

    const submit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit?.(value);
    };

    const applySuggestion = (suggestion: PromptComposerSuggestion) => {
      const next =
        suggestion.value ??
        (typeof suggestion.label === "string" ? suggestion.label : undefined);

      if (next !== undefined) {
        setValue(next);
      }
    };

    return (
      <form
        ref={ref}
        className={cn("pui-prompt-composer", className)}
        onSubmit={submit}
        {...rest}
      >
        {children ?? (
          <>
            <Field
              placeholder={placeholder}
              rows={rows}
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />

            {suggestions.length > 0 ? (
              <Suggestions>
                {suggestions.map((suggestion, index) => (
                  <Suggestion
                    key={index}
                    onClick={() => applySuggestion(suggestion)}
                  >
                    {suggestion.label}
                  </Suggestion>
                ))}
              </Suggestions>
            ) : null}

            <Footer>
              {hasNode(model) ? <Model>{model}</Model> : null}
              <Button type="submit" variant="glow" sparkle>
                {ctaLabel}
              </Button>
            </Footer>
          </>
        )}
      </form>
    );
  },
);
Root.displayName = "PromptComposer";

export const PromptComposer = Object.assign(Root, {
  Field,
  Suggestions,
  Suggestion,
  Footer,
  Model,
});
