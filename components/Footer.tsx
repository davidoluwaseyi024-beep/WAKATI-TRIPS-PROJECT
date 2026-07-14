import Image from "next/image";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { socialLinks } from "@/lib/data";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Destinations", href: "#destinations" },
  { label: "Plan a Trip", href: "#plan" },
];

export function Footer() {
  return (
    <footer className="bg-ink pt-16">
      <div className="container-page grid grid-cols-1 gap-12 pb-12 md:grid-cols-3">
        <div>
          <span className="inline-flex items-center rounded-md bg-paper px-2.5 py-1.5">
            <Image src="/images/logo.jpeg" alt="Wakati Trips" width={1978} height={1394} className="h-14 w-auto" />
          </span>
          <p className="mt-4 max-w-xs text-[0.9375rem] text-paper/60">
            Private, fully managed travel planning across Africa one dedicated planner,
            from first enquiry to the day you land.
          </p>
        </div>

        <div>
          <p className="font-mono text-mono-data uppercase tracking-[0.1em] text-paper/40">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-[0.9375rem] text-paper/70 hover:text-gold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-mono-data uppercase tracking-[0.1em] text-paper/40">
            Follow
          </p>
          <div className="mt-4 flex gap-3">
            {socialLinks.map((s) => (
              <SocialIcon key={s.platform} platform={s.platform} href={s.href} tone="onDark" />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10 py-6">
        <div className="container-page flex flex-col items-center justify-between gap-3 text-[0.8125rem] text-paper/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Wakati Trips. All rights reserved.</p>
          <p>Private travel planning across Africa.</p>
        </div>
      </div>
    </footer>
  );
}
