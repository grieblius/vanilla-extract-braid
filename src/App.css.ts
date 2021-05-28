import { style, composeStyles } from "@vanilla-extract/css";
import { atoms } from "./sprinkles.css";

export const card = composeStyles(
  atoms({
    background: {
      lightMode: "green-50",
      darkMode: "gray-800"
    },
    borderRadius: {
      mobile: "4x",
      desktop: "5x"
    },
    padding: {
      mobile: "7x",
      desktop: "8x"
    }
  }),
  style({
    transition: "transform 1s ease-in",
    ":hover": {
      cursor: "default",
      transform: "scale(3) rotate(360deg)"
    }
  })
);
