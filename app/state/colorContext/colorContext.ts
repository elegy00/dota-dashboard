import { createContext } from "react";
import type { ColorThemeContextType } from "./types";

export const ColorContext = createContext<ColorThemeContextType>({
  theme: "light",
  setTheme: () => {},
});
