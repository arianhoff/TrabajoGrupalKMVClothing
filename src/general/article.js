import { Typography, Button, Grid, Paper, styled } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/core";
import "../style/estiloGeneral.css";
import c1 from "../assets/eco.png";
import c2 from "../assets/Nacional.png";
import c3 from "../assets/plantas propias.png";
import c4 from "../assets/exportamos.png";
import c5 from "../assets/Consiencia social.png";

const Chose = [
  {
    img: c1,
    info: "Somos EcoFriendly",
    desc: "Producimos todos nuestros nuestros productos con materia prima sintetica.",
    key: c1,
  },
  {
    img: c2,
    info: "Somos Nacionales",
    desc: "Utilizamos materia prima y mano de obra nacional.",
    key: c2,
  },
  {
    img: c3,
    info: "Plantas propias",
    desc: "Producimos nuestra materia prima y usamos nuestros propios depositos.",
    key: c3,
  },
  {
    img: c4,
    info: "Exportamos al mundo",
    desc: "KMV existe en 8 paises de America, 4 de europa y 6 de Asia.",
    key: c4,
  },
  {
    img: c5,
    info: "Conciencia Social",
    desc: "Ayudamos a Merenderos de las Provincias mas necesitadas.",
    key: c5,
  },
];

const UseStyles = makeStyles({
  botonArticle: {
    backgroundColor: "#1565C0 !important",
    height: "40px",
    width: "300px",
    color: "white",
    borderRadius: "5px !important",
    marginTop: "15px !important",
  },
  manOne: {
    minWidth: "100%",
    height: "400px",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    objectFit: "cover",
    color: "white",
    textAlign: "center",
  },
  titleManOne: {
    paddingTop: "150px",
  },
  manOneBlackBox2: {
    minWidth: "100%",
    height: "400px",
    color: "white",
    textAlign: "center",
    backgroundColor: "black",
  },
  manTwo: {
    minWidth: "100%",
    height: "400px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    objectFit: "cover",
    color: "white",
    textAlign: "center",
  },
  titleManTwo: {
    paddingTop: "100px",
  },
  txtManTwo: {
    color: "white",
    padding: "10px 40px",
  },
  lineaTwo: {
    borderTop: "2px solid",
    borderColor: "white",
    height: "5px",
    maxWidth: "150px",
    padding: "0px",
    margin: "10px auto 0 auto",
  },
  choseGlobal: {
    display: "flex",
    backgroundColor: "#0F0F0D",
    alignItems: "center",
    padding: "6% 0% 25% 11%",
    height: "40px",
    width:'1531px'
  },
  chooseImagen: {
    display: "flex",
    width: "50px",
    height: "50px",
    borderRadius: "5px",
    marginLeft: "75px",
  },
  chooseDes: {
    display: "block",
    textAlign: "center",
    color: "aliceblue",
  },
  boxGlobal: {
    margin: 0,
    padding: 0,
  },
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
}));

function article() {
  const classes = UseStyles();

  return (
    <>
      <Box sx={{ flexGrow: 1 }} className={classes.boxGlobal}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Item>
              <Box className={classes.manOne} id="manOne"></Box>
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>
              <Box className={classes.manOneBlackBox2}>
                <Typography variant="h5" className={classes.titleManOne}>
                  NUEVA COLECCION
                </Typography>
                <div className={classes.lineaTwo}></div>
                <Button className={classes.botonArticle} variant="outlined">
                  CATÁLOGO
                </Button>
              </Box>
            </Item>
          </Grid>
          <Grid container spacing={3} className={classes.choseGlobal}>
            {Chose.map((element, i) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={2} key={element.key}>
                  <div className="choose-div">
                    <div className={classes.chooseImagen}>
                      <img src={element.img} alt="Imagen de producto" />
                    </div>
                  </div>
                  <div className={classes.chooseDes}>
                    <h1>{element.info}</h1>
                    <p>{element.desc}</p>
                  </div>
                </Grid>
              );
            })}
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>
              <Box className={classes.manOneBlackBox2}>
                <Typography variant="h5" className={classes.titleManTwo}>
                  COLECION 2012
                </Typography>
                <div className={classes.lineaTwo}></div>
                <Typography className={classes.txtManTwo}>
                  “Un hombre se debe ver como si hubiera comprado su ropa con
                  inteligencia, como si se la hubiera puesto con cuidado y
                  después como si lo hubiera olvidado por completo.” Hardy Amies
                </Typography>
                <Button className={classes.botonArticle} variant="outlined">
                  VER COLECCIÓN
                </Button>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>
              <Box id="manTwo" className={classes.manTwo}></Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default article;
