import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

export const Carousel = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={twMerge(
        "flex items-center justify-start scrollbar-hide w-full h-full gap-6 py-4 mx-auto overflow-x-scroll lg:gap-4",
        className
      )}
      {...props}
    >
      {props.children}
    </div>
  );
});

Carousel.displayName = "Carousel";

Carousel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
