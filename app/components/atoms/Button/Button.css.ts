import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "~/styles/theme/colors.css";
import { sizes } from "~/styles/theme/sizes.css";

export const root = style({
  fontSize: "1rem",
  border: "2px solid",
  backgroundColor: "transparent",
  borderRadius: sizes.s0_5,
  padding: `${sizes.s01} ${sizes.s02}`,
});

export const colorVariant = styleVariants({
  primary: {
    borderColor: theme.green[800],
    color: theme.green[900],
    ":hover": { borderColor: theme.green[700] },
    ":focus": { borderColor: theme.green[700] },
  },
  secondary: {
    borderColor: theme.purple[800],
    color: theme.purple[900],
    ":hover": { borderColor: theme.purple[700] },
    ":focus": { borderColor: theme.purple[700] },
  },
});
