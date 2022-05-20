import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../style/estiloGeneral.css";
import { makeStyles } from "@material-ui/core";
import { Button } from "@mui/material";
import { ProductsData } from "../cart/Data/ProductsData";
import { useContext } from "react";
import { CartContext } from "../cart/Context/CartContext";

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
    borderRadius: "5px",
    backgroundColor: "#0F0F0D",
    marginTop: "30px",
    paddingBottom: "20px",
    width: "240px",
    height: "200px",
    marginLeft: "10px",
    marginBottom: "20px",
  },
  cart: {
    width: "260px",
    height: "405px",
    justifyContent: "center",
    paddingBottom: "80px",
    backgroundColor: "#0F0F0D",
    borderRadius: "10px",
  },
  cartDesc: {
    display: "block",
    textAlign: "center",
    color: "aliceblue",
    paddingLeft: "30px",
    paddingRight: "10px",
    width: "200px",
    height: "170px",
    fontSize:'15px'
  },
  boxGlobal: {
    paddingTop: "100px",
    display: "block",
    justifyContent: "center",
    paddingBottom: "100px",
    paddingLeft: "11%",
    paddingRight: "11%",
    backgroundColor: "#000000",
  },
  botonCart: {
    backgroundColor: "#1976D2",
    display: "flex",
    justifyItems: "center",
    width: "200px",
    marginLeft: "30px",
    color: "white",
    height: "30px",
    borderRadius: "5px",
    marginTop: "10px",
    fontWeight: 'bold'
  },
});



function Productos (){

  const classes = useStyles();

  const {addItemToCart} = useContext(CartContext)

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.boxGlobal} id="boxScreen">
      <Grid container spacing={3}>
        {ProductsData.map((product, i) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
              <Box className={classes.cart} id="Cart">
                <div className={classes.cartDiv}>
                  <div className={classes.CartImagen}>
                    <img src={product.img} alt={product.info} />
                  </div>
                </div>
                <div className={classes.cartDesc}>
                  <h2>{product.info} - ${product.price}</h2>
                  <p>{product.desc}</p>
                </div>
                <div>
                  <Button
                    className={classes.botonCart}
                    onClick={() => addItemToCart(product)}
                  >
                    Añadir producto
                  </Button>
                </div>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
export default Productos;
