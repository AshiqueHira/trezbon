import Image from "next/image";
import Link from "next/link";

export function ExploreServices() {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-medium text-black">
            Explore Our Services
          </h2>
          <Link
            href="#"
            className="text-sm font-medium text-indigo-500 border border-indigo-500 rounded-md px-4 py-2 hover:bg-indigo-50"
          >
            View more
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card */}
          {[
            {
              title: "Consulting",
              desc: "Provide expert guidance and solutions to help businesses",
              img: "/images/consulting.jpg",
            },
            {
              title: "AMC Services",
              desc: "Provide comprehensive ongoing support and maintenance",
              img: "/images/support.jpg",
            },
            {
              title: "Training",
              desc: "Customized sessions covering a wide range of IT topics",
              img: "/images/training.jpg",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative h-[360px] rounded-xl overflow-hidden"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-gray-200">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
