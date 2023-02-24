import React from "react";
import { Carousel } from "@/components/Elements";
import { CarouselData } from "./CarouselData";

export const Principles = () => {
  return (
    <section className="flex flex-col justify-start items-center mt-32 w-3/4">
      <div className="grid grid-rows-2 sm:grid-cols-2 w-2/3">
        <h1 className="font-tanker-400 text-4xl leading-10 tracking-tighter w-2/3">
          set of principles which we live by
        </h1>
        <p className="font-dmsans-400 font-normal">
          At InSynk, we follow a strong set of principles which guide us to who
          we are, what we aspire to do in the future and what{" "}
          <strong>makes working with us special.</strong>
        </p>
      </div>
      <Carousel CarouselData={CarouselData} />
    </section>
  );
};
