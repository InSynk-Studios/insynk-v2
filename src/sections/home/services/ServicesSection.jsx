import React from "react";
import { Button, Card } from "@/components/Elements";
import Image from "next/image";
import { serviceData } from "./servicesData";
import Link from "next/link";

export const ServicesSection = () => {
  return (
    <section className="flex flex-col justify-start items-center gap-12 text-center mt-32 w-full bg-brand-background-200">
      <h1 className="font-recoleta-500 mt-10 font-normal text-xl lg:text-4xl text-brand-primary-400">
        We can help you with
      </h1>
      <div className="w-11/12 lg:w-2/3 z-0 md:flex flex-col items-center justify-center">
        {serviceData?.map((item) => (
          <Card
            key={item.id}
            cardBgColor={item.color}
            wrapperClassName="service-card-background w-full h-full lg:w-[800px] xl:w-full 4xl:w-[1019px] md:h-[403px] xl:h-[460px] 2xl:h-[403px] mb-16"
          >
            <div className="flex flex-col gap-4 my-7 lg:items-start md:my-0 h-full px-5 md:px-16 md:py-14">
              <div className="flex flex-col sm:flex-row gap-3 items-start xl:gap-8 3xl:gap-12 justify-between h-full">
                <Image priority src={item.image} alt="" />
                <div className="text-left space-y-3">
                  <h1 className="font-recoleta-500 font-normal leading-[38px] lg:leading-[43px] xl:leading-[54px] 2xl:leading-[65px] text-brand-primary-400 text-[28px] sm:text-[32px] lg:text-[40px] xl:text-5xl w-full">
                    {item.id}. {item.title}
                  </h1>
                  <p className="h-fit font-dmsans-400 tracking-[-0.015em] leading-6 font-normal text-sm lg:text-base w-full">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="sm:absolute bottom-0 sm:bottom-10 lg:bottom-0 sm:left-[230px] md:left-[276px] xl:left-[294px] 2xl:left-[310px]">
                <Link href={`/services${item.route}`}>
                  <Button
                    variant="none"
                    isSketch={true}
                    childrenWrapperClassName="-skew-y-2 text-sm lg:text-xl leading-6 font-clashgrotesk-500"
                    className="lg:h-14 px-4"
                  >
                    Read More
                  </Button>
                </Link>
              </div>

              {/* <div className="lg:card-overlay hidden md:w-1/3 lg:w-[230px] xl:w-1/3">
                <Image
                  priority
                  src={item.overlay}
                  className="arrow-flip w-28 h-28 xl:w-full xl:h-full"
                  alt=""
                />
                <p className="font-caveat-400 text-lg xl:text-xl">
                  Bringing out the best possible solutions in the most creative
                  way
                </p>
              </div> */}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
