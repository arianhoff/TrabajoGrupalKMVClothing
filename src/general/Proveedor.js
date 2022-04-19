import { Box, Button, Grid } from "@mui/material";
import React from "react";
import "../style/Proveedor.css";
import sarkany from "../assets/sarkany.png";

const Proveedor = () => {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      className="box-principal"
      textAlign={"center"}
      height={"381px"}
    >
      <Grid container>
        <Grid item xs={12} sm={4}>
          <img src={sarkany} alt="Logo" className="logo-sarkany"></img>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            href="https://www.rickysarkany.com/"
            target="_blank"
            style={{ marginTop: 230 }}
            color="primary"
            variant="contained"
          >
            ¡Nueva colección invierno 2022!
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Proveedor;
