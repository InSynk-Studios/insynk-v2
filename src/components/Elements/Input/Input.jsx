import * as React from "react";
import PropTypes from "prop-types";
import { FieldWrapper } from "../../Form/FieldWrapper";
import { twMerge } from "tailwind-merge";

const sizes = {
  xs: "w-32",
  sm: "w-40",
  md: "w-60",
  lg: "w-80",
  xl: "w-96",
  full: "w-full",
};

const borders = {
  default: "border border-gray-300 rounded-md",
  dashed: "border-b-2 border-black border-dashed",
  dotted: "border-b-2 border-black border-dotted",
  solid: "border-b-2 border-black border-solid",
};

export const Input = React.forwardRef(
  (
    {
      type = "text",
      label,
      className,
      wrapperClassName,
      registration,
      error,
      placeholder = "Placeholder",
      defaultValue,
      name,
      maxLength,
      border = "default",
      size = "md",
      onChange = () => {},
      value,
      disabled = false,
      icon,
      labelClassName,
      button,
      labelTextClassName,
      ...remainingProps
    },
    ref
  ) => {
    return (
      <FieldWrapper
        label={label}
        error={error}
        wrapperClassName={wrapperClassName}
        className={labelClassName}
        labelTextClassName={labelTextClassName}
      >
        <div
          ref={ref}
          className={twMerge(icon && "block relative", sizes[size])}
        >
          <input
            onChange={(event) => onChange(event)}
            disabled={disabled}
            name={name}
            type={type}
            maxLength={maxLength}
            className={twMerge(
              "relative break-all appearance-none w-full block px-3 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-brand-primary-500 focus:shadow-primary-focus",
              className,
              borders[border]
            )}
            {...registration}
            defaultValue={defaultValue}
            value={value}
            placeholder={placeholder}
            {...remainingProps}
          />
          {icon && (
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              {icon}
            </span>
          )}
        </div>
      </FieldWrapper>
    );
  }
);

Input.displayName = "Input";

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "full"]),
  border: PropTypes.oneOf(["default", "dotted", "dashed", "solid"]),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  onChange: PropTypes.func,
};
