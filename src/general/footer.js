import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../style/footerKMV.css";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import "../assets/home.png";
import Chip from "@mui/material/Chip";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  boton: {
    backgroundColor: "#1565C0",
    height: 30,
    width: 300,
    color: "white",
    borderRadius: 5,
  },
  categorias: {
    backgroundColor: "#1565C0",
    height: 30,
    width: 100,
    color: "white",
    borderRadius: 15,
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div className="global">
      <Box sx={{ flexGrow: 1 }} className="footer-global">
        <Grid container spacing={2} className="flex-global">
          <Grid item xs={12} sm={4}>
            <div className="nosotros">
              <Box className="sobre-text">Sobre Nosotros</Box>
              <p className="descripcion">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                corporis expedita veritatis, eius praesentium, neque
                exercitationem voluptatem maiores debitis aspernatur sed qui rem
                illo? Velit cum aliquam aut pariatur quibusdam!
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="categorias-div">
              <Box className="titulo-cat">Categorías</Box>
              <Box className="chips-sup">
                <Chip
                  label="Pantalones"
                  component="a"
                  variant="outlined"
                  clickable
                  className={classes.categorias}
                  style={{ width: "40%" }}
                />
                <Chip
                  label="Remeras"
                  component="a"
                  variant="outlined"
                  clickable
                  style={{ width: "40%" }}
                  className={classes.categorias}
                />
              </Box>
              <Box className="chips-med">
                <Chip
                  label="Zapatillas"
                  component="a"
                  variant="outlined"
                  clickable
                  style={{ width: "40%" }}
                  className={classes.categorias}
                />
                <Chip
                  label="Camperas"
                  component="a"
                  variant="outlined"
                  clickable
                  style={{ width: "40%" }}
                  className={classes.categorias}
                />
              </Box>
              <Box className="chips-end">
                <Chip
                  label="Accesorios"
                  component="a"
                  variant="outlined"
                  clickable
                  style={{ width: "40%" }}
                  className={classes.categorias}
                />
                <Chip
                  label="Zapatos"
                  component="a"
                  variant="outlined"
                  clickable
                  style={{ width: "40%" }}
                  className={classes.categorias}
                />
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} className="gridform">
            <form className="contacto">
              <Box className="contact-text">Contacto</Box>
              <Box className="email">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  size="small"
                  style={{ width: "95%" }}
                  className="email-classname"
                  InputLabelProps={{ className: "email-classname" }}
                />
              </Box>
              <Box className="boton-texto">
                <TextField
                  id="demo-helper-text-aligned"
                  label="Nombre"
                  variant="outlined"
                  size="small"
                  style={{ width: "40%" }}
                  className="nombre-classname"
                  InputLabelProps={{ className: "nombre-classname" }}
                />
                <TextField
                  id="demo-helper-text-aligned-no-helper"
                  label="Apellido"
                  variant="outlined"
                  size="small"
                  style={{ width: "40%" }}
                  className="apellido-classname"
                  InputLabelProps={{ className: "apellido-classname" }}
                />
              </Box>
              <Box className="boton">
                <Button
                  className={classes.boton}
                  href="/"
                  variant="contained"
                  inputlabelprops={"boton-classname"}
                >
                  Enviar
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;
