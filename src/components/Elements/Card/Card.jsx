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
      className = "w-80 h-80",
      cardBgColor = "bg-brand-primary-100",
      shadow = "md",
      title = "title",
      cardTitleClass,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          "group relative inline-block",
          SHADOWS[shadow],
          className
        )}
        {...props}
      >
        <span className="absolute inset-0 h-full w-full rounded-2xl translate-x-1 translate-y-1 transform bg-black transition duration-200 ease-out group-hover:-translate-x-0" />
        <span
          className={`absolute inset-0 h-full w-full border-2 rounded-2xl border-black ${cardBgColor}`}
        />

        <h1 className={`${cardTitleClass} relative text-black font-tanker font-normal`}>
          {title}
        </h1>
        <span className="relative m-2 flex justify-start items-start h-full">
          {props.children}
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
