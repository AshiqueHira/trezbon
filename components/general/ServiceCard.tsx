import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
}

export default function ServiceCard({
  title,
  description,
  image,
  href = "#",
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-xl bg-black h-[260px]"
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 p-5 text-white">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          {title}
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </h3>
        <p className="mt-2 text-sm text-gray-200 leading-snug">{description}</p>
      </div>
    </Link>
  );
}
