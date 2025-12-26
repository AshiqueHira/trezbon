import Image from "next/image";
import Link from "next/link";

export default function ProductsCTASection() {
  return (
    <section className="relative w-full py-32">
      {/* Background Image */}
      <Image
        src="/images/building.jpg" // replace with your image
        alt="Contact background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-100">
            Want to know more?
          </h2>

          <p className="mt-4 max-w-xl text-sm md:text-base text-gray-200 leading-relaxed">
            Reach out to us to explore how Trezbon’s research-driven products
            and technology artefacts can support your business needs. Our team
            will be happy to understand your requirements and guide you with the
            right solutions.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-indigo-500 px-6 py-3 text-sm font-medium text-white hover:bg-teal-500 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
