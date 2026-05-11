import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsApp } from "@/components/site/WhatsApp";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground antialiased">
      <div className="grain-overlay hidden md:block" aria-hidden />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsApp />
    </main>
  );
}
