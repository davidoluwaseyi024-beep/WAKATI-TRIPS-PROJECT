import { DestinationSlideshow } from "@/components/ui/DestinationSlideshow";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { destinations } from "@/lib/data";

export function Destinations() {
  return (
    <section id="destinations" className="bg-ink py-20 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Destinations"
          title="Seven regions, planned by people who've stood in each one."
          tone="onDark"
        />
      </div>

      <div className="container-page">
        <div className="mt-10 flex gap-6 overflow-x-auto pb-6 pt-2 [scrollbar-width:thin] snap-x snap-mandatory">
          {destinations.map((d) => (
            <article
              key={d.place}
              className="w-[280px] shrink-0 snap-start sm:w-[320px]"
            >
              {d.place === "Zanzibar" ? (
                <ImageCarousel
                  images={d.images}
                  alt={`${d.place}, ${d.country}`}
                  ratioClassName="aspect-[3/4]"
                  sizes="(min-width: 640px) 320px, 280px"
                />
              ) : (
                <DestinationSlideshow
                  images={d.images}
                  alt={`${d.place}, ${d.country}`}
                  label={d.place}
                  dimensions={d.dimensions}
                  ratioClassName="aspect-[3/4]"
                  sizes="(min-width: 640px) 320px, 280px"
                />
              )}
              <div className="mt-4">
                <h3 className="font-display text-xl italic text-paper">{d.country}</h3>
                <p className="text-[0.9375rem] text-paper/60">{d.place}</p>
                <p className="mt-3 text-body text-paper/70">{d.blurb}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-2 font-mono text-[0.75rem] uppercase tracking-[0.1em] text-paper/35 sm:hidden">
          Swipe to explore all seven regions →
        </p>
      </div>
    </section>
  );
}
