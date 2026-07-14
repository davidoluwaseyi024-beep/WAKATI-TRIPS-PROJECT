import { SectionHeading } from "@/components/ui/SectionHeading";
import { differentiators } from "@/lib/data";

export function WhyChooseUs() {
  return (
    <section className="bg-ink py-20 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Choose Wakati Trips"
          title="What a fully managed trip actually requires."
          tone="onDark"
        />

        <div className="mt-14 grid gap-10 border-t border-paper/15 pt-14 md:grid-cols-3 md:divide-x md:divide-paper/15">
          {differentiators.map((item) => (
            <div key={item.title} className="md:px-10 md:first:pl-0 md:last:pr-0">
              <p className="font-display text-[2.75rem] italic leading-none text-gold">
                {item.proof}
              </p>
              <h3 className="mt-4 font-mono text-mono-data uppercase tracking-[0.1em] text-paper">
                {item.title}
              </h3>
              <p className="mt-4 text-body text-paper/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
