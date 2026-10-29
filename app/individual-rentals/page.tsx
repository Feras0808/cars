
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CarFront,
  CheckCircle2,
  Clock3,
  MapPin,
} from "lucide-react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const audiences = [
  "Residents needing a temporary or long-term vehicle.",
  "Visitors and business travellers.",
  "Families needing extra space or a seven-seat SUV.",
  "Customers waiting for a new or repaired personal vehicle.",
  "Weekend, holiday, and special-occasion journeys.",
];

const benefits = [
  {
    icon: Clock3,
    title: "Flexible Rental Periods",
    text: "Daily, weekly, monthly, and longer-term arrangements, subject to approved terms.",
  },
  {
    icon: CarFront,
    title: "Vehicle Category Choice",
    text: "Options can include economical sedans, SUVs, pickups, vans, and buses, subject to availability.",
  },
  {
    icon: MapPin,
    title: "Delivery Options",
    text: "Delivery within Doha may be included or arranged depending on the package and location.",
  },
  {
    icon: CalendarDays,
    title: "Clear Rental Process",
    text: "Rental period, commercial terms, inclusions, exclusions, and required documents are explained before confirmation.",
  },
];

export default function IndividualRentalsPage() {
  return (
    <main>
        <Navbar />
      <section className="route-hero">
        <div className="route-container route-hero-grid">
          <div>
            <p className="route-eyebrow">
              PERSONAL & EVERYDAY MOBILITY
            </p>

            <h1>
              Your next journey, <span>made simpler.</span>
            </h1>

            <p className="route-lead">
              Whether you need a vehicle for a few days, several weeks,
              or a longer stay, CARS aims to make renting straightforward
              with clear guidance, suitable vehicle choices, and support
              throughout the rental period.
            </p>

            <div className="route-actions">
              <a
                className="route-button"
                href="https://wa.me/97471488000?text=Hello%20CARS%2C%20I%27d%20like%20to%20ask%20about%20individual%20car%20rental."
              >
                Ask about a rental
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

          <div className="route-feature-panel route-individual-panel">
            <span className="route-panel-kicker">
              INDIVIDUAL RENTALS
            </span>

            <h2>A practical option for changing plans.</h2>

            <p>
              Choose a rental period and vehicle category that fits
              your requirements. Availability, coverage, and support
              are confirmed in the rental agreement.
            </p>

            <div className="route-stat-row">
              <span>Daily & weekly</span>
              <span>Monthly</span>
              <span>Long-term</span>
            </div>
          </div>
        </div>
      </section>

      <section className="route-section">
        <div className="route-container route-two-col">
          <div>
            <p className="route-eyebrow">WHO IT’S FOR</p>

            <h2 className="route-heading">
              Mobility for everyday life in Qatar.
            </h2>

            <p className="route-lead">
              Rental needs change. CARS can discuss practical options
              for residents, visitors, families, and customers who
              need temporary transportation.
            </p>
          </div>

          <ul className="route-check-list">
            {audiences.map((audience) => (
              <li key={audience}>
                <CheckCircle2 size={19} />
                <span>{audience}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="route-section route-section-muted">
        <div className="route-container">
          <p className="route-eyebrow">RENTAL BENEFITS</p>

          <h2 className="route-heading">
            Know what to expect before you book.
          </h2>

          <div className="route-card-grid">
            {benefits.map(({ icon: Icon, title, text }) => (
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

      <section className="route-cta">
        <div className="route-container route-cta-inner">
          <div>
            <p className="route-eyebrow">REQUEST A RENTAL QUOTE</p>

            <h2>Tell us about your journey.</h2>

            <p>
              Share your preferred vehicle category, rental duration,
              delivery location, and expected start date. Pricing and
              allocation are confirmed based on availability and
              approved terms.
            </p>
          </div>

          <a
            className="route-button route-button-white"
            href="https://wa.me/97471488000?text=Hello%20CARS%2C%20I%27d%20like%20a%20rental%20quotation."
          >
            Request a rental quote
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
