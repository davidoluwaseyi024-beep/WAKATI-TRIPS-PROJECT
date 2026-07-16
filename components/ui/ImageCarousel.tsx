"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const DEFAULT_INTERVAL_MS = 4500;
const SWIPE_THRESHOLD_PX = 40;

type ImageCarouselProps = {
  images: string[];
  alt: string;
  ratioClassName: string; // e.g. "aspect-[3/4]"
  className?: string;
  priority?: boolean;
  sizes?: string;
  intervalMs?: number;
};

/**
 * Auto-advancing fade carousel with arrow + dot controls, hover-pause, and
 * touch swipe. Generic over any image set — pass images/alt per instance.
 */
export function ImageCarousel({
  images,
  alt,
  ratioClassName,
  className,
  priority,
  sizes = "100vw",
  intervalMs = DEFAULT_INTERVAL_MS,
}: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const canAdvance = images.length > 1;

  useEffect(() => {
    if (!canAdvance || isPaused) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [canAdvance, isPaused, images.length, intervalMs]);

  const goTo = (index: number) => {
    setActiveIndex(((index % images.length) + images.length) % images.length);
  };
  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD_PX) {
      delta > 0 ? goPrev() : goNext();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className={cn("group relative overflow-hidden", ratioClassName, className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          quality={90}
          priority={priority && index === 0}
          loading={priority && index === 0 ? undefined : "lazy"}
          sizes={sizes}
          className={cn(
            "object-cover transition-opacity duration-700 ease-in-out",
            index === activeIndex ? "opacity-100" : "opacity-0"
          )}
        />
      ))}

      {canAdvance && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-paper/30 bg-ink/50 text-paper backdrop-blur transition-colors hover:border-gold hover:bg-ink/80"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-paper/30 bg-ink/50 text-paper backdrop-blur transition-colors hover:border-gold hover:bg-ink/80"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {images.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to image ${index + 1}`}
                aria-current={index === activeIndex}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  index === activeIndex ? "w-4 bg-gold" : "w-1.5 bg-paper/50 hover:bg-paper/80"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
