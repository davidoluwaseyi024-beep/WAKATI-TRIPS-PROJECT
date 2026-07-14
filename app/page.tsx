import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { SocialProof } from "@/components/sections/SocialProof";
import { Destinations } from "@/components/sections/Destinations";
import { Packages } from "@/components/sections/Packages";
import { BookingForm } from "@/components/sections/BookingForm";
import { SocialContact } from "@/components/sections/SocialContact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <SocialProof />
        <Destinations />
        <Packages />
        <BookingForm />
        <SocialContact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
