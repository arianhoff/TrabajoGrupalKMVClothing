import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../style/footerKMV.css";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import "../assets/home.png";
import Chip from "@mui/material/Chip";


export default function Footer() {
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
            <div className="categorias">
              <Box className="titulo-cat">Categorías</Box>
              <Box className="chips-sup">
                <Chip
                  label="Pantalones"
                  component="a"
                  href="/"
                  variant="filled"
                  clickable
                  color="primary"
                  className="pantalones"
                  style={{ width: "40%" }}
                />
                <Chip
                  label="Remeras"
                  component="a"
                  href="/"
                  variant="filled"
                  clickable
                  color="primary"
                  style={{ width: "40%" }}
                />
              </Box>
              <Box className="chips-med">
                <Chip
                  label="Zapatillas"
                  component="a"
                  href="/"
                  variant="filled"
                  clickable
                  color="primary"
                  style={{ width: "40%" }}
                />
                <Chip
                  label="Camperas"
                  component="a"
                  href="/"
                  variant="filled"
                  clickable
                  color="primary"
                  style={{ width: "40%" }}
                />
              </Box>
              <Box className="chips-end">
                <Chip
                  label="Accesorios"
                  component="a"
                  href="/"
                  variant="filled"
                  clickable
                  color="primary"
                  style={{ width: "40%" }}
                />
                <Chip
                  label="Zapatos"
                  component="a"
                  href="/"
                  variant="filled"
                  clickable
                  color="primary"
                  style={{ width: "40%" }}
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
                <Button style={{ width: "65%"}} href="/" variant="contained" className="boton-classname" inputlabelprops={("boton-classname")}>
                  Enviar
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
