export default function ProductsOfferSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div>
          <span className="text-blue-600 text-sm font-medium">Products</span>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-gray-900">
            What do we offer?
          </h2>
        </div>

        {/* Right Column */}
        <div>
          <p className="text-gray-600 text-base leading-relaxed">
            We offer a diverse range of vendor agnostic technology artefacts
            tailored to meet your IT needs. These artefacts serve as valuable
            tools to help you address various technological challenges and
            achieve your business objectives.
          </p>
        </div>
      </div>
    </section>
  );
}
