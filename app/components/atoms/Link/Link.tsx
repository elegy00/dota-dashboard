import type { LinkProps } from "@remix-run/react";
import { Link as RemixLink } from "@remix-run/react";
// import * as styles from "./Link.css";

// interface Props extends Styleable, LinkProps {}

const Link: React.FC<LinkProps> = (props) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <RemixLink
      {...props}
      // styles.root,
      className={[props.className].join(" ")}
    />
  );
};

export { Link };
