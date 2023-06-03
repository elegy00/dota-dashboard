import { useContext } from "react";
import { ColorContext } from "~/state/colorContext";

const ColorModeButton = () => {
  const { setTheme, theme } = useContext(ColorContext);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme}
    </button>
  );
};
export { ColorModeButton };
