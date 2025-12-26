import Image from "next/image";

export default function ProductsHero() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full">
        {/* Background Image */}
        <Image
          src="/images/building2.jpg" // replace with your image
          alt="Trezbon Research and Development"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Trezbon – Research & <br /> Development
            </h1>

            <p className="mt-6 text-sm md:text-base text-gray-200 leading-relaxed">
              Welcome to Trezbon, where innovation meets expertise in IT
              technology consulting. We offer a comprehensive suite of products
              and services designed to propel your business forward. Our
              artefacts and solutions provide vendor-independent insights to
              help you evaluate and utilize offerings from leading vendors. At
              Trezbon, we are committed to delivering excellence and driving
              digital transformation. Explore our solutions today and discover
              how we can help you achieve your business goals with precision and
              efficiency.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
