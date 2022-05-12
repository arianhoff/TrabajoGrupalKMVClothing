import { Typography, Button, Grid, Paper, styled } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/core";
import "../style/estiloGeneral.css";
import VentajasKMV from "./ventajasKMV";

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
    fontFamily: 'Roboto, sans-serif',
    fontSize: '25px'
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
                  <b>NUEVA COLECCION</b>
                </Typography>
                <div className={classes.lineaTwo}></div>
                <Button className={classes.botonArticle} variant="outlined">
                  CATÁLOGO
                </Button>
              </Box>
            </Item>
          </Grid>
          <VentajasKMV />
          <Grid item xs={12} md={6}>
            <Item>
              <Box className={classes.manOneBlackBox2}>
                <Typography variant="h5" className={classes.titleManTwo}>
                  <b>COLECION 2012</b>
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
