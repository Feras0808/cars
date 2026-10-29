
import {
  ArrowRight,
  Bus,
  CarFront,
  Truck,
  Users,
} from "lucide-react";

const categories = [
  {
    icon: CarFront,
    title: "Economy & Compact Sedans",
    text: "For daily commuting, city travel, and cost-conscious mobility.",
  },
  {
    icon: CarFront,
    title: "Mid-Size & Premium Sedans",
    text: "For business travel, employee mobility, and executive requirements.",
  },
  {
    icon: Users,
    title: "SUVs",
    text: "For families, management travel, and additional passenger space.",
  },
  {
    icon: Truck,
    title: "Pickup Trucks & Vans",
    text: "For field teams, projects, cargo support, and operational transport.",
  },
  {
    icon: Bus,
    title: "Buses",
    text: "For workforce movement, group transportation, events, and projects.",
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2870b8]">
            Our fleet
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#102d4d] md:text-5xl">
            The right vehicle for the requirement.
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Our growing fleet is selected to balance comfort, efficiency,
            practicality, and value. Vehicle specifications and
            availability are confirmed when requesting a quotation.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-lg border border-slate-200 bg-white p-6"
            >
              <Icon size={28} className="text-[#2870b8]" />

              <h3 className="mt-5 text-lg font-bold text-[#102d4d]">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="https://wa.me/97471488000?text=Hello%20CARS%2C%20I%27d%20like%20to%20check%20vehicle%20availability."
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-md bg-[#17538f] px-6 py-4 text-sm font-semibold !text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#103e6d] hover:!text-white"
          >
            Ask about availability
            <ArrowRight
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>

        <p className="mt-5 text-xs leading-6 text-slate-500">
          Fleet availability and specifications may change. Final
          allocation is subject to customer requirements, approved
          quotation, and vehicle availability.
        </p>
      </div>
    </section>
  );
}
