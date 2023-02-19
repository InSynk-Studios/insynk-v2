import PropTypes from "prop-types";
import * as React from "react";
import { twMerge } from "tailwind-merge";
import { Spinner } from "../Spinner/Spinner";

const variants = {
  primary: "bg-brand-primary-100 text-white text-lg rounded-3xl",
  inverse: "bg-white text-blue-400 border-blue-400 rounded-lg",
  danger: "bg-red-400 text-white rounded-lg",
  sketch: "group relative h-12 inline-block px-4 py-3 font-medium border-none",
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
      className = "",
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled = false,
      isSketch = false,
      onClick,
      startIcon,
      endIcon,
      childrenWrapperClassName,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={twMerge(
          `flex justify-center items-center border border-gray-300`,
          variants[variant],
          disabled
            ? "bg-state-disabled-dark cursor-not-allowed text-t-disabled"
            : null,
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading && <Spinner size="sm" className="text-current" />}
        {!isLoading && startIcon}

        {isSketch ? (
          <span className="absolute inset-0 h-full w-full skew-y-3 translate-x-1 translate-y-1 transform bg-black transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0" />
        ) : null}
        {isSketch ? (
          <span
            className={`absolute inset-0 h-full w-full border-2 skew-y-3 border-black bg-brand-primary-100 group-hover:bg-white`}
          />
        ) : null}

        <span
          className={twMerge(
            "mx-2 relative group-hover:text-black",
            childrenWrapperClassName
          )}
        >
          {props.children}
        </span>
        {!isLoading && endIcon}
      </button>
    );
  }
);

Button.displayName = "Button";

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["primary", "inverse", "danger", "sketch"]),
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  isSketch: PropTypes.bool,
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
};
