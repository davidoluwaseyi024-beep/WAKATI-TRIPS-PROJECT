import { cn } from "@/lib/cn";
import { controlBase, controlState, labelStyles, errorTextStyles } from "./formStyles";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  options: string[];
  placeholder?: string;
};

export function Select({ label, error, id, className, options, placeholder, ...rest }: SelectProps) {
  const fieldId = id ?? rest.name;
  return (
    <div>
      <label htmlFor={fieldId} className={labelStyles}>
        {label}
      </label>
      <select
        id={fieldId}
        className={cn(
          controlBase,
          "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22 fill=%22none%22><path d=%22M5 7.5L10 12.5L15 7.5%22 stroke=%22%230F1B2D%22 stroke-width=%221.5%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/></svg>')] bg-no-repeat bg-[right_1rem_center]",
          error ? controlState.error : controlState.default,
          className
        )}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        defaultValue=""
        {...rest}
      >
        <option value="" disabled>
          {placeholder ?? "Select..."}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${fieldId}-error`} className={errorTextStyles} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
