import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../style/estiloGeneral.css";
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
  categoriasDiv: {
    paddingTop: "60px",
    paddingLeft: "10px",
    paddingRight: "50px",
    color: "white",
  },
  tituloCat: {
    fontSize: "20px",
    fontFamily: "Roboto, sans-serif",
    display: "flex",
    justifyContent: "center",
  },
  chipsSup: {
    paddingTop: "25px",
    display: "flex",
    justifyContent: "space-around",
  },
  chipsMed: {
    paddingTop: "20px",
    display: "flex",
    justifyContent: "space-around",
  },
  chipsEnd: {
    paddingTop: "20px",
    display: "flex",
    justifyContent: "space-around",
  },
  contacto: {
    paddingTop: "60px",
    color: "white",
    lineHeight: "30px",
  },
  contactText: {
    fontSize: "20px",
    paddingRight: "5px",
    fontFamily: "Roboto, sans-serif",
    display: "flex",
    justifyContent: "center",
  },
  botonTexto: {
    paddingTop: "20px",
    paddingLeft: "50px",
  },
  botonGeneral: {
    paddingTop: "20px",
    paddingBottom: "50px",
    display: "flex",
    justifyContent: "center",
  },
  nosotros: {
    paddingTop: "60px",
    paddingLeft: "45px",
    paddingRight: "50px",
    color: "white",
  },
  sobreText: {
    fontSize: "20px",
    fontFamily: "Roboto, sans-serif",
    display: "flex",
    justifyContent: "center",
    marginTop: "3px",
  },
  email: {
    paddingTop: "22px",
    paddingLeft: "5px",
  },
  global: {
    display: "flex",
    justifyContent: "center",
  },
  gridForm: {
    padding: "0px 50px 0px 50px",
  },
  emailGlobal: {
    color: "626568",
    borderRadius: "5px",
    backgroundColor: "white",
    opacity: "0.8"
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.global}>
      <Box sx={{ flexGrow: 1 }} className="footer-global">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <div className={classes.nosotros}>
              <Box className={classes.sobreText}>Sobre Nosotros</Box>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                corporis expedita veritatis, eius praesentium, neque
                exercitationem voluptatem maiores debitis aspernatur sed qui rem
                illo? Velit cum aliquam aut pariatur quibusdam!
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.categoriasDiv}>
              <Box className={classes.tituloCat}>Categorías</Box>
              <Box className={classes.chipsSup}>
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
              <Box className={classes.chipsMed}>
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
              <Box className={classes.chipsEnd}>
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
          <Grid item xs={12} sm={4} className={classes.gridForm}>
            <form className={classes.contacto}>
              <Box className={classes.contactText}>Contacto</Box>
              <Box className={classes.email}>
                <TextField
                  label="Email"
                  size="small"
                  variant="filled"
                  style={{ width: "90%", marginLeft:'5px' }}
                  className={classes.emailGlobal}
                />
              </Box>
              <Box className={classes.botonTexto}>
                <TextField
                  label="Nombre"
                  size="small"
                  variant="filled"
                  style={{ width: "40%", marginLeft:'5px' }}
                  className={classes.emailGlobal}
                />
                <TextField
                  label="Apellido"
                  size="small"
                  variant="filled"
                  style={{ width: "40%", marginLeft: '17px' }}
                  className={classes.emailGlobal}
                />
              </Box>
              <Box className={classes.botonGeneral}>
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
