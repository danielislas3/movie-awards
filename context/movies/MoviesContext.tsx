import React, { createContext } from "react";
import { IMovie } from "../../interfaces/movies";

interface ContextProps {
  movies: IMovie[];
  categories: string[];
}

export const MoviesContext = createContext({} as ContextProps);
