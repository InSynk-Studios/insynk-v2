import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { Card } from "../Elements";
import Image from "next/image";

export const Carousel = React.forwardRef(
  ({ className, CarouselData, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          "flex items-center justify-start scrollbar-hide w-full h-full gap-6 py-4 mx-auto overflow-x-auto lg:gap-4",
          className
        )}
        {...props}
      >
        {CarouselData?.map((item) => (
          <Card
            key={item.id}
            title={item.name}
            cardTitleClass="border-b-2 border-black px-4 py-3 text-xl"
            cardBgColor={item.cardColor}
            className="w-96 h-96"
          >
            <p className="h-fit">{item.description}</p>
            <Image src={item.image} alt="" />
          </Card>
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
