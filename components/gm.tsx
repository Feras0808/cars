
import { Target } from "lucide-react";

export default function GM() {
  return (
    <section className="bg-[#f4f8fc] py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-[auto_1fr] md:items-start lg:px-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#dcecfb] text-[#17538f]">
          <Target size={28} />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2870b8]">
            Our approach
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#102d4d]">
            Service that starts with understanding your needs.
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-slate-600">
            Our approach is to understand each customer’s requirements
            before recommending a solution. By considering vehicle
            category, rental duration, usage, delivery location, and
            service expectations, CARS aims to provide a clear and
            coordinated rental experience from the first enquiry through
            vehicle handover and ongoing support.
          </p>

          <p className="mt-4 text-sm font-semibold text-[#17538f]">
            City Auto Rentals & Services — Your trusted partner on the road
          </p>
        </div>
      </div>
    </section>
  );
}
