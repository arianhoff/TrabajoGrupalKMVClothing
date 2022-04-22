import React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  cartBody: {
    backgroundColor: '#000000',
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  }
});

const Cart = () => {
  const classes = useStyles();
  return (
    <Box className={classes.cartBody}>
      <h2>Hola desde el Carrito</h2>
    </Box>
  );
};

export default Cart;
