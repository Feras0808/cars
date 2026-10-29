
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2870b8]">
            Contact us
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#102d4d] md:text-5xl">
            Let’s find the right mobility solution.
          </h2>

          <p className="mt-5 max-w-xl leading-8 text-slate-600">
            Tell us your vehicle requirements, rental period, quantity,
            and expected start date. Our team can discuss a suitable
            solution based on availability and approved terms.
          </p>

          <div className="mt-8 space-y-5">
            <a
              href="tel:+97471488000"
              className="flex items-center gap-4 text-slate-700"
            >
              <Phone className="text-[#2870b8]" size={21} />
              +974 71488000
            </a>

            <a
              href="mailto:Sales@city-autorentals.com"
              className="flex items-center gap-4 text-slate-700"
            >
              <Mail className="text-[#2870b8]" size={21} />
              Sales@city-autorentals.com
            </a>

            <div className="flex items-center gap-4 text-slate-700">
              <MapPin className="text-[#2870b8]" size={21} />
              City Tower, Doha, Qatar
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-[#f4f8fc] p-8 md:p-10">
          <MessageCircle size={32} className="text-[#2870b8]" />

          <h3 className="mt-5 text-2xl font-bold text-[#102d4d]">
            Request a quotation
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
            Contact us directly on WhatsApp to tell us about your
            requirements and preferred rental period.
          </p>

          <a
            href="https://wa.me/97471488000?text=Hello%20CARS%2C%20I%27d%20like%20to%20request%20a%20vehicle%20rental%20quotation."
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#17538f] px-6 py-4 text-sm font-semibold !text-white transition hover:bg-[#103e6d] hover:!text-white"
          >
            <MessageCircle size={18} />
            Chat with CARS on WhatsApp
          </a>

          <p className="mt-4 text-xs leading-6 text-slate-500">
            Vehicle availability, prices, and rental conditions are
            confirmed by CARS when preparing your quotation.
          </p>
        </div>
      </div>
    </section>
  );
}
