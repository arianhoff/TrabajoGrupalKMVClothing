import { Box, Button, Grid } from "@mui/material";
import React from "react";
import "../style/estiloGeneral.css";
import sarkany from "../assets/sarkany.png";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
  butonProvedor: {
    backgroundColor: "#1565C0 !important",
    height: "40px",
    width: "300px",
    color: "white !important",
    borderRadius: "5px !important",
    fontWeight: "bold",
    marginTop: '230px !important',
    marginRight: '45px !important'
  },
  boxPrincipal: {
    height: "381px !important",
    width: "100% !important",
    backgroundColor: "#0F0F0D",
  },
  logoSarkany: {
    height: "300px !important",
    marginLeft: '20px !important'
  },
  contenerdorLogo: {
    display: "flex",
    justifyContent: "center",
  },
  boxImagen: {
    width: "20px !important",
    height: "220px",
  },
});

const Proveedor = () => {
  const classes = useStyles();

  return (
    <Box className={classes.boxPrincipal}>
      <Grid container className={classes.contenerdorLogo}>
        <Box className={classes.boxImagen}>
          <img src={sarkany} alt="Logo" className={classes.logoSarkany}></img>
        </Box>
        <Box className={classes.botonGrid}>
          <Button
            href="https://www.rickysarkany.com/"
            target="_blank"
            variant="outlined"
            className={classes.butonProvedor}
          >
            ¡Nueva colección invierno 2022!
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Proveedor;
