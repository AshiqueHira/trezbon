import Image from "next/image";
import Link from "next/link";

export default function CustomerSuccess() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Customer Success Stories
        </h2>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Dubai Islamic Bank</h3>

            <p className="text-gray-700 leading-relaxed max-w-xl mb-6">
              Dubai Islamic Bank leverages Trezbon’s networking technology
              services capabilities to design and build a unified IT
              environment. This initiative connects over 200 locations,
              including branches, ATMs, and service centers ensuring seamless
              services for valued customers across the UAE.
            </p>

            <Link
              href="#"
              className="inline-flex items-center text-sm font-medium text-black hover:underline"
            >
              Learn More <span className="ml-1">›</span>
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[320px] rounded-lg overflow-hidden">
            <Image
              src="/images/building.jpg"
              alt="Dubai Islamic Bank building"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="relative w-full  flex flex-row gap-10 mt-24">
          {/* Additional customer stories can be added here following the same structure */}
          <div className="w-1/3 flex flex-col">
            <h5 className="mb-4 text-gray-800 text-lg font-semibold">
              Qatar Energy
            </h5>
            <div className="relative w-full">
              <Image
                src="/images/building.jpg"
                alt="Dubai Islamic Bank building"
                fill={false}
                width={400}
                height={200}
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-6 mt-4">
              Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum
              dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit
              amet,
            </p>
            <Link
              href="#"
              className="inline-flex items-center text-sm font-medium text-black hover:underline"
            >
              Learn More <span className="ml-1">›</span>
            </Link>
          </div>
          <div className="w-1/3 flex flex-col">
            <h5 className="mb-4 text-gray-800 text-lg font-semibold">OMIFCO</h5>
            <div className="relative w-full">
              <Image
                src="/images/building.jpg"
                alt="Dubai Islamic Bank building"
                fill={false}
                width={400}
                height={200}
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-6 mt-4">
              Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum
              dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit
              amet,
            </p>
            <Link
              href="#"
              className="inline-flex items-center text-sm font-medium text-black hover:underline"
            >
              Learn More <span className="ml-1">›</span>
            </Link>
          </div>
          <div className="w-1/3 flex flex-col">
            <h5 className="mb-4 text-gray-800 text-lg font-semibold">DIFC</h5>
            <div className="relative w-full">
              <Image
                src="/images/building.jpg"
                alt="Dubai Islamic Bank building"
                fill={false}
                width={400}
                height={200}
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-6 mt-4">
              Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum
              dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit
              amet,
            </p>
            <Link
              href="#"
              className="inline-flex items-center text-sm font-medium text-black hover:underline"
            >
              Learn More <span className="ml-1">›</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
