# Wakati Trips

Next.js 14 (App Router) + TypeScript + Tailwind CSS marketing site for Wakati Trips.

## Setup (PowerShell)

```powershell
npm install
Copy-Item .env.local.example .env.local
```

Open `.env.local` and set your Web3Forms access key (see below), then:

```powershell
npm run dev
```

Site runs at http://localhost:3000.

## Web3Forms access key

The booking form (`components/sections/BookingForm.tsx`) submits directly to Web3Forms
from the browser — no API route needed.

1. Go to https://web3forms.com/ and sign up with the email that should receive enquiries.
2. Verify the email — Web3Forms sends you an **Access Key**.
3. Local development: paste it into `.env.local`:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-real-key-here
   ```
4. Production (e.g. Vercel): **Project Settings → Environment Variables** → add
   `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` with the same value for Production (and Preview,
   if you want enquiries from preview deployments too) → redeploy.

`.env.local` is already excluded via `.gitignore` (`.env*.local`) — never commit it.
The key is prefixed `NEXT_PUBLIC_` intentionally: Web3Forms access keys are meant to be
used client-side (this is how Web3Forms' own integration guide expects it to be wired),
not a secret that grants write access to anything beyond submitting to your form.

If the env var is missing, the form will fail to submit and show its normal error state;
a warning is also logged to the browser console in dev to make the missing key obvious.

## Build & verify

```powershell
npm run build
```

## Known residual security note

`next` is pinned to `14.2.35` — the latest patched release on the 14.x line, which
clears the critical/high advisories that applied to `14.2.5`. A handful of
lower-impact advisories in `npm audit` are only fixed in Next 16 (a breaking major
version change), so they're left as an accepted, documented risk rather than forcing
an unplanned framework upgrade. Revisit when a move to Next 15/16 is on the roadmap.

## Placeholder inventory

Everything below renders with a clearly labeled placeholder and needs real content
before launch.

### Images
All images use the shared `ImagePlaceholder` component (`components/ui/ImagePlaceholder.tsx`).
Drop real files into `public/images/` and pass the path as the `src` prop at each call site —
the placeholder disappears automatically once `src` is set, and the exact pixel dimensions
below are what each slot is laid out for.

| Location | File | Spec |
|---|---|---|
| Hero background | `components/sections/Hero.tsx` | 1920 × 1080 |
| Hero featured inset (Zanzibar) | `components/sections/Hero.tsx` | 480 × 320 |
| About section | `components/sections/About.tsx` | 1040 × 1200 |
| Destination cards (×7) | `lib/data.ts` → `destinations[].dimensions`, rendered in `components/sections/Destinations.tsx` | 640 × 800 each |

### Open Graph / social share image
`app/opengraph-image.png` (1200 × 630, static) is a placeholder brand card generated from
the design tokens — Next.js's file convention picks it up automatically, no code involved.
Replace the file with a real branded image at the same dimensions when ready.

> Note: this project originally used Next's dynamic `opengraph-image.tsx`/`icon.tsx`
> (`ImageResponse`) to generate these on the fly, but `next`'s bundled `@vercel/og`
> has a known bug on Windows where it throws `TypeError: Invalid URL` at build time
> when the project path contains a space (this folder is `Kawati Travel`). Static
> files sidestep the bug entirely and are equally valid per Next.js's file conventions.

### Favicon
`app/icon.svg` is a static, hand-authored gold "K" monogram on an ink circle. Replace it
with a real logo mark (keep it `icon.svg`, or swap to `icon.png`/`favicon.ico` — any of
Next's supported file conventions work).

### Site domain
`https://www.wakatitrips.com` is a placeholder domain used in `app/layout.tsx`
(`metadataBase`), `app/robots.ts`, and `app/sitemap.ts`. Replace all three once the real
domain is confirmed.

### Contact & social links
- Email / phone: `components/sections/SocialContact.tsx`
- WhatsApp floating button: `components/WhatsAppButton.tsx` (`href="#"` → real `https://wa.me/<number>` link)
- Social icons (WhatsApp, Instagram, Facebook, X, TikTok): `components/sections/SocialContact.tsx` and `components/Footer.tsx` (`socials` arrays, all `href="#"`)

### Testimonials & trust stats
`lib/data.ts` → `testimonials` and `trustStats` arrays, each entry marked `PLACEHOLDER`.
Replace with real client quotes and verified figures (years active, trips arranged,
partner count) before launch.

### Packages/pricing
`components/sections/Packages.tsx` intentionally renders three empty, dashed tier slots
("Essential", "Signature", "Bespoke") — structure reserved, no pricing content yet.

## Destinations

Priority order as confirmed: Egypt, Morocco, Zanzibar, Kenya, South Africa, Ghana,
Tanzania (Serengeti). Add more by appending to the `destinations` array in `lib/data.ts`
— the Destinations section and the booking form's "Traveling To" options both read from
that single source.
