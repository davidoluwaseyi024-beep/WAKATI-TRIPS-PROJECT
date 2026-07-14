import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="bg-sand py-20 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services"
          title="Everything a trip requires, coordinated by one planner."
          lead="No hand offs between booking, planning, and support a single point of contact carries the trip from enquiry to return."
        />

        <div className="mt-14 divide-y divide-ink/15 border-t border-ink/15">
          {services.map((service) => (
            <div
              key={service.title}
              className="grid grid-cols-1 gap-3 py-8 md:grid-cols-[280px_1fr] md:gap-10"
            >
              <h3 className="font-display text-heading text-ink">{service.title}</h3>
              <p className="max-w-2xl text-body text-ink/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
