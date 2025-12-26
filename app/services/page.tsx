import ServicesCTASection from "@/components/sections/services/ServicesCTASection";
import ServicesHeroSection from "@/components/sections/services/ServicesHeroSection";
import ServicesListSection from "@/components/sections/services/ServicesListSection";
import ServicesOfferSection from "@/components/sections/services/ServicesOfferSection";

export default function Products() {
  return (
    <main>
      <ServicesHeroSection />
      <ServicesOfferSection />
      <ServicesListSection />
      <ServicesCTASection />
    </main>
  );
}
