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
    <section className="flex flex-col justify-start items-center mt-32 w-full">
      <div className="grid grid-rows-2 sm:grid-cols-2 gap-2 w-11/12 xl:w-4/5">
        <h1 className="font-tanker-400 text-3xl lg:text-5xl leading-10 tracking-tighter w-5/6 lg:w-3/4">
          set of principles which we live by
        </h1>
        <p className="font-dmsans-400 leading-7 tracking-tight font-normal w-11/12 text-base lg:text-xl">
          At InSynk, we follow a strong set of principles which guide us to who
          we are, what we aspire to do in the future and what{" "}
          <strong>makes working with us special.</strong>
        </p>
      </div>
      <div className="w-full">
        <Carousel className={removePadding ? "pl-0" : "pl-36"}>
          {CarouselData?.map((item) => (
            <div key={item.id} className="inline-block">
              <Card
                title={item.title}
                cardTitleClass="border-b-2 border-black px-4 py-2 md:py-3 text-xl md:text-2xl lg:text-4xl"
                cardBgColor={item.cardColor}
                className="w-56 h-72 md:w-430 md:h-460"
              >
                <p className="h-fit font-dmsans-500 text-xs md:text-base leading-5 m-2 md:m-3">
                  {item.description}
                </p>
                <Image
                  src={item.image}
                  className="w-full h-28 md:h-fit"
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
