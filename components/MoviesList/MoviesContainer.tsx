import React, { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../../context/movies/MoviesContext";
import { IMovie } from "../../interfaces/movies";
import CategoryContainer from "./MoviesContainer/CategoriyContainer";
import { v1 as uuidv1 } from "uuid";

export const MoviesContainer = () => {
  const { movies, categories } = useContext(MoviesContext);
  const [orderedMovies, setOrderedMovies] = useState<IMovie[][] | undefined>();

  useEffect(() => {
    const ordered = categories.map((category) =>
      movies.filter((movie) => movie.category === category)
    );
    setOrderedMovies(ordered);
  }, [movies]);

  return (
    <div>
      {orderedMovies?.map((category) => (
        <CategoryContainer key={uuidv1()} movies={category} />
      ))}
    </div>
  );
};
/*
//arreglo de arreglos, donde cada arreglo interno pertenece a una categoria
movies=[
  [
  {movie},
  {movie},
  {movie},
  ],[],[]
]

*/
