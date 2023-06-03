/**
 * color theme generated through https://coolors.co/493548-4b4e6d-6a8d92-80b192-a1e887
 * accessible palette generated through
 * https://accessiblepalette.com/?lightness=98.2,93.95,85.1,76.5,67.65,57.8,47.6,40.4,32.4,23.55&A1E887=1,0&80B192=0,0&4B4E6D=0,-10&493548=0,0&808080=0,0&66788E=0,0&6A8D92=0,0
 * https://accessiblepalette.com/?lightness=95,90,80,70,60,50,40,30,20,10&A1E887=0,0&80B192=0,0&4B4E6D=0,-10&493548=0,0&6A8D92=0,0&66788E=0,0&808080=0,0
 */

import { createTheme, createVar, style } from "@vanilla-extract/css";

const grey100 = createVar();
const grey200 = createVar();
const grey300 = createVar();
const grey400 = createVar();
const grey500 = createVar();
const grey600 = createVar();
const grey700 = createVar();
const grey800 = createVar();
const grey900 = createVar();

const purple100 = createVar();
const purple200 = createVar();
const purple300 = createVar();
const purple400 = createVar();
const purple500 = createVar();
const purple600 = createVar();
const purple700 = createVar();
const purple800 = createVar();
const purple900 = createVar();

const violet100 = createVar();
const violet200 = createVar();
const violet300 = createVar();
const violet400 = createVar();
const violet500 = createVar();
const violet600 = createVar();
const violet700 = createVar();
const violet800 = createVar();
const violet900 = createVar();

const green100 = createVar();
const green200 = createVar();
const green300 = createVar();
const green400 = createVar();
const green500 = createVar();
const green600 = createVar();
const green700 = createVar();
const green800 = createVar();
const green900 = createVar();

export const lightColors = style({
  vars: {
    [grey100]: "#E2E2E2",
    [grey200]: "#C6C6C6",
    [grey300]: "#ABABAB",
    [grey400]: "#919191",
    [grey500]: "#777777",
    [grey600]: "#5E5E5E",
    [grey700]: "#474747",
    [grey800]: "#303030",
    [grey900]: "#1B1B1B",

    [purple100]: "#E4E1E4",
    [purple200]: "#CAC5CA",
    [purple300]: "#B1A9B1",
    [purple400]: "#998D98",
    [purple500]: "#817380",
    [purple600]: "#6A5969",
    [purple700]: "#544153",
    [purple800]: "#3B2B3B",
    [purple900]: "#221921",

    [violet100]: "#E1E2E7",
    [violet200]: "#C4C6D0",
    [violet300]: "#A8ABB9",
    [violet400]: "#8B90A3",
    [violet500]: "#70768E",
    [violet600]: "#555E7A",
    [violet700]: "#3D4661",
    [violet800]: "#293042",
    [violet900]: "#171B26",

    [green100]: "#C0F0AE",
    [green200]: "#95D77D",
    [green300]: "#81BA6C",
    [green400]: "#6D9D5B",
    [green500]: "#5A814B",
    [green600]: "#47663C",
    [green700]: "#354D2D",
    [green800]: "#24351F",
    [green900]: "#151E11",
  },
});

export const darkColors = style({
  vars: {
    [grey100]: "#1B1B1B",
    [grey200]: "#303030",
    [grey300]: "#474747",
    [grey400]: "#5E5E5E",
    [grey500]: "#777777",
    [grey600]: "#919191",
    [grey700]: "#ABABAB",
    [grey800]: "#C6C6C6",
    [grey900]: "#E2E2E2",

    [purple100]: "#221921",
    [purple200]: "#3B2B3B",
    [purple300]: "#544153",
    [purple400]: "#6A5969",
    [purple500]: "#817380",
    [purple600]: "#ABA2AB",
    [purple700]: "#B1A9B1",
    [purple800]: "#CAC5CA",
    [purple900]: "#E4E1E4",

    [violet100]: "#171B26",
    [violet200]: "#293042",
    [violet300]: "#3D4661",
    [violet400]: "#555E7A",
    [violet500]: "#70768E",
    [violet600]: "#8B90A3",
    [violet700]: "#A8ABB9",
    [violet800]: "#C4C6D0",
    [violet900]: "#E1E2E7",

    [green100]: "#151E11",
    [green200]: "#24351F",
    [green300]: "#354D2D",
    [green400]: "#47663C",
    [green500]: "#5A814B",
    [green600]: "#6D9D5B",
    [green700]: "#81BA6C",
    [green800]: "#95D77D",
    [green900]: "#C0F0AE",
  },
});

export const [themeClass, theme] = createTheme({
  grey: {
    "100": grey100,
    "200": grey200,
    "300": grey300,
    "400": grey400,
    "500": grey500,
    "600": grey600,
    "700": grey700,
    "800": grey800,
    "900": grey900,
  },
  purple: {
    "100": purple100,
    "200": purple200,
    "300": purple300,
    "400": purple400,
    "500": purple500,
    "600": purple600,
    "700": purple700,
    "800": purple800,
    "900": purple900,
  },
  violet: {
    "100": violet100,
    "200": violet200,
    "300": violet300,
    "400": violet400,
    "500": violet500,
    "600": violet600,
    "700": violet700,
    "800": violet800,
    "900": violet900,
  },
  green: {
    "100": green100,
    "200": green200,
    "300": green300,
    "400": green400,
    "500": green500,
    "600": green600,
    "700": green700,
    "800": green800,
    "900": green900,
  },
});
