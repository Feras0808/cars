
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "About CARS", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Our Fleet", href: "/#fleet" },
  { label: "Why CARS", href: "/#why-cars" },
  { label: "Corporate Mobility", href: "/corporate-mobility" },
  { label: "Individual Rentals", href: "/individual-rentals" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b223b] text-white">
  <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
    <div>
      <Link href="/" className="inline-block">
        <Image
          src="/car.png"
          alt="CARS City Auto Rentals & Services"
          width={500}
          height={175}
          priority
          className="!h-24 !w-auto max-w-none object-contain"
        />
      </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
            Flexible vehicle rental and leasing solutions for businesses,
            residents, and visitors across Qatar.
          </p>

          <p className="mt-5 text-xs font-semibold tracking-wide text-[#9fc9f2]">
            CONFIDENCE. CONVENIENCE. MOBILITY.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider">
            Quick links
          </h2>

          <ul className="mt-5 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href + link.label}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:!text-[#9fc9f2]"
                >
                  {link.label}
                  <ArrowUpRight size={13} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider">
            Contact CARS
          </h2>

          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <p className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-[#9fc9f2]" />
              City Tower, Doha, Qatar
            </p>

            <a
              href="tel:+97471488000"
              className="flex items-center gap-3 transition hover:!text-[#9fc9f2]"
            >
              <Phone size={18} className="text-[#9fc9f2]" />
              +974 71488000
            </a>

            <a
              href="mailto:Sales@city-autorentals.com"
              className="flex items-center gap-3 break-all transition hover:!text-[#9fc9f2]"
            >
              <Mail size={18} className="shrink-0 text-[#9fc9f2]" />
              Sales@city-autorentals.com
            </a>
          </div>

          <a
            href="https://wa.me/97471488000?text=Hello%20CARS%2C%20I%27d%20like%20to%20make%20an%20enquiry."
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold !text-black transition hover:bg-[#e5f0fb] hover:!text-black"
          >
            Contact us on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 City Auto Rentals & Services. All rights reserved.</p>
          <p>Doha, State of Qatar</p>
        </div>
      </div>
    </footer>
  );
}
