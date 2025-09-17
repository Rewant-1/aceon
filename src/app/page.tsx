import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { ServiceCards } from "@/components/ServiceCards";
import { InspirationSection } from "@/components/InspirationSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PartnersSection } from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <section id="hero">
        <HeroSection />
      </section>
      <Separator className="my-0" />
     
      <section id="services">
        <ServiceCards />
      </section>
      <Separator className="my-0" />
      <section id="inspiration">
        <InspirationSection />
      </section>
      <Separator className="my-0" />
      <section id="why-us">
        <WhyUs />
      </section>
      <Separator className="my-0" />
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <Separator className="my-0" />
      <section id="partners">
        <PartnersSection />
      </section>
      <Separator className="my-0" />
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
