import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import c1 from "../assets/1.png";
import c2 from "../assets/2.png";
import c3 from "../assets/3.png";
import c4 from "../assets/4.png";
import c5 from "../assets/5.png";
import c6 from "../assets/6.png";
import c7 from "../assets/7.png";
import c8 from "../assets/8.png";
import "../style/estiloGeneral.css";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
  CartImagen: {
    display: "flex",
    justifyContent: "center",
    width: "215px",
    height: "214px",
    left: "1277px",
    top: "2608px",
    borderRadius: "5px",
    margin: "auto",
  },
  cartDiv: {
    display: "flex",
    borderRadius: "5px",
    justifyContent: "center",
    background: "#191b1c",
    paddingBottom: "40px",
    paddingTop: "20px",
  },
  cart: {
    width: "260px",
    height: "405px",
    justifyContent: "center",
    paddingBottom: "40px",
  },
  cartDesc: {
    display: "block",
    textAlign: "left",
    color: "aliceblue",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  boxGlobal: {
    paddingTop: "10%",
    display: "block",
    justifyContent: "center",
    paddingBottom: "100px",
    paddingLeft: "11%",
    paddingRight: "11%",
    backgroundColor: "#000000",
  },
});

const CardImg = [
  {
    img: c1,
    info: "Riñonera",
    desc: "La riñonera Isabella es nuestra favorita a la hora de necesitar manos libres con estilo.",
    key: c1,
  },
  {
    img: c2,
    info: "Cinturon",
    desc: "Elegante cinturon para estar elegante y comodo todos los dias.",
    key: c2,
  },
  {
    img: c3,
    info: "Gorra",
    desc: "Nuestra gorra deportiva para cuidarte del sol con estilo.",
    key: c3,
  },
  {
    img: c4,
    info: "Mochila",
    desc: "Practica mochila clasica negra para llevar todo lo necesario.",
    key: c4,
  },
  {
    img: c5,
    info: "Bolso",
    desc: "Con nuestro bolso iras a trabajar elegante sin dejar de lado la practicidad.",
    key: c5,
  },
  {
    img: c6,
    info: "Bota",
    desc: "La bota resistente al agua para ir con estilo los dias de lluvia.",
    key: c6,
  },
  {
    img: c7,
    info: "Borcego",
    desc: "Un básico infaltable para la noche, nuestros borcegos completan un outfit moderno y sofisticado.",
    key: c7,
  },
  {
    img: c8,
    info: "Zapato",
    desc: "Nuestra linea de Zapatos pueden ser utilizados tanto para eventos como de forma diaria.",
    key: c8,
  },
];

export default function ActionAreaCard() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }} className={classes.boxGlobal}>
      <Grid container spacing={2}>
        {CardImg.map((element, i) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={element.key}>
              <Box className={classes.cart} id="Cart">
                <div className={classes.cartDiv}>
                  <div className={classes.CartImagen}>
                    <img src={element.img} alt="Imagen de producto" />
                  </div>
                </div>
                <div className={classes.cartDesc}>
                  <h1>{element.info}</h1>
                  <p>{element.desc}</p>
                </div>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
