import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="bg-paper py-20 md:py-24">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <ImagePlaceholder
          src="/images/about-planner.jpeg"
          alt="Wakati Trips planner reviewing an itinerary with a client"
          label="About — planner at work"
          dimensions="1040 × 1200"
          ratioClassName="aspect-[5/6]"
          className="order-2 lg:order-1"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="About Wakati Trips"
            title="Travel planning built for people who don't have time to get it wrong."
          />
          <div className="mt-6 space-y-5 text-body text-ink/75">
            <p>
              Wakati Trips exists for travelers who want Africa done properly the right
              season, the right guide, the right room, arranged by someone who has been
              there and stayed in contact throughout the trip, not just before it.
            </p>
            <p>
              Every itinerary is built by a single planner working directly with partners
              on the ground in each destination, then held together end-to-end flights,
              transfers, accommodation, and support while you travel so the trip you
              agreed to is the trip you actually get.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
