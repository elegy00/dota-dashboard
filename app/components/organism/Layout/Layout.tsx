import type { PropsWithChildren } from "react";
import { ColorModeButton } from "~/components/molecules/ColorModeButton/ColorModeButton";

import * as styles from "./Layout.css";

const Layout: React.FC<PropsWithChildren<unknown>> = (props) => {
  const { children } = props;
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <nav></nav>
        <ColorModeButton />
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export { Layout };
