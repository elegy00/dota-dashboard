import {
  createTheme,
  createThemeContract,
  createVar,
  style,
} from "@vanilla-extract/css";

// export const colorContract = createThemeContract({
//   grey: {
//     100: "",
//     300: "",
//     500: "",
//     700: "",
//     900: "",
//   },
// });

const grey100 = createVar();
const grey300 = createVar();
const grey500 = createVar();
const grey700 = createVar();
const grey900 = createVar();

const primary100 = createVar();
const primary300 = createVar();
const primary500 = createVar();
const primary700 = createVar();
const primary900 = createVar();

const secondary100 = createVar();
const secondary300 = createVar();
const secondary500 = createVar();
const secondary700 = createVar();
const secondary900 = createVar();

export const lightColors = style({
  vars: {
    [grey100]: "#EEEEEE",
    [grey300]: "#BBBBBB",
    [grey500]: "#999999",
    [grey700]: "#666666",
    [grey900]: "#333333",
    [primary100]: "#A4F4D0",
    [primary300]: "#80EFBD",
    [primary500]: "#7FEFBD",
    [primary700]: "#5CEBAA",
    [primary900]: "#14A363",
    [secondary100]: "#DEC27D",
    [secondary300]: "#D5B35D",
    [secondary500]: "#CBA135",
    [secondary700]: "#B48D2D",
    [secondary900]: "#937425",
  },
});

export const darkColors = style({
  vars: {
    [grey100]: "#333333",
    [grey300]: "#666666",
    [grey500]: "#999999",
    [grey700]: "#BBBBBB",
    [grey900]: "#EEEEEE",
    [primary100]: "#14A363",
    [primary300]: "#5CEBAA",
    [primary500]: "#7FEFBD",
    [primary700]: "#80EFBD",
    [primary900]: "#A4F4D0",
    [secondary100]: "#937425",
    [secondary300]: "#B48D2D",
    [secondary500]: "#CBA135",
    [secondary700]: "#D5B35D",
    [secondary900]: "#DEC27D",
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
  primary: {
    "100": primary100,
    "300": primary300,
    "500": primary500,
    "700": primary700,
    "900": primary900,
  },
  secondary: {
    "100": secondary100,
    "300": secondary300,
    "500": secondary500,
    "700": secondary700,
    "900": secondary900,
  },
});
