import React from "react";
import "animate.css";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import HeroIllustration from "@/assets/illustration/hero/hero_illustration.svg";
import Creativity from "@/assets/illustration/hero/creativity.svg";
import Tech from "@/assets/illustration/hero/tech.svg";
import BusinessDriven from "@/assets/illustration/hero/business_driven.svg";
import BestInIndustry from "@/assets/illustration/hero/best_in_industry.svg";

export const Hero = () => {
  const [displayCreativity, setDisplayCreativity] = useState(false);
  const [displayTech, setDisplayTech] = useState(false);
  const [displayBusinessDriven, setDisplayBusinessDriven] = useState(false);
  const [displayBestInIndustry, setDisplayBestInIndustry] = useState(false);
  const [displayText, setDisplayText] = useState(false);

  return (
    <section className="flex flex-col justify-center items-center text-center h-screen mt-16 w-11/12 md:w-2/3">
      <div className="font-tanker-400 text-brand-primary-400 font-normal leading-[87px] mb-10 h-32 w-4/5 xl:w-11/12 3xl:w-5/6 text-5xl lg:text-[64px]">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(50)
              .typeString(
                `We are the reliable tech <span style="color: #FDA567;">partner</span> that you are looking for`
              )
              .callFunction(() => {
                setDisplayTech(true);
              })
              .pauseFor(2500)
              .changeDeleteSpeed(30)
              .deleteChars(46);
            typewriter
              .changeDelay(50)
              .typeString(
                `<span style="color: #FDA567;">collaborative</span> team that you need`
              )
              .callFunction(() => {
                setDisplayCreativity(true);
              })
              .pauseFor(2500)
              .changeDeleteSpeed(30)
              .deleteChars(40);
            typewriter
              .changeDelay(50)
              .typeString(
                `aim to thrive on your <span style="color: #FDA567;">trust</span>`
              )
              .callFunction(() => {
                setDisplayBusinessDriven(true);
              })
              .pauseFor(2500)
              .changeDeleteSpeed(30)
              .deleteAll();
            typewriter
              .changeDelay(50)
              .typeString(
                `Let’s build <span style="color: #FDA567;">together</span> !`
              )
              .callFunction(() => {
                setDisplayBestInIndustry(true);
              })
              .pauseFor(2500)
              .callFunction(() => {
                setDisplayText(true);
              })
              .start();
          }}
        />
      </div>
      <div className="grid grid-cols-4 h-[363px] w-[1040px] mt-10">
        <div
          className={`relative h-full w-full place-self-center xl:-mr-32 ${
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
          >
          
          </span>
        </div>
        <div
          className={`relative h-full w-5/6 place-self-end xl:mr-12 ${
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
          className={`relative h-full w-full place-self-center xl:-ml-40 xl:-mb-32 ${
            displayBestInIndustry && "animate__animated animate__fadeIn"
          }`}
        >
          {displayBestInIndustry && (
            <Image priority fill src={BestInIndustry} alt="" />
          )}
        </div>
      </div>
      {displayText && (
              <h2 className="font-caveat-700 text-3xl font-bold">
                Insynk studios
              </h2>
            )}
    </section>
  );
};
