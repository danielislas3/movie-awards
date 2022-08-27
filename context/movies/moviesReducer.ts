import { IMoviesState, IMovie } from "../../interfaces/movies";
import {
  orderAz,
  getCategories,
  filterByCategory,
} from "../../services/filters";

type MoviesActionType =
  | { type: "[Movie] Add-Categories"; payload: IMovie[] }
  | { type: "[Movie] Add-Movies"; payload: IMovie[] }
  | { type: "[Movie] Add-selected"; payload: IMovie }
  | { type: "[Movie] Delete-selected-movie"; payload: IMovie }
  | { type: "[Movie] Delete-all-selected"; payload }
  | { type: "[Movie] Add-Search-Movie"; payload };

export const moviesReducer = (
  state: IMoviesState,
  action: MoviesActionType
): IMoviesState => {
  switch (action.type) {
    case "[Movie] Add-Categories":
      return {
        ...state,
        categories: getCategories(action.payload),
      };

    case "[Movie] Add-Movies":
      return {
        ...state,
        movies: [...orderAz(action.payload)],
      };

    case "[Movie] Add-selected":
      return {
        ...state,
        selectedMovies: [...state.selectedMovies, action.payload],
      };
    case "[Movie] Delete-selected-movie":
      const newSelected = [...state.selectedMovies].filter(
        (movie) => movie.id !== action.payload.id
      );
      return {
        ...state,
        selectedMovies: [...newSelected],
      };
    case "[Movie] Delete-all-selected":
      return {
        ...state,
        selectedMovies: [],
      };
    case "[Movie] Add-Search-Movie":
      return {
        ...state,
        searchingMovie: action.payload,
      };

    default:
      return state;
  }
};
