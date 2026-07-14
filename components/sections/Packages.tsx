import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { pricingTiers } from "@/lib/data";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 10.5l3.5 3.5L16 5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Packages() {
  return (
    <section id="pricing" className="bg-sand py-20 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Packages & Pricing"
          title="Three ways to work with us, priced by how much planning your trip needs."
          lead="Every figure below is a planning fee, not a mark-up — it's credited in full toward your trip once you book. Pick the tier that fits, or enquire and we'll recommend one."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.tier}
              tone={tier.featured ? "ink" : "paper"}
              className={cn(
                "flex flex-col",
                tier.featured
                  ? "relative lg:-translate-y-4 ring-1 ring-gold/60"
                  : ""
              )}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-8 inline-flex items-center rounded-[2px] bg-gold px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-ink">
                  Most Requested
                </span>
              )}

              <p
                className={cn(
                  "font-mono text-mono-data uppercase tracking-[0.1em]",
                  tier.featured ? "text-gold" : "text-emerald"
                )}
              >
                {tier.tier}
              </p>
              <p
                className={cn(
                  "mt-3 text-[0.9375rem]",
                  tier.featured ? "text-paper/70" : "text-ink/70"
                )}
              >
                {tier.tagline}
              </p>

              <div
                className={cn(
                  "mt-8 border-t pt-6",
                  tier.featured ? "border-paper/15" : "border-ink/15"
                )}
              >
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-[2.5rem] leading-none">
                    {tier.price}
                  </span>
                  <span
                    className={cn(
                      "font-mono text-[0.75rem] uppercase tracking-[0.08em]",
                      tier.featured ? "text-paper/50" : "text-ink/45"
                    )}
                  >
                    {tier.priceUnit}
                  </span>
                </div>
                <p
                  className={cn(
                    "mt-2 text-[0.8125rem]",
                    tier.featured ? "text-paper/50" : "text-ink/45"
                  )}
                >
                  {tier.priceNote}
                </p>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon
                      className={cn(
                        "mt-1 h-4 w-4 shrink-0",
                        tier.featured ? "text-gold" : "text-emerald"
                      )}
                    />
                    <span
                      className={cn(
                        "text-[0.9375rem]",
                        tier.featured ? "text-paper/80" : "text-ink/70"
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href="#plan"
                variant={tier.featured ? "secondary-dark" : "secondary-light"}
                size="md"
                className="mt-8 w-full"
              >
                {tier.cta}
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <Button href="#plan" variant="primary" size="md">
            Not Sure Which Tier? Request a Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
