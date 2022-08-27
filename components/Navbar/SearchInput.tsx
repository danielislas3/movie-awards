import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { IMovie } from "../../interfaces/movies";
import { MoviesContext } from "../../context/movies";

const SearchInput = ({ movies }) => {
  const [value, setValue] = useState<any>(" ");
  const [searchMovieValue, setSearchMovieValue] = useState<any>("");

  const { searchMovie } = useContext(MoviesContext);
  useEffect(() => {
    searchMovie(value);

    // searchingMovie(value);
  }, [value]);

  return (
    <Stack spacing={2}>
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
          setSearchMovieValue(newValue);
        }}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={movies.map((option: IMovie) => option.title)}
        renderInput={(params) => (
          <TextField
            onChange={(e) => {
              setSearchMovieValue(e.target.value);
              searchMovie(e.target.value);
            }}
            {...params}
            label="Search a movie title"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Stack>
  );
};

export default SearchInput;
