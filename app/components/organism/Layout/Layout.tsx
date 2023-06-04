import type { PropsWithChildren } from "react";
import { ColorModeButton } from "~/components/molecules/ColorModeButton/ColorModeButton";

// import * as styles from "./Layout.css";
import { Link } from "~/components/atoms/Link";

const Layout: React.FC<PropsWithChildren<unknown>> = (props) => {
  const { children } = props;
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <ColorModeButton />
      </header>
      <main>{children}</main>
    </div>
  );
};

export { Layout };
