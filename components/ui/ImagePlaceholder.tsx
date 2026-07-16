import Image from "next/image";
import { cn } from "@/lib/cn";

type ImagePlaceholderProps = {
  src?: string;
  alt: string;
  label: string;
  dimensions: string; // e.g. "1920 × 1080" — exact spec for the developer/photographer
  ratioClassName: string; // e.g. "aspect-[16/9]"
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Renders the real photo once `src` is supplied. Until then, shows a
 * labeled placeholder sized to the exact spec so layout never shifts
 * when photography is dropped in.
 */
export function ImagePlaceholder({
  src,
  alt,
  label,
  dimensions,
  ratioClassName,
  className,
  priority,
  sizes = "100vw",
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden", ratioClassName, className)}>
        <Image
          src={src}
          alt={alt}
          fill
          quality={90}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex items-end overflow-hidden border border-dashed border-gold/40 bg-gradient-to-br from-ink via-emerald to-ink",
        ratioClassName,
        className
      )}
    >
      <div className="w-full p-4 md:p-5">
        <p className="font-mono text-mono-data uppercase tracking-[0.1em] text-paper/80">
          {label}
        </p>
        <p className="font-mono text-[0.75rem] text-paper/50">{dimensions}px</p>
      </div>
    </div>
  );
}
