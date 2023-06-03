import { useContext } from "react";
import { ColorContext } from "~/state/colorContext";
// import * as styles from "./style.css";
// import styles from "./styles.module.css";

// @import "./button.css";
// import "./style.css";

const ColorModeButton = () => {
  const { setTheme, theme } = useContext(ColorContext);

  return (
    <button
      // className={styles.root}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme}
    </button>
  );
};
export { ColorModeButton };
