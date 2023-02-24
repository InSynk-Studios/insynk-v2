import React from "react";
import AboutSectionFirstSvg from "@/assets/illustration/about_section_first.svg";
import AboutSectionSecondSvg from "@/assets/illustration/about_section_second.svg";
import CurvedLine from "@/assets/illustration/curved_line.svg";
import Image from "next/image";

export const About = () => {
  return (
    <section className="flex flex-col gap-36 justify-center items-center h-screen mt-20 w-4/5">
      <div className="flex flex-row justify-between items-center">
        <div className="w-1/2">
          <h1 className="text-brand-primary-400 font-tanker-400 leading-10 font-normal text-2xl sm:text-5xl">
            Our love for building the unexpected{" "}
            <span className="text-brand-primary-500">
              is contagious!
              <span className="flex justify-end w-4/5">
                <Image priority src={CurvedLine} alt="" />
              </span>
            </span>
          </h1>
          <p className="font-dmsans-400 font-normal leading-7 tracking-tight text-xl">
            Our mission is to help founders and teams with the boldest, most
            visionary ideas bring them to life. With our technical expertise, we
            help turn those ideas into disruptive products that change the game.
          </p>
        </div>
        <Image priority src={AboutSectionFirstSvg} alt="" />
      </div>

      <div className="flex flex-row justify-between items-center">
        <div className="w-2/4">
          <h1 className="text-brand-primary-400 font-tanker-400 font-normal leading-10 text-2xl sm:text-5xl">
            The art of problem-solving is our forte
          </h1>
          <p className="font-dmsans-400 font-normal leading-7 tracking-tight text-xl">
            At our studio, we believe that great art requires both a
            process-driven approach and a curious mind, and our team of talented
            artists embodies this philosophy to deliver exceptional results.
          </p>
        </div>
        <Image priority src={AboutSectionSecondSvg} alt="" />
      </div>
    </section>
  );
};
