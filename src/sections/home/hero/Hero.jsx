import React from "react";
import Image from "next/image";
import HeroIllustration from "@/assets/illustration/hero/insynk_landing_page_illustration.svg";

export const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center mt-32 sm:mt-36 lg:mt-40 w-11/12 lg:w-5/6">
      <h1 className="font-recoleta-500 text-brand-primary-400 font-medium leading-[33px] sm:leading-[60px] lg:leading-[87px] mb-10 w-full 3xl:w-5/6 text-2xl sm:text-5xl lg:text-[64px]">
        We <span className="text-brand-primary-100">build</span> your ideas,
        while you spark interest in{" "}
        <span className="text-brand-primary-100">your customers</span>
      </h1>
      <div className="relative w-full h-[158px] md:h-[363px] lg:w-[1040px] lg:mt-10">
        <Image priority fill src={HeroIllustration} alt="" />
      </div>
    </section>
  );
};
