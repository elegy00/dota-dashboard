import { useContext } from "react";
import { ColorContext } from "~/state/colorContext";
// import * as styles from "./ColorModeButton.css";
import { Button } from "~/components/atoms/Button";

const ColorModeButton = () => {
  const { setTheme, theme } = useContext(ColorContext);

  return (
    <Button
      // className={styles.root}
      variant="primary"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme}
    </Button>
  );
};
export { ColorModeButton };
