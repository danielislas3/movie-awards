import { Typography } from "@mui/material";
import React from "react";
import SearchInput from "./SearchInput";

export const Navbar = () => {
  return (
    <div>
      <Typography variant="h1">Movie Awards</Typography>
      <br />
      <SearchInput />
    </div>
  );
};
