import React from "react";
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
    <section className="flex flex-col justify-center items-center text-center h-screen mt-8 w-2/3">
      <div className="font-tanker-400 text-brand-primary-400 font-normal text-2xl sm:text-6xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `We are the reliable tech <span style="color: #FDA567;">partner</span> that you are looking for`
              )
              .callFunction(() => {
                setDisplayTech(true);
              })
              .pauseFor(2500)
              .deleteChars(46);
            typewriter
              .typeString(
                `<span style="color: #FDA567;">collaborative</span> team you need`
              )
              .callFunction(() => {
                setDisplayCreativity(true);
              })
              .pauseFor(2500)
              .deleteChars(35);
            typewriter
              .typeString(
                `aim to thrive on your <span style="color: #FDA567;">trust</span>`
              )
              .callFunction(() => {
                setDisplayBusinessDriven(true);
              })
              .pauseFor(2500)
              .deleteAll();
            typewriter
              .typeString(
                `Let’s build <span style="color: #FDA567;">together</span> :)`
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
      <div className="row-span-2 grid h-3/5 grid-cols-4 place-items-center">
        <div className="row-span-1">
          {displayCreativity ? (
            <Image priority src={Creativity} alt="" />
          ) : null}
        </div>
        <div className="row-span-2 col-span-2">
          <Image priority src={HeroIllustration} alt="" />
          {displayText ? (
            <h2 className="font-caveat-700 text-3xl">Insynk studios</h2>
          ) : null}
        </div>
        <div className="row-span-1">
          {displayBusinessDriven ? (
            <Image priority src={BusinessDriven} alt="" />
          ) : null}
        </div>
        <div>{displayTech ? <Image priority src={Tech} alt="" /> : null}</div>
        <div className="row-span-1">
          {displayBestInIndustry ? (
            <Image priority src={BestInIndustry} alt="" />
          ) : null}
        </div>
      </div>
    </section>
  );
};
