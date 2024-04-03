import type { PropsWithChildren } from "react";
import { ColorModeButton } from "~/components/molecules/ColorModeButton/ColorModeButton";
import { Link } from "~/components/atoms/Link";

const paddings = "p-4 md:p-6 lg:p-8";

const Layout: React.FC<PropsWithChildren<unknown>> = (props) => {
  const { children } = props;
  return (
    <div>
      <header
        className={`flex items-center justify-between border-b-2 border-grey-200 ${paddings}`}
      >
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <ColorModeButton />
      </header>
      <main className={paddings}>{children}</main>
    </div>
  );
};

export { Layout };
