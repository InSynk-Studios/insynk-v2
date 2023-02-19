import { twMerge } from "tailwind-merge";
import * as React from "react";
import PropTypes from "prop-types";
import { FieldWrapper } from "../../Form/FieldWrapper";

const borders = {
  default: "border border-gray-300 rounded-md",
  dashed: "border-b-2 border-black border-dashed",
  dotted: "border-b-2 border-black border-dotted",
  solid: "border-b-2 border-black border-solid",
};

export const Textarea = React.forwardRef(
  (
    {
      label,
      className,
      registration,
      error,
      placeholder = "Write something..",
      rows = 5,
      defaultValue = "",
      border = "default",
      disabled = false,
      wrapperClassName,
      name,
      labelClassName,
      labelTextClassName,
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
        <textarea
          name={name}
          ref={ref}
          className={twMerge(
            "appearance-none block w-full px-2 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-brand-primary-500 focus:shadow-primary-focus sm:text-sm",
            className,
            borders[border]
          )}
          {...registration}
          rows={rows}
          disabled={disabled}
          defaultValue={defaultValue}
          placeholder={placeholder}
        />
      </FieldWrapper>
    );
  }
);

Textarea.displayName = "Textarea";

Textarea.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
};
