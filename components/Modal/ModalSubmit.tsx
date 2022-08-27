import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CardMedia from "@mui/material/CardMedia";
import { IMovie } from "../../interfaces/movies";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  height: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalSumbmit({ open, handleClose, movies }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            className="flex justify-around"
          >
            Votes submitted
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            component="div"
          >
            <ul>
              {movies.map(({ title, category, id, photoUrL }: IMovie) => (
                <Typography key={id} variant="h6" component="li">
                  <p className="flex items-center justify-start mb-4">
                    <CardMedia
                      component="img"
                      sx={{ width: 50 }}
                      image={photoUrL}
                      alt="Live from space lbum cover"
                    />
                    <span className="ml-6">
                      {title} - {category}
                    </span>
                  </p>
                </Typography>
              ))}
            </ul>{" "}
          </Typography>
          <div className="flex justify-end mt-8">
            <Button onClick={handleClose} variant="outlined" color="error">
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
