import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials, trustStats } from "@/lib/data";

export function SocialProof() {
  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="container-page">
        <SectionHeading eyebrow="Track Record" title="Trusted with trips that had to go right." />

        <div className="mt-12 grid grid-cols-1 gap-8 border-y border-ink/15 py-10 sm:grid-cols-3">
          {trustStats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-mono text-3xl text-ink">{stat.value}</p>
              <p className="mt-1 font-mono text-mono-data uppercase tracking-[0.08em] text-ink/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name + t.detail} tone="sand" className="flex flex-col justify-between">
              <p className="font-display text-lg italic leading-snug text-ink">“{t.quote}”</p>
              <div className="mt-6">
                <p className="font-mono text-mono-data uppercase tracking-[0.08em] text-ink/70">
                  {t.name}
                </p>
                <p className="mt-1 text-[0.8125rem] text-ink/45">{t.detail}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
