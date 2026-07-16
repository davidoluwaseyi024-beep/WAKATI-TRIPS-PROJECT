"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const SLIDE_INTERVAL_MS = 4000;

type DestinationSlideshowProps = {
  images: string[];
  alt: string;
  label: string;
  dimensions: string; // e.g. "1920 × 1080" — exact spec for the developer/photographer
  ratioClassName: string; // e.g. "aspect-[16/9]"
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Crossfades through a destination's photos (2 or more), holding each for
 * SLIDE_INTERVAL_MS. Falls back to a labeled placeholder (matching
 * ImagePlaceholder) if every photo fails to load, so a missing file never
 * breaks layout.
 */
export function DestinationSlideshow({
  images,
  alt,
  label,
  dimensions,
  ratioClassName,
  className,
  priority,
  sizes = "100vw",
}: DestinationSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [broken, setBroken] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [images.length]);

  const allBroken = images.every((_, index) => broken[index]);

  if (allBroken) {
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

  return (
    <div className={cn("relative overflow-hidden", ratioClassName, className)}>
      {images.map((src, index) =>
        broken[index] ? null : (
          <Image
            key={src}
            src={src}
            alt={alt}
            fill
            quality={90}
            priority={priority && index === 0}
            loading={priority && index === 0 ? undefined : "lazy"}
            sizes={sizes}
            onError={() => setBroken((prev) => ({ ...prev, [index]: true }))}
            className={cn(
              "object-cover transition-opacity duration-1000 ease-in-out",
              index === activeIndex ? "opacity-100" : "opacity-0"
            )}
          />
        )
      )}
    </div>
  );
}
