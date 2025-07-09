import type { NavLinkProps } from "react-router";
import { NavLink } from "react-router";

const Link: React.FC<NavLinkProps> = (props) => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        [
          props.className,
          "underline underline-offset-4 duration-150 px-2 py-1 rounded",
          isActive
            ? "text-green-700 font-semibold bg-green-300/75"
            : "text-green-500 hover:text-green-600 bg-transparent",
        ].join(" ")
      }
    />
  );
};

export { Link };
