import { style } from "@vanilla-extract/css";
import { theme } from "~/styles/theme/colors.css";

export const root = style({
  fontSize: "1rem",
  color: theme.green[700],
  ":hover": { color: theme.green[600] },
  ":focus": { color: theme.green[600] },
});
