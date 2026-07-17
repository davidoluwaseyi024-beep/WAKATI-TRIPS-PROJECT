import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink">
      <div className="absolute inset-0 h-full w-full">
        <ImagePlaceholder
          src="/images/flight-background.jpg"
          alt="Airplane flying over palm trees against a clear blue sky"
          label="Hero background"
          dimensions="1920 × 1080"
          ratioClassName="aspect-auto"
          className="h-full w-full"
          priority
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-ink/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />

      <div className="container-page relative z-10 py-32">
        <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl">
          <p className="eyebrow mb-6">Private Travel Planning Africa</p>
          <h1 className="font-display text-[2.75rem] leading-[1.08] text-paper md:text-display-xl">
            Africa, planned <span className="italic text-gold">to the last detail.</span>
          </h1>
          <p className="mt-6 max-w-lg text-body-lg text-paper/75">
            Wakati Trips designs private, fully-managed journeys across Egypt, Morocco, Zanzibar,
            and beyond one dedicated planner, from first enquiry to the day you land.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#plan" variant="primary" size="lg">
              Start Planning My Trip
            </Button>
            <Button href="#destinations" variant="secondary-dark" size="lg">
              View Destinations
            </Button>
          </div>

          <p className="mt-12 font-mono text-mono-data uppercase tracking-[0.1em] text-paper/50">
            Trusted by travelers across 7 regions every trip planned by a dedicated human, not a booking engine.
          </p>
        </div>
      </div>
    </section>
  );
}
