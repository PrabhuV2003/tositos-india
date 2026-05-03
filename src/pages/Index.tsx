import PageLoader from "@/components/site/PageLoader";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Story from "@/components/site/Story";
import Difference from "@/components/site/Difference";
import Timeline from "@/components/site/Timeline";
import Stats from "@/components/site/Stats";
import Franchise from "@/components/site/Franchise";
import Menu from "@/components/site/Menu";
import Testimonials from "@/components/site/Testimonials";
import ContactSection from "@/components/site/ContactSection";
import Footer from "@/components/site/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <PageLoader />
      <Navbar />
      <Hero />
      <Story />
      <Difference />
      <Timeline />
      <Stats />
      <Franchise />
      <Menu />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
