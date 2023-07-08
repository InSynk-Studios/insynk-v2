import {
  Hero,
  About,
  ServicesSection,
  Principles,
  Teams,
  Testimonials,
} from "@/sections";

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center">
        <Hero />
        <About />
        <ServicesSection />
        <Principles />
        <Teams />
        <Testimonials />
      </main>
    </>
  );
}
