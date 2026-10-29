
import { Compass } from "lucide-react";

export default function Mission() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-start gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#e5f0fb] text-[#17538f]">
            <Compass size={25} />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2870b8]">
              Our mission
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#102d4d]">
              Making mobility easier for every customer.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              To provide safe, dependable, and flexible vehicle rental and
              leasing services through operational excellence, practical
              innovation, and a commitment to understanding and exceeding
              customer expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
