
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Our Fleet", href: "/#fleet" },
  { label: "Why CARS", href: "/#why-cars" },
  { label: "Corporate Mobility", href: "/corporate-mobility" },
  { label: "Individual Rentals", href: "/individual-rentals" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
   <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
  <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
    <Link href="/" className="flex shrink-0 items-center">
      <Image
        src="/car.png"
        alt="CARS City Auto Rentals & Services"
        width={800}
        height={280}
        priority
        className="!h-48 !w-auto max-w-none object-contain"
      />
    </Link>

        <div className="hidden items-center gap-5 xl:flex">
          {links.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className="text-xs font-semibold text-slate-600 transition-colors duration-200 hover:!text-[#17538f]"
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://wa.me/97471488000?text=Hello%20CARS%2C%20I%27d%20like%20to%20request%20a%20vehicle%20rental%20quotation."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#17538f] px-4 py-3 text-xs font-semibold !text-white transition-colors duration-200 hover:bg-[#f4f8fc] hover:!text-[#17538f]"
          >
            Get a quote
            <ArrowUpRight size={15} />
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-md border border-slate-200 p-2 text-[#102d4d] transition-colors hover:border-[#17538f] hover:text-[#17538f] xl:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-[#f4f8fc] hover:!text-[#17538f]"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="https://wa.me/97471488000?text=Hello%20CARS%2C%20I%27d%20like%20to%20request%20a%20vehicle%20rental%20quotation."
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-[#17538f] px-4 py-3 text-center text-sm font-semibold !text-white transition-colors duration-200 hover:bg-[#f4f8fc] hover:!text-[#17538f]"
            >
              Get a quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
