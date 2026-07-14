"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Destinations", href: "#destinations" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-paper/10 bg-ink/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center rounded-md bg-paper px-2.5 py-1.5">
          <Image
            src="/images/logo.jpeg"
            alt="Wakati Trips"
            width={1978}
            height={1394}
            priority
            className="h-14 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-mono-data uppercase tracking-[0.1em] text-paper/70 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#plan" variant="primary" size="md">
            Plan My Trip
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-px w-6 bg-paper transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-paper transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`h-px w-6 bg-paper transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-paper/10 bg-ink md:hidden">
          <div className="container-page flex flex-col gap-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-mono-data uppercase tracking-[0.1em] text-paper/70"
              >
                {link.label}
              </a>
            ))}
            <Button href="#plan" variant="primary" size="md" className="w-full" onClick={() => setOpen(false)}>
              Plan My Trip
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
