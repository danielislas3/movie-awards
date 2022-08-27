import React, { useState, useEffect } from "react";
import { IMovie } from "../interfaces/movies";

const useManageVotes = (nominatedMovies = []) => {
  const [nominateds, setNominateds] = useState(nominatedMovies);
  const [canVote, setCanVote] = useState(true);

  // const nominateMovie = (movie: IMovie, state) => {
  //   nominateds
  //   return movie.id;
  // };

  useEffect(() => {}, []);

  return {
    canVote,
    setCanVote,
  };
};
