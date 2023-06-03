import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "~/styles/theme/colors.css";

export const root = style({
  fontSize: "1.5rem",
});

export const colorVariant = styleVariants({
  primary: {
    background: theme.primary[100],
    color: theme.grey[900],

    ":hover": { background: theme.primary[300] },
    ":focus": { background: theme.primary[300] },
  },
  secondary: {
    background: theme.secondary[100],
    color: theme.grey[900],
    ":hover": { background: theme.secondary[300] },
    ":focus": { background: theme.secondary[300] },
  },
});
