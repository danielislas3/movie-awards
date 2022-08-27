import React from "react";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "../App.css";

import { lightTheme, darkTheme } from "../themes";
import { MoviesProvider } from "../context/movies";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoviesProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </MoviesProvider>
  );
}

export default MyApp;
