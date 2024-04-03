export type ColorTheme = "light" | "dark";

export interface ColorThemeContextType {
  theme: ColorTheme;
  setTheme: (theme: ColorTheme) => void;
}
