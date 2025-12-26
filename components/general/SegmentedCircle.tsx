import Image from "next/image";

const images = [
  "/images/qatar.jpg",
  "/images/building.jpg",
  "/images/one.jpg",
  "/images/two.jpg",
  "/images/three.jpg",
  "/images/happy.jpg",
];

export default function SegmentedCircle() {
  return (
    <div className="relative w-[420px] h-[420px]">
      {images.map((src, index) => {
        const rotation = index * 60;

        return (
          <div
            key={index}
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {/* Trapezium Segment */}
            <div
              className="relative w-[160px] h-[110px] overflow-hidden"
              style={{
                clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
                transform: "translateY(-180px)",
              }}
            >
              <Image
                src={src}
                alt={`Segment ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
