import { useContext } from "react";
import { ColorContext } from "~/state/colorContext";
import { Button } from "~/components/atoms/Button";
import { MoonIcon, SunIcon } from "~/components/atoms/Icons";
// import * as styles from "./ColorModeButton.css";

const ColorModeButton = () => {
  const { setTheme, theme } = useContext(ColorContext);

  return (
    <Button
      variant="primary"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      // className={styles.root}
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};
export { ColorModeButton };
