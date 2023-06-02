import {
  assignVars,
  createTheme,
  createThemeContract,
  createGlobalTheme,
  createVar,
  style,
} from "@vanilla-extract/css";

// type ColorVarNames =
//   | "--grey-100"
//   | "--grey-300"
//   | "--grey-500"
//   | "--grey-700"
//   | "--grey-900";

// const colorDefLight: Record<ColorVarNames, string> = {
//   "--grey-100": "#EEEEEE",
//   "--grey-300": "#BBBBBB",
//   "--grey-500": "#999999",
//   "--grey-700": "#666666",
//   "--grey-900": "#333333",
// };

export const colorContract = createThemeContract({
  grey: {
    100: "",
    300: "",
    500: "",
    700: "",
    900: "",
  },
});

export const grey100 = createVar();
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
  // vars: assignVars(colorContract, {
  //   grey: {
  //     "100": "#EEEEEE",
  //     "300": "#BBBBBB",
  //     "500": "#999999",
  //     "700": "#666666",
  //     "900": "#333333",
  //   },
  // }),
  // "@media": {
  //   "screen and (min-width: 1024px)": {
  //     vars: assignVars(colorContract, {
  //       grey: {
  //         "100": "#EEEEEE",
  //         "300": "#BBBBBB",
  //         "500": "#999999",
  //         "700": "#666666",
  //         "900": "#333333",
  //       },
  //     }),
  //   },
  // },
});

// export const [darkThemeClass, darkTheme] = createTheme(colorContract, {
//   grey: {
//     "100": "#EEEEEE",
//     "300": "#BBBBBB",
//     "500": "#999999",
//     "700": "#666666",
//     "900": "#333333",
//   },
// });
