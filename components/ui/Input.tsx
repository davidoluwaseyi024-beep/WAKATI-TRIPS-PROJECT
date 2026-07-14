import { cn } from "@/lib/cn";
import { controlBase, controlState, labelStyles, errorTextStyles } from "./formStyles";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function Input({ label, error, id, className, ...rest }: InputProps) {
  const fieldId = id ?? rest.name;
  return (
    <div>
      <label htmlFor={fieldId} className={labelStyles}>
        {label}
      </label>
      <input
        id={fieldId}
        className={cn(controlBase, error ? controlState.error : controlState.default, className)}
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
