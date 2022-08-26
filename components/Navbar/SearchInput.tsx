import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { IMovie } from "../../interfaces/movies";
import { MoviesContext } from "../../context/movies";

const SearchInput = ({ movies }) => {
  const [value, setValue] = useState<any>(" ");
  // const { } = useContext(MoviesContext);

  return (
    <Stack spacing={2}>
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={movies.map((option: IMovie) => option.title)}
        renderInput={(params) => (
          <TextField
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
