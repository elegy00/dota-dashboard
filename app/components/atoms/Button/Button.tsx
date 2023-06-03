import type { HTMLAttributes, PropsWithChildren } from "react";
import { forwardRef } from "react";
import type { Styleable } from "~/types/styleable";
import * as styles from "./Button.css";

type ButtonVariant = "primary" | "secondary";

interface Props extends Styleable, HTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  (props, ref) => {
    return <button {...props} ref={ref} className={styles.root} />;
  }
);

Button.displayName = "Button";
