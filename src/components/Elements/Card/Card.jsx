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
      cardFrontClass,
      shadow,
      title,
      cardTitleClass,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          " relative inline-block",
          SHADOWS[shadow],
          className
        )}
        {...props}
      >
        <span
          className={twMerge(
            "absolute inset-0 h-full w-full rounded-2xl translate-x-1 translate-y-1 transform bg-black transition duration-200 ease-out group-hover:-translate-x-0",
            cardRearClass
          )}
        />
        <span
          className={twMerge(
            `absolute inset-0 h-full w-full border-[1.5px] rounded-2xl border-brand-secondary-100 ${cardBgColor}`,
            cardFrontClass
          )}
        >
          <h1
            className={twMerge(
              "relative text-black font-tanker-400 font-normal",
              cardTitleClass
            )}
          >
            {title}
          </h1>
          <span className="relative">{props.children}</span>
        </span>
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
