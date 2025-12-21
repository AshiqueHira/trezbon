import Image from "next/image";
import Link from "next/link";

export default function LatestNews() {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h4 className="text-lg font-medium text-black">Latest News</h4>
          <Link
            href="#"
            className="text-sm font-medium text-indigo-500 border border-indigo-500 rounded-md px-4 py-2 hover:bg-blue-50"
          >
            View more
          </Link>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-medium text-black mb-6">
              Trezbon Expands in Dubai
            </h2>

            <p className="text-gray-600 leading-relaxed mb-10 max-w-xl">
              Trezbon is excited to announce its expansion in Dubai, bringing
              additional resources to support our growing client base. This
              strategic move includes the launch of new facilities and the
              addition of expert team members to enhance our service offerings.
              Recently, we conducted a successful workshop that showcased our
              latest innovations and provided valuable insights into our future
              plans.
            </p>

            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/happy.jpg"
                alt="Trezbon team working"
                width={520}
                height={360}
                className="w-full h-[360px] object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-3xl font-medium text-gray-800 mb-6">
              Trezbon Secures Landmark Group Contracts
            </h3>

            <p className="text-gray-600 leading-relaxed mb-10 max-w-xl">
              Trezbon is thrilled to announce the securing of a significant
              contract with Landmark Group. This partnership marks a major
              milestone for Trezbon, as we bring our innovative solutions to one
              of the region’s leading retail and hospitality conglomerates. We
              look forward to delivering exceptional value and driving
              transformative results through this collaboration.
            </p>

            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/handshakes.jpg"
                alt="Business handshake"
                width={520}
                height={360}
                className="w-full h-[360px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
