import PropTypes from "prop-types";
import * as React from "react";
import { twMerge } from "tailwind-merge";
import { Spinner } from "../Spinner/Spinner";

const variants = {
  none: "",
  primary: "bg-brand-primary-100 text-brand-primary-300 text-lg rounded-[32px]",
  inverse: "bg-white text-blue-400 border-blue-400 rounded-lg",
  danger: "bg-red-400 text-white rounded-lg",
};

const sizes = {
  xs: "py-2 px-4 text-xs",
  sm: "py-2 px-6 text-sm",
  md: "py-2 px-8 text-md",
  lg: "py-2 px-10 text-lg",
  xl: "py-2 px-16 text-lg",
};

export const Button = React.forwardRef(
  (
    {
      type = "button",
      className,
      variant = "primary",
      size = "md",
      sketchFrontColor = "bg-brand-primary-100",
      isLoading = false,
      disabled = false,
      isSketch = false,
      onClick,
      BackgroundColor,
      startIcon,
      endIcon,
      childrenWrapperClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div className="relative w-max hover:cursor-pointer">
        <button
          ref={ref}
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={twMerge(
            `flex justify-center items-center hover:cursor-pointer`,
            isSketch &&
              `${sketchFrontColor} h-full w-full block z-10 py-1 border-2 skew-y-2 border-black rounded group relative overflow-hidden`,
            variants[variant],
            disabled &&
              "bg-state-disabled-dark cursor-not-allowed text-t-disabled",
            sizes[size],
            className
          )}
          {...props}
        >
          {isLoading && <Spinner size="sm" className="text-current" />}
          {!isLoading && startIcon}

          {isSketch && (
            <div className="absolute inset-0 hover:cursor-pointer w-0 bg-white transition-all duration-[450ms] ease-out group-hover:w-full" />
          )}
          <span
            className={twMerge(
              "relative flex gap-2 group-hover:text-black hover:cursor-pointer",
              childrenWrapperClassName
            )}
          >
            {props.children}
            {!isLoading && endIcon}
          </span>
        </button>
        {isSketch && <div className="button-bg" />}
      </div>
    );
  }
);

Button.displayName = "Button";

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["primary", "inverse", "danger", "none"]),
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  isSketch: PropTypes.bool,
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
};
