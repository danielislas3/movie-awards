import { IMovie } from "./../interfaces/movies";

export const getCategories = (movies: IMovie[]) => {
  const categories = movies.map((movie) => movie.category);
  return [...new Set(categories)];
};
export const filterByCategory = (
  movies: IMovie[],
  category: string | undefined
) => {
  return movies.filter((movie) => movie.category === category);
};

export const orderAz = (movies: any): IMovie[] => {
  return [...movies].sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
  });
};
