import React from "react";
import "../style/estiloGeneral.css";
import Logo from "../assets/Logo.png";
import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  principal: {
    backgroundSize: "cover",
    display: "block",
    paddingBottom: "5%",
    paddingTop: " 5%",
  },
  logo: {
    justifyItems: "center",
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: "5%",
    marginTop: "5%",
  },
  descripcionPortada: {
    display: "block",
    width: "45%",
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    margin: "auto",
    marginBottom: "5%",
    fontSize: "19px",
    fontFamily: "Roboto, sans-serif",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div id="principal" className={classes.principal}>
      <Box className={classes.logo}>
        <img src={Logo} alt="LogoKmv"></img>
      </Box>
      <Box className={classes.descripcionPortada}>
        <p>
          {" "}
          <b>Krueger, Myers and Voorhees Clothing Co.</b> <br />
          KMV fue fundada en Buenos Aires en el 2003 como una empresa de modas
          para hombres, creando artículos de lujo. Actualmente llevamos la moda
          al alcance de todos los hombres con un gusto por el buen vestir y la
          calidad.{" "}
        </p>
      </Box>
    </div>
  );
};

export default Header;
