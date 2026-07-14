import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary-light" | "secondary-dark";
type Size = "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-medium transition duration-200 ease-out rounded-[2px]";

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-[0.95rem]",
  lg: "px-8 py-4 text-base",
};

const variants: Record<Variant, string> = {
  primary: "bg-gold text-ink hover:brightness-[1.06] active:brightness-95",
  "secondary-light":
    "border border-ink/30 text-ink hover:bg-ink hover:text-paper hover:border-ink",
  "secondary-dark":
    "border border-gold/60 text-paper hover:bg-gold hover:text-ink hover:border-gold",
};

const disabledStyles = "opacity-40 pointer-events-none";

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    disabled = false,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    base,
    sizes[size],
    variants[variant],
    disabled && disabledStyles,
    className
  );

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link
        href={props.href}
        className={classes}
        aria-disabled={disabled}
        {...anchorRest}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
