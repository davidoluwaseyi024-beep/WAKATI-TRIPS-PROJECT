"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Textarea } from "@/components/ui/Textarea";
import { travelDestinationsForForm, travelTypes, socialLinks } from "@/lib/data";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";
const PHONE_PATTERN = /^[+]?[0-9\s\-()]{7,20}$/;
const WHATSAPP_NUMBER = socialLinks.find((s) => s.platform === "whatsapp")!.href.replace(
  "https://wa.me/",
  ""
);

function buildWhatsAppMessage(formData: FormData): string {
  const lines = [
    "New Trip Enquiry — Wakati Trips",
    `Name: ${formData.get("full_name")}`,
    `Phone: ${formData.get("phone")}`,
    `Traveling To: ${formData.get("traveling_to")}`,
    `Travel Date: ${formData.get("travel_date")}`,
    `Trip Type: ${formData.get("travel_type")}`,
    `Travelers: ${formData.get("travelers")}`,
  ];
  const message = String(formData.get("message") ?? "").trim();
  if (message) lines.push(`Message: ${message}`);
  return lines.join("\n");
}

type Status = "idle" | "submitting" | "success" | "error";
type FieldErrors = Record<string, string>;

function validate(formData: FormData): FieldErrors {
  const errors: FieldErrors = {};

  const fullName = String(formData.get("full_name") ?? "").trim();
  if (!fullName) errors.full_name = "Enter your full name.";

  const phone = String(formData.get("phone") ?? "").trim();
  if (!phone) errors.phone = "Enter your phone number.";
  else if (!PHONE_PATTERN.test(phone)) {
    errors.phone = "Enter a valid phone number (digits only, 7–20 characters).";
  }

  const travelingTo = String(formData.get("traveling_to") ?? "");
  if (!travelingTo) errors.traveling_to = "Select a destination.";

  const travelDate = String(formData.get("travel_date") ?? "");
  if (!travelDate) {
    errors.travel_date = "Choose a preferred travel date.";
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const chosen = new Date(travelDate);
    if (chosen < today) errors.travel_date = "Choose a date that hasn't already passed.";
  }

  const travelType = String(formData.get("travel_type") ?? "");
  if (!travelType) errors.travel_type = "Select a trip type.";

  const travelers = Number(formData.get("travelers"));
  if (!travelers || travelers < 1) errors.travelers = "Enter at least 1 traveler.";

  return errors;
}

export function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  useEffect(() => {
    if (!WEB3FORMS_ACCESS_KEY) {
      console.warn(
        "NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not set — the booking form will not submit until it's configured in .env.local (see README)."
      );
    }
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const errors = validate(formData);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    setStatus("submitting");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      buildWhatsAppMessage(formData)
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Trip Enquiry Wakati Trips");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="plan" className="bg-paper py-20 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Start Planning"
          title="Tell us about the trip, and a Wakati Trips planner will reach out within 24 hours."
          lead="A planner takes it from here"
          align="center"
          className="mx-auto"
        />

        <div className="mx-auto mt-12 max-w-xl">
          {status === "success" ? (
            <Card tone="ink" className="text-center">
              <p className="font-display text-2xl italic text-gold">Enquiry received.</p>
              <p className="mt-3 text-body text-paper/75">
                Thank you a Wakati Trips planner will review your trip and reach out within
                24 hours. We&apos;ve also opened WhatsApp with your details pre-filled — just
                hit send there to reach us instantly.
              </p>
              <Button
                variant="secondary-dark"
                size="md"
                className="mt-6"
                onClick={() => setStatus("idle")}
              >
                Submit Another Enquiry
              </Button>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-10">
              <fieldset className="space-y-6">
                <legend className="eyebrow mb-2">Traveler Details</legend>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Input
                    label="Full Name"
                    name="full_name"
                    type="text"
                    autoComplete="name"
                    error={fieldErrors.full_name}
                  />
                  <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    error={fieldErrors.phone}
                  />
                </div>
              </fieldset>

              <fieldset className="space-y-6">
                <legend className="eyebrow mb-2">Trip Details</legend>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Select
                    label="Traveling To"
                    name="traveling_to"
                    options={travelDestinationsForForm}
                    placeholder="Select a destination"
                    error={fieldErrors.traveling_to}
                  />
                  <Input
                    label="Preferred Travel Date"
                    name="travel_date"
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    error={fieldErrors.travel_date}
                  />
                  <Select
                    label="Travel Type"
                    name="travel_type"
                    options={travelTypes}
                    placeholder="Select trip type"
                    error={fieldErrors.travel_type}
                  />
                  <Input
                    label="Number of People"
                    name="travelers"
                    type="number"
                    min={1}
                    defaultValue={2}
                    error={fieldErrors.travelers}
                  />
                </div>
              </fieldset>

              <fieldset className="space-y-6">
                <legend className="eyebrow mb-2">Special Requests</legend>
                <Textarea
                  label="Message / Special Request"
                  name="message"
                  placeholder="Anything a planner should know occasions, accessibility needs, must-see stops..."
                />
              </fieldset>

              <div>
                <p className="text-[0.9375rem] text-ink/60">
                  Trip planning slots are limited each month so every traveler gets full
                  attention enquire today and hear from a Wakati Trips planner within 24
                  hours.
                </p>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === "submitting"}
                  className="mt-5 w-full sm:w-auto"
                >
                  {status === "submitting" ? "Sending..." : "Send Enquiry"}
                </Button>

                {status === "error" && (
                  <p
                    className="mt-4 border border-ruby/40 bg-ruby/5 px-4 py-3 text-[0.9375rem] text-ruby"
                    role="alert"
                  >
                    Something went wrong sending your enquiry — please check your connection
                    and try again, or reach us directly on WhatsApp.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
