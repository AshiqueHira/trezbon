import { Star, User } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  rating?: number;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="relative min-w-[320px] max-w-[320px] h-80 bg-indigo-900 text-white rounded-xl p-6 flex flex-col justify-between">
      {/* Quote Icon */}
      <div className="text-4xl leading-none mb-4">“</div>

      {/* Content */}
      <p className="text-sm leading-relaxed opacity-90 mb-6">{quote}</p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <User className="w-4 h-4" />
          </div>
          <div>
            <p className="text-sm font-medium">{name}</p>
            <p className="text-xs opacity-75">{role}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
    </div>
  );
}
