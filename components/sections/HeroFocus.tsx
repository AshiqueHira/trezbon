import Image from "next/image";

export default function HeroRight() {
  return (
    <div className="relative w-full max-w-[540px] h-[520px]">
      {/* BACK EMPTY CARD */}
      <div className="absolute top-10 left-10 w-[460px] h-[460px] rounded-3xl bg-blue-400/40 z-0" />

      {/* LEFT TALL CARD */}
      <div className="absolute top-1 left-0 w-[260px] h-[400px] mt-16 rounded-3xl overflow-hidden shadow-xl z-20 border-3 border-indigo-400">
        <Image
          src="/images/two.jpg"
          alt="Bridge ideas"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
        <p className="absolute bottom-6 left-5 right-5 text-white text-sm font-medium">
          Bridge your ideas
          <br />
          to life with us
        </p>
      </div>

      {/* Right TOP CARD */}
      <div className="absolute top-0 right-0 w-[260px] h-[260px] rounded-3xl overflow-hidden shadow-xl z-10 border-3 border-indigo-400">
        <Image
          src="/images/one.jpg"
          alt="Industry consultants"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
        <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium">
          Industry renowned consultants
        </p>
      </div>

      {/* Right BOTTOM CARD */}
      <div className="absolute bottom-0 right-0 w-[260px] h-[240px] rounded-3xl overflow-hidden shadow-xl z-10 border-3 border-indigo-400">
        <Image
          src="/images/three.jpg"
          alt="Secure digital landscape"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
        <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium">
          Secure your digital landscape
        </p>
      </div>

      {/* FLOATING BADGES */}

      {/* 15+ Services */}
      <div className="absolute top-4 right-2 flex items-center gap-2 bg-indigo-500 text-white text-sm px-4 py-2 rounded-full shadow-lg z-30">
        <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">
          ★
        </span>
        15+ Services
      </div>

      {/* 50+ Services */}
      <div className="absolute bottom-8 left-44 bg-indigo-500 text-white px-5 py-3 rounded-2xl shadow-lg z-30">
        <p className="text-xl font-semibold leading-none">50+</p>
        <p className="text-sm">Services</p>
      </div>

      {/* 3+ Years */}
      <div className="absolute bottom-48 right-2 bg-indigo-500 text-white px-4 py-2 rounded-full shadow-lg z-30 text-sm">
        3+ Years of Experience
      </div>
    </div>
  );
}
