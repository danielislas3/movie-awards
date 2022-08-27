import React, { createContext } from "react";
import { IMovie, IMoviesState } from "../../interfaces/movies";

interface ContextProps {
  movies: IMovie[];
  categories: string[];
  selectedMovies: IMovie[];
  addNominatedMovies: (movie: IMovie) => void;
  hasVotedCategory: (movie: IMovie) => boolean;
  deleteNominatedMovie: (movie: IMovie) => void;
}

export const MoviesContext = createContext({} as ContextProps);
