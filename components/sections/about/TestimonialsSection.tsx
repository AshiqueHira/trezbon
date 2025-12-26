import TestimonialCard from "@/components/general/TestimonialCard";

const testimonials = [
  {
    quote:
      "Working at Trezbon has been an incredible journey. The collaborative environment and the opportunity to work on cutting-edge projects have significantly enhanced my skills.",
    name: "Sidharth",
    role: "Software Developer",
  },
  {
    quote:
      "Trezbon encourages innovation, making it a fantastic place to grow both professionally and personally.",
    name: "Anjali",
    role: "UI/UX Designer",
  },
  {
    quote:
      "The leadership team truly values ideas and empowers individuals to take ownership of their work.",
    name: "Rahul",
    role: "Cloud Engineer",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <h2 className="text-3xl font-semibold mb-10">What Our People Say</h2>

        {/* Slider */}
        <div className="relative">
          <div
            className="
              flex gap-6 justify-between mx-16 overflow-x-auto scroll-smooth
              snap-x snap-mandatory 
              pb-4
            "
          >
            {testimonials.map((item, index) => (
              <div key={index} className="snap-start">
                <TestimonialCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
