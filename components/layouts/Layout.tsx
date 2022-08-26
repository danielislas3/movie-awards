import React, { FC } from "react";
import { Box } from "@mui/material";
import Head from "next/head";
import { Navbar } from "../Navbar/Navbar";

interface Props {
  title?: string;
}
export const Layout: FC<Props> = ({ title = "Dooper Awards", children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title} </title>
      </Head>
      <Navbar />
      <Box>{children}</Box>
    </Box>
  );
};
