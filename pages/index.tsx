import { Typography } from "@mui/material";
import { NextPage, GetStaticProps } from "next";

import React from "react";
import { Layout } from "../components/layouts/Layout";
import { Navbar } from "../components/Navbar/Navbar";
import { IMovie } from "../interfaces/movies";
import { getAllMovies } from "../services/getMovies";

function HomePage({ movies }) {
  return <Layout></Layout>;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const response = await getAllMovies();
  const movies: IMovie[] = await response.json();

  // const movies: IMovies[] = data.results.map((poke, i) => ({
  //   ...poke,
  //   id: i + 1,
  //   img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
  //     i + 1
  //   }.svg`,
  // }));

  return {
    props: {
      movies,
    },
  };
};

export default HomePage;
