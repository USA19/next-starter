// packages import
import { createTheme } from "@mui/material";
import palette from "./palette";
import typography from "./typography";
import components from "./components";

const customTheme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette,
  typography,
  components,
  breakpoints: {
    values: {
      xs: 0,
      sm: 479,
      md: 767,
      lg: 1023,
      xl: 1279,
    },
  },
});

export default customTheme;
