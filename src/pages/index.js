import { About } from "@/components/misc/About";
import { Hero } from "@/components/misc/Hero";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <About />
        <h1
          id="ContactForm"
          className="flex justify-center items-center h-screen text-5xl font-bold underline"
        >
          Hello world!
        </h1>
        <h1 className="flex justify-center items-center h-screen text-5xl font-bold underline">
          Hello world!
        </h1>
        <h1 className="flex justify-center items-center h-screen text-5xl font-bold underline">
          Hello world!
        </h1>
      </div>
    </>
  );
}
