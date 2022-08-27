import React, { createContext } from "react";
import { IMovie, IMoviesState } from "../../interfaces/movies";

interface ContextProps {
  movies: IMovie[];
  categories: string[];
  selectedMovies: IMovie[];
  searchingMovie: string;
  addNominatedMovies: (movie: IMovie) => void;
  hasVotedCategory: (movie: IMovie) => boolean;
  deleteNominatedMovie: (movie: IMovie) => void;
  deleteMoviesVoted: () => void;
  searchMovie: (movieTitle: string) => void;
}

export const MoviesContext = createContext({} as ContextProps);
