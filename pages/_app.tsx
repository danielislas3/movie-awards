import React from "react";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { lightTheme, darkTheme } from "../themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
