export function FAQSection() {
  return (
    <section className="w-full py-20 mx-auto align-start">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-xl font-medium text-black mb-10">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-gray-300">
          {/* FAQ Item (expanded example) */}
          <div className="py-5">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-sm font-medium text-black">
                What types of IT consulting services do you offer?
              </h3>
              <span className="text-xl">−</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mt-3 max-w-3xl">
              We offer a wide range of IT consulting services, including
              strategic planning, technology assessments, building
              applications/websites, system integration, and cybersecurity
              solutions to help your business achieve its goals.
            </p>
          </div>

          {/* FAQ Items (collapsed) */}
          {[
            "How can IT deployment services benefit my business?",
            "What is included in your Annual Maintenance Contract (AMC) services?",
            'How do your "Design Artifacts" products enhance creative projects?',
            'What are the benefits of using your "Solutions Comparison" product?',
          ].map((question, index) => (
            <div key={index} className="py-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-black">{question}</h3>
                <span className="text-xl">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
