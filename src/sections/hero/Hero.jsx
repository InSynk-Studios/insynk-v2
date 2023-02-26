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
    <section className="flex flex-col justify-center items-center text-center h-screen mt-8 w-11/12 md:w-2/3">
      <div className="font-tanker-400 text-brand-primary-400 font-normal h-32 text-5xl sm:text-6xl">
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
                `<span style="color: #FDA567;">collaborative</span> team you need`
              )
              .callFunction(() => {
                setDisplayCreativity(true);
              })
              .pauseFor(2500)
              .changeDeleteSpeed(30)
              .deleteChars(35);
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
      <div className="grid h-3/5 grid-cols-4 w-full">
        <div
          className={`place-self-center xl:-mr-12 ${
            displayCreativity && "animate__animated animate__fadeInRight"
          }`}
        >
          {displayCreativity ? (
            <Image priority src={Creativity} alt="" />
          ) : null}
        </div>
        <div className="row-span-2 col-span-2 place-self-center">
          <Image priority src={HeroIllustration} alt="" />
          {displayText ? (
            <h2 className="font-caveat-700 text-3xl animate__animated animate__fadeUpBig">
              Insynk studios
            </h2>
          ) : null}
        </div>
        <div
          className={`row-span-1 place-self-end ${
            displayBusinessDriven && "animate__animated animate__fadeInDown"
          }`}
        >
          {displayBusinessDriven ? (
            <Image priority src={BusinessDriven} alt="" />
          ) : null}
        </div>
        <div
          className={`place-self-end xl:-mr-12 ${
            displayTech && "animate__animated animate__fadeInLeft"
          }`}
        >
          {displayTech ? <Image priority src={Tech} alt="" /> : null}
        </div>
        <div
          className={`place-self-center xl:-ml-40 ${
            displayBestInIndustry && "animate__animated animate__fadeInLeft"
          }`}
        >
          {displayBestInIndustry ? (
            <Image
              priority
              src={BestInIndustry}
              alt=""
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};
