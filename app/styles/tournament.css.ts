import { style } from "@vanilla-extract/css";
import { theme } from "./theme/colors.css";

export const root = style({
  border: "solid 1px",
  background: theme.grey[100],
  color: theme.grey[900],
});
