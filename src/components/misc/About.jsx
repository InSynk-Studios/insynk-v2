import React from "react";
import AboutSectionFirstSvg from "@/assets/illustration/about_section_first.svg";
import AboutSectionSecondSvg from "@/assets/illustration/about_section_second.svg";
import CurvedLine from "@/assets/illustration/curved_line.svg";
import Image from "next/image";

export const About = () => {
  return (
    <section className="flex flex-col gap-20 justify-center items-center h-screen mt-8 w-2/3">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="text-brand-primary-600 font-tanker-400 leading-10 font-normal text-2xl sm:text-5xl">
            we are a product studio who love to build{" "}
            <span className="text-brand-primary-700 flex flex-col w-fit">
              <p>disuptive products</p>
              <Image priority src={CurvedLine} alt="" />
            </span>
          </h1>
          <p className="font-dmsans-400 font-normal leading-7 tracking-tight text-xl">
            We help founders and teams with the craziest world-changing vision
            to build out their ideas to disruptive products with our technical
            expertise.
          </p>
        </div>
        <Image priority src={AboutSectionFirstSvg} alt="" />
      </div>

      <div className="flex flex-row justify-between items-center">
        <div className="w-2/4">
          <h1 className="text-brand-primary-600 font-tanker-400 font-normal leading-10 text-2xl sm:text-4xl">
            process driven artists with a knack to solve problems
          </h1>
          <p className="font-dmsans-400 font-normal leading-7 tracking-tight text-xl">
            We are a team of extensive thinkers and curious and artists who are
            detail-oriented in everything we do. There is a process to our art
            which converts ideas into reality.
          </p>
        </div>
        <Image priority src={AboutSectionSecondSvg} alt="" />
      </div>
    </section>
  );
};
