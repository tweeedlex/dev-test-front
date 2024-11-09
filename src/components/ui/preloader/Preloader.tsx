"use client";
import {Box, CircularProgress} from "@mui/material";

export default function Preloader() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        minHeight: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }}>
      <CircularProgress />
    </Box>
  );
}
