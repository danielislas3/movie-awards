import { Typography } from "@mui/material";
import { NextPage, GetStaticProps } from "next";

import React from "react";
import { Layout } from "../components/layouts/Layout";
import { MoviesContainer } from "../components/MoviesList/MoviesContainer";

function HomePage() {
  return (
    <Layout>
      <MoviesContainer />
    </Layout>
  );
}

export default HomePage;
