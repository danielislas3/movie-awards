import React, { createContext } from "react";
import { IMovie } from "../../interfaces/movies";

interface ContextProps {
  movies: IMovie[];
}

export const MoviesContext = createContext({} as ContextProps);
