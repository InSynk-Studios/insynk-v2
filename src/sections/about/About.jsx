import React from "react";
import Image from "next/image";
import AboutSectionFirstSvg from "@/assets/illustration/about_section_first.svg";
import AboutSectionSecondSvg from "@/assets/illustration/about_section_second.svg";
import CurvedLine from "@/assets/illustration/curved_line.svg";

export const About = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-10 mt-12 lg:mt-20 w-11/12 xl:w-4/5">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-2/5 lg:w-2/4">
          <h1 className="text-brand-primary-400 font-tanker-400 leading-10 font-normal text-4xl lg:text-5xl mb-4">
            Our love for building the unexpected{" "}
            <span className="text-brand-primary-500">
              is contagious!
              <span className="flex justify-center lg:justify-end md:w-3/4">
                <Image
                  priority
                  src={CurvedLine}
                  className="w-32 lg:w-64"
                  alt=""
                />
              </span>
            </span>
          </h1>
          <p className="font-dmsans-400 font-normal leading-7 tracking-tight text-base lg:text-xl xl:text-2xl">
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
        <div className="md:w-2/5">
          <h1 className="text-brand-primary-400 font-tanker-400 font-normal leading-10 text-4xl lg:text-5xl mb-4">
            The art of problem-solving is our forte
          </h1>
          <p className="font-dmsans-400 font-normal leading-7 tracking-tight text-base lg:text-xl">
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
