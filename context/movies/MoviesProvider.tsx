import React, { FC, useEffect, useReducer } from "react";

import { movieService } from "../../services/movieServices";

import { MoviesContext, moviesReducer } from "./";
import { IMovie, IMoviesState } from "../../interfaces/movies";

const INITIAL_STATE: IMoviesState = {
  movies: [],
  categories: [],
  selected: [],
};

export const MoviesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, INITIAL_STATE);

  const setUpMovies = async () => {
    const response = await movieService.getAllMovies();
    const { movies } = await response;

    dispatch({
      type: "[Movie] Add-Categories",
      payload: movies,
    });

    dispatch({ type: "[Movie] Add-Movies", payload: movies });
    return movies;
  };

  useEffect(() => {
    setUpMovies();
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
