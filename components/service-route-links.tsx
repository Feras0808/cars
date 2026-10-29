
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  CarFront,
} from "lucide-react";

const routes = [
  {
    href: "/corporate-mobility",
    title: "Corporate Mobility",
    description:
      "Fleet programs for organizations, employee and executive mobility, project mobilization, and operational support.",
    link: "Explore corporate solutions",
    icon: Building2,
  },
  {
    href: "/individual-rentals",
    title: "Individual Rentals",
    description:
      "Daily, weekly, monthly, and longer-term rental options for residents, visitors, families, and business travellers.",
    link: "Explore individual rentals",
    icon: CarFront,
  },
];

export default function ServiceRouteLinks() {
  return (
    <section className="service-route-section">
      <div className="service-route-container">
        <p className="service-route-eyebrow">
          CHOOSE YOUR MOBILITY SOLUTION
        </p>

        <h2>Different needs. Dedicated solutions.</h2>

        <div className="service-route-grid">
          {routes.map(
            ({ href, title, description, link, icon: Icon }) => (
              <article
                className="service-route-card"
                key={href}
              >
                <span className="service-route-icon">
                  <Icon size={23} />
                </span>

                <h3>{title}</h3>
                <p>{description}</p>

                <Link href={href}>
                  {link}
                  <ArrowUpRight size={17} />
                </Link>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
