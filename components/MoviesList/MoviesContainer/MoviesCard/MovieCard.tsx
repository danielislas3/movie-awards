import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { MoviesContext } from "../../../../context/movies/MoviesContext";

export default function MovieCard({ movie }) {
  const [isVoted, setIsVoted] = useState(false);
  const {
    addNominatedMovies,
    selectedMovies,
    hasVotedCategory,
    deleteNominatedMovie,
  } = useContext(MoviesContext);

  useEffect(() => {
    selectedMovies.some((mov) => mov.id == movie.id) && setIsVoted(true);
  }, [selectedMovies]);

  const handleVote = () => {
    isVoted ? deleteNominatedMovie(movie) : addNominatedMovies(movie);

    setIsVoted(!isVoted);
  };
  return (
    <Card sx={{ maxWidth: 365 }} elevation={2} className=" ">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={movie.photoUrL}
          alt={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="p">
            {movie.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* {isVoted && <AutoAwesomeIcon />} */}
        <Button
          disabled={hasVotedCategory(movie) && !isVoted}
          variant="outlined"
          color={isVoted ? "success" : "primary"}
          onClick={() => {
            handleVote();
          }}
        >
          {isVoted ? (
            <>
              <AutoAwesomeIcon className="mx-2" />
              <span className="mr-2">Voted</span>
            </>
          ) : (
            "Vote"
          )}
        </Button>
      </CardActions>
    </Card>
  );
}
