import type { HTMLAttributes } from "react";
import { forwardRef } from "react";
import type { Styleable } from "~/types/styleable";
import { baseInputStyles } from "./styles";

interface Props extends Styleable, HTMLAttributes<HTMLTextAreaElement> {
  //   variant?: ButtonVariant;
}

export const TextArea = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <textarea
      {...rest}
      ref={ref}
      className={[className, baseInputStyles].join(" ")}
    />
  );
});

TextArea.displayName = "TextArea";
