import { useContext } from "react";
import { ColorContext } from "~/state/colorContext";
import { Button } from "~/components/atoms/Button";
import { MoonIcon, SunIcon } from "~/components/atoms/Icons";

const ColorModeButton = () => {
  const { setTheme, theme } = useContext(ColorContext);

  return (
    <Button
      variant="primary"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex justify-center items-center"
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};
export { ColorModeButton };
