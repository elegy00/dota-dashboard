import {
  createTheme,
  createThemeContract,
  createVar,
  style,
} from "@vanilla-extract/css";

export const colorContract = createThemeContract({
  grey: {
    100: "",
    300: "",
    500: "",
    700: "",
    900: "",
  },
});

const grey100 = createVar();
const grey300 = createVar();
const grey500 = createVar();
const grey700 = createVar();
const grey900 = createVar();

export const lightColors = style({
  vars: {
    [grey100]: "#EEEEEE",
    [grey300]: "#BBBBBB",
    [grey500]: "#999999",
    [grey700]: "#666666",
    [grey900]: "#333333",
  },
});

export const darkColors = style({
  vars: {
    [grey100]: "#333333",
    [grey300]: "#666666",
    [grey500]: "#999999",
    [grey700]: "#BBBBBB",
    [grey900]: "#EEEEEE",
  },
});

export const [themeClass, theme] = createTheme({
  grey: {
    "100": grey100,
    "300": grey300,
    "500": grey500,
    "700": grey700,
    "900": grey900,
  },
});
