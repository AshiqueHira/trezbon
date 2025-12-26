export default function ServicesOfferSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div>
          <span className="text-blue-600 text-sm font-medium">Services</span>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-gray-900">
            Explore our service offerings
          </h2>
        </div>

        {/* Right Column */}
        <div>
          <p className="text-gray-600 text-base leading-relaxed">
            Explore Trezbon's services today and discover how we can help you
            achieve excellence in your IT initiatives with precision and
            efficiency. Our experts bring real-world experience in their
            domains, and each service offering is tailor-made to meet your
            specific technology needs
          </p>
        </div>
      </div>
    </section>
  );
}
