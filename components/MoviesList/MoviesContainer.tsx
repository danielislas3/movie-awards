import React, { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../../context/movies/MoviesContext";
import { IMovie } from "../../interfaces/movies";
import CategoryContainer from "./MoviesContainer/CategoriyContainer";
import { v1 as uuidv1 } from "uuid";
import SubmintBtn from "./SubmintBtn";
import MovieCard from "./MoviesContainer/MoviesCard/MovieCard";

export const MoviesContainer = () => {
  const {
    movies,
    categories,
    selectedMovies,
    deleteMoviesVoted,
    searchingMovie,
  } = useContext(MoviesContext);

  const [orderedMovies, setOrderedMovies] = useState<IMovie[][] | undefined>();
  const [isReady, setIsredy] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchedMovie, setSearchedMovie] = useState<IMovie>();

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

  useEffect(() => {
    if (searchingMovie == "") {
      setIsSearching(false);
      return;
    }

    let newMov = movies.find((movie) => movie.title == searchingMovie);
    setSearchedMovie(newMov);

    if (newMov == undefined) {
      setIsSearching(false);
      return;
    }
    setIsSearching(true);

    console.log(newMov);
  }, [searchingMovie]);

  return (
    <div>
      {isSearching ? (
        <MovieCard movie={searchedMovie} />
      ) : (
        orderedMovies?.map((category) => (
          <CategoryContainer key={uuidv1()} movies={category} />
        ))
      )}

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
