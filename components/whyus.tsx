
import {
  BadgeCheck,
  Building2,
  Handshake,
  Headset,
  SlidersHorizontal,
  Wrench,
} from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Experienced Leadership",
    text: "Management experience in fleet operations, customer service, and transportation solutions.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible Solutions",
    text: "Rental arrangements shaped around duration, fleet size, vehicle category, and usage.",
  },
  {
    icon: Building2,
    title: "Corporate Capability",
    text: "Solutions for organizations, project teams, and different operational requirements.",
  },
  {
    icon: Handshake,
    title: "Transparent Approach",
    text: "Clear quotations and defined inclusions, exclusions, and rental terms.",
  },
  {
    icon: Headset,
    title: "Responsive Coordination",
    text: "Communication and vehicle delivery planning aligned with the agreed package.",
  },
  {
    icon: Wrench,
    title: "Fleet Care",
    text: "Planned servicing and routine inspections to support vehicle readiness.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-cars" className="bg-[#f4f8fc] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2870b8]">
            Why choose CARS?
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#102d4d] md:text-5xl">
            Confidence at every stage.
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            We combine customer-focused service with practical mobility
            solutions designed for Qatar’s businesses and communities.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-lg border border-slate-200 bg-white p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#e5f0fb] text-[#17538f]">
                <Icon size={24} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#102d4d]">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
