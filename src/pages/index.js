import { Hero, About, Services, Principles, Teams, Contact } from "@/sections";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <About />
        <Services />
        <Principles />
        <Teams />
        <Contact />
      </div>
    </>
  );
}
