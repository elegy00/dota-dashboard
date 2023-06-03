import { style } from "@vanilla-extract/css";
import { theme } from "~/styles/theme/colors.css";

export const root = style({
  border: "solid 1px",
  background: theme.grey[100],
  color: theme.grey[900],
  fontSize: 16,
});
