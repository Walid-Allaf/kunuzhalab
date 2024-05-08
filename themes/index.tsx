"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#004D40",
      light: "#004D40ee",
      contrastText: "#fff",
    },
    secondary: {
      main: "#009688",
      light: "#ff0000",
      contrastText: "#fff",
    },
  },
  typography: {
    allVariants: {
      color: "#004D40",
    },
  },
  components: {
    // Buttons
    MuiButton: {
      styleOverrides: {
        root: {
          background: "#009688",
          a: {
            fontSize: "14px",
          },
          ":hover": {
            background: "#009688cc",
          },
        },
      },
    },
  },
});

export default theme;
