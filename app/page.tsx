import { ContactSection } from "@/components/sections/ContactSection";
import CustomerSuccess from "@/components/sections/CustomerSuccess";
import { ExploreProducts } from "@/components/sections/ExploreProducts";
import { ExploreServices } from "@/components/sections/ExploreServices";
import { FAQSection } from "@/components/sections/FAQSection";
import Hero from "@/components/sections/Hero";
import { LatestBlogs } from "@/components/sections/LatestBlogs";
import LatestNews from "@/components/sections/LatestNews";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <CustomerSuccess />
      <LatestNews />
      <ExploreServices />
      <ExploreProducts />
      <LatestBlogs />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
