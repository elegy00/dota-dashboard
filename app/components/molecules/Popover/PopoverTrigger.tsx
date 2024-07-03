import React, {
  ElementType,
  JSXElementConstructor,
  PropsWithChildren,
  ReactElement,
} from "react";
import { useOverlayTrigger } from "react-aria";
import { useOverlayTriggerState } from "react-stately";
import { Popover } from "./Popover";
// import { Button } from "../../atoms/Button";
import { useButton, AriaButtonOptions } from "react-aria";

function Button(
  props: PropsWithChildren<
    {
      buttonRef: React.RefObject<HTMLButtonElement>;
    } & AriaButtonOptions<ElementType>
  >
) {
  let ref = props.buttonRef;
  let { buttonProps } = useButton(props, ref);
  return (
    <button {...buttonProps} ref={ref}>
      {props.children}
    </button>
  );
}

type PopoverTriggerProps = {
  label: string;
  children: ReactElement<any, string | JSXElementConstructor<any>>;
};

export function PopoverTrigger({
  label,
  children,
  ...props
}: PopoverTriggerProps) {
  let ref = React.useRef(null);
  let state = useOverlayTriggerState(props);
  let { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    state,
    ref
  );

  return (
    <>
      <Button {...triggerProps} buttonRef={ref}>
        {label}
      </Button>
      {state.isOpen && (
        <Popover {...props} triggerRef={ref} state={state}>
          {React.cloneElement(children, overlayProps)}
        </Popover>
      )}
    </>
  );
}
