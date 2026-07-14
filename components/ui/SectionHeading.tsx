import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "onLight",
  align = "left",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  tone?: "onLight" | "onDark";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2
        className={cn(
          "font-display text-[2rem] leading-[1.15] md:text-display-lg",
          tone === "onDark" ? "text-paper" : "text-ink"
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-5 text-body-lg",
            tone === "onDark" ? "text-paper/75" : "text-ink/70"
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
