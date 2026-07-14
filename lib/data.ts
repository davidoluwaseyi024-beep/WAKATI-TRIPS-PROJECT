export type Destination = {
  country: string;
  place: string;
  blurb: string;
  dimensions: string;
  images: string[];
};

// Priority order as set by the client. Add new entries at the end to extend.
// Each destination's two photos live in public/images/destinations/ under
// the slug shown below (e.g. cairo-1.jpg,).
export const destinations: Destination[] = [
  {
    country: "Egypt",
    place: "Cairo & the Nile",
    blurb: "Private Nile sailings, the Giza plateau at first light, and access most tour buses never get.",
    dimensions: "640 × 800",
    images: ["/images/destinations/cairo-1.jpg", "/images/destinations/cairo-2.jpg"],
  },
  {
    country: "Morocco",
    place: "Marrakech & the Atlas",
    blurb: "Riads chosen by hand, medina routes that skip the crowds, dinners in the foothills of the Atlas.",
    dimensions: "640 × 800",
    images: ["/images/destinations/marrakech-1.jpg", "/images/destinations/marrakech-2.jpg"],
  },
  {
    country: "Tanzania",
    place: "Zanzibar",
    blurb: "Stone Town heritage, private reef sailings, and beachfront stays built for slow mornings.",
    dimensions: "640 × 800",
    images: [
      "/images/stone-town/stone-town-tour-01.jpg",
      "/images/stone-town/stone-town-tour-02.jpg",
      "/images/stone-town/stone-town-tour-03.jpg",
      "/images/stone-town/stone-town-tour-04.jpg",
      "/images/stone-town/stone-town-tour-05.jpg",
    ],
  },
  {
    country: "Kenya",
    place: "Maasai Mara",
    blurb: "Migration-season safaris with guides who know the herds' movement, not just the map.",
    dimensions: "640 × 800",
    images: ["/images/destinations/maasai-mara-1.webp", "/images/destinations/maasai-mara-2.jpg"],
  },
  {
    country: "South Africa",
    place: "Cape Town & the Winelands",
    blurb: "Coastline, vineyards, and city in one itinerary, sequenced so no day feels rushed.",
    dimensions: "640 × 800",
    images: ["/images/destinations/cape-town-1.jpeg", "/images/destinations/cape-town-2.webp"],
  },
  {
    country: "Ghana",
    place: "Accra & Cape Coast",
    blurb: "Heritage journeys along the coast, paired with Accra's design, food, and music scene.",
    dimensions: "640 × 800",
    images: [
      "/images/destinations/accra-1.jpg",
      "/images/destinations/accra-2.jpg",
      "/images/destinations/accra-3.jpg",
    ],
  },
  {
    country: "Tanzania",
    place: "Serengeti",
    blurb: "Endless plains, private conservancies, and camps positioned ahead of the migration.",
    dimensions: "640 × 800",
    images: ["/images/destinations/serengeti-1.jpg", "/images/destinations/serengeti-2.jpg"],
  },
];

export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Vacation Planning",
    description:
      "A complete itinerary built around how you actually want to travel pace, interests, and budget mapped before a single booking is made.",
  },
  {
    title: "Booking Support",
    description:
      "Flights, stays, and transfers reserved and reconciled under one plan, so nothing is left for you to coordinate separately.",
  },
  {
    title: "Destination Recommendations",
    description:
      "Guidance grounded in on-the-ground knowledge of each destination not repackaged listings.",
  },
  {
    title: "Group Trips",
    description:
      "Multi-room, multi-interest travel for families and friend groups, planned so everyone's version of the trip fits into one itinerary.",
  },
  {
    title: "Personal Travel Assistance",
    description:
      "A dedicated planner reachable throughout your trip for the itinerary change that comes up on day three, not just before you leave.",
  },
];

export type Differentiator = {
  title: string;
  proof: string;
  description: string;
};

