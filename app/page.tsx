import CustomerSuccess from "@/components/sections/CustomerSuccess";
import Hero from "@/components/sections/Hero";
import LatestNews from "@/components/sections/LatestNews";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <CustomerSuccess />
      <LatestNews />
      <h1>Welcome to Trezbon</h1>
    </main>
  );
}
