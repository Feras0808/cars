
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Chairman from "@/components/chairman";
import GM from "@/components/gm";
import Mission from "@/components/mission";
import Vision from "@/components/vision";
import Services from "@/components/services";
import Fleet from "@/components/fleet";
import WhyUs from "@/components/whyus";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ServiceRouteLinks from "@/components/service-route-links";
export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Chairman />
        <GM />
        <Mission />
        <Vision />
        <Services />
        <ServiceRouteLinks />
        <Fleet />
        <WhyUs />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
