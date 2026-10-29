
import { CheckCircle2 } from "lucide-react";

const points = [
  "Flexible solutions for business and personal mobility",
  "Rental arrangements shaped around customer requirements",
  "A growing fleet across multiple vehicle categories",
  "Clear communication and responsive service coordination",
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2870b8]">
            About CARS
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#102d4d] md:text-5xl">
            Mobility built around people and business.
          </h2>
        </div>

        <div>
          <p className="text-base leading-8 text-slate-600">
            City Auto Rentals & Services (CARS) is a Qatar-based mobility
            solutions provider established to deliver dependable,
            flexible, and customer-focused vehicle rental and leasing
            services. We support companies, government-related entities,
            project teams, residents, and visitors with practical
            transportation solutions designed around their needs.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600">
            As a newly established company, CARS combines an agile approach
            with a management team experienced in fleet operations,
            customer service, and transportation solutions.
          </p>

          <ul className="mt-7 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-slate-700">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-[#2870b8]"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
