import ServiceCard from "@/components/general/ServiceCard";

const servicesData = [
  {
    category: "Consulting",
    services: [
      {
        title: "Website Development",
        description:
          "Our development team delivers robust websites tailored to your business needs.",
        image: "/images/consulting.jpg",
      },
      {
        title: "Cybersecurity Services",
        description:
          "Protect your business with comprehensive cybersecurity solutions.",
        image: "/images/one.jpg",
      },
      {
        title: "IT Infrastructure Service",
        description:
          "Designing, implementing, and managing robust IT infrastructures.",
        image: "/images/python.jpg",
      },
    ],
  },
  {
    category: "Training",
    services: [
      {
        title: "Collaboration Solution Training",
        description:
          "Enhance productivity through collaboration tools and platforms.",
        image: "/images/qatar.jpg",
      },
      {
        title: "SDN Solution Training",
        description:
          "Hands-on training to understand and deploy SDN technologies.",
        image: "/images/support.jpg",
      },
      {
        title: "Cybersecurity Training",
        description:
          "Practical skills for implementing advanced cybersecurity solutions.",
        image: "/images/three.jpg",
      },
    ],
  },
  {
    category: "AMC Services",
    services: [
      {
        title: "Collaboration Solution Training",
        description:
          "Ongoing support and maintenance for collaboration systems.",
        image: "/images/training.jpg",
      },
      {
        title: "SDN Solution Training",
        description: "Expert AMC services for SDN-based infrastructures.",
        image: "/images/two.jpg",
      },
      {
        title: "Cybersecurity Training",
        description: "Continuous security monitoring and improvements.",
        image: "/images/handshakes.jpg",
      },
    ],
  },
];

export default function ServicesListSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 space-y-16">
        {servicesData.map((category) => (
          <div key={category.category}>
            {/* Category Heading */}
            <h2 className="mb-6 text-xl font-semibold">{category.category}</h2>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