export const differentiators: Differentiator[] = [
  {
    title: "On-Ground Expertise",
    proof: "7 regions",
    description:
      "Every destination is planned with local partners we work with directly not a catalogue of third-party listings.",
  },
  {
    title: "Bespoke Planning",
    proof: "1:1",
    description:
      "One planner owns your itinerary from first enquiry to the day you land, so nothing is handed off or rewritten by someone new.",
  },
  {
    title: "Concierge Logistics",
    proof: "24/7",
    description:
      "Visas, transfers, and on-trip support handled end-to-end, including while you're travelling not just up to departure.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

// Client Testimonial about wakati trips.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Every detail was arranged before we landed transfers, guides, even the small requests we mentioned in passing. It didn't feel like a booked trip, it felt hosted.",
    name: "Placeholder Client",
    detail: "Cairo & Marrakech itinerary — PLACEHOLDER",
  },
  {
    quote:
      "We changed our plans mid-trip and had a new itinerary within hours. That kind of responsiveness is the whole reason to use a planner.",
    name: "Placeholder Client",
    detail: "Zanzibar itinerary — PLACEHOLDER",
  },
  {
    quote:
      "The recommendations went beyond what we'd have found ourselves access to places that don't show up in a search.",
    name: "Placeholder Client",
    detail: "Cape Town & Winelands itinerary — PLACEHOLDER",
  },
];

// Placeholder trust metrics — replace with verified figures before launch.
export const trustStats = [
  { value: "12", label: "Years Planning Travel" },
  { value: "480+", label: "Trips Arranged" },
  { value: "30+", label: "On-Ground Partners " },
];

export const travelTypes = [
  "Honeymoon",
  "Family Trip",
  "Group Trip",
  "Solo Travel",
  "Anniversary / Celebration",
  "Business + Leisure",
];

export const travelDestinationsForForm = destinations.map((d) => `${d.country} — ${d.place}`);

export type PricingTier = {
  tier: string;
  tagline: string;
  price: string;
  priceUnit: string;
  priceNote: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

// Planning fees, not trip costs — each is credited toward the traveler's
// final booking once they confirm. Bespoke stays quote-only since scope
// varies too much (multi-week, multi-family, private charters) for a flat fee.
export const pricingTiers: PricingTier[] = [
  {
    tier: "Essential",
    tagline: "A single destination, planned properly.",
    price: "$350",
    priceUnit: "per traveler",
    priceNote: "Credited in full toward your booked trip.",
    features: [
      "Custom itinerary for one destination",
      "Hand-picked stays & experiences",
      "One dedicated planner, start to finish",
      "Email support, Monday–Friday",
    ],
    cta: "Enquire About Essential",
  },
  {
    tier: "Signature",
    tagline: "Multi-destination trips and milestone celebrations.",
    price: "$750",
    priceUnit: "per traveler",
    priceNote: "Credited in full toward your booked trip.",
    features: [
      "Everything in Essential",
      "Multi-destination routing & pacing",
      "Priority access to private guides & reserved experiences",
      "24/7 WhatsApp support while you travel",
      "Airport meet & greet coordination",
    ],
    cta: "Enquire About Signature",
    featured: true,
  },
  {
    tier: "Bespoke",
    tagline: "Fully tailored, multi-week, and group itineraries.",
    price: "Quoted",
    priceUnit: "individually",
    priceNote: "Scoped on a planning call — no two are alike.",
    features: [
      "Everything in Signature",
      "Dedicated planner from first call to touchdown",
      "Private charters & exclusive access, on request",
      "Multi-family & group coordination",
      "Unlimited itinerary revisions",
    ],
    cta: "Enquire About Bespoke",
  },
];

export type SocialLink = {
  platform: "whatsapp" | "instagram" | "facebook" | "x" | "tiktok";
  href: string;
};

// Single source of truth for social links — used by the Footer, the
// Contact section, and the floating WhatsApp button. Update here only.
// TikTok is still pending the real profile URL.
export const socialLinks: SocialLink[] = [
  { platform: "whatsapp", href: "https://wa.me/2348084827574" },
  { platform: "instagram", href: "https://instagram.com/wakati_trips" },
  { platform: "facebook", href: "https://facebook.com/wakatitrips" },
  { platform: "x", href: "https://x.com/wakatitrips" },
  { platform: "tiktok", href: "#" },
];