import { Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import { MoviesContext } from "../../context/movies/MoviesContext";
import { Box } from "@mui/system";

export const Navbar = () => {
  const { movies } = useContext(MoviesContext);
  const [hasMovies, setHasMovies] = useState<boolean>(false);
  useEffect(() => {
    setHasMovies(!movies.length == 0);
  }, [movies]);

  return (
    <div>
      <Typography variant="h1">Movie Awards</Typography>
      <br />
      {hasMovies ? (
        <SearchInput movies={movies} />
      ) : (
        <Box>
          <Typography variant="h2">
            Sorry, we don't have movies to show ☹️
          </Typography>
        </Box>
      )}
    </div>
  );
};
