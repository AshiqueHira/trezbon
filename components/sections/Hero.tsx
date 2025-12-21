import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./HeroSlider";
import HeroFocus from "./HeroFocus";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-500 to-purple-500">
      <div className="mx-auto flex min-h-screen items-center max-w-7xl px-6 py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="text-white">
            <span className="text-sm opacity-80">
              All services at your fingertips
            </span>

            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Improve your business
              <br />
              efficiently with our services
            </h1>

            <p className="mt-6 max-w-xl text-lg text-white/80">
              Experience streamlined operations, optimized performance, and
              unparalleled support.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/services"
                className="rounded-md bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-100 transition"
              >
                Learn more
              </Link>
            </div>

            {/* Trusted By */}
            <div className="mt-12">
              <p className="text-sm opacity-80">Trusted by</p>
              <div className="mt-4 flex items-center gap-6 text-sm font-medium">
                <span>FocalPoint</span>
                <span>✦ Acme Corp</span>
              </div>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="relative hidden lg:block">
            {/* Main card */}
            <HeroFocus />
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_40%)]" />
    </section>
  );
}
