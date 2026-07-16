import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { socialLinks } from "@/lib/data";

export function SocialContact() {
  return (
    <section id="contact" className="bg-emerald py-20 md:py-24">
      <div className="container-page flex flex-col items-center text-center">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Reach a planner directly."
          tone="onDark"
          align="center"
          className="mx-auto"
        />

        <div className="mt-8 flex flex-col items-center gap-2 font-mono text-mono-data uppercase tracking-[0.08em] text-paper/70">
          <a href="mailto:ogedazzle@yahoo.com" className="hover:text-gold">
            ogedazzle@yahoo.com
          </a>
          <a href="tel:+2348084827574" className="hover:text-gold">
            +234 808 482 7574
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4">
          {socialLinks.map((s) => (
            <SocialIcon key={s.platform} platform={s.platform} href={s.href} tone="onDark" />
          ))}
        </div>
      </div>
    </section>
  );
}
