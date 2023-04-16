import {
  Hero,
  About,
  Services,
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
        <Services />
        <Principles />
        <Teams />
        <Testimonials />
      </main>
    </>
  );
}
