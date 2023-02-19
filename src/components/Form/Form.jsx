import { zodResolver } from "@hookform/resolvers/zod";
import { twMerge } from "tailwind-merge";
import { useForm } from "react-hook-form";

export const Form = ({
  onSubmit,
  children,
  className,
  options,
  id,
  schema,
}) => {
  const methods = useForm({
    ...options,
    resolver: schema && zodResolver(schema),
  });
  return (
    <form
      className={twMerge("space-y-6", className)}
      onSubmit={methods.handleSubmit(onSubmit)}
      id={id}
    >
      {children(methods)}
    </form>
  );
};
