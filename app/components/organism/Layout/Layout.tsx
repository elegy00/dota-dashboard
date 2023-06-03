import type { PropsWithChildren } from "react";
import { ColorModeButton } from "~/components/molecules/ColorModeButton/ColorModeButton";

const Layout: React.FC<PropsWithChildren<unknown>> = (props) => {
  const { children } = props;
  return (
    <div>
      <header>
        <nav></nav>
        <ColorModeButton />
      </header>
      <main>{children}</main>
    </div>
  );
};

export { Layout };
