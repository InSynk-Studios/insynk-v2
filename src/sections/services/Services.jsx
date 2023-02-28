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
            className="w-full h-96 mb-12 service-card-background"
          >
            <h1 className="absolute ml-12 mt-14 font-tanker-400 font-normal text-3xl md:text-5xl">
              {item.id}.
            </h1>
            <div className="flex items-center justify-between 2xl:justify-center 2xl:gap-12 p-12">
              <Image priority src={item.image} alt="" />
              <div className="text-left w-11/12 md:w-2/3">
                <h1 className="font-tanker-400 font-normal text-3xl md:text-5xl">
                  {item.title}
                </h1>
                <p className="h-fit my-5 font-dmsans-500 font-medium text-sm md:text-base">
                  {item.description}
                </p>
                <Button
                  variant="sketch"
                  isSketch={true}
                  className="font-clashgrotesk-500 h-14"
                >
                  Read More
                </Button>
              </div>
              <div className="card-overlay w-3/5">
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
