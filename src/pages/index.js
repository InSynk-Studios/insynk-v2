import { Hero, About, Services } from "@/features";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <About />
        <Services />
        <h1
          id="ContactForm"
          className="flex justify-center items-center h-screen text-5xl font-bold underline"
        >
          Hello world!
        </h1>
        <h1 className="flex justify-center items-center h-screen text-5xl font-bold underline">
          Hello world!
        </h1>
      </div>
    </>
  );
}
