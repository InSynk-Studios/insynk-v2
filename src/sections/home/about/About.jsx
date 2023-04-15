import React, { useEffect, useState } from "react";
import Image from "next/image";
import AboutSectionFirstSvg from "@/assets/illustration/about_section_first.svg";
import AboutSectionSecondSvg from "@/assets/illustration/about_section_second.svg";
import CurvedLine from "@/assets/illustration/curved_line.svg";

export const About = () => {
  const [hideOnMobile, setHideOnMobile] = useState(false);
  const [showOnMobile, setShowOnMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 430) {
        setHideOnMobile(true);
        setShowOnMobile(false);
      } else if (window.innerWidth < 430) {
        setHideOnMobile(false);
        setShowOnMobile(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="flex flex-col justify-center items-center gap-[120px] mt-12 lg:mt-20 w-11/12 xl:w-4/5">
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
        <div>
          <h1 className="text-brand-primary-400 font-recoleta-500 leading-9 sm:leading-[43px] lg:leading-[54px] font-normal text-2xl sm:text-[32px] lg:text-[40px] lg:w-3/4 mb-4">
            Our love for building the unexpected{" "}
            <span className="text-brand-primary-100">
              is contagious!
              <span className="relative h-2 lg:flex justify-center lg:justify-end left-1/3 md:w-3/5 hidden">
                <Image priority fill src={CurvedLine} alt="" />
              </span>
            </span>
          </h1>
          {showOnMobile && (
            <span className="w-full">
              <Image
                priority
                src={AboutSectionFirstSvg}
                className="h-56 lg:h-full"
                alt=""
              />
            </span>
          )}
          <p className="font-dmsans-400 font-normal leading-[18px] sm:leading-5 lg:leading-7 tracking-[-0.015em] lg:w-4/5 text-xs lg:text-xl">
            Our mission is to help founders and teams with the boldest, most
            visionary ideas bring them to life. With our technical expertise, we
            help turn those ideas into disruptive products that change the game.
          </p>
        </div>
        {hideOnMobile && (
          <span className="w-full">
            <Image
              priority
              src={AboutSectionFirstSvg}
              className="h-56 lg:h-full"
              alt=""
            />
          </span>
        )}
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
        <div>
          <h1 className="text-brand-primary-400 font-recoleta-500 leading-9 sm:leading-[43px] lg:leading-[54px] font-normal text-2xl sm:text-[32px] lg:text-[40px] sm:mr-4 lg:mr-0 lg:w-3/4 mb-4">
            The art of problem-solving is our forte
          </h1>
          {showOnMobile && (
            <span className="w-full">
              <Image
                priority
                src={AboutSectionSecondSvg}
                className="h-56 md:h-full"
                alt=""
              />
            </span>
          )}
          <p className="font-dmsans-400 font-normal leading-[18px] sm:leading-5 lg:leading-7 tracking-[-0.015em] lg:w-4/5 text-xs lg:text-xl">
            At our studio, we believe that great art requires both a
            process-driven approach and a curious mind, and our team of talented
            artists embodies this philosophy to deliver exceptional results.
          </p>
        </div>
        {hideOnMobile && (
          <span className="w-full">
            <Image
              priority
              src={AboutSectionSecondSvg}
              className="h-56 md:h-full"
              alt=""
            />
          </span>
        )}
      </div>
    </section>
  );
};