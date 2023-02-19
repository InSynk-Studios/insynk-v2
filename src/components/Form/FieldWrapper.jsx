import { twMerge } from "tailwind-merge";

export const FieldWrapper = (props) => {
  const {
    label,
    className,
    error,
    children,
    wrapperClassName,
    errorClassName,
    labelTextClassName,
    ...wrapperProps
  } = props;
  return (
    <div className={twMerge("relative", wrapperClassName)} {...wrapperProps}>
      <label className={twMerge("relative block", className)}>
        <span
          className={twMerge(
            "font-medium text-gray-700 text-sm",
            labelTextClassName
          )}
        >
          {label}
        </span>
        {children}
      </label>
      {error?.message && (
        <div
          role="alert"
          aria-label={error.message}
          className={twMerge(
            "text-sm font-semibold text-red-500",
            errorClassName
          )}
        >
          {error.message}
        </div>
      )}
    </div>
  );
};
