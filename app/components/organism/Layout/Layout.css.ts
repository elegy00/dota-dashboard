import { style } from "@vanilla-extract/css";
import { breakpoints } from "~/styles/theme/breakpoints.css";
import { theme } from "~/styles/theme/colors.css";
import { sizes } from "~/styles/theme/sizes.css";

// const padding = {
//   padding: sizes.s04,
//   "@media": {
//     [breakpoints.sm]: {
//       padding: sizes.s06,
//     },
//     [breakpoints.lg]: {
//       padding: sizes.s08,
//     },
//   },
// };

export const main = style({
  padding: sizes.s04,
  "@media": {
    [breakpoints.sm]: {
      padding: sizes.s06,
    },
    [breakpoints.lg]: {
      padding: sizes.s08,
    },
  },
});

export const root = style({
  color: theme.grey[900],
  fontSize: 16,
  fontFamily: "'Noto Sans', sans-serif",
});

export const nav = style({
  display: "flex",
  alignContent: "center",
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignContent: "center",
  borderBottom: `1px solid ${theme.grey[200]}`,
  padding: `${sizes.s01} ${sizes.s04}`,
  "@media": {
    [breakpoints.sm]: {
      padding: `${sizes.s02} ${sizes.s04}`,
    },
    [breakpoints.lg]: {
      padding: `${sizes.s02} ${sizes.s04}`,
    },
  },
});
