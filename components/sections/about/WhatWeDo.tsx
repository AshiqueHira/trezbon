export default function WhatWeDoSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-indigo-500 mb-4">
          What we do?
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text content */}
          <div>
            <p className="text-gray-700 leading-relaxed mt-4">
              At Trezbon, our mission is to drive digital transformation and
              empower businesses to achieve their full potential. We provide
              innovative IT solutions, including strategic consulting, dynamic
              website development, tailored training programs, and robust IT
              infrastructure management.
              <br />
              <br />
              Our commitment to excellence and a client-centric approach ensures
              that we deliver solutions that are not only effective but also
              aligned with your business goals. We strive to be your trusted
              partner in navigating the complexities of the digital landscape,
              helping you succeed in a rapidly evolving market.
            </p>
          </div>

          {/* Right: Video */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-200">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Trezbon Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
