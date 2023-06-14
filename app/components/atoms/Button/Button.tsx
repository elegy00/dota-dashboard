import type { HTMLAttributes, PropsWithChildren } from "react";
import { forwardRef } from "react";
import type { Styleable } from "~/types/styleable";
import type { ButtonVariant } from "./types";

interface Props extends Styleable, HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  (props, ref) => {
    const { variant = "secondary", className } = props;
    return (
      <button
        {...props}
        ref={ref}
        // styles.root, styles.colorVariant[variant],
        className={[
          className,
          "px-4 py-1 rounded-md border-2 focus:outline-2 duration-150",
          variant === "primary" &&
            "border-purple-300 hover:border-purple-500 focus:outline-purple-500",
          variant === "secondary" &&
            "border-2 border-green-300 hover:border-green-500 focus:outline-green-500",
        ].join(" ")}
      />
    );
  }
);

Button.displayName = "Button";
