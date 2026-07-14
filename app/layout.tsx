import type { Metadata } from "next";
import { Fraunces, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://www.wakatitrips.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wakati Trips — Bespoke Journeys Across Africa",
    template: "%s — Wakati Trips",
  },
  description:
    "Wakati Trips designs private, fully-planned journeys across Egypt, Morocco, Zanzibar and beyond one dedicated planner, on-ground expertise, end-to-end logistics.",
  openGraph: {
    title: "Wakati Trips Bespoke Journeys Across Africa",
    description:
      "Private, fully-planned travel across Africa. One dedicated planner. Zero friction.",
    url: siteUrl,
    siteName: "Wakati Trips",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wakati Trips Bespoke Journeys Across Africa",
    description:
      "Private, fully-planned travel across Africa. One dedicated planner. Zero friction.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
