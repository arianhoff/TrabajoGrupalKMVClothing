import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import Item from "@mui/material/ListItem";
import "../style/footerKMV.css";

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        className="footer-global"
        color="white"
      >
        <Container maxWidth="lg"></Container>
        <Grid item md={3}>
          <Grid>
            <Box borderBottom={1}>Sobre Nosotros</Box>
            <Box>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                corporis expedita veritatis, eius praesentium, neque
                exercitationem voluptatem maiores debitis aspernatur sed qui rem
                illo? Velit cum aliquam aut pariatur quibusdam!
              </p>
            </Box>
          </Grid>
        </Grid>
        <Grid item md={3}>
          <Grid>
            <Box borderBottom={1}>Categorias</Box>
            <Box>
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
            </Box>
          </Grid>
        </Grid>
        <Grid item md={3}>
          <Grid>
            <Box borderBottom={1}>Contacto</Box>
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
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
}

// import React from "react";
// import Style from "../style/footerKMV.css";

// const Footer = () => {
//   return (
//     <>
//       <div className="div-global">
//         <div className="derechos">
//           <h4>Todos los derechos reservados / KMV Clothing / @2022</h4>
//         </div>
//         <div className="first-div">
//           <div className="first-h2">
//             <h2>Sobre nosotros</h2>
//           </div>
//           <div className="first-p">
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
//               soluta asperiores nostrum consectetur quis consequuntur tempora
//               repellendus adipisci minus explicabo odit quo voluptas atque amet
//               officiis, aut hic nisi ea.
//             </p>
//           </div>
//         </div>
//         <div className="second-div">
//           <div className="categories">
//             <h2>Categorías</h2>
//           </div>
//           <div className="options">
//             <ul>
//               <li className="zap">
//                 <a href="">Zapatillas</a>
//               </li>
//               <li>
//                 <a href="">Pantalones</a>
//               </li>
//               <li>
//                 <a href="">Camperas</a>
//               </li>
//               <li>
//                 <a href="">Accesorios</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="third-div">
//           <div className="contact">
//             <h2>Contacto</h2>
//           </div>
//           <div className="datos">
//             <ul>
//               <li>Tel.: +54 3493-15400808</li>
//               <li>KMVClothing@gmail.com</li>
//             </ul>
//           </div>
//           <div className="box">
//             <label for="Nombre">Email:</label>
//             <br />
//             <input
//               className="ingreso"
//               type="Nombre"
//               placeholder="Ingrese su Email"
//             />
//             <button className="boton"> Enviar </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Footer;
