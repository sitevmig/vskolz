import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Masters from "@/components/sections/Masters";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Booking from "@/components/sections/Booking";
import Contacts from "@/components/sections/Contacts";
import Footer from "@/components/sections/Footer";

export default function Landing() {
  return (
    <main data-testid="landing-page" className="min-h-screen bg-[#F5EFE6] text-[#2A2724]">
      <Header />
      <Hero />
      <About />
      <Services />
      <Masters />
      <Gallery />
      <Testimonials />
      <Booking />
      <Contacts />
      <Footer />
    </main>
  );
}
