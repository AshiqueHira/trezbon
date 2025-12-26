import Image from "next/image";
import Link from "next/link";

interface FounderCardProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

export default function FounderCard({
  name,
  role,
  image,
  linkedin,
}: FounderCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-indigo-500">
      {/* Image */}
      <div className="relative w-full h-[380px]">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Name & Role */}
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm opacity-90">{role}</p>
      </div>

      {/* LinkedIn */}
      {linkedin && (
        <Link
          href={linkedin}
          target="_blank"
          className="absolute bottom-4 right-4 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.98h4.56V24H.22V8.98zM8.98 8.98h4.38v2.05h.06c.61-1.16 2.11-2.38 4.34-2.38 4.64 0 5.5 3.05 5.5 7.02V24h-4.56v-6.66c0-1.59-.03-3.64-2.22-3.64-2.23 0-2.57 1.74-2.57 3.53V24H8.98V8.98z" />
          </svg>
        </Link>
      )}
    </div>
  );
}
