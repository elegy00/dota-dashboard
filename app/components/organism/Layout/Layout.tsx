import type { PropsWithChildren } from "react";
import { ColorModeButton } from "~/components/molecules/ColorModeButton/ColorModeButton";
import { Link } from "~/components/atoms/Link";

const Layout: React.FC<PropsWithChildren<unknown>> = (props) => {
  const { children } = props;
  return (
    <div className="p-4 md:p-6 lg:p-8">
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
