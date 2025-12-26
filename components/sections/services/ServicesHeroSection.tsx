import SegmentedCircle from "@/components/general/SegmentedCircle";
import Image from "next/image";

export default function ServicesHeroSection() {
  return (
    <section className="relative w-full h-[90vh]">
      {/* Background Image */}
      <Image
        src="/images/building2.jpg" // replace with your image
        alt="Technology Services"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left Content */}
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Technology Services
          </h1>

          <p className="mt-6 text-sm md:text-base text-gray-200 leading-relaxed">
            At Trezbon, we offer a comprehensive range of technology services
            designed to meet the diverse needs of our clients. Our expertise
            spans across various domains, ensuring that we deliver solutions
            that drive business success and innovation.
          </p>
        </div>

        {/* Right Decorative Graphic */}
        <div className="hidden lg:flex justify-end">
          <SegmentedCircle />
        </div>
      </div>
    </section>
  );
}
