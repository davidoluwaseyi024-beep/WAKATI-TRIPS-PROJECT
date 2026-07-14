import { cn } from "@/lib/cn";
import { controlBase, controlState, labelStyles, errorTextStyles } from "./formStyles";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export function Textarea({ label, error, id, className, rows = 4, ...rest }: TextareaProps) {
  const fieldId = id ?? rest.name;
  return (
    <div>
      <label htmlFor={fieldId} className={labelStyles}>
        {label}
      </label>
      <textarea
        id={fieldId}
        rows={rows}
        className={cn(controlBase, "resize-none", error ? controlState.error : controlState.default, className)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        {...rest}
      />
      {error && (
        <p id={`${fieldId}-error`} className={errorTextStyles} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
