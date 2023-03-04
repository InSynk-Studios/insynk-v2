import React, { useState } from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

export const Carousel = React.forwardRef(({ className, ...props }, ref) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - dragStartX) * 1.5;
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };
  return (
    <div
      ref={ref}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
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
