import ProductsCTASection from "@/components/sections/products/ProductsCTASection";
import ProductsHero from "@/components/sections/products/ProductsHero";
import ProductsListSection from "@/components/sections/products/ProductsListSection";
import ProductsOfferSection from "@/components/sections/products/ProductsOfferSection";

export default function Products() {
  return (
    <main>
      <ProductsHero />
      <ProductsOfferSection />
      <ProductsListSection />
      <ProductsCTASection />
    </main>
  );
}
