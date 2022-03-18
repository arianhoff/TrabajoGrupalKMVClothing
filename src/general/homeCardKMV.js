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
import "../style/homeCardKMV.css";

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
  return (
      <Box sx={{ flexGrow: 1 }} className="box-global">
        <Grid container spacing={2}>
          {CardImg.map((element, i) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={element.key}>
                <Box className="Cart">
                  <div className="Cart-div">
                    <div className="Cart-imagen">
                      <img src={element.img} alt="Imagen de producto" />
                    </div>
                  </div>
                  <div className="Cart-desc">
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
