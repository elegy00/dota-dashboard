import type { HTMLAttributes, PropsWithChildren } from "react";
import { forwardRef } from "react";
import type { Styleable } from "~/types/styleable";
// import * as styles from "./Button.css";
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
        className={[className].join(" ")}
      />
    );
  }
);

Button.displayName = "Button";
