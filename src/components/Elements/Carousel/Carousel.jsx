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
        {/* {CarouselData?.map((item) => (
          <div key={item.id} className="inline-block">
            <Card
              title={item.name}
              cardTitleClass="border-b-2 border-black px-4 py-2 md:py-3 text-xl md:text-2xl lg:text-4xl"
              cardBgColor={item.cardColor}
              className="w-56 h-72 md:w-430 md:h-460"
            >
              <p className="h-fit font-dmsans-500 text-xs md:text-base leading-5 m-2 md:m-3">
                {item.description}
              </p>
              <Image src={item.image} className="w-full h-28 md:h-fit" alt="" />
            </Card>
          </div>
        ))} */}
        {props.children}
      </div>
    );
  }
);

Carousel.displayName = "Carousel";

Carousel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
