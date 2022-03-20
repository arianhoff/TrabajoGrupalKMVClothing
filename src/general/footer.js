import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../style/footerKMV.css";
import Item from "@mui/material/ListItem";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

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
              <Grid className="opciones" container spacing={1}>
                <Grid item xs={12} md={4}>
                  <Item>Zapatillas</Item>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Item>Pantalones</Item>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Item>Camperas</Item>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Item>Accesorios</Item>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Item>Ropa interior</Item>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Item>Remeras</Item>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="contacto">
              <Box className="contact-text">Contacto</Box>
              <Box className="email">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="filled"
                  size="small"
                  style={{ width: "30%" }}
                />
              </Box>
              <Box className="boton-texto">
                <TextField
                  helperText="Ingrese su Nombre"
                  id="demo-helper-text-aligned"
                  label="Nombre"
                  className="nombre"
                  variant="filled"
                  size="small"
                  style={{ width: "40%" }}
                />
                <TextField
                  helperText="Ingrese su Apellido "
                  id="demo-helper-text-aligned-no-helper"
                  label="Apellido"
                  className="apellido"
                  variant="filled"
                  size="small"
                  style={{ width: "40%" }}
                />
              </Box>
              <Box className="boton">
                <Button variant="contained">Enviar</Button>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
