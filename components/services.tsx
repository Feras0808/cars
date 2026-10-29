
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  CarFront,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: CalendarDays,
    title: "Daily & Weekly Rentals",
    description:
      "Flexible short-term mobility for residents, visitors, families, and business travellers.",
    href: "/individual-rentals",
  },
  {
    icon: CarFront,
    title: "Monthly & Long-Term Rentals",
    description:
      "Rental arrangements shaped around the required duration, vehicle category, and usage.",
    href: "/individual-rentals",
  },
  {
    icon: Building2,
    title: "Corporate Fleet Solutions",
    description:
      "Fleet programs for organizations, employee mobility, project teams, and business operations.",
    href: "/corporate-mobility",
  },
  {
    icon: Wrench,
    title: "Replacement & Support",
    description:
      "Maintenance coordination and replacement support in line with the selected rental package.",
    href: "/contact",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#f4f8fc] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2870b8]">
              What we do
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#102d4d]">
              Rental solutions for every journey.
            </h2>
          </div>

          <p className="max-w-lg leading-7 text-slate-600">
            Practical rental options for individual customers and
            organizations across Qatar.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description, href }) => (
            <article
              key={title}
              className="flex flex-col rounded-lg border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#e5f0fb] text-[#17538f]">
                <Icon size={24} />
              </div>

              <h3 className="text-lg font-bold text-[#102d4d]">
                {title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                {description}
              </p>

              <Link
                href={href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#17538f]"
              >
                Explore service <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
