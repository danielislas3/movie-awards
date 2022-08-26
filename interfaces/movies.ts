export interface IMovie {
  title: string;
  photoUrL: string;
  id: string;
  category: string;
}

export interface IMoviesState {
  movies: IMovie[];
  categories: String[];
  selected: IMovie[];
}
