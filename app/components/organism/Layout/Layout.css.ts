import { style } from "@vanilla-extract/css";
import { breakpoints } from "~/styles/theme/breakpoints.css";
import { theme } from "~/styles/theme/colors.css";
import { sizes } from "~/styles/theme/sizes.css";

export const root = style({
  color: theme.grey[900],
  fontSize: 16,
  padding: sizes.s04,
  "@media": {
    [breakpoints.sm]: {
      padding: [sizes.s06],
    },
    [breakpoints.lg]: {
      padding: [sizes.s08],
    },
  },
});

export const header = style({
  display: "flex",
  justifyContent: "flex-end",
});
