
import { Eye } from "lucide-react";

export default function Vision() {
  return (
    <section className="bg-[#f4f8fc] py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-start gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-[#17538f] shadow-sm">
            <Eye size={25} />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2870b8]">
              Our vision
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#102d4d]">
              Qatar’s preferred mobility partner.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              To become Qatar’s preferred mobility partner by delivering
              reliable transportation solutions, exceptional customer
              experiences, and long-term value for businesses and
              individuals alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
