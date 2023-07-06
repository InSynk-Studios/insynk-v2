import * as React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const SHADOWS = {
  xs: "shadow-xs",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
};

export const Card = React.forwardRef(
  (
    {
      className,
      cardBgColor = "bg-brand-primary-100",
      cardRearClass,
      shadow,
      title,
      wrapperClassName,
      cardTitleClass,
      ...props
    },
    ref
  ) => {
    return (
      <div className={twMerge("relative w-max", wrapperClassName)}>
        <div
          ref={ref}
          className={twMerge(
            `h-full w-full block relative border-[1.5px] rounded-2xl border-brand-secondary-100 ${cardBgColor}`,
            SHADOWS[shadow],
            className
          )}
          {...props}
        >
          <h1
            className={twMerge(
              "relative text-black font-recoleta-500 font-medium",
              cardTitleClass
            )}
          >
            {title}
          </h1>
          <div className="relative">{props.children}</div>
        </div>
        <div
          className={twMerge(
            "absolute top-0 left-0 h-full w-full z-[-1] rounded-2xl translate-x-1 translate-y-1 transform bg-black transition duration-200 ease-out group-hover:-translate-x-0",
            cardRearClass
          )}
        />
      </div>
    );
  }
);

Card.displayName = "Card";

Card.propTypes = {
  className: PropTypes.string,
  cardBgColor: PropTypes.string,
  children: PropTypes.node,
  shadow: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
};
