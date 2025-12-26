import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
];

export default function Header() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/curevepro.png"
              alt="Trezbon logo"
              width={32}
              height={32}
              priority
            />
            <span className="text-xl font-semibold tracking-tight">
              Trezbon
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-14">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-md font-medium text-gray-800 hover:text-black transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
