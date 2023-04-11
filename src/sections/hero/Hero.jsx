import React from "react";
import "animate.css";
import { useState } from "react";
import Image from "next/image";
import HeroIllustration from "@/assets/illustration/hero/hero_illustration.svg";
import Creativity from "@/assets/illustration/hero/creativity.svg";
import Tech from "@/assets/illustration/hero/tech.svg";
import BusinessDriven from "@/assets/illustration/hero/business_driven.svg";
import BestInIndustry from "@/assets/illustration/hero/best_in_industry.svg";

export const Hero = () => {
  const [displayCreativity, setDisplayCreativity] = useState(true);
  const [displayTech, setDisplayTech] = useState(true);
  const [displayBusinessDriven, setDisplayBusinessDriven] = useState(true);
  const [displayBestInIndustry, setDisplayBestInIndustry] = useState(true);
  const [displayText, setDisplayText] = useState(true);

  return (
    <section className="flex flex-col justify-center items-center text-center h-screen mt-20 w-11/12 lg:w-5/6">
      <h1 className="font-recoleta-500 text-brand-primary-400 font-medium leading-8 sm:leading-[87px] mb-10 w-full 3xl:w-5/6 text-2xl sm:text-5xl lg:text-[64px]">
        We believe in creating products which are{" "}
        <span className="text-brand-primary-100">InSynk</span> with the future
      </h1>
      <div className="grid grid-cols-4 w-full h-[200px] md:h-[363px] lg:w-[1040px] mt-10">
        <div
          className={`relative h-full w-full place-self-center xl:-mr-36 xl:-mt-12 ${
            displayCreativity && "animate__animated animate__fadeIn"
          }`}
        >
          {displayCreativity && <Image priority fill src={Creativity} alt="" />}
        </div>
        <div className="relative h-full w-full flex flex-col row-span-2 col-span-2 place-self-center">
          <Image priority src={HeroIllustration} fill alt="" />
          <span
            className={`${
              displayText && "animate__animated animate__fadeIn"
            } absolute bottom-0 left-1/3`}
          ></span>
        </div>
        <div
          className={`relative h-full w-5/6 place-self-end xl:mr-12 xl:pt-12 ${
            displayBusinessDriven && "animate__animated animate__fadeIn"
          }`}
        >
          {displayBusinessDriven && (
            <Image priority fill src={BusinessDriven} alt="" />
          )}
        </div>
        <div
          className={`relative h-full w-3/4 place-self-end xl:-mr-16 ${
            displayTech && "animate__animated animate__fadeIn"
          }`}
        >
          {displayTech && <Image priority fill src={Tech} alt="" />}
        </div>
        <div
          className={`relative h-full w-full place-self-center xl:-ml-72 xl:-mb-20 ${
            displayBestInIndustry && "animate__animated animate__fadeIn"
          }`}
        >
          {displayBestInIndustry && (
            <Image priority fill src={BestInIndustry} alt="" />
          )}
        </div>
      </div>
      {displayText && (
        <h2 className="font-caveat-700 text-3xl font-bold">Insynk studios</h2>
      )}
    </section>
  );
};
