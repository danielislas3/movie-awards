import React from "react";
import Typography from "@mui/material/Typography";
import MovieCard from "./MoviesCard/MovieCard";
import { IMovie } from "../../../interfaces/movies";
import { v1 as uuidv1 } from "uuid";

const CategoriesContainer = ({ movies }) => {
  return (
    <div>
      <Typography>{movies[0].category}</Typography>
      <br />
      {movies.map((movie: IMovie) => (
        <MovieCard key={uuidv1()} movie={movie} />
      ))}
    </div>
  );
};

export default CategoriesContainer;
