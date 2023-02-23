import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { Card } from "..";
import Image from "next/image";

export const Carousel = React.forwardRef(
  ({ className, CarouselData, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          "flex items-center justify-start scrollbar-hide w-full h-full gap-6 py-4 mx-auto overflow-x-scroll lg:gap-4",
          className
        )}
        {...props}
      >
        {CarouselData?.map((item) => (
          <div key={item.id} className="inline-block">
            <Card
              title={item.name}
              cardTitleClass="border-b-2 border-black text-5xl px-4 py-3 text-3xl"
              cardBgColor={item.cardColor}
              className="w-96 h-96"
            >
              <p className="h-fit font-dmsans-500 text-base leading-5 m-5">
                {item.description}
              </p>
              <Image src={item.image} alt="" />
            </Card>
          </div>
        ))}
      </div>
    );
  }
);

Carousel.displayName = "Carousel";

Carousel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
