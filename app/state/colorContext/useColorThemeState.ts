import { useCallback, useEffect, useState } from "react";
import type { ColorTheme } from "./types";

const local_storage_theme_key = "color_theme";

const useColorThemeState = () => {
  const [colorTheme, setColorTheme] = useState<ColorTheme>("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem(
      local_storage_theme_key
    ) as ColorTheme;
    if (storedTheme) {
      setColorTheme(storedTheme);
    }
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDarkMode.matches) {
      setColorTheme("dark");
    }
  }, []);

  const setColorThemeProper = useCallback((theme: ColorTheme) => {
    setColorTheme(theme);
    localStorage.setItem(local_storage_theme_key, theme);
  }, []);

  return { theme: colorTheme, setTheme: setColorThemeProper };
};

export { useColorThemeState };
