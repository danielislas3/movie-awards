import { Typography } from "@mui/material";
import React, { useContext } from "react";
import SearchInput from "./SearchInput";
import { MoviesContext } from "../../context/movies/MoviesContext";

export const Navbar = () => {
  const { movies } = useContext(MoviesContext);
  return (
    <div>
      <Typography variant="h1">Movie Awards</Typography>
      <br />
      <SearchInput movies={movies} />
    </div>
  );
};
