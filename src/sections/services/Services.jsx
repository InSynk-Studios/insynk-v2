import React from "react";
import { Button, Card } from "@/components/Elements";
import Image from "next/image";
import { serviceData } from "./servicesData";

export const Services = () => {
  return (
    <section className="flex flex-col justify-start items-center gap-12 text-center mt-32 w-full bg-brand-background-200">
      <div className="mt-10">
        <h1 className="font-tanker-400 font-normal text-4xl text-brand-primary-400">
          We can help you with
        </h1>
      </div>
      <div className="w-2/3">
        {serviceData?.map((item) => (
          <Card
            key={item.id}
            cardBgColor={item.color}
            className="w-full 4xl:w-[1019px] h-[403px] mb-16 service-card-background"
          >
            <div className="flex items-center justify-between h-full 2xl:justify-center xl:gap-8 3xl:gap-12 px-5 xl:px-16 xl:py-14">
              <Image priority src={item.image} alt="" />
              <div className="flex flex-col items-start justify-between h-full">
                <div className="text-left space-y-3">
                  <h1 className="font-tanker-400 font-normal leading-[65px] text-brand-primary-400 text-3xl md:text-5xl w-full">
                    {item.id}. {item.title}
                  </h1>
                  <p className="h-fit font-dmsans-400 tracking-[-0.015em] leading-6 font-normal text-sm md:text-base w-full">
                    {item.description}
                  </p>
                </div>
                <Button
                  variant="none"
                  isSketch={true}
                  className="font-clashgrotesk-500 h-14 bottom-0"
                >
                  Read More
                </Button>
              </div>
              <div className="card-overlay xl:w-4/5 3xl:w-3/4 4xl:w-2/3">
                <Image
                  priority
                  src={item.overlay}
                  className="arrow-flip"
                  alt=""
                />
                <p className="font-caveat-400 text-xl">
                  Bringing out the best possible solutions in the most creative
                  way
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
