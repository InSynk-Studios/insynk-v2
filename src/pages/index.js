import { CarouselRow } from "@/components/Carousel";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="flex justify-center items-center h-screen text-5xl font-bold underline">
          Hello world!
        </h1>
        <div className="mx-32 w-4/5">
          <CarouselRow />
        </div>
      </div>
    </>
  );
}
