import {
  Hero,
  About,
  Services,
  Principles,
  Teams,
  Contact,
  Testimonials,
} from "@/sections";

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center">
        <Hero />
        <About />
        <Services />
        <Principles />
        <Teams />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
