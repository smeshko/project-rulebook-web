import { Header, Footer } from "@/components/layout";
import {
  Hero,
  Features,
  HowItWorks,
  USP,
  Testimonials,
  Pricing,
  FinalCTA,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <USP />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
