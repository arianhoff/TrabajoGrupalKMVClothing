import { Box, Button, Grid } from "@mui/material";
import React from "react";
import "../style/Proveedor.css";
import sarkany from "../assets/sarkany.png";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
  botonProvedor: {
    backgroundColor: '#1565C0',
    height: 40,
    width: 300,
    color: 'white',
    borderRadius:5,  
  },
  boxPrincipal: {
    height: '381px',
    width:'1519px'
  },
  logoSarkany: {
    height:'300px',
    paddingLeft: '610px'
  }
})

const Proveedor = () => {

  const classes = useStyles()
  
  return (
    <Box
      sx={{ flexGrow: 1 }}
      id="box-principal"
      className={classes.boxPrincipal}
      textAlign={"center"}
      height={"381px"}
    >
      <Grid container>
        <Grid item xs={12} sm={4}>
          <img src={sarkany} alt="Logo" className={classes.logoSarkany}></img>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            href="https://www.rickysarkany.com/"
            target="_blank"
            style={{ marginTop: 230 }}
            variant="outlined"
            className={classes.botonProvedor}
          >
            ¡Nueva colección invierno 2022!
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Proveedor;
