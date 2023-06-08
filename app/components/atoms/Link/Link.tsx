import type { LinkProps } from "@remix-run/react";
import { Link as RemixLink } from "@remix-run/react";

const Link: React.FC<LinkProps> = (props) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <RemixLink
      {...props}
      className={[
        props.className,
        "text-green-500 underline underline-offset-4 hover:text-green-600 duration-150 ",
      ].join(" ")}
    />
  );
};

export { Link };
