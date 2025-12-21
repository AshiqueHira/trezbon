import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
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

            <div className="text-sm space-y-3 opacity-90">
              <p className="font-semibold">Corporate headquarters</p>
              <p>
                Office No. 17, Dubai Internet City
                <br />
                Dubai, UAE
              </p>

              <p className="font-semibold mt-6">Legal mailing address</p>
              <p>
                Trezbon Technologies,
                <br />
                Cyberpark, Calicut, Kerala
              </p>

              <p className="font-semibold mt-6">Contact Numbers</p>
              <p>Dubai Office: 00971-42714437</p>
              <p>Dubai Mobile: 00971-544950361</p>
              <p>Calicut Office: +91 94466 73594</p>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-medium mb-4">Platform</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li>
                <Link href="#">Services</Link>
              </li>
              <li>
                <Link href="#">Products</Link>
              </li>
              <li>
                <Link href="#">edfkjo</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li>
                <Link href="#">About</Link>
              </li>
              <li className="flex items-center gap-2">
                <Link href="#">Careers</Link>
                <span className="bg-teal-400 text-black text-xs px-2 py-0.5 rounded">
                  HIRING
                </span>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Help Center</Link>
              </li>
              <li>
                <Link href="#">Support</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm opacity-90">
          <p>© 2025 Trezbon. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="#">Terms and Conditions</Link>
            <Link href="#">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
