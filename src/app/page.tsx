import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { ServiceCards } from "@/components/ServiceCards";
import { InspirationSection } from "@/components/InspirationSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { FAQSection } from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <Separator className="my-0" />
      <ServiceCards />
      <Separator className="my-0" />
      <InspirationSection />
      <Separator className="my-0" />
      <WhyChooseUsSection />
      <Separator className="my-0" />
      <PartnersSection />
      <Separator className="my-0" />
      <FAQSection />
      <Footer />
    </main>
  );
}
