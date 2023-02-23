import React from "react";
import Typical from "react-typical";
import HeroIllustration from "@/assets/illustration/hero_illustration.svg";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center h-screen mt-8 w-2/3">
      <div className="font-tanker-400 font-normal text-2xl sm:text-6xl">
        <h1 className="text-brand-primary-400">
          We believe in creating products which are{" "}
          <span className="text-brand-primary-100">InSynk</span> with the future
        </h1>
        <Typical
          loop={Infinity}
          wrapper="h1"
          steps={["Hello", 1000, "Everyone", 1000, "!", 1000]}
        />
      </div>
      <Image priority src={HeroIllustration} alt="" />
    </section>
  );
};
