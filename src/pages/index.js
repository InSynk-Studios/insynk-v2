import { Hero, About, Services, Principles } from "@/features";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <About />
        <Services />
        <Principles />
        <h1
          id="ContactForm"
          className="flex justify-center items-center h-screen text-5xl font-bold underline"
        >
          Hello world!
        </h1>
      </div>
    </>
  );
}
