
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8fc]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#2870b8]">
            City Auto Rentals & Services
          </p>

          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-[#102d4d] md:text-6xl">
            Confidence.
            <br />
            Convenience.
            <br />
            <span className="text-[#2870b8]">Mobility.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
            Flexible vehicle rental and leasing solutions for businesses,
            residents, and visitors across Qatar. From one vehicle to a
            tailored corporate fleet, CARS helps keep you moving.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/97471488000?text=Hello%20CARS%2C%20I%27d%20like%20to%20request%20a%20vehicle%20rental%20quotation."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#17538f] px-6 py-4 text-sm font-semibold !text-white transition hover:bg-[#103e6d] hover:!text-white"
            >
              Get a quotation <ArrowRight size={17} />
            </a>

            <Link
              href="#services"
              className="rounded-md border border-slate-300 bg-white px-6 py-4 text-sm font-semibold text-[#17538f] transition hover:border-[#17538f] hover:!text-[#17538f]"
            >
              Explore our services
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm text-slate-600">
            <ShieldCheck className="text-[#2870b8]" size={22} />
            <span>Reliable vehicles. Clear terms. Responsive support.</span>
          </div>
        </div>

        <div className="relative h-[320px] overflow-hidden rounded-bl-[5rem] rounded-tr-[5rem] bg-[#e5edf5] shadow-xl md:h-[470px]">
          <Image
            src="/cars1.png"
            alt="City Auto Rentals vehicle fleet"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
