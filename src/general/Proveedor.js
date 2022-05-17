import { Box, Button, Grid } from "@mui/material";
import React from "react";
import "../style/estiloGeneral.css";
import sarkany from "../assets/sarkany.png";
import { makeStyles } from "@material-ui/core";
import { display, flexbox } from "@mui/system";


const useStyles = makeStyles({
  botonProvedor: {
    backgroundColor: '#1565C0 !important',
    height: 40,
    width: 300,
    color: 'white !important',
		borderRadius: '5px !important',
		marginBottom: '35px !important',
  },
	boxPrincipal: {
    width:'100%',
		backgroundColor: '#0F0F0D',
  },
	logoSarkany: {
		height: '300px',
	},
})

const Proveedor = () => {
const classes = useStyles()
  return (
    <Box sx={{ flexGrow: 1 }} className={classes.boxPrincipal} textAlign={"center"}>
			<Grid container className={classes.containerSarkany}>
        <Grid item xs={12} sm={12}>
          <img src={sarkany} alt="Logo" className={classes.logoSarkany}></img>
        </Grid>
        <Grid item xs={12} sm={12}>
					<Button href="https://www.rickysarkany.com/" target="_blank" variant="outlined" className={classes.botonProvedor}>¡Nueva colección invierno 2022!</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Proveedor;
