import FounderCard from "@/components/general/FounderCard";

const founders = [
  {
    name: "Muhammed M",
    role: "Product Manager",
    image: "/images/founder.jpg",
    linkedin: "#",
  },
  {
    name: "Anas H M",
    role: "Network Engineer",
    image: "/images/founder.jpg",
    linkedin: "#",
  },
  {
    name: "Ashraf T",
    role: "Network Administrator",
    image: "/images/founder.jpg",
    linkedin: "#",
  },
];

export default function MeetTheTeamSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-center mb-6">
          Meet the Minds{" "}
          <span className="text-indigo-500">Behind the Mission</span>
        </h2>

        {/* Description */}
        <p className="mx-auto max-w-4xl text-center text-gray-700 leading-relaxed mb-12">
          At Trezbon, our success is driven by a team of passionate and talented
          individuals who are dedicated to innovation and excellence. Each
          member brings unique expertise and a shared commitment to our mission
          of transforming technology. From visionary leaders to skilled
          engineers and creative thinkers, our team collaborates seamlessly to
          deliver exceptional solutions. Get to know the brilliant minds who are
          shaping the future of Trezbon and making a lasting impact in the tech
          industry.
        </p>

        {/* Centered Sub-title */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="h-px w-24 bg-gray-300" />
          <h3 className="text-lg font-medium text-indigo-500">
            Founding Advisors
          </h3>
          <div className="h-px w-24 bg-gray-300" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {founders.map((founder, index) => (
            <FounderCard key={index} {...founder} />
          ))}
        </div>
      </div>
    </section>
  );
}
