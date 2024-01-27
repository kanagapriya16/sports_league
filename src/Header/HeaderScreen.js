import React from "react";
import { LogoSlide } from "./LogoSlide";
import Navbar from "./Navbar";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
export const HeaderScreen = () => {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <LogoSlide />

      <Navbar />
    </ThemeProvider>
  );
};
