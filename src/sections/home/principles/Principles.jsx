import { React, useState, useEffect } from "react";
import Image from "next/image";
import { Carousel, Card } from "@/components/Elements";
import { CarouselData } from "./CarouselData";

export const Principles = () => {
  const [removePadding, setRemovePadding] = useState(false);

  const handleRemovePadding = () => {
    if (window.scrollX > 50) {
      setRemovePadding(true);
    } else setRemovePadding(false);
  };

  useEffect(() => {
    handleRemovePadding();
    const listener = () => {
      handleRemovePadding();
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <section className="flex flex-col justify-start items-center mt-14 lg:mt-32 w-full">
      <div className="grid grid-rows-2 sm:grid-cols-2 w-11/12 xl:w-4/5">
        <h1 className="font-recoleta-500 text-brand-primary-400 text-xl sm:text-[32px] lg:text-[40px] leading-[27px] sm:leading-[43px] lg:leading-[54px] w-full sm:w-11/12 lg:w-3/4">
          set of principles which we live by
        </h1>
        <p className="font-dmsans-400 leading-[18px] lg:leading-7 tracking-[-0.015em] font-normal w-11/12 text-xs sm:text-sm lg:text-xl">
          At InSynk, we follow a strong set of principles which guide us to who
          we are, what we aspire to do in the future and what{" "}
          <strong>makes working with us special.</strong>
        </p>
      </div>
      <div className="w-full">
        <Carousel
          className={`pr-5 ${removePadding ? "pl-0" : "pl-8 md:pl-36"}`}
        >
          {CarouselData?.map((item) => (
            <div key={item.id} className="inline-block">
              <Card
                title={item.title}
                cardTitleClass="border-b-[2.83544px] cursor-grab active:cursor-grabbing border-brand-secondary-100 px-3 lg:px-6 py-2 lg:pb-4 md:pt-6 text-xl md:text-2xl lg:text-4xl"
                cardBgColor={item.cardColor}
                className="w-56 h-72 md:w-430 md:h-460"
              >
                <p className="h-fit font-dmsans-400 font-normal cursor-grab active:cursor-grabbing text-xs md:text-base leading-[18px] lg:leading-6 tracking-[-0.015em] m-2 md:m-6">
                  {item.description}
                </p>
                <Image
                  src={item.image}
                  className="w-full h-28 lg:-mt-5 md:h-fit cursor-grab active:cursor-grabbing"
                  alt=""
                />
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
