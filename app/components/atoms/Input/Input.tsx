import type { HTMLAttributes } from "react";
import { forwardRef } from "react";
import type { Styleable } from "~/types/styleable";

interface Props extends Styleable, HTMLAttributes<HTMLInputElement> {
  //   variant?: ButtonVariant;
}

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <input
      {...rest}
      ref={ref}
      className={[className, "p-2 text-grey-800 bg-grey-200 rounded"].join(" ")}
    />
  );
});

Input.displayName = "Input";
