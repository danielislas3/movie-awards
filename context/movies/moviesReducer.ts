import { IMoviesState, IMovie } from "../../interfaces/movies";
import { orderAz, getCategories } from "../../services/filters";

type MoviesActionType =
  | { type: "[Movie] Add-Categories"; payload: IMovie[] }
  | { type: "[Movie] Add-Movies"; payload: IMovie[] }
  | { type: "[Movie] Add-selected"; payload };

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
        selected: { ...action.payload },
      };

    default:
      return state;
  }
};