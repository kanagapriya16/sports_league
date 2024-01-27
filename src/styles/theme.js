// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3", // Adjust the primary color as needed
    },
    secondary: {
      main: "#ff9800", // Adjust the secondary color as needed
    },
    background: {
      default: "#f5f5f5", // Adjust the background color as needed
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Adjust the font family as needed
  },
});

export default theme;
