import Link from "next/link";

export function ExploreProducts() {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-medium text-black mb-12">
          Explore Our Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Item */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium">Design Artifacts</h3>
                <span className="text-xl">→</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
                High-quality design elements and templates to streamline and
                enhance your technology adoption
              </p>
              <div className="border-b border-gray-300" />
            </div>

            {/* Item */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium">LAB Rental</h3>
                <span className="text-xl">→</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
                Offers flexible subscription access to fully integrated labs to
                learn, conduct research, and develop solutions
              </p>
              <div className="border-b border-gray-300" />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium">Products Comparison</h3>
                <span className="text-xl">→</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
                Provides detailed side-by-side analysis of various technology
                solutions to help businesses make informed decisions
              </p>
              <div className="border-b border-gray-300" />
            </div>

            <Link
              href="#"
              className="inline-flex items-center self-start text-sm font-medium text-indigo-500 border border-indigo-500 rounded-md px-5 py-2 hover:bg-indigo-50"
            >
              View more <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
