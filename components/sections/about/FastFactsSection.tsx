interface FactItem {
  value: string;
  label: string;
}

const facts: FactItem[] = [
  { value: "40+", label: "Services" },
  { value: "30+", label: "Products" },
  { value: "15K+", label: "Members" },
  { value: "10M+", label: "Active Users" },
];

export default function FastFactsSection() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-indigo-500 mb-14">
          Fast Facts
        </h2>

        {/* Facts Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 px-10">
          {facts.map((fact) => (
            <div key={fact.label} className="text-center">
              <div className="text-4xl font-semibold text-black">
                {fact.value}
              </div>
              <div className="mt-2 text-sm text-gray-600">{fact.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
