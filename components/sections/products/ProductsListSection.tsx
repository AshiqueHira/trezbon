export default function ProductsListSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {/* DESIGN ARTIFACTS */}
        <div>
          <p className="text-sm text-gray-500 mb-10">Design Artifacts</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {/* Item */}
            <ProductItem
              title="DC Networking HDL Template"
              description="Provides a comprehensive framework for designing robust and scalable data center networks"
            />

            <ProductItem
              title="DLP Design Best Practices"
              description="Our Data Loss Prevention (DLP) Design Best Practices guide offers essential strategies to safeguard your sensitive data"
            />
          </div>
        </div>

        {/* PRODUCT COMPARISON */}
        <div>
          <p className="text-sm text-blue-600 mb-10">Product Comparison</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <ProductItem
              title="SDN Products Comparison"
              description="Our SDN Product Comparison service provides detailed analyses of leading Software-Defined Networking (SDN) solutions"
            />

            <ProductItem
              title="Network Firewalls Comparison"
              description="Our Network Firewalls Comparison service offers in-depth evaluations of top firewall solutions"
            />
          </div>
        </div>

        {/* LAB RENTAL */}
        <div>
          <p className="text-sm text-gray-500 mb-10">LAB Rental</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <ProductItem
              title="Arista Networking LAB"
              description="This LAB offers access to the latest Arista software, enabling you to learn, troubleshoot, and optimize your network configurations with confidence"
            />

            <ProductItem
              title="Fortinet Firewall LAB"
              description="This LAB offers access to the fortinet firewalls, enabling you to learn, troubleshoot, and optimize your network configurations with confidence"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable Product Item ---------- */

function ProductItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <span className="text-xl">→</span>
      </div>

      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        {description}
      </p>

      <div className="mt-6 h-px bg-gray-300" />
    </div>
  );
}
