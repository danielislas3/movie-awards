import React, { useState } from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ModalSumbmit from "../Modal/ModalSubmit";

const SubmintBtn = ({ selectedMovies, resetMovies }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    resetMovies();
    setIsOpen(false);
  };
  return (
    <div className="my-6 flex justify-center ">
      <Button
        onClick={handleOpen}
        variant="outlined"
        color="secondary"
        endIcon={<SendIcon />}
      >
        Submit Votes
      </Button>

      <ModalSumbmit
        open={isOpen}
        handleClose={handleClose}
        movies={selectedMovies}
      />
    </div>
  );
};

export default SubmintBtn;
