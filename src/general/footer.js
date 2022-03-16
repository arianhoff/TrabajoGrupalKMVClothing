import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../style/footerKMV.css";
import Item from "@mui/material/ListItem";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Link } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }} className="footer-global">
      <Grid container spacing={2} className="flex-global">
        <Grid item xs={12} lg={4}>
          <div className="nosotros">
            <Box>Sobre Nosotros</Box>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              corporis expedita veritatis, eius praesentium, neque
              exercitationem voluptatem maiores debitis aspernatur sed qui rem
              illo? Velit cum aliquam aut pariatur quibusdam!
            </p>
          </div>
        </Grid>
        <Grid item xs={2} lg={4}>
          <div className="categorias">
            <Box>Categorías</Box>
            <Grid container spacing={2}>
              <Grid item xs={6} md={4}>
                <Item>Zapatillas</Item>
              </Grid>
              <Grid item xs={6} md={4}>
                <Item>Pantalones</Item>
              </Grid>
              <Grid item xs={6} md={4}>
                <Item>Camperas</Item>
              </Grid>
              <Grid item xs={6} md={4}>
                <Item>Accesorios</Item>
              </Grid>
              <Grid item xs={6} md={4}>
                <Item>Ropa interior</Item>
              </Grid>
              <Grid item xs={6} md={4}>
                <Item>Remeras</Item>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} lg={4}>
          <div className="contacto">
            <Box>Contacto</Box>
            <Box>
              <Link href="/" color="inherit">
                KMVclothing@gmail.com
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Tel.: 03493 - 15400994
              </Link>
            </Box>
            <Box>
              <TextField id="outlined-basic" label="Email" variant="outlined" />
            </Box>
            <Box>
              <Link href="/" color="inherit">
                <Button variant="contained">Enviar</Button>
              </Link>
            </Box>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};