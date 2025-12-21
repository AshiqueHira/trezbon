"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import Image from "next/image";

const slides = [
  { image: "/images/one.jpg", title: "Industry renowned consultants" },
  { image: "/images/two.jpg", title: "Bridge your ideas to life with us" },
  { image: "/images/three.jpg", title: "Secure your digital landscape" },
];

export default function App() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Card slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

function Card({ slide }: { slide: { image: string; title: string } }) {
  return (
    <div className="w-[260px] h-[440px] rounded-2xl bg-white p-4 shadow-xl">
      <Image
        src={slide.image}
        alt={slide.title}
        width={260}
        height={440}
        draggable={false}
        className="rounded-xl object-cover"
      />
      <p className="mt-3 text-sm font-medium">{slide.title}</p>
    </div>
  );
}
