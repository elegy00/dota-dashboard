import type { HTMLAttributes } from "react";
import { forwardRef } from "react";
import type { Styleable } from "~/types/styleable";
import { baseInputStyles } from "./styles";

interface Props extends Styleable, HTMLAttributes<HTMLInputElement> {
  //   variant?: ButtonVariant;
  type: string; // TODO: properly get type field from base types
}

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <input
      {...rest}
      ref={ref}
      className={[className, baseInputStyles].join(" ")}
    />
  );
});

Input.displayName = "Input";
