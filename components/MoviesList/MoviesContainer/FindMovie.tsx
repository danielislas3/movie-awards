import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import MovieCard from "./MoviesCard/MovieCard";
import { IMovie } from "../../../interfaces/movies";
import Grid from "@mui/material/Grid";

const FindMovie = (movie: IMovie) => {
  return (
    <>
      <hr className="my-8" />
      <Typography variant="h3">{movie.category}</Typography>
      <br />

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
          <MovieCard movie={movie} />
        </Grid>
      </Grid>
    </>
  );
};

export default FindMovie;
