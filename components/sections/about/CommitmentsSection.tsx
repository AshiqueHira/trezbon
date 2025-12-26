import Image from "next/image";

const tabs = [
  "Future of Trezbon",
  "Future of Work",
  "Future of Sustainability",
];

export default function CommitmentsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-8 text-indigo-500">
          Commitments for the future
        </h2>

        {/* Tabs */}
        <div className="flex gap-8 border-b border-gray-300 mb-10">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={`pb-3 text-sm font-medium ${
                index === 0
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div className="text-gray-700 leading-relaxed">
            <p>
              At Trezbon, our vision is to lead the way in technology
              innovation, driving transformative change across industries. We
              are committed to helping businesses embrace digitalization to
              enhance their operations and achieve sustainable growth.
            </p>

            <p className="mt-6">
              By leveraging advanced technologies such as AI, cloud computing,
              and data analytics, we provide tailored solutions that streamline
              processes, improve efficiency, and foster innovation.
            </p>
          </div>

          {/* Right image */}
          <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[360px] rounded-lg overflow-hidden">
            <Image
              src="/images/building.jpg"
              alt="Future vision"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
