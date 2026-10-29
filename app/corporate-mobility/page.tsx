
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Gauge,
  Users,
  Truck,
} from "lucide-react";
const solutions = [
  {
    icon: Users,
    title: "Employee & Management Mobility",
    text: "Rental programs shaped around workforce size, locations, usage patterns, and service expectations.",
  },
  {
    icon: Building2,
    title: "Executive & Client Transportation",
    text: "Vehicle options for executive travel, client visits, and business transportation requirements.",
  },
  {
    icon: Truck,
    title: "Field Teams & Project Mobilization",
    text: "Support for sales and service teams, temporary workforce needs, pickups, vans, and staff buses.",
  },
  {
    icon: Gauge,
    title: "Fleet Visibility & Cost Control",
    text: "Control tools for monitoring driving behavior and fuel consumption to help organizations manage operating costs.",
  },
];

const benefits = [
  "Account-based coordination for requirements, documentation, and service communication.",
  "Flexible fleet composition according to job function, passenger needs, and operating environment.",
  "Structured rental terms to support budgeting and reduce ownership-related administration.",
  "Maintenance planning and replacement assistance according to the agreed package.",
  "Options that can scale from one vehicle to a broader fleet program.",
];

export default function CorporateMobilityPage() {
  return (
    <main>
        <Navbar />
      <section className="route-hero">
        <div className="route-container route-hero-grid corporate-hero-grid">
          <div>
            <p className="route-eyebrow">BUSINESS MOBILITY</p>

            <h1>
              A fleet partner that{" "}
              <span>understands business.</span>
            </h1>

            <p className="route-lead">
              Corporate mobility is about more than supplying vehicles.
              CARS develops rental programs around your workforce,
              locations, usage patterns, and service expectations.
            </p>

            <div className="route-actions">
              <a
                className="route-button"
                href="https://wa.me/97471488000?text=Hello%20CARS%2C%20I%27d%20like%20to%20discuss%20corporate%20mobility%20solutions."
              >
                Discuss a fleet solution
                <ArrowRight size={17} />
              </a>

              <Link
                className="route-button route-button-light"
                href="/#fleet"
              >
                Explore our fleet
              </Link>
            </div>
          </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-lg bg-[#124779] p-6 text-white shadow-[0_12px_30px_#123e6726] md:p-7">
                <span className="text-[11px] font-extrabold tracking-[0.16em] text-[#b8d8f6]">
                  CORPORATE FLEET SOLUTIONS
                </span>

                <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                  Built around the way your team works.
                </h2>

                <p className="mt-3 text-sm leading-6 text-white/85">
                  From a single vehicle to a wider fleet program, solutions
                  can be aligned to your operational requirements.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded border border-white/40 px-3 py-2 text-[11px] text-white">
                    Flexible durations
                  </span>
                  <span className="rounded border border-white/40 px-3 py-2 text-[11px] text-white">
                    Scalable fleet
                  </span>
                  <span className="rounded border border-white/40 px-3 py-2 text-[11px] text-white">
                    Coordinated support
                  </span>
                </div>
              </div>

              <div className="relative aspect-[93/55] w-full overflow-hidden rounded-xl bg-[#e5edf5] shadow-[0_22px_55px_#123e6726]">
                <Image
                  src="/cars3.png"
                  alt="CARS vehicles ready for corporate fleet mobility"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
        </div>
      </section>

      <section className="route-section">
        <div className="route-container">
          <p className="route-eyebrow">CORPORATE SOLUTIONS</p>

          <h2 className="route-heading">
            Mobility for people, projects, and operations.
          </h2>

          <div className="route-card-grid">
            {solutions.map(({ icon: Icon, title, text }) => (
              <article className="route-card" key={title}>
                <span className="route-icon">
                  <Icon size={22} />
                </span>

                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="route-section route-section-muted">
        <div className="route-container route-two-col">
          <div>
            <p className="route-eyebrow">
              CORPORATE SERVICE ADVANTAGES
            </p>

            <h2 className="route-heading">
              Clear coordination. Flexible planning.
            </h2>

            <p className="route-lead">
              CARS aims to help organizations plan fleet requirements
              and keep operations moving, with service provisions
              confirmed in the rental agreement.
            </p>
          </div>

          <ul className="route-check-list">
            {benefits.map((benefit) => (
              <li key={benefit}>
                <CheckCircle2 size={19} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="route-cta">
        <div className="route-container route-cta-inner">
          <div>
            <p className="route-eyebrow">LET’S PLAN YOUR FLEET</p>

            <h2>Tell us what your operation needs.</h2>

            <p>
              Share your vehicle categories, quantity, rental period,
              delivery location, and expected start date. CARS can
              prepare a proposal subject to availability and approved
              terms.
            </p>
          </div>

          <a
            className="route-button route-button-white"
            href="https://wa.me/97471488000?text=Hello%20CARS%2C%20please%20contact%20me%20about%20a%20corporate%20fleet%20quotation."
          >
            Request a corporate quote
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
