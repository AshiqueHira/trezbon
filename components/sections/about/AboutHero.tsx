import Image from "next/image";

export default function AboutHero() {
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
              Innovating the Future with <br /> Trezbon
            </h1>

            <p className="mt-6 text-sm md:text-base text-gray-200 leading-relaxed">
              At Trezbon, we are passionate about driving digital transformation
              and empowering businesses to achieve their full potential. As a
              leading IT technology consulting firm, we specialize in delivering
              innovative solutions that address the unique challenges of the
              modern digital landscape. Our team of seasoned experts brings a
              wealth of real-world experience and a commitment to excellence,
              ensuring that every project we undertake is executed with
              precision and efficiency
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
