import React, { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../../context/movies/MoviesContext";
import { IMovie } from "../../interfaces/movies";
import CategoryContainer from "./MoviesContainer/CategoriyContainer";
import { v1 as uuidv1 } from "uuid";
import SubmintBtn from "./SubmintBtn";

export const MoviesContainer = () => {
  const { movies, categories, selectedMovies, deleteMoviesVoted } =
    useContext(MoviesContext);
  const [orderedMovies, setOrderedMovies] = useState<IMovie[][] | undefined>();
  const [isReady, setIsredy] = useState(false);
  useEffect(() => {
    const ordered = categories.map((category) =>
      movies.filter((movie) => movie.category === category)
    );
    setOrderedMovies(ordered);
  }, [movies]);

  useEffect(() => {
    setIsredy(
      categories.length > 1 && categories.length === selectedMovies.length
    );
  }, [selectedMovies]);

  return (
    <div>
      {orderedMovies?.map((category) => (
        <CategoryContainer key={uuidv1()} movies={category} />
      ))}
      {isReady && (
        <SubmintBtn
          selectedMovies={selectedMovies}
          resetMovies={deleteMoviesVoted}
        />
      )}
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
