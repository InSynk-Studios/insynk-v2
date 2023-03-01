import React from "react";
import Image from "next/image";
import AboutSectionFirstSvg from "@/assets/illustration/about_section_first.svg";
import AboutSectionSecondSvg from "@/assets/illustration/about_section_second.svg";
import CurvedLine from "@/assets/illustration/curved_line.svg";

export const About = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-[120px] mt-12 lg:mt-20 w-11/12 xl:w-4/5">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="">
          <h1 className="text-brand-primary-400 font-tanker-400 leading-[54px] font-normal text-3xl lg:text-[40px] w-2/3 mb-4">
            Our love for building the unexpected{" "}
            <span className="text-brand-primary-500">
              is contagious!
              <span className="relative h-2 flex justify-center lg:justify-end left-1/4 md:w-3/5">
                <Image priority fill src={CurvedLine} alt="" />
              </span>
            </span>
          </h1>
          <p className="font-dmsans-400 font-normal leading-7 tracking-[-0.015em] w-4/5 text-base lg:text-xl">
            Our mission is to help founders and teams with the boldest, most
            visionary ideas bring them to life. With our technical expertise, we
            help turn those ideas into disruptive products that change the game.
          </p>
        </div>
        <Image
          priority
          src={AboutSectionFirstSvg}
          className="h-56 lg:h-full"
          alt=""
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="">
          <h1 className="text-brand-primary-400 font-tanker-400 font-normal leading-[54px] text-4xl lg:text-[40px] md:w-3/5 mb-4">
            The art of problem-solving is our forte
          </h1>
          <p className="font-dmsans-400 font-normal leading-7 tracking-[-0.015em] w-4/5 text-base lg:text-xl">
            At our studio, we believe that great art requires both a
            process-driven approach and a curious mind, and our team of talented
            artists embodies this philosophy to deliver exceptional results.
          </p>
        </div>
        <Image
          priority
          src={AboutSectionSecondSvg}
          className="h-56 md:h-full"
          alt=""
        />
      </div>
    </section>
  );
};
