import React, { FC, useEffect, useReducer } from "react";

import { movieService } from "../../services/movieServices";

import { MoviesContext, moviesReducer } from "./";
import { IMovie, IMoviesState } from "../../interfaces/movies";
import { filterByCategory } from "../../services/filters";

const INITIAL_STATE: IMoviesState = {
  movies: [],
  categories: [],
  selectedMovies: [],
  searchingMovie: "",
};

export const MoviesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, INITIAL_STATE);

  const setUpMovies = async () => {
    const response = await movieService.getAllMovies();
    const { movies } = await response;
    console.log(response);
    if (!movies) {
      return;
    }

    dispatch({
      type: "[Movie] Add-Categories",
      payload: movies,
    });

    dispatch({
      type: "[Movie] Add-Movies",
      payload: movies,
    });

    return movies;
  };

  const addNominatedMovies = (nominatedMovie: IMovie) => {
    if (!hasVotedCategory(nominatedMovie)) {
      dispatch({
        type: "[Movie] Add-selected",
        payload: nominatedMovie,
      });
    }
  };

  const hasVotedCategory = (nominatedMovie: IMovie) => {
    return state.selectedMovies.some(
      (movie) => movie?.category == nominatedMovie.category
    );
  };
  const deleteNominatedMovie = (nominatedMovie: IMovie) => {
    dispatch({
      type: "[Movie] Delete-selected-movie",
      payload: nominatedMovie,
    });
  };
  const deleteMoviesVoted = () => {
    dispatch({
      type: "[Movie] Delete-all-selected",
      payload: [],
    });
  };
  const searchMovie = (movie) => {
    dispatch({
      type: "[Movie] Add-Search-Movie",
      payload: movie,
    });
  };
  useEffect(() => {
    setUpMovies();
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        ...state,
        // Methods
        addNominatedMovies,
        hasVotedCategory,
        deleteNominatedMovie,
        deleteMoviesVoted,
        searchMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
